/**
 * A small grocery catalogue for the live search demo.
 *
 * Everything here is invented product data — the point is the retrieval and
 * ranking code in ./parse.ts and ./rank.ts, which is real. `ctr` and `atc` are
 * synthetic demand priors standing in for what a real deployment learns from
 * click logs; they are labelled as such in the UI.
 */

export type Unit = "l" | "ml" | "g" | "kg" | "pack";

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  /** Extra searchable terms that aren't in the title. */
  tags: string[];
  size?: { value: number; unit: Unit };
  /** INR. */
  price: number;
  /** Dietary attributes this product genuinely satisfies. */
  diet: string[];
  /** Synthetic click-through prior, 0–1. */
  ctr: number;
  /** Synthetic add-to-cart prior, 0–1. */
  atc: number;
}

export const catalogue: Product[] = [
  // ---- milk & alternatives -------------------------------------------------
  { id: "p01", title: "Oat milk", brand: "Alpro", category: "milk alternative", tags: ["oat", "plant based", "barista"], size: { value: 1, unit: "l" }, price: 189, diet: ["dairy-free", "lactose-free", "vegan"], ctr: 0.42, atc: 0.31 },
  { id: "p02", title: "Almond milk, unsweetened", brand: "Sofit", category: "milk alternative", tags: ["almond", "plant based", "nut"], size: { value: 1, unit: "l" }, price: 165, diet: ["dairy-free", "lactose-free", "vegan", "sugar-free"], ctr: 0.36, atc: 0.24 },
  { id: "p03", title: "Soy milk", brand: "Staeta", category: "milk alternative", tags: ["soya", "plant based"], size: { value: 1, unit: "l" }, price: 149, diet: ["dairy-free", "lactose-free", "vegan"], ctr: 0.28, atc: 0.19 },
  { id: "p04", title: "Full-cream milk", brand: "Amul", category: "milk", tags: ["dairy", "whole", "toned"], size: { value: 1, unit: "l" }, price: 72, diet: [], ctr: 0.61, atc: 0.48 },
  { id: "p05", title: "Toned milk", brand: "Mother Dairy", category: "milk", tags: ["dairy", "low fat"], size: { value: 500, unit: "ml" }, price: 31, diet: [], ctr: 0.55, atc: 0.44 },
  { id: "p06", title: "Lactose-free milk", brand: "Amul", category: "milk", tags: ["dairy", "digestive"], size: { value: 1, unit: "l" }, price: 118, diet: ["lactose-free"], ctr: 0.22, atc: 0.17 },
  { id: "p07", title: "Coconut milk", brand: "Dabur", category: "milk alternative", tags: ["coconut", "cooking", "plant based"], size: { value: 400, unit: "ml" }, price: 96, diet: ["dairy-free", "lactose-free", "vegan"], ctr: 0.19, atc: 0.14 },

  // ---- bread & bakery ------------------------------------------------------
  { id: "p10", title: "Whole wheat bread", brand: "Britannia", category: "bread", tags: ["atta", "loaf", "brown"], size: { value: 400, unit: "g" }, price: 55, diet: [], ctr: 0.47, atc: 0.39 },
  { id: "p11", title: "Multigrain bread", brand: "Harvest Gold", category: "bread", tags: ["seeds", "loaf", "brown"], size: { value: 400, unit: "g" }, price: 68, diet: [], ctr: 0.33, atc: 0.26 },
  { id: "p12", title: "Gluten-free bread", brand: "Nutrimix", category: "bread", tags: ["loaf", "celiac"], size: { value: 350, unit: "g" }, price: 210, diet: ["gluten-free"], ctr: 0.12, atc: 0.09 },
  { id: "p13", title: "Sourdough loaf", brand: "Theobroma", category: "bread", tags: ["artisan", "bakery"], size: { value: 500, unit: "g" }, price: 240, diet: [], ctr: 0.21, atc: 0.15 },

  // ---- snacks --------------------------------------------------------------
  { id: "p20", title: "Salted potato chips", brand: "Lay's", category: "snacks", tags: ["crisps", "wafers", "namkeen"], size: { value: 90, unit: "g" }, price: 30, diet: ["vegetarian"], ctr: 0.66, atc: 0.52 },
  { id: "p21", title: "Baked ragi chips", brand: "Yoga Bar", category: "snacks", tags: ["millet", "healthy", "baked"], size: { value: 60, unit: "g" }, price: 85, diet: ["vegan", "gluten-free"], ctr: 0.18, atc: 0.13 },
  { id: "p22", title: "Roasted almonds", brand: "Happilo", category: "snacks", tags: ["nuts", "dry fruit", "protein"], size: { value: 200, unit: "g" }, price: 340, diet: ["vegan", "gluten-free"], ctr: 0.39, atc: 0.3 },
  { id: "p23", title: "Dark chocolate 70%", brand: "Amul", category: "snacks", tags: ["cocoa", "bar", "sweet"], size: { value: 150, unit: "g" }, price: 175, diet: ["vegetarian"], ctr: 0.44, atc: 0.35 },
  { id: "p24", title: "Sugar-free digestive biscuits", brand: "Sunfeast", category: "snacks", tags: ["cookies", "diabetic", "tea time"], size: { value: 250, unit: "g" }, price: 90, diet: ["sugar-free", "vegetarian"], ctr: 0.26, atc: 0.2 },
  { id: "p25", title: "Protein bar, peanut butter", brand: "Yoga Bar", category: "snacks", tags: ["fitness", "gym", "bar"], size: { value: 6, unit: "pack" }, price: 480, diet: ["vegetarian"], ctr: 0.31, atc: 0.23 },

  // ---- produce -------------------------------------------------------------
  { id: "p30", title: "Bananas", brand: "Fresho", category: "produce", tags: ["fruit", "fresh", "kela"], size: { value: 1, unit: "kg" }, price: 58, diet: ["vegan", "gluten-free"], ctr: 0.72, atc: 0.61 },
  { id: "p31", title: "Baby spinach", brand: "Fresho", category: "produce", tags: ["greens", "leafy", "palak", "salad"], size: { value: 200, unit: "g" }, price: 45, diet: ["vegan", "gluten-free"], ctr: 0.29, atc: 0.22 },
  { id: "p32", title: "Avocado", brand: "Imported", category: "produce", tags: ["fruit", "fresh", "hass"], size: { value: 2, unit: "pack" }, price: 320, diet: ["vegan", "gluten-free"], ctr: 0.35, atc: 0.24 },
  { id: "p33", title: "Roma tomatoes", brand: "Fresho", category: "produce", tags: ["vegetable", "fresh", "tamatar", "salad"], size: { value: 1, unit: "kg" }, price: 42, diet: ["vegan", "gluten-free"], ctr: 0.58, atc: 0.49 },
  { id: "p34", title: "Organic baby carrots", brand: "24 Mantra", category: "produce", tags: ["vegetable", "fresh", "gajar"], size: { value: 500, unit: "g" }, price: 110, diet: ["vegan", "gluten-free", "organic"], ctr: 0.24, atc: 0.18 },

  // ---- staples -------------------------------------------------------------
  { id: "p40", title: "Basmati rice", brand: "India Gate", category: "staples", tags: ["chawal", "grain", "long grain"], size: { value: 5, unit: "kg" }, price: 690, diet: ["vegan", "gluten-free"], ctr: 0.51, atc: 0.42 },
  { id: "p41", title: "Whole wheat atta", brand: "Aashirvaad", category: "staples", tags: ["flour", "chakki", "roti"], size: { value: 5, unit: "kg" }, price: 285, diet: ["vegetarian"], ctr: 0.63, atc: 0.55 },
  { id: "p42", title: "Toor dal", brand: "Tata Sampann", category: "staples", tags: ["lentil", "pulses", "arhar"], size: { value: 1, unit: "kg" }, price: 178, diet: ["vegan", "gluten-free"], ctr: 0.49, atc: 0.41 },
  { id: "p43", title: "Cold-pressed mustard oil", brand: "Fortune", category: "staples", tags: ["cooking oil", "sarson", "kachi ghani"], size: { value: 1, unit: "l" }, price: 195, diet: ["vegan", "gluten-free"], ctr: 0.37, atc: 0.3 },
  { id: "p44", title: "Organic jaggery powder", brand: "24 Mantra", category: "staples", tags: ["gur", "sweetener", "unrefined"], size: { value: 500, unit: "g" }, price: 130, diet: ["vegan", "gluten-free", "organic"], ctr: 0.16, atc: 0.12 },

  // ---- beverages -----------------------------------------------------------
  { id: "p50", title: "Assam breakfast tea", brand: "Tetley", category: "beverages", tags: ["chai", "black tea", "leaves"], size: { value: 250, unit: "g" }, price: 165, diet: ["vegan", "gluten-free"], ctr: 0.45, atc: 0.36 },
  { id: "p51", title: "Cold brew coffee concentrate", brand: "Sleepy Owl", category: "beverages", tags: ["coffee", "caffeine", "iced"], size: { value: 200, unit: "ml" }, price: 299, diet: ["vegan"], ctr: 0.34, atc: 0.25 },
  { id: "p52", title: "Sparkling water, lime", brand: "Bisleri", category: "beverages", tags: ["soda", "fizzy", "carbonated"], size: { value: 750, unit: "ml" }, price: 60, diet: ["vegan", "sugar-free", "gluten-free"], ctr: 0.27, atc: 0.19 },
  { id: "p53", title: "Orange juice, no added sugar", brand: "Real", category: "beverages", tags: ["fruit juice", "citrus"], size: { value: 1, unit: "l" }, price: 135, diet: ["vegan", "sugar-free"], ctr: 0.4, atc: 0.32 },

  // ---- household -----------------------------------------------------------
  { id: "p60", title: "Dishwash liquid, lemon", brand: "Vim", category: "household", tags: ["cleaning", "utensil", "detergent"], size: { value: 750, unit: "ml" }, price: 145, diet: [], ctr: 0.53, atc: 0.45 },
  { id: "p61", title: "Laundry detergent powder", brand: "Surf Excel", category: "household", tags: ["washing", "clothes"], size: { value: 2, unit: "kg" }, price: 420, diet: [], ctr: 0.48, atc: 0.4 },
  { id: "p62", title: "Kitchen paper towels", brand: "Origami", category: "household", tags: ["tissue", "roll", "cleaning"], size: { value: 4, unit: "pack" }, price: 199, diet: [], ctr: 0.3, atc: 0.24 },

  // ---- the easter egg ------------------------------------------------------
  // Indexed like everything else. It only surfaces when the query actually
  // matches it — hardcoding it to rank #1 would make the whole demo a lie.
  {
    id: "me",
    title: "Abhinav Tyagi",
    brand: "Backend & Search Engineer",
    category: "engineer",
    tags: [
      "abhinav", "tyagi", "search", "relevance", "ranking", "elasticsearch",
      "learning to rank", "ltr", "backend", "java", "hire", "engineer",
      "who built this", "recruiter",
    ],
    price: 0,
    diet: [],
    ctr: 0.99,
    atc: 0.87,
  },
];
