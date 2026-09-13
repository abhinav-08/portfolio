/**
 * Query understanding: tokenise, then pull typed entities out of the words.
 *
 * This is rule-based NER, not a model — patterns and gazetteers, the way most
 * production query parsers actually start before anyone trains anything. It is
 * deliberately transparent: every entity records which span of the query
 * produced it, so the UI can show its work.
 */

import type { Unit } from "./catalogue";

export type EntityType = "intent" | "unit" | "price" | "category" | "brand" | "count";

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
  "a",
  "an",
  "the",
  "of",
  "for",
  "with",
  "and",
  "or",
  "to",
  "in",
  "on",
  "at",
  "is",
  "are",
  "me",
  "my",
  "i",
  "some",
  "any",
  "please",
  "want",
  "need",
  "buy",
  "get",
  "show",
  "find",
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

/**
 * Category gazetteer — surface form → canonical category.
 *
 * Order is significant: the first match wins, so the most specific pattern has
 * to come first. A dairy-free or vegan qualifier in front of "milk" means the
 * alternatives aisle, not the dairy one; "coconut water" is a drink while
 * "coconut milk" is not.
 *
 * Every category used in catalogue.ts needs a line here. A product in a
 * category no pattern reaches can still be found by its own words, but no
 * query will ever route to its aisle.
 */
const CATEGORY_TERMS: Array<[string, RegExp]> = [
  [
    "milk alternative",
    /\b(oat|almond|soy|soya|coconut|cashew|rice) ?milk\b|\bmilk alt(ernative)?s?\b|\bplant milk\b|\b(dairy[\s-]?free|non[\s-]?dairy|vegan|plant[\s-]?based)\b[^.]{0,12}\bmilk\b/,
  ],
  /* "frozen" sits above "dairy" deliberately: "ice cream" contains "cream",
     and the first match wins. Reordering is cheaper than a lookbehind. */
  ["frozen", /\b(frozen|freezer|ice cream|fries|paratha)\b/],
  [
    "dairy",
    /\b(curd|dahi|yogh?urt|paneer|butter|makhan|cheese|mozzarella|ghee|cream|malai|lassi|chaas)\b/,
  ],
  ["milk", /\bmilk\b|\bdoodh\b/],
  ["eggs", /\b(eggs?|anda|ande)\b/],
  ["bread", /\b(bread|loaf|bun|pav|bakery|rusk|breadsticks?)\b/],
  [
    "breakfast",
    /\b(oats|porridge|cereals?|cornflakes|corn flakes|muesli|granola|jam|honey|shahad|peanut butter|breakfast)\b/,
  ],
  [
    "snacks",
    /\b(snacks?|chips|crisps|biscuits?|cookies?|namkeen|bhujia|sev|chocolates?|nuts|popcorn|makhana|noodles|maggi)\b/,
  ],
  ["produce", /\b(fruits?|vegetables?|veggies|produce|greens|salad|sabzi|sabji)\b/],
  [
    "spices",
    /\b(spices?|masala|haldi|turmeric|chilli|chili|mirch|jeera|cumin|dhania|coriander powder|pepper|seasoning)\b/,
  ],
  [
    "condiments",
    /\b(ketchup|sauces?|mayonnaise|mayo|pickles?|achar|chutney|vinegar|sirka|dips?)\b/,
  ],
  [
    "staples",
    /\b(rice|chawal|atta|flour|besan|sooji|rava|poha|dals?|lentils?|pulses|rajma|chana|oil|sugar|cheeni|salt|namak|staples?|grocer(y|ies)|ration)\b/,
  ],
  [
    "beverages",
    /\b(tea|chai|coffee|juice|water|soda|cola|soft drinks?|drinks?|beverages?|milkshake)\b/,
  ],
  [
    "personal care",
    /\b(soap|shampoo|toothpaste|handwash|sanitiser|sanitizer|deodorant|hair oil|sanitary|toilet paper|personal care|toiletries)\b/,
  ],
  ["baby", /\b(baby|diapers?|nappy|wipes|infant|toddler)\b/],
  ["pet", /\b(pet|dog|cat|kibble|litter)\b/],
  [
    "household",
    /\b(detergent|dishwash|bartan|cleaning|cleaner|disinfectant|phenyl|pocha|tissue|paper towels?|foil|cling film|garbage|bin bags?|dustbin|kachra|mop|scrub|sponge|duster|mosquito|machhar|pest|cockroach|insect|air freshener|room spray|bulb|matchbox|household|home essentials)\b/,
  ],
];

