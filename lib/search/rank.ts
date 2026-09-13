/**
 * Retrieval and ranking.
 *
 * Two stages, the way a real search stack is laid out:
 *   1. recall  — BM25 over the inverted index, plus synonym-expanded terms
 *                scored at a discount, to get a candidate set;
 *   2. rescore — a weighted blend of lexical relevance, attribute fit and
 *                demand priors, which is what actually decides the order.
 *
 * Every signal keeps its own contribution so the UI can show why a result
 * ranked where it did. That breakdown is the whole point of the demo.
 */

import { catalogue, type Product } from "./catalogue";
import { expand, tokenize, type ParsedQuery } from "./parse";

/* ------------------------------------------------------------ the index */

interface Doc {
  product: Product;
  terms: string[];
  length: number;
}

function docTerms(p: Product): string[] {
  return tokenize([p.title, p.brand, p.category, ...p.tags, ...p.diet].join(" "));
}

const docs: Doc[] = catalogue.map((product) => {
  const terms = docTerms(product);
  return { product, terms, length: terms.length };
});

/** term → number of documents containing it. */
const df = new Map<string, number>();
for (const d of docs) {
  for (const t of new Set(d.terms)) df.set(t, (df.get(t) ?? 0) + 1);
}

const N = docs.length;
const avgLen = docs.reduce((s, d) => s + d.length, 0) / N;

export const allBrands = [...new Set(catalogue.map((p) => p.brand))];

/* --------------------------------------------------------------- BM25 */

const K1 = 1.2;
const B = 0.75;

function idf(term: string): number {
  const n = df.get(term) ?? 0;
  // Robertson/Sparck-Jones with the +1 guard, so a term in every doc still
  // scores marginally above zero rather than going negative.
  return Math.log(1 + (N - n + 0.5) / (n + 0.5));
}

function bm25(doc: Doc, term: string): number {
  let tf = 0;
  for (const t of doc.terms) if (t === term) tf++;
  if (!tf) return 0;
  const norm = tf * (K1 + 1);
  const denom = tf + K1 * (1 - B + (B * doc.length) / avgLen);
  return idf(term) * (norm / denom);
}

/* ------------------------------------------------------------ scoring */

export interface Signal {
  key: string;
  label: string;
  /** Positive boosts, negative demotes. Already weighted. */
  value: number;
}

export interface Hit {
  product: Product;
  score: number;
  signals: Signal[];
  /** Set when the product is excluded rather than merely demoted. */
  filteredOut?: string;
}

/** Weights for the rescore blend. Tuning these is the actual job. */
const W = {
  lexical: 1,
  synonym: 0.45,
  category: 0.9,
  diet: 1.4,
  size: 0.8,
  price: 1,
  ctr: 0.5,
  atc: 0.7,
};

function sizeFit(p: Product, q: ParsedQuery): number | null {
  if (!q.size || !p.size) return null;
  // Compare in a common base so "1 l" matches "1000 ml".
  const toBase = (v: number, u: string) => (u === "l" ? v * 1000 : u === "kg" ? v * 1000 : v);
  const a = toBase(q.size.value, q.size.unit);
  const b = toBase(p.size.value, p.size.unit);
  const liquidQ = q.size.unit === "l" || q.size.unit === "ml";
  const liquidP = p.size.unit === "l" || p.size.unit === "ml";
  if (liquidQ !== liquidP) return null; // different dimension, not comparable
  if (a === b) return 1;
  const ratio = Math.min(a, b) / Math.max(a, b);
  return ratio > 0.5 ? ratio - 0.5 : -0.3; // near miss is mild, far miss demotes
}

