/**
 * All page copy and data. Transcribed verbatim from the design handoff —
 * do not paraphrase.
 */

export type RoleId = "maf" | "fab" | "mog" | "xor";

export interface Role {
  id: RoleId;
  index: string;
  company: string;
  title: string;
  period: string;
  location: string;
  blurb: string;
  /**
   * 5–6 capability chips shown on the spine. Deliberately capabilities, not a
   * tech list — the full `stack` is already in the drawer, and "Learning-to-Rank"
   * says more than "Java". Every one is grounded in a bullet below.
   */
  highlights: string[];
  bullets: string[];
  stack: string[];
}

export const roles: Role[] = [
  {
    id: "maf",
    index: "001",
    company: "Majid Al Futtaim",
    title: "Software Engineer II",
    period: "Apr 2025 — Present",
    location: "Gurugram, India",
    blurb:
      "Architecture and backend ownership of the customer-facing search platform — 25K+ requests per minute across a catalogue of nearly 10 million products.",
    highlights: [
      "Learning-to-Rank",
      "XGBoost",
      "Vector search",
      "NER query parsing",
      "LLM tooling",
      "Kafka · Event Hub",
    ],
    bullets: [
      "Led architecture and backend ownership of the customer-facing search platform handling 25K+ RPM — low-latency Elasticsearch querying, real-time stock validation, pricing computation, marketplace-retail aggregation, voucher applicability and geo/store-aware availability.",
      "Built a Learning-to-Rank framework using XGBoost/XGBRanker with lexical, semantic, category, brand, popularity, CTR, ATCR and order-rate signals, integrated into Elasticsearch rescore pipelines.",
      "Led implementation of hybrid lexical + two-tower vector search, plus analytics-driven query tuning for broad, ambiguous and long-tail queries.",
      "Built an LLM-powered analytics agent that identifies low-performing search queries and reports on relevance improvements to lift CTR and add-to-cart rates.",
      "Designed distributed ingestion pipelines for stock, pricing, marketplace offers, promotions and Elasticsearch sync using Kafka, Azure Event Hub, MongoDB, Redis and Elasticsearch — near-real-time indexing across ~10M products.",
      "Developed semantic product-tagging pipelines and an LLM-based tagging system for intent-based discovery on queries like dairy-free, lactose-free and vegan.",
      "Integrated NER-based query understanding to detect quantities, sizes and units directly from queries, improving filtering, ranking and recommendations.",
      "Designed a dynamic taxonomy and filters platform with runtime-configurable PLP/SLP filters and admin tooling — category-aware merchandising without redeployments.",
      "Built cross-CTA search to surface faster-delivery inventory, and contributed to search monetization, ad relevance, experimentation pipelines and GrowthBook-based rollouts.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Elasticsearch",
      "XGBoost",
      "Kafka",
      "Azure Event Hub",
      "Redis",
      "MongoDB",
      "LLM tooling",
      "GrowthBook",
    ],
  },
  {
    id: "fab",
    index: "002",
    company: "FabHotels / TravelPlus",
    title: "Senior Backend Engineer",
    period: "May 2023 — May 2025",
    location: "Gurugram, India",
    blurb:
      "Owned hotel search and discovery — a major Elasticsearch migration, a latency overhaul, and autosuggest built from scratch.",
    highlights: [
      "Elasticsearch 6 → 8",
      "Autosuggest from scratch",
      "−40% latency",
      "Redis caching",
      "Ranking & reviews",
      "Channel managers",
    ],
    bullets: [
      "Led migration of large-scale Elasticsearch infrastructure from 6.x to 8.x with minimal external dependency and zero major production disruption.",
      "Optimised hotel search architecture and Redis-backed caching strategies, reducing average search latency by nearly 40–50%.",
      "Designed and built autosuggestion systems from scratch, removing dependency on an external provider and improving booking conversion.",
      "Implemented backend enhancements across search result pages, property detail pages, homepage discovery and mobile/web search experiences.",
      "Enhanced review-rating algorithms and ranking systems to improve recommendation quality and customer engagement.",
      "Integrated hospitality channel-manager systems for seamless B2B synchronisation and operational scale.",
      "Mentored junior engineers — onboarding, technical KT sessions and production debugging support.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Elasticsearch 8",
      "Redis",
      "MySQL",
      "Autosuggest",
      "Channel managers",
    ],
  },
  {
    id: "mog",
    index: "003",
    company: "Moglix / Credlix",
    title: "Backend Engineer",
    period: "Oct 2021 — May 2023",
    location: "Noida, India",
    blurb:
      "Fintech platforms for invoice discounting and channel financing — microservices, integrations and analytics.",
    highlights: [
      "Invoice discounting",
      "Microservices",
      "ES analytics dashboards",
      "Kanban platform",
      "Rate-limited middleware",
      "AWS S3 · SQS",
    ],
    bullets: [
      "Contributed to fintech platforms enabling invoice discounting and channel financing services.",
      "Designed microservices for WhatsApp notifications, document management, reporting and Elasticsearch-powered analytics dashboards.",
      "Built a lead-tracking Kanban platform from scratch with analytics for operational visibility and performance tracking.",
      "Developed centralised middleware for third-party integrations with robust rate-limiting and fault-tolerant API orchestration.",
      "Worked extensively with AWS S3 and SQS, MongoDB aggregations, schedulers, asynchronous processing and messaging systems.",
    ],
    stack: ["Java", "Spring Boot", "MongoDB", "Elasticsearch", "AWS S3", "AWS SQS", "Node.js"],
  },
  {
    id: "xor",
    index: "004",
    company: "Xoriant Solutions",
    title: "Associate Software Engineer",
    period: "Aug 2020 — Sep 2021",
    location: "Pune, India",
    blurb:
      "Full-stack and observability engineering for enterprise clients — where I learned to read heap dumps like tea leaves.",
    highlights: [
      "Dynatrace → Grafana",
      "InfluxDB pipelines",
      "OpenTelemetry",
      "Memory-leak analysis",
      "API mocking",
      "React · Angular",
    ],
    bullets: [
      "Worked as a full-stack developer using Java, Spring Boot, React and Angular.",
      "Developed integration frameworks connecting Dynatrace with Grafana through InfluxDB for enterprise observability.",
      "Worked on OpenTelemetry-based instrumentation and monitoring for Java applications.",
      "Performed memory profiling and memory-leak analysis for production systems hosted on AWS.",
      "Contributed to API mocking frameworks and frontend feature enhancements.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "Angular",
      "Dynatrace",
      "Grafana",
      "InfluxDB",
      "OpenTelemetry",
    ],
  },
];

