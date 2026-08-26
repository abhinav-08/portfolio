/**
 * Query understanding: tokenise, then pull typed entities out of the words.
 *
 * This is rule-based NER, not a model — patterns and gazetteers, the way most
 * production query parsers actually start before anyone trains anything. It is
 * deliberately transparent: every entity records which span of the query
 * produced it, so the UI can show its work.
 */

import type { Unit } from "./catalogue";

export type EntityType =
  | "intent"
  | "unit"
  | "price"
  | "category"
  | "brand"
  | "count";

export interface Entity {
  type: EntityType;
  /** Human-readable, shown on a chip. */
  label: string;
  /** The literal query text this came from. */
  source: string;
}

export interface ParsedQuery {
  raw: string;
  /** Lowercased, punctuation-stripped terms with stopwords removed. */
  tokens: string[];
  entities: Entity[];
  diet: string[];
  size?: { value: number; unit: Unit };
  maxPrice?: number;
  category?: string;
  brand?: string;
  count?: number;
}

const STOPWORDS = new Set([
  "a", "an", "the", "of", "for", "with", "and", "or", "to", "in", "on", "at",
  "is", "are", "me", "my", "i", "some", "any", "please", "want", "need",
  "buy", "get", "show", "find",
]);

/** Dietary intents and the surface forms that signal them. */
const DIET_PATTERNS: Array<[string, RegExp]> = [
  ["dairy-free", /\b(dairy[\s-]?free|non[\s-]?dairy|no dairy|plant[\s-]?based)\b/],
  ["lactose-free", /\b(lactose[\s-]?free|no lactose|lactose intolerant)\b/],
  ["vegan", /\bvegan\b/],
  ["gluten-free", /\b(gluten[\s-]?free|no gluten|celiac|coeliac)\b/],
  ["sugar-free", /\b(sugar[\s-]?free|no (added )?sugar|unsweetened|diabetic)\b/],
  ["organic", /\borganic\b/],
  ["vegetarian", /\b(vegetarian|veg)\b/],
];

/** Category gazetteer — surface form → canonical category. */
const CATEGORY_TERMS: Array<[string, RegExp]> = [
  // Ordered most-specific first. A dairy-free/vegan qualifier in front of
  // "milk" means the alternatives aisle, not the dairy one.
  ["milk alternative", /\b(oat|almond|soy|soya|coconut) ?milk\b|\bmilk alt(ernative)?s?\b|\bplant milk\b|\b(dairy[\s-]?free|non[\s-]?dairy|vegan|plant[\s-]?based)\b[^.]{0,12}\bmilk\b/],
  ["milk", /\bmilk\b|\bdoodh\b/],
  ["bread", /\bbread\b|\bloaf\b|\bbun\b|\bbakery\b/],
  ["snacks", /\bsnacks?\b|\bchips\b|\bcrisps\b|\bbiscuits?\b|\bcookies?\b|\bnamkeen\b|\bchocolate\b|\bnuts\b/],
  ["produce", /\b(fruits?|vegetables?|veggies|produce|greens|salad)\b/],
  ["staples", /\b(rice|atta|flour|dal|lentils?|pulses|oil|staples?)\b/],
  ["beverages", /\b(tea|coffee|juice|water|soda|drinks?|beverages?)\b/],
  ["household", /\b(detergent|dishwash|cleaning|tissue|household)\b/],
];

const UNIT_ALIASES: Record<string, Unit> = {
  l: "l", ltr: "l", litre: "l", litres: "l", liter: "l", liters: "l",
  ml: "ml",
  g: "g", gm: "g", gms: "g", gram: "g", grams: "g",
  kg: "kg", kgs: "kg", kilo: "kg", kilos: "kg", kilogram: "kg",
};

/**
 * Synonym expansion. Not embeddings — calling it "semantic" would overclaim.
 * A real deployment swaps this for a vector recall stage; the ranking code
 * treats expanded terms as a separate, lower-weighted signal either way.
 */
export const SYNONYMS: Record<string, string[]> = {
  milk: ["dairy", "doodh"],
  chips: ["crisps", "wafers", "namkeen"],
  biscuit: ["cookie", "biscuits", "cookies"],
  cookies: ["biscuits"],
  bread: ["loaf", "atta"],
  rice: ["chawal", "basmati", "grain"],
  flour: ["atta", "chakki"],
  lentil: ["dal", "pulses", "toor"],
  dal: ["lentil", "pulses"],
  oil: ["ghani", "cooking oil"],
  tea: ["chai"],
  coffee: ["caffeine", "brew"],
  water: ["soda", "sparkling"],
  spinach: ["palak", "greens", "leafy"],
  tomato: ["tamatar"],
  carrot: ["gajar"],
  banana: ["kela"],
  cheap: ["budget", "value"],
  healthy: ["baked", "millet", "protein"],
  nuts: ["almonds", "dry fruit"],
  detergent: ["washing", "laundry"],
};

/**
 * Crude suffix stripping — enough to make "vegetables" match a "vegetable"
 * tag. A real index uses a proper analyzer chain; this keeps the demo honest
 * about plurals without shipping a stemmer library.
 */