const UNIT_ALIASES: Record<string, Unit> = {
  l: "l",
  ltr: "l",
  litre: "l",
  litres: "l",
  liter: "l",
  liters: "l",
  ml: "ml",
  g: "g",
  gm: "g",
  gms: "g",
  gram: "g",
  grams: "g",
  kg: "kg",
  kgs: "kg",
  kilo: "kg",
  kilos: "kg",
  kilogram: "kg",
};

/**
 * Synonym expansion. Not embeddings — calling it "semantic" would overclaim.
 * A real deployment swaps this for a vector recall stage; the ranking code
 * treats expanded terms as a separate, lower-weighted signal either way.
 */
export const SYNONYMS: Record<string, string[]> = {
  // staples & grains
  milk: ["dairy", "doodh"],
  rice: ["chawal", "basmati", "grain"],
  flour: ["atta", "chakki"],
  atta: ["flour", "roti"],
  lentil: ["dal", "pulses", "toor"],
  dal: ["lentil", "pulses"],
  chickpea: ["chana", "chole", "kabuli"],
  oil: ["ghani", "cooking oil"],
  sugar: ["cheeni", "sweetener"],
  salt: ["namak"],
  jaggery: ["gur", "sweetener"],
  poha: ["flattened rice"],
  sooji: ["rava", "semolina"],
  besan: ["gram flour", "chickpea"],

  // dairy
  curd: ["dahi", "yoghurt", "yogurt"],
  yoghurt: ["curd", "dahi"],
  paneer: ["cottage cheese"],
  butter: ["makhan"],
  ghee: ["clarified butter"],
  cream: ["malai"],
  egg: ["anda", "ande"],

  // bakery & breakfast
  bread: ["loaf", "atta"],
  bun: ["pav"],
  oats: ["porridge", "cereal"],
  cereal: ["flakes", "muesli", "granola"],
  honey: ["shahad"],

  // snacks
  chips: ["crisps", "wafers", "namkeen"],
  biscuit: ["cookie", "biscuits", "cookies"],
  cookies: ["biscuits"],
  namkeen: ["bhujia", "sev", "mixture"],
  nuts: ["almonds", "dry fruit", "cashew"],
  noodles: ["maggi", "instant"],
  makhana: ["fox nuts"],

  // produce
  spinach: ["palak", "greens", "leafy"],
  tomato: ["tamatar"],
  carrot: ["gajar"],
  banana: ["kela"],
  onion: ["pyaz"],
  potato: ["aloo"],
  apple: ["seb"],
  mango: ["aam"],
  lemon: ["nimbu"],
  cucumber: ["kheera"],
  ginger: ["adrak"],
  garlic: ["lehsun"],
  cauliflower: ["gobi"],
  okra: ["bhindi", "lady finger"],
  peas: ["matar"],
  corn: ["makai", "sweet corn"],
  coriander: ["dhania"],

  // spices & condiments
  turmeric: ["haldi"],
  chilli: ["mirch", "spicy"],
  cumin: ["jeera"],
  pepper: ["kali mirch"],
  masala: ["spice", "blend", "seasoning"],
  pickle: ["achar"],
  ketchup: ["sauce", "tamatar"],
  vinegar: ["sirka"],

  // beverages
  tea: ["chai"],
  coffee: ["caffeine", "brew"],
  water: ["soda", "sparkling"],

  // household
  detergent: ["washing", "laundry", "kapda"],
  dishwash: ["bartan", "utensil"],
  cleaner: ["cleaning", "disinfectant"],
  floor: ["pocha", "phenyl"],
  tissue: ["paper towels", "roll"],
  garbage: ["bin bags", "dustbin", "kachra"],
  mosquito: ["machhar", "repellent"],
  pest: ["insect", "cockroach"],

  // intent-ish
  cheap: ["budget", "value"],
  healthy: ["baked", "millet", "protein"],
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