/* ------------------------------------------------------ search console */

export interface DemoRow {
  id: string;
  title: string;
  meta: string;
  isMe?: boolean;
  score: number;
}

export interface Demo {
  q: string;
  lat: number;
  chips: string[];
  rows: DemoRow[];
}

export const demos: Demo[] = [
  {
    q: "dairy free milk 1l",
    lat: 38,
    chips: ["INTENT · dairy-free", "UNIT · 1 L", "CATEGORY · milk alt."],
    rows: [
      { id: "me", title: "Abhinav Tyagi", meta: "built this ranking", isMe: true, score: 0.98 },
      { id: "a", title: "Oat milk · 1 L", meta: "semantic match", score: 0.91 },
      { id: "b", title: "Full-cream milk · 1 L", meta: "demoted by intent", score: 0.34 },
    ],
  },
  {
    q: "hotel near mg road tonight",
    lat: 42,
    chips: ["GEO · MG Road ± 3 km", "DATE · tonight", "SORT · availability"],
    rows: [
      {
        id: "me",
        title: "Abhinav Tyagi",
        meta: "built this autosuggest",
        isMe: true,
        score: 0.97,
      },
      { id: "a", title: "Boutique stay · 1.2 km", meta: "geo boost", score: 0.93 },
      { id: "b", title: "Resort · 24 km", meta: "out of radius", score: 0.22 },
    ],
  },
  {
    q: "running shoes size 9 under 3000",
    lat: 35,
    chips: ["SIZE · UK 9", "PRICE · ≤ ₹3,000", "CATEGORY · running"],
    rows: [
      {
        id: "me",
        title: "Abhinav Tyagi",
        meta: "wrote the NER parser",
        isMe: true,
        score: 0.99,
      },
      { id: "a", title: "Trail runner · ₹2,799", meta: "ATC-rate boost", score: 0.94 },
      { id: "b", title: "Premium racer · ₹8,999", meta: "over price ceiling", score: 0.19 },
    ],
  },
];

/* ------------------------------------------------------- hero facts */

