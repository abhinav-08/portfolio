module.exports = [
"[project]/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Site-wide identity, links and feature switches.
 * Change SITE_URL before deploying — it drives canonical, OG and sitemap URLs.
 */ __turbopack_context__.s([
    "SITE_URL",
    ()=>SITE_URL,
    "config",
    ()=>config,
    "identity",
    ()=>identity,
    "nav",
    ()=>nav,
    "socials",
    ()=>socials
]);
const SITE_URL = "https://abhinavtyagi.dev";
const identity = {
    name: "Abhinav Tyagi",
    role: "Backend & Search Engineer",
    location: "Gurugram, India",
    coords: "28.4595° N, 77.0266° E",
    email: "abhinav.tyagi9816@gmail.com",
    phone: "+91 96343 54919",
    phoneHref: "+919634354919",
    instagram: "https://www.instagram.com/abhiinav.exe/",
    instagramHandle: "@abhiinav.exe",
    github: "https://github.com/abhinavtyagi08",
    linkedin: "https://www.linkedin.com/in/abhinavtyagi08",
    medium: "https://abhinavtyagi08.medium.com/",
    youtube: "https://www.youtube.com/@abhinavtyagi122",
    resume: "/assets/abhinav_tyagi_cv.pdf",
    resumeFilename: "Abhinav_Tyagi_CV.pdf"
};
const config = {
    backgroundMotion: true,
    filmGrain: true,
    openToWork: true,
    /**
   * Cards flagged `placeholder: true` in lib/content.ts are hidden while this
   * is false, and a section whose entries are ALL placeholders disappears
   * entirely. Flip to true only to preview the layout with dummy content —
   * never for a real deploy.
   */ showPlaceholders: false
};
const nav = [
    {
        label: "Search",
        href: "#search"
    },
    {
        label: "Experience",
        href: "#experience"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Lab",
        href: "#lab"
    },
    {
        label: "Writing",
        href: "#writing"
    },
    {
        label: "Hello",
        href: "#hello"
    }
];
const socials = [
    {
        label: "Instagram ↗",
        href: identity.instagram,
        accent: true,
        external: true
    },
    {
        label: "GitHub ↗",
        href: identity.github,
        accent: false,
        external: true
    },
    {
        label: "LinkedIn ↗",
        href: identity.linkedin,
        accent: false,
        external: true
    },
    {
        label: "Medium ↗",
        href: identity.medium,
        accent: false,
        external: true
    },
    {
        label: "YouTube ↗",
        href: identity.youtube,
        accent: false,
        external: true
    }
];
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Header() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lock body scroll and close on Escape while the mobile sheet is open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        document.body.classList.add("is-locked");
        const onKey = (e)=>e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return ()=>{
            document.body.classList.remove("is-locked");
            window.removeEventListener("keydown", onKey);
        };
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "wordmark",
                        "aria-label": "Abhinav Tyagi — home",
                        children: [
                            "AT",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "nav",
                        "aria-label": "Sections",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: n.href,
                                children: n.label
                            }, n.href, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].openToWork && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pill-work",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "pill-work__dot",
                                        id: "work-dot",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    "Open to work"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "nav-toggle",
                                "aria-expanded": open,
                                "aria-controls": "nav-sheet",
                                onClick: ()=>setOpen((v)=>!v),
                                children: open ? "Close" : "Menu"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-sheet",
                id: "nav-sheet",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: n.href,
                        onClick: ()=>setOpen(false),
                        children: n.label
                    }, n.href, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/lib/content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * All page copy and data. Transcribed verbatim from the design handoff —
 * do not paraphrase.
 */ __turbopack_context__.s([
    "demos",
    ()=>demos,
    "facts",
    ()=>facts,
    "instagramTiles",
    ()=>instagramTiles,
    "lab",
    ()=>lab,
    "labClosing",
    ()=>labClosing,
    "marqueeTerms",
    ()=>marqueeTerms,
    "roles",
    ()=>roles,
    "skillGroups",
    ()=>skillGroups,
    "skillsIntro",
    ()=>skillsIntro,
    "stats",
    ()=>stats,
    "talks",
    ()=>talks,
    "writing",
    ()=>writing,
    "writingFootnote",
    ()=>writingFootnote
]);
const roles = [
    {
        id: "maf",
        index: "001",
        company: "Majid Al Futtaim",
        title: "Software Engineer II",
        period: "Apr 2025 — Present",
        location: "Gurugram, India",
        blurb: "Architecture and backend ownership of the customer-facing search platform — 25K+ requests per minute across a catalogue of nearly 10 million products.",
        bullets: [
            "Led architecture and backend ownership of the customer-facing search platform handling 25K+ RPM — low-latency Elasticsearch querying, real-time stock validation, pricing computation, marketplace-retail aggregation, voucher applicability and geo/store-aware availability.",
            "Built a Learning-to-Rank framework using XGBoost/XGBRanker with lexical, semantic, category, brand, popularity, CTR, ATCR and order-rate signals, integrated into Elasticsearch rescore pipelines.",
            "Led implementation of hybrid lexical + two-tower vector search, plus analytics-driven query tuning for broad, ambiguous and long-tail queries.",
            "Built an LLM-powered analytics agent that identifies low-performing search queries and reports on relevance improvements to lift CTR and add-to-cart rates.",
            "Designed distributed ingestion pipelines for stock, pricing, marketplace offers, promotions and Elasticsearch sync using Kafka, Azure Event Hub, MongoDB, Redis and Elasticsearch — near-real-time indexing across ~10M products.",
            "Developed semantic product-tagging pipelines and an LLM-based tagging system for intent-based discovery on queries like dairy-free, lactose-free and vegan.",
            "Integrated NER-based query understanding to detect quantities, sizes and units directly from queries, improving filtering, ranking and recommendations.",
            "Designed a dynamic taxonomy and filters platform with runtime-configurable PLP/SLP filters and admin tooling — category-aware merchandising without redeployments.",
            "Built cross-CTA search to surface faster-delivery inventory, and contributed to search monetization, ad relevance, experimentation pipelines and GrowthBook-based rollouts."
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
            "GrowthBook"
        ]
    },
    {
        id: "fab",
        index: "002",
        company: "FabHotels / TravelPlus",
        title: "Senior Backend Engineer",
        period: "May 2023 — May 2025",
        location: "Gurugram, India",
        blurb: "Owned hotel search and discovery — a major Elasticsearch migration, a latency overhaul, and autosuggest built from scratch.",
        bullets: [
            "Led migration of large-scale Elasticsearch infrastructure from 6.x to 8.x with minimal external dependency and zero major production disruption.",
            "Optimised hotel search architecture and Redis-backed caching strategies, reducing average search latency by nearly 40–50%.",
            "Designed and built autosuggestion systems from scratch, removing dependency on an external provider and improving booking conversion.",
            "Implemented backend enhancements across search result pages, property detail pages, homepage discovery and mobile/web search experiences.",
            "Enhanced review-rating algorithms and ranking systems to improve recommendation quality and customer engagement.",
            "Integrated hospitality channel-manager systems for seamless B2B synchronisation and operational scale.",
            "Mentored junior engineers — onboarding, technical KT sessions and production debugging support."
        ],
        stack: [
            "Java",
            "Spring Boot",
            "Elasticsearch 8",
            "Redis",
            "MySQL",
            "Autosuggest",
            "Channel managers"
        ]
    },
    {
        id: "mog",
        index: "003",
        company: "Moglix / Credlix",
        title: "Backend Engineer",
        period: "Oct 2021 — May 2023",
        location: "Noida, India",
        blurb: "Fintech platforms for invoice discounting and channel financing — microservices, integrations and analytics.",
        bullets: [
            "Contributed to fintech platforms enabling invoice discounting and channel financing services.",
            "Designed microservices for WhatsApp notifications, document management, reporting and Elasticsearch-powered analytics dashboards.",
            "Built a lead-tracking Kanban platform from scratch with analytics for operational visibility and performance tracking.",
            "Developed centralised middleware for third-party integrations with robust rate-limiting and fault-tolerant API orchestration.",
            "Worked extensively with AWS S3 and SQS, MongoDB aggregations, schedulers, asynchronous processing and messaging systems."
        ],
        stack: [
            "Java",
            "Spring Boot",
            "MongoDB",
            "Elasticsearch",
            "AWS S3",
            "AWS SQS",
            "Node.js"
        ]
    },
    {
        id: "xor",
        index: "004",
        company: "Xoriant Solutions",
        title: "Associate Software Engineer",
        period: "Aug 2020 — Sep 2021",
        location: "Pune, India",
        blurb: "Full-stack and observability engineering for enterprise clients — where I learned to read heap dumps like tea leaves.",
        bullets: [
            "Worked as a full-stack developer using Java, Spring Boot, React and Angular.",
            "Developed integration frameworks connecting Dynatrace with Grafana through InfluxDB for enterprise observability.",
            "Worked on OpenTelemetry-based instrumentation and monitoring for Java applications.",
            "Performed memory profiling and memory-leak analysis for production systems hosted on AWS.",
            "Contributed to API mocking frameworks and frontend feature enhancements."
        ],
        stack: [
            "Java",
            "Spring Boot",
            "React",
            "Angular",
            "Dynatrace",
            "Grafana",
            "InfluxDB",
            "OpenTelemetry"
        ]
    }
];
const demos = [
    {
        q: "dairy free milk 1l",
        lat: 38,
        chips: [
            "INTENT · dairy-free",
            "UNIT · 1 L",
            "CATEGORY · milk alt."
        ],
        rows: [
            {
                id: "me",
                title: "Abhinav Tyagi",
                meta: "built this ranking",
                isMe: true,
                score: 0.98
            },
            {
                id: "a",
                title: "Oat milk · 1 L",
                meta: "semantic match",
                score: 0.91
            },
            {
                id: "b",
                title: "Full-cream milk · 1 L",
                meta: "demoted by intent",
                score: 0.34
            }
        ]
    },
    {
        q: "hotel near mg road tonight",
        lat: 42,
        chips: [
            "GEO · MG Road ± 3 km",
            "DATE · tonight",
            "SORT · availability"
        ],
        rows: [
            {
                id: "me",
                title: "Abhinav Tyagi",
                meta: "built this autosuggest",
                isMe: true,
                score: 0.97
            },
            {
                id: "a",
                title: "Boutique stay · 1.2 km",
                meta: "geo boost",
                score: 0.93
            },
            {
                id: "b",
                title: "Resort · 24 km",
                meta: "out of radius",
                score: 0.22
            }
        ]
    },
    {
        q: "running shoes size 9 under 3000",
        lat: 35,
        chips: [
            "SIZE · UK 9",
            "PRICE · ≤ ₹3,000",
            "CATEGORY · running"
        ],
        rows: [
            {
                id: "me",
                title: "Abhinav Tyagi",
                meta: "wrote the NER parser",
                isMe: true,
                score: 0.99
            },
            {
                id: "a",
                title: "Trail runner · ₹2,799",
                meta: "ATC-rate boost",
                score: 0.94
            },
            {
                id: "b",
                title: "Premium racer · ₹8,999",
                meta: "over price ceiling",
                score: 0.19
            }
        ]
    }
];
const facts = [
    {
        label: "Based",
        value: "Gurugram, India"
    },
    {
        label: "Trade",
        value: "Search platforms · distributed systems"
    },
    {
        label: "Stack",
        value: "Java · Spring · Elasticsearch · Kafka"
    },
    {
        label: "Belief",
        value: "Relevance is empathy at scale"
    }
];
const stats = [
    {
        value: 25,
        suffix: "K+",
        caption: "Search requests / min"
    },
    {
        value: 10,
        prefix: "~",
        suffix: "M",
        caption: "Products indexed, near-realtime"
    },
    {
        value: 45,
        prefix: "−",
        suffix: "%",
        caption: "Search latency, Redis-backed"
    },
    {
        value: 5,
        suffix: "+",
        caption: "Years shipping to production"
    }
];
const marqueeTerms = [
    "elasticsearch relevance",
    "learning-to-rank",
    "vector search",
    "query understanding",
    "kafka pipelines",
    "25k rpm, unbothered"
];
const skillGroups = [
    {
        label: "Search & data",
        items: [
            {
                icon: "elasticsearch",
                name: "Elasticsearch",
                note: "Relevance, DSL, 6.x → 8.x migrations"
            },
            {
                icon: "kafka",
                name: "Kafka",
                note: "Ingestion pipelines"
            },
            {
                icon: "redis",
                name: "Redis",
                note: "Hot-path caching"
            },
            {
                icon: "mongodb",
                name: "MongoDB",
                note: "Aggregation pipelines"
            }
        ]
    },
    {
        label: "Language & retrieval",
        items: [
            {
                icon: "nlp",
                name: "NLP",
                note: "Parsing what people meant"
            },
            {
                icon: "vector",
                name: "Vector search",
                note: "Dense retrieval, ANN indexes"
            },
            {
                icon: "embeddings",
                name: "Embeddings",
                note: "Two-tower & semantic tagging"
            },
            {
                icon: "ner",
                name: "NER",
                note: "Sizes, units and brands from raw queries"
            }
        ]
    },
    {
        label: "Backend",
        items: [
            {
                icon: "java",
                name: "Java",
                note: "Primary language"
            },
            {
                icon: "spring",
                name: "Spring Boot",
                note: "High-throughput microservices"
            },
            {
                icon: "python",
                name: "Python",
                note: "Tooling & ML pipelines"
            },
            {
                icon: "ltr",
                name: "XGBoost · LTR",
                note: "Learning-to-rank rescoring"
            }
        ]
    },
    {
        label: "Infra & tooling",
        items: [
            {
                icon: "kubernetes",
                name: "Kubernetes",
                note: "Orchestration & rollouts"
            },
            {
                icon: "docker",
                name: "Docker",
                note: "Containers & CI environments"
            },
            {
                icon: "cloud",
                name: "AWS · GCP · Azure",
                note: "Multi-cloud deploys"
            },
            {
                icon: "otel",
                name: "OpenTelemetry",
                note: "Tracing & instrumentation"
            }
        ]
    }
];
const skillsIntro = "The tools I reach for daily — shaped by five years of search, ranking, and backend systems work.";
const lab = [
    {
        status: "In progress",
        title: "Natural query",
        blurb: "A natural-language-to-Elasticsearch query agent built on a custom MCP server (Java 17, Spring Boot 3.x, official MCP Java SDK)."
    },
    {
        status: "Active",
        title: "LTR Rescoring",
        blurb: "Experiments with XGBRanker rescore pipelines for search relevance tuning."
    },
    {
        status: "Research",
        title: "Query Understanding",
        blurb: "NER + semantic tagging to parse intent from raw search queries."
    }
];
const labClosing = "Some become production features. Some stay internal tools. Some just teach me something.";
const writing = [
    {
        source: "Medium",
        readTime: "6 min",
        year: "2021",
        title: "End-to-end integration of Dynatrace and Grafana using Java",
        excerpt: "How to integrate Dynatrace, the APM tool, with Grafana — a metric analytics and visualisation suite.",
        href: "https://abhinavtyagi08.medium.com/end-to-end-integration-of-dynatrace-and-grafana-using-java-694ba326fdae"
    },
    {
        source: "Medium",
        readTime: "4 min",
        year: "2021",
        title: "Using Dynatrace API with Postman",
        excerpt: "Learning the Dynatrace API from Postman — token creation, headers, and pulling host metrics.",
        href: "https://abhinavtyagi08.medium.com/using-dynatrace-api-with-with-postman-7985902482cb"
    },
    {
        source: "Research",
        readTime: "12 min",
        year: "2021",
        title: "Knowledge Extraction in Digit Recognition Using the MNIST Dataset",
        excerpt: "Exploring how interpretable knowledge can be extracted from models trained on handwritten-digit recognition.",
        href: "https://www.igi-global.com/gateway/article/288321"
    },
    {
        source: "Research",
        readTime: "10 min",
        year: "2020",
        title: "Algorithmic Analysis of an Automatic Attendance System using Facial Recognition",
        excerpt: "A comparative analysis of detection and recognition pipelines for attendance automation.",
        href: "https://www.igi-global.com/article/algorithmic-analysis-of-automatic-attendance-system-using-facial-recognition/286688"
    }
];
const writingFootnote = "Published research + engineering notes";
const talks = [
    {
        kind: "Talk",
        duration: "18 min",
        year: "2026",
        title: "Your video title here",
        href: "https://www.youtube.com/@abhinavtyagi122",
        placeholder: true
    },
    {
        kind: "Deep dive",
        duration: "25 min",
        year: "2025",
        title: "Another video title here",
        href: "https://www.youtube.com/@abhinavtyagi122",
        placeholder: true
    },
    {
        kind: "Tutorial",
        duration: "12 min",
        year: "2025",
        title: "A third video title here",
        href: "https://www.youtube.com/@abhinavtyagi122",
        placeholder: true
    }
];
const instagramTiles = [
    {
        src: "/assets/ig/01.jpg",
        alt: "Sitting in the Parvati river among boulders, pine forest behind"
    },
    {
        src: "/assets/ig/02.jpg",
        alt: "Mirror selfie in a charcoal suit"
    },
    {
        src: "/assets/ig/03.jpg",
        alt: "Standing outside Hawa Mahal in Jaipur"
    },
    {
        src: "/assets/ig/04.jpg",
        alt: "On a Royal Enfield Classic on a dirt track at golden hour"
    },
    {
        src: "/assets/ig/05.jpg",
        alt: "Sitting by a wooden sculpture in a garden at night"
    },
    {
        src: "/assets/ig/06.jpg",
        alt: "With a Royal Enfield Himalayan on a mountain ride stop"
    },
    {
        src: "/assets/ig/07.jpg",
        alt: "Facing down a very large dosa"
    },
    {
        src: "/assets/ig/08.jpg",
        alt: "In a yellow hoodie above the clouds in the hills"
    }
];
}),
"[project]/components/LiveClock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TZ = "Asia/Kolkata";
const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
});
/** Seconds-past-the-minute in the target zone, for the sweep. */ function secondsIn(d) {
    const s = fmt.formatToParts(d).find((p)=>p.type === "second")?.value ?? "0";
    return Number(s);
}
function LiveClock() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const sweep = document.getElementById("hero-sweep");
        let lastMinute = "";
        const paint = (first)=>{
            const el = ref.current;
            if (!el) return;
            const now = new Date();
            const text = fmt.format(now);
            const minute = text.slice(0, 5);
            if (sweep) {
                sweep.style.transform = `scaleX(${secondsIn(now) / 60})`;
            }
            if (el.textContent === text) return;
            // Roll only when the minute turns — a roll every second would be noise.
            const rolls = !first && !reduced && minute !== lastMinute && lastMinute !== "";
            lastMinute = minute;
            if (!rolls) {
                el.textContent = text;
                return;
            }
            el.animate([
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: "translateY(-6px)",
                    opacity: 0
                }
            ], {
                duration: 170,
                easing: "cubic-bezier(0.4,0,1,1)",
                fill: "forwards"
            }).onfinish = ()=>{
                el.textContent = text;
                el.animate([
                    {
                        transform: "translateY(6px)",
                        opacity: 0
                    },
                    {
                        transform: "translateY(0)",
                        opacity: 1
                    }
                ], {
                    duration: 260,
                    easing: "cubic-bezier(0.16,1,0.3,1)",
                    fill: "forwards"
                });
            };
        };
        paint(true);
        const id = window.setInterval(()=>paint(false), 1000);
        return ()=>window.clearInterval(id);
    }, []);
    // suppressHydrationWarning: the effect fills this in immediately on mount.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "clock",
        ref: ref,
        suppressHydrationWarning: true
    }, void 0, false, {
        fileName: "[project]/components/LiveClock.tsx",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMounted",
    ()=>useMounted,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useReducedMotion() {
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        setReady(true);
        const onChange = (e)=>setReduced(e.matches);
        mq.addEventListener("change", onChange);
        return ()=>mq.removeEventListener("change", onChange);
    }, []);
    return {
        reduced,
        ready
    };
}
function useMounted() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    return mounted;
}
}),
"[project]/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LiveClock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LiveClock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const FULL = "Abhinav Tyagi";
function Hero() {
    const { reduced, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    /* ----------------------------------------------------- magnetic CTA */ const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready || reduced) return;
        if (window.matchMedia("(hover: none)").matches) return;
        let frame = 0;
        const onMove = (e)=>{
            if (frame) return;
            frame = requestAnimationFrame(()=>{
                frame = 0;
                const el = ctaRef.current;
                if (!el) return;
                const r = el.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                const dist = Math.hypot(dx, dy);
                el.style.transform = dist < 180 ? `translate(${dx * 0.15}px, ${dy * 0.15}px)` : "translate(0, 0)";
            });
        };
        window.addEventListener("mousemove", onMove, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("mousemove", onMove);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [
        ready,
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero",
        id: "top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero__head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow hero__eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rule-inline",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            "Backend & Search Engineer · Gurugram, IN"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero__name",
                        children: [
                            FULL,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero__body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero__lede",
                        children: [
                            "I teach machines what people ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "mean"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 63,
                                columnNumber: 40
                            }, this),
                            " — not just what they type. Five years of search platforms and ranking models that stay calm at 25K requests a minute."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                ref: ctaRef,
                                className: "btn btn--primary",
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"].email}`,
                                children: "Let’s talk →"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn btn--ghost",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"].resume,
                                download: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"].resumeFilename,
                                children: "Resume ↓"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "social-row",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socials"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: `social-link${s.accent ? " social-link--accent" : ""}`,
                                href: s.href,
                                ...s.external ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {
                                    download: "download" in s ? s.download : undefined
                                },
                                children: s.label.toUpperCase()
                            }, s.label, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero__figure",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portrait",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__bloom",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__pool",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__mid",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__line",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        srcSet: "/assets/portrait-cutout.webp",
                                        type: "image/webp"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        id: "portrait-img",
                                        className: "portrait__img",
                                        src: "/assets/portrait-cutout.png",
                                        alt: "Abhinav Tyagi",
                                        width: 1097,
                                        height: 1088,
                                        fetchPriority: "high",
                                        decoding: "async"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero__rule",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hero__sweep",
                            id: "hero-sweep"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portrait__meta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero__meta-l",
                                children: [
                                    "Local time — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LiveClock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 125,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero__meta-r",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["identity"].coords
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "herofacts",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["facts"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "herofacts__sep",
                                        "aria-hidden": "true",
                                        children: " ✦ "
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: [
                                            f.label,
                                            ": "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    f.value
                                ]
                            }, f.label, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-cue",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/sections.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "num",
    ()=>num
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
;
;
/**
 * Section numbering is derived, not hardcoded.
 *
 * Sections whose entries are all placeholders don't render (see
 * `config.showPlaceholders`), and a hardcoded eyebrow would then leave a hole
 * in the sequence — "05 — Writing" followed by "07 — Elsewhere". Deriving the
 * numbers from what actually renders keeps them contiguous now, and correct
 * again the moment real Talks or Writing entries are added.
 */ function renders(items) {
    return (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"].showPlaceholders ? items : items.filter((i)=>!i.placeholder)).length > 0;
}
const order = [
    "search",
    "experience",
    "skills",
    "lab",
    ...renders(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writing"]) ? [
        "writing"
    ] : [],
    ...renders(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["talks"]) ? [
        "talks"
    ] : [],
    "instagram",
    "hello"
];
function num(id) {
    const i = order.indexOf(id);
    if (i === -1) throw new Error(`Unknown section id: ${id}`);
    return String(i + 1).padStart(2, "0");
}
}),
"[project]/components/SearchConsole.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sections.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const ROW_H = 74;
const ROW_H_SM = 90;
const CHAR_MS = 64;
const CHIPS_AFTER = 300;
const SCORES_AFTER = 640;
const SCENARIO_MS = 5200;
/** Deterministic shuffle seed per scenario so SSR and client agree. */ function scrambled(rows, seed) {
    const out = rows.map((r)=>({
            ...r,
            score: 0.5
        }));
    // Rotate rather than randomise — stable across renders, still visibly re-ranks.
    const k = seed % out.length;
    return [
        ...out.slice(k),
        ...out.slice(0, k)
    ];
}
function SearchConsole() {
    const { reduced, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [rowH, setRowH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ROW_H);
    const first = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demos"][0];
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(first.q);
    const [chips, setChips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(first.chips);
    const [latency, setLatency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(first.lat);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(first.rows);
    /* Row height tracks the mobile breakpoint so translateY stays in step
     with the taller rows the stylesheet switches to under 768px. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(max-width: 767px)");
        const sync = ()=>setRowH(mq.matches ? ROW_H_SM : ROW_H);
        sync();
        mq.addEventListener("change", sync);
        return ()=>mq.removeEventListener("change", sync);
    }, []);
    /* Pause the loop while the panel is off-screen. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = panelRef.current;
        if (!el) return;
        const io = new IntersectionObserver(([e])=>setVisible(e.isIntersecting), {
            threshold: 0.15
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, []);
    /* The demo loop. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready || reduced || !visible) return;
        let idx = 0;
        let timers = [];
        let loop = 0;
        let cancelled = false;
        const clear = ()=>{
            timers.forEach(clearTimeout);
            timers = [];
        };
        const at = (ms, fn)=>timers.push(window.setTimeout(fn, ms));
        const run = ()=>{
            if (cancelled) return;
            const demo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demos"][idx];
            clear();
            setChips([]);
            setQuery("");
            setLatency(demo.lat);
            setRows(scrambled(demo.rows, idx + 1));
            demo.q.split("").forEach((_, i)=>{
                at((i + 1) * CHAR_MS, ()=>setQuery(demo.q.slice(0, i + 1)));
            });
            const typedAt = demo.q.length * CHAR_MS;
            at(typedAt + CHIPS_AFTER, ()=>setChips(demo.chips));
            at(typedAt + SCORES_AFTER, ()=>setRows(demo.rows));
            idx = (idx + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["demos"].length;
        };
        run();
        loop = window.setInterval(run, SCENARIO_MS);
        return ()=>{
            cancelled = true;
            clear();
            window.clearInterval(loop);
        };
    }, [
        ready,
        reduced,
        visible
    ]);
    /* Rank = position in a copy sorted by score descending. */ const ranked = [
        ...rows
    ].sort((a, b)=>b.score - a.score).map((r)=>r.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "searchband",
        id: "search",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchband__intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        "data-reveal": "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rule-inline",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["num"])("search"),
                            " — Live · query understanding"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "searchband__head",
                        "data-reveal": "80",
                        children: [
                            "I’m not a list of frameworks. I’m the person who needs to know",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "why"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            " the third result outranked the first — and can’t sleep until it doesn’t."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__sub",
                        "data-reveal": "140",
                        children: "Search sits where language meets systems, and that’s exactly where I like to live. Query understanding, ranking models, ingestion pipelines that never sleep — the result is platforms serving 25K+ requests a minute across a 10-million-product catalog that still feel personal."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchConsole.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchband__demo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__caption",
                        "data-reveal": "180",
                        children: [
                            "This is roughly what my systems see when you type. Intent, units, geo, price — pulled out of the words, then ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "re-ranked"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 131,
                                columnNumber: 34
                            }, this),
                            " before you blink."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        ref: panelRef,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__chrome",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "GET /search?q=…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel__status",
                                        children: [
                                            "200 OK · ",
                                            latency,
                                            " ms"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__query",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel__glyph",
                                        children: "⌕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: query
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel__caret"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__chips",
                                children: chips.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        style: {
                                            animationDelay: `${i * 90}ms`
                                        },
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__results",
                                children: rows.map((r)=>{
                                    const rank = ranked.indexOf(r.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result",
                                        style: {
                                            transform: `translateY(${rank * rowH}px)`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "result__rank",
                                                children: [
                                                    "#",
                                                    rank + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "result__body",
                                                children: [
                                                    r.isMe ? // eslint-disable-next-line @next/next/no-img-element
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "result__thumb result__thumb--me",
                                                        src: "/assets/thumb-me.webp",
                                                        alt: "",
                                                        width: 44,
                                                        height: 44,
                                                        loading: "lazy",
                                                        decoding: "async"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result__thumb"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "result__text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "result__title",
                                                                children: r.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "result__meta",
                                                                children: r.meta
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "result__bar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "result__fill",
                                                    style: {
                                                        width: `${Math.round(r.score * 100)}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `result__score${r.score > 0.7 ? " is-high" : ""}`,
                                                children: r.score.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, r.id, true, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__note",
                                children: "// live re-rank: lexical + semantic + CTR/ATC signals"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__footnote",
                        "data-reveal": "220",
                        children: "Lexical match gets you candidates. Semantics, CTR and add-to-cart rate decide who actually deserves the top slot."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchConsole.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchConsole.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Stats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const DURATION = 1400;
function Stats() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = ref.current;
        if (!root) return;
        const nodes = Array.from(root.querySelectorAll("[data-count]"));
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const paint = (el, v)=>{
            const dec = (el.dataset.decimals ?? "0") === "1";
            el.textContent = `${el.dataset.prefix ?? ""}${dec ? v.toFixed(1) : Math.round(v)}${el.dataset.suffix ?? ""}`;
        };
        if (reduced) {
            nodes.forEach((el)=>paint(el, parseFloat(el.dataset.count)));
            return;
        }
        const done = new WeakSet();
        const count = (el)=>{
            if (done.has(el)) return;
            done.add(el);
            const target = parseFloat(el.dataset.count);
            const t0 = performance.now();
            const step = (now)=>{
                const p = Math.min(1, (now - t0) / DURATION);
                const eased = 1 - Math.pow(1 - p, 3);
                paint(el, target * eased);
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        };
        const io = new IntersectionObserver((entries)=>entries.forEach((e)=>{
                if (e.isIntersecting) {
                    count(e.target);
                    io.unobserve(e.target);
                }
            }), {
            threshold: 0.3
        });
        nodes.forEach((el)=>io.observe(el));
        return ()=>io.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "statsband",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cellgrid stats",
            ref: ref,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stats"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stat",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stat__num",
                            "data-count": s.value,
                            "data-prefix": s.prefix ?? "",
                            "data-suffix": s.suffix ?? "",
                            children: [
                                s.prefix ?? "",
                                s.value,
                                s.suffix ?? ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Stats.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stat__cap",
                            children: s.caption
                        }, void 0, false, {
                            fileName: "[project]/components/Stats.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, s.caption, true, {
                    fileName: "[project]/components/Stats.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Stats.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Stats.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sections.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Experience() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const triggers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMounted"])();
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const id = open?.id;
        setOpen(null);
        // Return focus to the row that opened the drawer.
        if (id) requestAnimationFrame(()=>triggers.current.get(id)?.focus());
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "exp",
        id: "experience",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp__head",
                "data-reveal": "0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rule-inline",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["num"])("experience"),
                            " — Experience"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "exp__hint",
                        children: "Click a role for the full story"
                    }, void 0, false, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roles"].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "role",
                    "data-reveal": i * 60,
                    onClick: ()=>setOpen(r),
                    "aria-haspopup": "dialog",
                    "aria-label": `${r.company} — ${r.title}, ${r.period}. Open full details.`,
                    ref: (el)=>{
                        if (el) triggers.current.set(r.id, el);
                        else triggers.current.delete(r.id);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "role__index",
                            "aria-hidden": "true",
                            children: r.index
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "role__company",
                                    children: r.company
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "role__title",
                                    children: r.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "role__blurb",
                            children: r.blurb
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "role__period",
                            children: r.period
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "role__chevron",
                            "aria-hidden": "true",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, r.id, true, {
                    fileName: "[project]/components/Experience.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)),
            open && mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleDrawer, {
                role: open,
                onClose: close
            }, void 0, false, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 64,
                columnNumber: 22
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Experience.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
/* ------------------------------------------------------------- drawer */ function RoleDrawer({ role, onClose }) {
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingId = `drawer-${role.id}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.classList.add("is-locked");
        const panel = panelRef.current;
        const focusables = ()=>Array.from(panel?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []);
        focusables()[0]?.focus();
        const onKey = (e)=>{
            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
                return;
            }
            if (e.key !== "Tab") return;
            // Focus trap.
            const items = focusables();
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            const active = document.activeElement;
            if (e.shiftKey && (active === first || !panel?.contains(active))) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && active === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return ()=>{
            document.body.classList.remove("is-locked");
            document.removeEventListener("keydown", onKey);
        };
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "drawer",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": headingId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drawer__scrim",
                onClick: onClose,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drawer__panel",
                ref: panelRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drawer__bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "drawer__meta",
                                children: [
                                    role.period,
                                    " · ",
                                    role.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "drawer__close",
                                onClick: onClose,
                                children: "Close ✕"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drawer__body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__kicker",
                                children: role.title
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "drawer__company",
                                id: headingId,
                                children: role.company
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__blurb",
                                children: role.blurb
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "drawer__rule"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__kicker",
                                children: "What I did"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "drawer__list",
                                children: role.bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "drawer__item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "drawer__marker",
                                                "aria-hidden": "true",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Experience.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: b
                                            }, void 0, false, {
                                                fileName: "[project]/components/Experience.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/Experience.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "drawer__rule"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__kicker",
                                children: "Stack"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "drawer__chips",
                                children: role.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "drawer__chip",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/Experience.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Experience.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function Reveal() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const els = Array.from(document.querySelectorAll("[data-reveal]"));
        const show = (el)=>el.classList.add("is-revealed");
        if (reduced) {
            els.forEach(show);
            return;
        }
        els.forEach((el)=>{
            const delay = el.dataset.reveal;
            if (delay) el.style.transitionDelay = `${delay}ms`;
        });
        const io = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    show(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });
        els.forEach((el)=>{
            // Already in view on load — reveal immediately rather than waiting.
            const r = el.getBoundingClientRect();
            if (r.top < window.innerHeight * 0.92) show(el);
            else io.observe(el);
        });
        const fallback = window.setTimeout(()=>els.forEach(show), 1500);
        return ()=>{
            io.disconnect();
            window.clearTimeout(fallback);
        };
    }, []);
    return null;
}
}),
"[project]/components/ScrollFx.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollFx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function ScrollFx() {
    const raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const bar = document.getElementById("progress");
        const portrait = document.getElementById("portrait-img");
        const apply = ()=>{
            raf.current = 0;
            const y = window.scrollY;
            if (bar) {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
                bar.style.transform = `scaleX(${p})`;
            }
            if (portrait && !reduced) {
                portrait.style.transform = `translateY(calc(-8% + ${y * -0.05}px))`;
            }
        };
        const onScroll = ()=>{
            if (!raf.current) raf.current = requestAnimationFrame(apply);
        };
        apply();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);
    return null;
}
}),
"[project]/components/HeroBreath.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBreath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
/**
 * Concept D — ambient respiration.
 *
 * The glow field doesn't pulse on a sine, it breathes: inhale over ~34% of the
 * cycle, a brief hold at the top, then a longer exhale. The period itself
 * wanders a few percent breath to breath, so it never visibly repeats.
 *
 * A phase accumulator is used rather than `time % period` — changing the
 * period under a modulo would jump the phase, which reads as a hitch.
 *
 * It should not be visible as motion. It should be noticeable if it stopped.
 */ const BREATH_SCALE = 0.035; // ~12px of apparent radius change
const DOT_SCALE = 0.12; // anti-phase, a third of the amplitude
/** Asymmetric respiratory curve over one normalised cycle. */ function breath(p) {
    if (p < 0.34) {
        const a = p / 0.34;
        return a * a * (3 - 2 * a); // inhale, eased
    }
    if (p < 0.42) return 1; // hold at the top
    const b = (p - 0.42) / 0.58;
    return 1 - b * b * (3 - 2 * b); // exhale, longer
}
function HeroBreath() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const field = document.getElementById("bg-breath");
        const dot = document.getElementById("work-dot");
        if (!field && !dot) return;
        const write = (v)=>{
            if (field) {
                field.style.transform = `scale(${1 + v * BREATH_SCALE})`;
                field.style.opacity = String(0.86 + v * 0.14);
            }
            if (dot) dot.style.transform = `scale(${1.04 - v * DOT_SCALE})`;
        };
        // Reduced motion: hold mid-breath rather than freezing at an extreme.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            write(0.5);
            return;
        }
        let raf = 0;
        let phase = 0;
        let last = 0;
        let t = 0;
        let running = false;
        const tick = (now)=>{
            // dt is clamped so a backgrounded tab can't fast-forward the phase.
            const dt = last ? Math.min((now - last) / 1000, 0.064) : 0;
            last = now;
            t += dt;
            const period = 5.45 + Math.sin(t / 11.3) * 0.32 + Math.sin(t / 7.1 + 2.2) * 0.18;
            phase = (phase + dt / period) % 1;
            write(breath(phase));
            raf = requestAnimationFrame(tick);
        };
        const start = ()=>{
            if (running) return;
            running = true;
            last = 0;
            if (field) field.style.willChange = "transform, opacity";
            if (dot) dot.style.willChange = "transform";
            raf = requestAnimationFrame(tick);
        };
        const stop = ()=>{
            if (!running) return;
            running = false;
            cancelAnimationFrame(raf);
            // Drop the compositor hint while parked — an idle promoted layer still
            // costs memory.
            if (field) field.style.willChange = "";
            if (dot) dot.style.willChange = "";
        };
        // Parked both when the hero scrolls away and when the tab is hidden, so a
        // background tab costs nothing.
        const hero = document.getElementById("top");
        let onScreen = true;
        const sync = ()=>{
            if (onScreen && !document.hidden) start();
            else stop();
        };
        const io = hero ? new IntersectionObserver(([e])=>{
            onScreen = e.isIntersecting;
            sync();
        }, {
            threshold: 0
        }) : null;
        io?.observe(hero);
        document.addEventListener("visibilitychange", sync);
        sync();
        return ()=>{
            stop();
            io?.disconnect();
            document.removeEventListener("visibilitychange", sync);
        };
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=_bbe5fb2c._.js.map