export function search(q: ParsedQuery, limit = 6): Hit[] {
  if (!q.tokens.length && !q.entities.length) return [];

  const terms = expand(q.tokens);
  const hits: Hit[] = [];

  for (const doc of docs) {
    const signals: Signal[] = [];
    let lexical = 0;
    let synonym = 0;

    for (const { term, expanded } of terms) {
      const s = bm25(doc, term);
      if (!s) continue;
      if (expanded) synonym += s;
      else lexical += s;
    }

    // Nothing matched textually and no attribute pins it — skip.
    const attributeOnly =
      q.category === doc.product.category ||
      (q.diet.length > 0 && q.diet.every((d) => doc.product.diet.includes(d)));
    if (lexical === 0 && synonym === 0 && !attributeOnly) continue;

    if (lexical)
      signals.push({ key: "lexical", label: "Lexical (BM25)", value: lexical * W.lexical });
    if (synonym)
      signals.push({ key: "synonym", label: "Synonym expansion", value: synonym * W.synonym });

    if (q.category) {
      const match = q.category === doc.product.category;
      // A milk query shouldn't bury milk alternatives, and vice versa.
      const adjacent =
        (q.category === "milk" && doc.product.category === "milk alternative") ||
        (q.category === "milk alternative" && doc.product.category === "milk");
      if (match) signals.push({ key: "category", label: "Category match", value: W.category });
      else if (!adjacent)
        signals.push({
          key: "category",
          label: "Category mismatch",
          value: -W.category * 1.25,
        });
    }

    let filteredOut: string | undefined;

    if (q.diet.length) {
      const met = q.diet.filter((d) => doc.product.diet.includes(d));
      if (met.length === q.diet.length) {
        signals.push({ key: "diet", label: `Satisfies ${met.join(", ")}`, value: W.diet });
      } else {
        const missing = q.diet.filter((d) => !met.includes(d));
        // A hard dietary constraint is a filter, not a nudge — showing dairy
        // milk for "dairy free" is the classic relevance failure.
        signals.push({
          key: "diet",
          label: `Fails ${missing.join(", ")}`,
          value: -W.diet * 1.6,
        });
        filteredOut = `demoted — not ${missing.join(", ")}`;
      }
    }

    const fit = sizeFit(doc.product, q);
    if (fit !== null) {
      signals.push({
        key: "size",
        label: fit >= 1 ? "Exact size match" : fit > 0 ? "Near size match" : "Wrong size",
        value: fit * W.size,
      });
    }

    if (q.maxPrice !== undefined && doc.product.price > 0) {
      if (doc.product.price <= q.maxPrice) {
        const headroom = 1 - doc.product.price / q.maxPrice;
        signals.push({
          key: "price",
          label: "Within price ceiling",
          value: (0.4 + headroom * 0.6) * W.price,
        });
      } else {
        signals.push({ key: "price", label: "Over price ceiling", value: -W.price * 1.5 });
        filteredOut = `over ₹${q.maxPrice.toLocaleString("en-IN")}`;
      }
    }

    if (q.brand) {
      if (doc.product.brand.toLowerCase() === q.brand.toLowerCase()) {
        signals.push({ key: "brand", label: "Brand match", value: 1.1 });
      }
    }

    signals.push({ key: "ctr", label: "CTR prior", value: doc.product.ctr * W.ctr });
    signals.push({ key: "atc", label: "Add-to-cart prior", value: doc.product.atc * W.atc });

    const score = signals.reduce((s, x) => s + x.value, 0);
    hits.push({ product: doc.product, score, signals, filteredOut });
  }

  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}

/**
 * The order the recall stage alone would have produced.
 *
 * Derived from the same hits rather than by running a second search, so the
 * candidate set is guaranteed identical and only the ordering differs — which
 * is the honest way to animate "BM25 got you here, the rescore moved you".
 * Returns product ids, best first.
 */
export function recallOrder(hits: Hit[]): string[] {
  const lex = (h: Hit) =>
    h.signals.reduce(
      (acc, x) => (x.key === "lexical" || x.key === "synonym" ? acc + x.value : acc),
      0,
    );
  return [...hits].sort((a, b) => lex(b) - lex(a)).map((h) => h.product.id);
}

/** Squash an unbounded blend into 0–1 so the bars have a stable scale. */
export function normalise(hits: Hit[]): Array<Hit & { norm: number }> {
  if (!hits.length) return [];
  const max = Math.max(...hits.map((h) => h.score));
  const min = Math.min(0, ...hits.map((h) => h.score));
  const span = max - min || 1;
  return hits.map((h) => ({ ...h, norm: Math.max(0.02, (h.score - min) / span) }));
}