/** Rendered as the label/value sheet under the hero portrait. */
export const facts = [
  { label: "Based", value: "Gurugram, India" },
  { label: "Trade", value: "Search platforms · distributed systems" },
  { label: "Stack", value: "Java · Spring · Elasticsearch · Kafka" },
  { label: "Belief", value: "Relevance is empathy at scale" },
];

/* ------------------------------------------------------------ stats */

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  caption: string;
}

export const stats: Stat[] = [
  { value: 25, suffix: "K+", caption: "Search requests / min" },
  { value: 10, prefix: "~", suffix: "M", caption: "Products indexed, near-realtime" },
  { value: 45, prefix: "−", suffix: "%", caption: "Search latency, Redis-backed" },
  { value: 5, suffix: "+", caption: "Years shipping to production" },
];

/* ---------------------------------------------------------- marquee */

export const marqueeTerms = [
  "elasticsearch relevance",
  "learning-to-rank",
  "vector search",
  "query understanding",
  "kafka pipelines",
  "25k rpm, unbothered",
];

/* ----------------------------------------------------------- skills */

export interface Skill {
  /** Key into lib/icon-paths.ts, or a hand-drawn glyph in components/Icon.tsx */
  icon: string;
  name: string;
  /** One line on what it is actually used for — not a proficiency claim. */
  note: string;
}

export interface SkillGroup {
  label: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Search & data",
    items: [
      {
        icon: "elasticsearch",
        name: "Elasticsearch",
        note: "Relevance, DSL, 6.x → 8.x migrations",
      },
      { icon: "kafka", name: "Kafka", note: "Ingestion pipelines" },
      { icon: "redis", name: "Redis", note: "Hot-path caching" },
      { icon: "mongodb", name: "MongoDB", note: "Aggregation pipelines" },
    ],
  },
  {
    label: "Language & retrieval",
    items: [
      { icon: "nlp", name: "NLP", note: "Parsing what people meant" },
      { icon: "vector", name: "Vector search", note: "Dense retrieval, ANN indexes" },
      { icon: "embeddings", name: "Embeddings", note: "Two-tower & semantic tagging" },
      { icon: "ner", name: "NER", note: "Sizes, units and brands from raw queries" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: "java", name: "Java", note: "Primary language" },
      { icon: "spring", name: "Spring Boot", note: "High-throughput microservices" },
      { icon: "python", name: "Python", note: "Tooling & ML pipelines" },
      { icon: "ltr", name: "XGBoost · LTR", note: "Learning-to-rank rescoring" },
    ],
  },
  {
    label: "Infra & tooling",
    items: [
      { icon: "kubernetes", name: "Kubernetes", note: "Orchestration & rollouts" },
      { icon: "docker", name: "Docker", note: "Containers & CI environments" },
      { icon: "cloud", name: "AWS · GCP · Azure", note: "Multi-cloud deploys" },
      { icon: "otel", name: "OpenTelemetry", note: "Tracing & instrumentation" },
    ],
  },
];

export const skillsIntro =
  "The tools I reach for daily — shaped by five years of search, ranking, and backend systems work.";

/* -------------------------------------------------------------- lab */

export type LabStatus = "In progress" | "Active" | "Research";

export interface LabItem {
  status: LabStatus;
  title: string;
  blurb: string;
}

export const lab: LabItem[] = [
  {
    status: "In progress",
    title: "NaturalQuery",
    blurb:
      "A natural-language-to-Elasticsearch query agent built on a custom MCP server (Java 17, Spring Boot 3.x, official MCP Java SDK).",
  },
  {
    status: "Active",
    title: "LTR Rescoring",
    blurb: "Experiments with XGBRanker rescore pipelines for search relevance tuning.",
  },
  {
    status: "Research",
    title: "Query Understanding",
    blurb: "NER + semantic tagging to parse intent from raw search queries.",
  },
];

export const labClosing =
  "Some become production features. Some stay internal tools. Some just teach me something.";

/* ---------------------------------------------------------- writing */

export interface WritingItem {
  /** Shown in the meta line before read time and year. */
  source: string;
  readTime: string;
  year: string;
  title: string;
  excerpt: string;
  href: string;
  /** true = not real content yet; the section warns in dev and can be filtered. */
  placeholder?: boolean;
}

/**
 * All four entries are real and live. Titles, read times and dates were taken
 * from the published posts; excerpts come from each post's own subtitle or
 * opening line, lightly condensed to fit a card.
 *
 * To add another post, copy an entry. Anything flagged `placeholder: true` is
 * hidden from the built site (see lib/site.ts → `showPlaceholders`), so a
 * half-written card can never ship.
 */