function stem(t: string): string {
  if (t.length <= 3) return t;
  if (t.endsWith("ies")) return t.slice(0, -3) + "y";
  if (t.endsWith("ses") || t.endsWith("xes") || t.endsWith("zes")) return t.slice(0, -2);
  if (t.endsWith("s") && !t.endsWith("ss") && !t.endsWith("us")) return t.slice(0, -1);
  return t;
}

export function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s.₹<-]/gu, " ")
    .split(/\s+/)
    .filter((t) => t && !STOPWORDS.has(t))
    .map(stem);
}

export function parseQuery(raw: string): ParsedQuery {
  const q = raw.toLowerCase();
  const entities: Entity[] = [];
  const diet: string[] = [];

  // ---- dietary intent ----
  for (const [canonical, re] of DIET_PATTERNS) {
    const m = q.match(re);
    if (m) {
      // "veg" inside "vegan" is a false positive; vegan already covers it.
      if (canonical === "vegetarian" && /\bvegan\b/.test(q)) continue;
      diet.push(canonical);
      entities.push({ type: "intent", label: canonical, source: m[0].trim() });
    }
  }

  // ---- size + unit: "1l", "500 g", "2 kg" ----
  let size: ParsedQuery["size"];
  const sizeMatch = q.match(
    /\b(\d+(?:\.\d+)?)\s*(l|ltr|litres?|liters?|ml|g|gm|gms|grams?|kgs?|kilos?|kilogram)\b/,
  );
  if (sizeMatch) {
    const unit = UNIT_ALIASES[sizeMatch[2]];
    if (unit) {
      size = { value: Number(sizeMatch[1]), unit };
      entities.push({
        type: "unit",
        label: `${size.value} ${unit.toUpperCase()}`,
        source: sizeMatch[0],
      });
    }
  }

  // ---- pack count: "6 pack", "pack of 12" ----
  let count: number | undefined;
  const countMatch = q.match(/\b(\d+)\s*(?:pack|pcs|pieces)\b|\bpack of\s*(\d+)\b/);
  if (countMatch) {
    count = Number(countMatch[1] ?? countMatch[2]);
    entities.push({ type: "count", label: `${count} pack`, source: countMatch[0] });
  }

  // ---- price ceiling: "under 300", "below ₹200", "< 100", "cheap" ----
  let maxPrice: number | undefined;
  const priceMatch = q.match(/\b(?:under|below|less than|upto|up to|max|<)\s*₹?\s*(\d+)\b/);
  if (priceMatch) {
    maxPrice = Number(priceMatch[1]);
    entities.push({
      type: "price",
      label: `≤ ₹${maxPrice.toLocaleString("en-IN")}`,
      source: priceMatch[0],
    });
  } else if (/\b(cheap|budget|affordable|inexpensive)\b/.test(q)) {
    maxPrice = 100;
    entities.push({ type: "price", label: "≤ ₹100 (budget)", source: "cheap" });
  }

  // ---- category ----
  let category: string | undefined;
  for (const [canonical, re] of CATEGORY_TERMS) {
    if (re.test(q)) {
      category = canonical;
      entities.push({ type: "category", label: canonical, source: q.match(re)![0].trim() });
      break; // first match wins — patterns are ordered most-specific first
    }
  }

  // ---- brand (gazetteer built from the catalogue at call time) ----
  let brand: string | undefined;

  /*
   * Consume *constraint* spans before tokenising, but leave content words in.
   *
   * "dairy free" must not survive as terms: "dairy" would match the `dairy`
   * tag on actual dairy milk, so a dairy-free query ranks full-cream milk
   * first. Negation swallowed by bag-of-words is the classic version of this
   * bug, and it is the exact failure this page claims to fix.
   *
   * Category and brand spans stay: "bread" is a real content word that should
   * still match documents. Consuming those too made a gluten-free bread query
   * rank bananas, which satisfy the diet but are not bread.
   */
  const CONSUMED: EntityType[] = ["intent", "price", "unit", "count"];
  let residual = q;
  for (const e of entities) {
    if (e.source && CONSUMED.includes(e.type)) residual = residual.replace(e.source, " ");
  }
  const tokens = tokenize(residual);

  return { raw, tokens, entities, diet, size, maxPrice, category, brand, count };
}

/** Brands are resolved separately so the parser stays independent of the index. */
export function detectBrand(parsed: ParsedQuery, brands: string[]): ParsedQuery {
  const q = parsed.raw.toLowerCase();
  const hit = brands.find((b) => b.length > 2 && q.includes(b.toLowerCase()));
  if (!hit) return parsed;
  return {
    ...parsed,
    brand: hit,
    entities: [...parsed.entities, { type: "brand", label: hit, source: hit.toLowerCase() }],
  };
}

/** Query terms plus their synonym expansions, tagged by origin. */
export function expand(tokens: string[]): { term: string; expanded: boolean }[] {
  const out: { term: string; expanded: boolean }[] = tokens.map((t) => ({
    term: t,
    expanded: false,
  }));
  const seen = new Set(tokens);
  for (const t of tokens) {
    for (const syn of SYNONYMS[t] ?? []) {
      if (!seen.has(syn)) {
        seen.add(syn);
        out.push({ term: syn, expanded: true });
      }
    }
  }
  return out;
}