export const writing: WritingItem[] = [
  {
    source: "Medium",
    readTime: "6 min",
    year: "2021",
    title: "End-to-end integration of Dynatrace and Grafana using Java",
    excerpt:
      "How to integrate Dynatrace, the APM tool, with Grafana — a metric analytics and visualisation suite.",
    href: "https://abhinavtyagi08.medium.com/end-to-end-integration-of-dynatrace-and-grafana-using-java-694ba326fdae",
  },
  {
    source: "Medium",
    readTime: "4 min",
    year: "2021",
    title: "Using Dynatrace API with Postman",
    excerpt:
      "Learning the Dynatrace API from Postman — token creation, headers, and pulling host metrics.",
    href: "https://abhinavtyagi08.medium.com/using-dynatrace-api-with-with-postman-7985902482cb",
  },
  {
    source: "Research",
    readTime: "12 min",
    year: "2021",
    title: "Knowledge Extraction in Digit Recognition Using the MNIST Dataset",
    excerpt:
      "Exploring how interpretable knowledge can be extracted from models trained on handwritten-digit recognition.",
    href: "https://www.igi-global.com/gateway/article/288321",
  },
  {
    source: "Research",
    readTime: "10 min",
    year: "2020",
    title: "Algorithmic Analysis of an Automatic Attendance System using Facial Recognition",
    excerpt:
      "A comparative analysis of detection and recognition pipelines for attendance automation.",
    href: "https://www.igi-global.com/article/algorithmic-analysis-of-automatic-attendance-system-using-facial-recognition/286688",
  },
];

export const writingFootnote = "Published research + engineering notes";

/* ------------------------------------------------------------ talks */

export interface TalkItem {
  kind: string;
  duration: string;
  year: string;
  title: string;
  href: string;
  /** Path under /public, e.g. "/assets/talks/01.jpg". Omit for the hatch placeholder. */
  thumb?: string;
  placeholder?: boolean;
}

/**
 * ALL PLACEHOLDERS. Fill these in with real YouTube links and 16:9 thumbnails
 * (drop images in /public/assets/talks/ and set `thumb`), then remove the
 * `placeholder` flag. While every entry is flagged, the whole Talks section is
 * hidden from the built site — see lib/site.ts → `showPlaceholders`.
 */
export const talks: TalkItem[] = [
  {
    kind: "Talk",
    duration: "18 min",
    year: "2026",
    title: "Your video title here",
    href: "https://www.youtube.com/@abhinavtyagi122",
    placeholder: true,
  },
  {
    kind: "Deep dive",
    duration: "25 min",
    year: "2025",
    title: "Another video title here",
    href: "https://www.youtube.com/@abhinavtyagi122",
    placeholder: true,
  },
  {
    kind: "Tutorial",
    duration: "12 min",
    year: "2025",
    title: "A third video title here",
    href: "https://www.youtube.com/@abhinavtyagi122",
    placeholder: true,
  },
];

/* -------------------------------------------------------- instagram */

/**
 * Real posts from @abhiinav.exe, served from our own origin rather than
 * Instagram's CDN (their URLs are signed and expire).
 *
 * Sources live in /public/assets/ig/ as 720px square JPEGs. To swap or add
 * one: drop a square export in, add an entry here, and write real alt text —
 * these are the only images on the page a screen reader has nothing else to
 * go on. Keep 8–12 tiles so the duplicated marquee track stays wide enough to
 * loop without a visible seam.
 */
export const instagramTiles = [
  {
    src: "/assets/ig/01.jpg",
    alt: "Sitting in the Parvati river among boulders, pine forest behind",
  },
  { src: "/assets/ig/02.jpg", alt: "Mirror selfie in a charcoal suit" },
  { src: "/assets/ig/03.jpg", alt: "Standing outside Hawa Mahal in Jaipur" },
  {
    src: "/assets/ig/04.jpg",
    alt: "On a Royal Enfield Classic on a dirt track at golden hour",
  },
  { src: "/assets/ig/05.jpg", alt: "Sitting by a wooden sculpture in a garden at night" },
  { src: "/assets/ig/06.jpg", alt: "With a Royal Enfield Himalayan on a mountain ride stop" },
  { src: "/assets/ig/07.jpg", alt: "Facing down a very large dosa" },
  { src: "/assets/ig/08.jpg", alt: "In a yellow hoodie above the clouds in the hills" },
];
