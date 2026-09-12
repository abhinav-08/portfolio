(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    filmGrain: true
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
        label: "Archive",
        href: "#archive"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Header() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Lock body scroll and close on Escape while the mobile sheet is open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (!open) return;
            document.body.classList.add("is-locked");
            const onKey = {
                "Header.useEffect.onKey": (e)=>e.key === "Escape" && setOpen(false)
            }["Header.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "Header.useEffect": ()=>{
                    document.body.classList.remove("is-locked");
                    window.removeEventListener("keydown", onKey);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "wordmark",
                        "aria-label": "Abhinav Tyagi — home",
                        children: [
                            "AT",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "nav",
                        "aria-label": "Sections",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "nav-toggle",
                            "aria-expanded": open,
                            "aria-controls": "nav-sheet",
                            onClick: ()=>setOpen((v)=>!v),
                            children: open ? "Close" : "Menu"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-sheet",
                id: "nav-sheet",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: n.href,
                        onClick: ()=>setOpen(false),
                        children: n.label
                    }, n.href, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "e27cRtNMdAs0U0o1oHlS6A8OEBo=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMounted",
    ()=>useMounted,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
function useReducedMotion() {
    _s();
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReduced(mq.matches);
            setReady(true);
            const onChange = {
                "useReducedMotion.useEffect.onChange": (e)=>setReduced(e.matches)
            }["useReducedMotion.useEffect.onChange"];
            mq.addEventListener("change", onChange);
            return ({
                "useReducedMotion.useEffect": ()=>mq.removeEventListener("change", onChange)
            })["useReducedMotion.useEffect"];
        }
    }["useReducedMotion.useEffect"], []);
    return {
        reduced,
        ready
    };
}
_s(useReducedMotion, "InTJ1btKbaLwYap6xaMectlOHJQ=");
function useMounted() {
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMounted.useEffect": ()=>setMounted(true)
    }["useMounted.useEffect"], []);
    return mounted;
}
_s1(useMounted, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FULL = "Abhinav Tyagi";
function Hero() {
    _s();
    const { reduced, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    /* ----------------------------------------------------- magnetic CTA */ const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!ready || reduced) return;
            if (window.matchMedia("(hover: none)").matches) return;
            let frame = 0;
            const onMove = {
                "Hero.useEffect.onMove": (e)=>{
                    if (frame) return;
                    frame = requestAnimationFrame({
                        "Hero.useEffect.onMove": ()=>{
                            frame = 0;
                            const el = ctaRef.current;
                            if (!el) return;
                            const r = el.getBoundingClientRect();
                            const dx = e.clientX - (r.left + r.width / 2);
                            const dy = e.clientY - (r.top + r.height / 2);
                            const dist = Math.hypot(dx, dy);
                            el.style.transform = dist < 180 ? "translate(".concat(dx * 0.15, "px, ").concat(dy * 0.15, "px)") : "translate(0, 0)";
                        }
                    }["Hero.useEffect.onMove"]);
                }
            }["Hero.useEffect.onMove"];
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            return ({
                "Hero.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMove);
                    if (frame) cancelAnimationFrame(frame);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        ready,
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero",
        id: "top",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero__copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero__head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow hero__eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rule-inline",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    "Backend & Search Engineer · Gurugram, IN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero__name",
                                children: [
                                    FULL,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "accent",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero__body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero__lede",
                                children: [
                                    "I teach machines what people ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "mean"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 63,
                                        columnNumber: 42
                                    }, this),
                                    " — not just what they type. Five years of search platforms and ranking models that stay calm at 25K requests a minute."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cta-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        ref: ctaRef,
                                        className: "btn btn--primary",
                                        href: "mailto:".concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"].email),
                                        children: "Let’s talk →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn--ghost",
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"].resume,
                                        download: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"].resumeFilename,
                                        children: "Resume ↓"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "social-row",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socials"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "social-link".concat(s.accent ? " social-link--accent" : ""),
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
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero__figure",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portrait",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__bloom",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__pool",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__mid",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "portrait__line",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                        srcSet: "/assets/portrait-cutout.webp",
                                        type: "image/webp"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero__rule",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-cue",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Hero, "YCoMRd9XsM8O6OAWcx3GfIxFYDs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/search/parse.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Query understanding: tokenise, then pull typed entities out of the words.
 *
 * This is rule-based NER, not a model — patterns and gazetteers, the way most
 * production query parsers actually start before anyone trains anything. It is
 * deliberately transparent: every entity records which span of the query
 * produced it, so the UI can show its work.
 */ __turbopack_context__.s([
    "SYNONYMS",
    ()=>SYNONYMS,
    "detectBrand",
    ()=>detectBrand,
    "expand",
    ()=>expand,
    "parseQuery",
    ()=>parseQuery,
    "tokenize",
    ()=>tokenize
]);
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
    "find"
]);
/** Dietary intents and the surface forms that signal them. */ const DIET_PATTERNS = [
    [
        "dairy-free",
        /\b(dairy[\s-]?free|non[\s-]?dairy|no dairy|plant[\s-]?based)\b/
    ],
    [
        "lactose-free",
        /\b(lactose[\s-]?free|no lactose|lactose intolerant)\b/
    ],
    [
        "vegan",
        /\bvegan\b/
    ],
    [
        "gluten-free",
        /\b(gluten[\s-]?free|no gluten|celiac|coeliac)\b/
    ],
    [
        "sugar-free",
        /\b(sugar[\s-]?free|no (added )?sugar|unsweetened|diabetic)\b/
    ],
    [
        "organic",
        /\borganic\b/
    ],
    [
        "vegetarian",
        /\b(vegetarian|veg)\b/
    ]
];
/** Category gazetteer — surface form → canonical category. */ const CATEGORY_TERMS = [
    // Ordered most-specific first. A dairy-free/vegan qualifier in front of
    // "milk" means the alternatives aisle, not the dairy one.
    [
        "milk alternative",
        /\b(oat|almond|soy|soya|coconut) ?milk\b|\bmilk alt(ernative)?s?\b|\bplant milk\b|\b(dairy[\s-]?free|non[\s-]?dairy|vegan|plant[\s-]?based)\b[^.]{0,12}\bmilk\b/
    ],
    [
        "milk",
        /\bmilk\b|\bdoodh\b/
    ],
    [
        "bread",
        /\bbread\b|\bloaf\b|\bbun\b|\bbakery\b/
    ],
    [
        "snacks",
        /\bsnacks?\b|\bchips\b|\bcrisps\b|\bbiscuits?\b|\bcookies?\b|\bnamkeen\b|\bchocolate\b|\bnuts\b/
    ],
    [
        "produce",
        /\b(fruits?|vegetables?|veggies|produce|greens|salad)\b/
    ],
    [
        "staples",
        /\b(rice|atta|flour|dal|lentils?|pulses|oil|staples?)\b/
    ],
    [
        "beverages",
        /\b(tea|coffee|juice|water|soda|drinks?|beverages?)\b/
    ],
    [
        "household",
        /\b(detergent|dishwash|cleaning|tissue|household)\b/
    ]
];
const UNIT_ALIASES = {
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
    kilogram: "kg"
};
const SYNONYMS = {
    milk: [
        "dairy",
        "doodh"
    ],
    chips: [
        "crisps",
        "wafers",
        "namkeen"
    ],
    biscuit: [
        "cookie",
        "biscuits",
        "cookies"
    ],
    cookies: [
        "biscuits"
    ],
    bread: [
        "loaf",
        "atta"
    ],
    rice: [
        "chawal",
        "basmati",
        "grain"
    ],
    flour: [
        "atta",
        "chakki"
    ],
    lentil: [
        "dal",
        "pulses",
        "toor"
    ],
    dal: [
        "lentil",
        "pulses"
    ],
    oil: [
        "ghani",
        "cooking oil"
    ],
    tea: [
        "chai"
    ],
    coffee: [
        "caffeine",
        "brew"
    ],
    water: [
        "soda",
        "sparkling"
    ],
    spinach: [
        "palak",
        "greens",
        "leafy"
    ],
    tomato: [
        "tamatar"
    ],
    carrot: [
        "gajar"
    ],
    banana: [
        "kela"
    ],
    cheap: [
        "budget",
        "value"
    ],
    healthy: [
        "baked",
        "millet",
        "protein"
    ],
    nuts: [
        "almonds",
        "dry fruit"
    ],
    detergent: [
        "washing",
        "laundry"
    ]
};
/**
 * Crude suffix stripping — enough to make "vegetables" match a "vegetable"
 * tag. A real index uses a proper analyzer chain; this keeps the demo honest
 * about plurals without shipping a stemmer library.
 */ function stem(t) {
    if (t.length <= 3) return t;
    if (t.endsWith("ies")) return t.slice(0, -3) + "y";
    if (t.endsWith("ses") || t.endsWith("xes") || t.endsWith("zes")) return t.slice(0, -2);
    if (t.endsWith("s") && !t.endsWith("ss") && !t.endsWith("us")) return t.slice(0, -1);
    return t;
}
function tokenize(q) {
    return q.toLowerCase().replace(RegExp("[^\\p{L}\\p{N}\\s.₹<-]", "gu"), " ").split(/\s+/).filter((t)=>t && !STOPWORDS.has(t)).map(stem);
}
function parseQuery(raw) {
    const q = raw.toLowerCase();
    const entities = [];
    const diet = [];
    // ---- dietary intent ----
    for (const [canonical, re] of DIET_PATTERNS){
        const m = q.match(re);
        if (m) {
            // "veg" inside "vegan" is a false positive; vegan already covers it.
            if (canonical === "vegetarian" && /\bvegan\b/.test(q)) continue;
            diet.push(canonical);
            entities.push({
                type: "intent",
                label: canonical,
                source: m[0].trim()
            });
        }
    }
    // ---- size + unit: "1l", "500 g", "2 kg" ----
    let size;
    const sizeMatch = q.match(/\b(\d+(?:\.\d+)?)\s*(l|ltr|litres?|liters?|ml|g|gm|gms|grams?|kgs?|kilos?|kilogram)\b/);
    if (sizeMatch) {
        const unit = UNIT_ALIASES[sizeMatch[2]];
        if (unit) {
            size = {
                value: Number(sizeMatch[1]),
                unit
            };
            entities.push({
                type: "unit",
                label: "".concat(size.value, " ").concat(unit.toUpperCase()),
                source: sizeMatch[0]
            });
        }
    }
    // ---- pack count: "6 pack", "pack of 12" ----
    let count;
    const countMatch = q.match(/\b(\d+)\s*(?:pack|pcs|pieces)\b|\bpack of\s*(\d+)\b/);
    if (countMatch) {
        var _countMatch_;
        count = Number((_countMatch_ = countMatch[1]) !== null && _countMatch_ !== void 0 ? _countMatch_ : countMatch[2]);
        entities.push({
            type: "count",
            label: "".concat(count, " pack"),
            source: countMatch[0]
        });
    }
    // ---- price ceiling: "under 300", "below ₹200", "< 100", "cheap" ----
    let maxPrice;
    const priceMatch = q.match(/\b(?:under|below|less than|upto|up to|max|<)\s*₹?\s*(\d+)\b/);
    if (priceMatch) {
        maxPrice = Number(priceMatch[1]);
        entities.push({
            type: "price",
            label: "≤ ₹".concat(maxPrice.toLocaleString("en-IN")),
            source: priceMatch[0]
        });
    } else if (/\b(cheap|budget|affordable|inexpensive)\b/.test(q)) {
        maxPrice = 100;
        entities.push({
            type: "price",
            label: "≤ ₹100 (budget)",
            source: "cheap"
        });
    }
    // ---- category ----
    let category;
    for (const [canonical, re] of CATEGORY_TERMS){
        if (re.test(q)) {
            category = canonical;
            entities.push({
                type: "category",
                label: canonical,
                source: q.match(re)[0].trim()
            });
            break; // first match wins — patterns are ordered most-specific first
        }
    }
    // ---- brand (gazetteer built from the catalogue at call time) ----
    let brand;
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
   */ const CONSUMED = [
        "intent",
        "price",
        "unit",
        "count"
    ];
    let residual = q;
    for (const e of entities){
        if (e.source && CONSUMED.includes(e.type)) residual = residual.replace(e.source, " ");
    }
    const tokens = tokenize(residual);
    return {
        raw,
        tokens,
        entities,
        diet,
        size,
        maxPrice,
        category,
        brand,
        count
    };
}
function detectBrand(parsed, brands) {
    const q = parsed.raw.toLowerCase();
    const hit = brands.find((b)=>b.length > 2 && q.includes(b.toLowerCase()));
    if (!hit) return parsed;
    return {
        ...parsed,
        brand: hit,
        entities: [
            ...parsed.entities,
            {
                type: "brand",
                label: hit,
                source: hit.toLowerCase()
            }
        ]
    };
}
function expand(tokens) {
    const out = tokens.map((t)=>({
            term: t,
            expanded: false
        }));
    const seen = new Set(tokens);
    for (const t of tokens){
        var _SYNONYMS_t;
        for (const syn of (_SYNONYMS_t = SYNONYMS[t]) !== null && _SYNONYMS_t !== void 0 ? _SYNONYMS_t : []){
            if (!seen.has(syn)) {
                seen.add(syn);
                out.push({
                    term: syn,
                    expanded: true
                });
            }
        }
    }
    return out;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/search/catalogue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A small grocery catalogue for the live search demo.
 *
 * Everything here is invented product data — the point is the retrieval and
 * ranking code in ./parse.ts and ./rank.ts, which is real. `ctr` and `atc` are
 * synthetic demand priors standing in for what a real deployment learns from
 * click logs; they are labelled as such in the UI.
 */ __turbopack_context__.s([
    "catalogue",
    ()=>catalogue
]);
const catalogue = [
    // ---- milk & alternatives -------------------------------------------------
    {
        id: "p01",
        title: "Oat milk",
        brand: "Alpro",
        category: "milk alternative",
        tags: [
            "oat",
            "plant based",
            "barista"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 189,
        diet: [
            "dairy-free",
            "lactose-free",
            "vegan"
        ],
        ctr: 0.42,
        atc: 0.31
    },
    {
        id: "p02",
        title: "Almond milk, unsweetened",
        brand: "Sofit",
        category: "milk alternative",
        tags: [
            "almond",
            "plant based",
            "nut"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 165,
        diet: [
            "dairy-free",
            "lactose-free",
            "vegan",
            "sugar-free"
        ],
        ctr: 0.36,
        atc: 0.24
    },
    {
        id: "p03",
        title: "Soy milk",
        brand: "Staeta",
        category: "milk alternative",
        tags: [
            "soya",
            "plant based"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 149,
        diet: [
            "dairy-free",
            "lactose-free",
            "vegan"
        ],
        ctr: 0.28,
        atc: 0.19
    },
    {
        id: "p04",
        title: "Full-cream milk",
        brand: "Amul",
        category: "milk",
        tags: [
            "dairy",
            "whole",
            "toned"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 72,
        diet: [],
        ctr: 0.61,
        atc: 0.48
    },
    {
        id: "p05",
        title: "Toned milk",
        brand: "Mother Dairy",
        category: "milk",
        tags: [
            "dairy",
            "low fat"
        ],
        size: {
            value: 500,
            unit: "ml"
        },
        price: 31,
        diet: [],
        ctr: 0.55,
        atc: 0.44
    },
    {
        id: "p06",
        title: "Lactose-free milk",
        brand: "Amul",
        category: "milk",
        tags: [
            "dairy",
            "digestive"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 118,
        diet: [
            "lactose-free"
        ],
        ctr: 0.22,
        atc: 0.17
    },
    {
        id: "p07",
        title: "Coconut milk",
        brand: "Dabur",
        category: "milk alternative",
        tags: [
            "coconut",
            "cooking",
            "plant based"
        ],
        size: {
            value: 400,
            unit: "ml"
        },
        price: 96,
        diet: [
            "dairy-free",
            "lactose-free",
            "vegan"
        ],
        ctr: 0.19,
        atc: 0.14
    },
    // ---- bread & bakery ------------------------------------------------------
    {
        id: "p10",
        title: "Whole wheat bread",
        brand: "Britannia",
        category: "bread",
        tags: [
            "atta",
            "loaf",
            "brown"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 55,
        diet: [],
        ctr: 0.47,
        atc: 0.39
    },
    {
        id: "p11",
        title: "Multigrain bread",
        brand: "Harvest Gold",
        category: "bread",
        tags: [
            "seeds",
            "loaf",
            "brown"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 68,
        diet: [],
        ctr: 0.33,
        atc: 0.26
    },
    {
        id: "p12",
        title: "Gluten-free bread",
        brand: "Nutrimix",
        category: "bread",
        tags: [
            "loaf",
            "celiac"
        ],
        size: {
            value: 350,
            unit: "g"
        },
        price: 210,
        diet: [
            "gluten-free"
        ],
        ctr: 0.12,
        atc: 0.09
    },
    {
        id: "p13",
        title: "Sourdough loaf",
        brand: "Theobroma",
        category: "bread",
        tags: [
            "artisan",
            "bakery"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 240,
        diet: [],
        ctr: 0.21,
        atc: 0.15
    },
    // ---- snacks --------------------------------------------------------------
    {
        id: "p20",
        title: "Salted potato chips",
        brand: "Lay's",
        category: "snacks",
        tags: [
            "crisps",
            "wafers",
            "namkeen"
        ],
        size: {
            value: 90,
            unit: "g"
        },
        price: 30,
        diet: [
            "vegetarian"
        ],
        ctr: 0.66,
        atc: 0.52
    },
    {
        id: "p21",
        title: "Baked ragi chips",
        brand: "Yoga Bar",
        category: "snacks",
        tags: [
            "millet",
            "healthy",
            "baked"
        ],
        size: {
            value: 60,
            unit: "g"
        },
        price: 85,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.18,
        atc: 0.13
    },
    {
        id: "p22",
        title: "Roasted almonds",
        brand: "Happilo",
        category: "snacks",
        tags: [
            "nuts",
            "dry fruit",
            "protein"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 340,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.39,
        atc: 0.3
    },
    {
        id: "p23",
        title: "Dark chocolate 70%",
        brand: "Amul",
        category: "snacks",
        tags: [
            "cocoa",
            "bar",
            "sweet"
        ],
        size: {
            value: 150,
            unit: "g"
        },
        price: 175,
        diet: [
            "vegetarian"
        ],
        ctr: 0.44,
        atc: 0.35
    },
    {
        id: "p24",
        title: "Sugar-free digestive biscuits",
        brand: "Sunfeast",
        category: "snacks",
        tags: [
            "cookies",
            "diabetic",
            "tea time"
        ],
        size: {
            value: 250,
            unit: "g"
        },
        price: 90,
        diet: [
            "sugar-free",
            "vegetarian"
        ],
        ctr: 0.26,
        atc: 0.2
    },
    {
        id: "p25",
        title: "Protein bar, peanut butter",
        brand: "Yoga Bar",
        category: "snacks",
        tags: [
            "fitness",
            "gym",
            "bar"
        ],
        size: {
            value: 6,
            unit: "pack"
        },
        price: 480,
        diet: [
            "vegetarian"
        ],
        ctr: 0.31,
        atc: 0.23
    },
    // ---- produce -------------------------------------------------------------
    {
        id: "p30",
        title: "Bananas",
        brand: "Fresho",
        category: "produce",
        tags: [
            "fruit",
            "fresh",
            "kela"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 58,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.72,
        atc: 0.61
    },
    {
        id: "p31",
        title: "Baby spinach",
        brand: "Fresho",
        category: "produce",
        tags: [
            "greens",
            "leafy",
            "palak",
            "salad"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 45,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.29,
        atc: 0.22
    },
    {
        id: "p32",
        title: "Avocado",
        brand: "Imported",
        category: "produce",
        tags: [
            "fruit",
            "fresh",
            "hass"
        ],
        size: {
            value: 2,
            unit: "pack"
        },
        price: 320,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.35,
        atc: 0.24
    },
    {
        id: "p33",
        title: "Roma tomatoes",
        brand: "Fresho",
        category: "produce",
        tags: [
            "vegetable",
            "fresh",
            "tamatar",
            "salad"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 42,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.58,
        atc: 0.49
    },
    {
        id: "p34",
        title: "Organic baby carrots",
        brand: "24 Mantra",
        category: "produce",
        tags: [
            "vegetable",
            "fresh",
            "gajar"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 110,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.24,
        atc: 0.18
    },
    // ---- staples -------------------------------------------------------------
    {
        id: "p40",
        title: "Basmati rice",
        brand: "India Gate",
        category: "staples",
        tags: [
            "chawal",
            "grain",
            "long grain"
        ],
        size: {
            value: 5,
            unit: "kg"
        },
        price: 690,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.51,
        atc: 0.42
    },
    {
        id: "p41",
        title: "Whole wheat atta",
        brand: "Aashirvaad",
        category: "staples",
        tags: [
            "flour",
            "chakki",
            "roti"
        ],
        size: {
            value: 5,
            unit: "kg"
        },
        price: 285,
        diet: [
            "vegetarian"
        ],
        ctr: 0.63,
        atc: 0.55
    },
    {
        id: "p42",
        title: "Toor dal",
        brand: "Tata Sampann",
        category: "staples",
        tags: [
            "lentil",
            "pulses",
            "arhar"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 178,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.49,
        atc: 0.41
    },
    {
        id: "p43",
        title: "Cold-pressed mustard oil",
        brand: "Fortune",
        category: "staples",
        tags: [
            "cooking oil",
            "sarson",
            "kachi ghani"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 195,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.37,
        atc: 0.3
    },
    {
        id: "p44",
        title: "Organic jaggery powder",
        brand: "24 Mantra",
        category: "staples",
        tags: [
            "gur",
            "sweetener",
            "unrefined"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 130,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.16,
        atc: 0.12
    },
    // ---- beverages -----------------------------------------------------------
    {
        id: "p50",
        title: "Assam breakfast tea",
        brand: "Tetley",
        category: "beverages",
        tags: [
            "chai",
            "black tea",
            "leaves"
        ],
        size: {
            value: 250,
            unit: "g"
        },
        price: 165,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.45,
        atc: 0.36
    },
    {
        id: "p51",
        title: "Cold brew coffee concentrate",
        brand: "Sleepy Owl",
        category: "beverages",
        tags: [
            "coffee",
            "caffeine",
            "iced"
        ],
        size: {
            value: 200,
            unit: "ml"
        },
        price: 299,
        diet: [
            "vegan"
        ],
        ctr: 0.34,
        atc: 0.25
    },
    {
        id: "p52",
        title: "Sparkling water, lime",
        brand: "Bisleri",
        category: "beverages",
        tags: [
            "soda",
            "fizzy",
            "carbonated"
        ],
        size: {
            value: 750,
            unit: "ml"
        },
        price: 60,
        diet: [
            "vegan",
            "sugar-free",
            "gluten-free"
        ],
        ctr: 0.27,
        atc: 0.19
    },
    {
        id: "p53",
        title: "Orange juice, no added sugar",
        brand: "Real",
        category: "beverages",
        tags: [
            "fruit juice",
            "citrus"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 135,
        diet: [
            "vegan",
            "sugar-free"
        ],
        ctr: 0.4,
        atc: 0.32
    },
    // ---- household -----------------------------------------------------------
    {
        id: "p60",
        title: "Dishwash liquid, lemon",
        brand: "Vim",
        category: "household",
        tags: [
            "cleaning",
            "utensil",
            "detergent"
        ],
        size: {
            value: 750,
            unit: "ml"
        },
        price: 145,
        diet: [],
        ctr: 0.53,
        atc: 0.45
    },
    {
        id: "p61",
        title: "Laundry detergent powder",
        brand: "Surf Excel",
        category: "household",
        tags: [
            "washing",
            "clothes"
        ],
        size: {
            value: 2,
            unit: "kg"
        },
        price: 420,
        diet: [],
        ctr: 0.48,
        atc: 0.4
    },
    {
        id: "p62",
        title: "Kitchen paper towels",
        brand: "Origami",
        category: "household",
        tags: [
            "tissue",
            "roll",
            "cleaning"
        ],
        size: {
            value: 4,
            unit: "pack"
        },
        price: 199,
        diet: [],
        ctr: 0.3,
        atc: 0.24
    },
    // ---- the easter egg ------------------------------------------------------
    // Indexed like everything else. It only surfaces when the query actually
    // matches it — hardcoding it to rank #1 would make the whole demo a lie.
    {
        id: "me",
        title: "Abhinav Tyagi",
        brand: "Backend & Search Engineer",
        category: "engineer",
        tags: [
            "abhinav",
            "tyagi",
            "search",
            "relevance",
            "ranking",
            "elasticsearch",
            "learning to rank",
            "ltr",
            "backend",
            "java",
            "hire",
            "engineer",
            "who built this",
            "recruiter"
        ],
        price: 0,
        diet: [],
        ctr: 0.99,
        atc: 0.87
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/search/rank.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "allBrands",
    ()=>allBrands,
    "normalise",
    ()=>normalise,
    "search",
    ()=>search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$catalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search/catalogue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search/parse.ts [app-client] (ecmascript)");
;
;
function docTerms(p) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenize"])([
        p.title,
        p.brand,
        p.category,
        ...p.tags,
        ...p.diet
    ].join(" "));
}
const docs = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$catalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catalogue"].map((product)=>{
    const terms = docTerms(product);
    return {
        product,
        terms,
        length: terms.length
    };
});
/** term → number of documents containing it. */ const df = new Map();
for (const d of docs){
    var _df_get;
    for (const t of new Set(d.terms))df.set(t, ((_df_get = df.get(t)) !== null && _df_get !== void 0 ? _df_get : 0) + 1);
}
const N = docs.length;
const avgLen = docs.reduce((s, d)=>s + d.length, 0) / N;
const allBrands = [
    ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$catalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catalogue"].map((p)=>p.brand))
];
/* --------------------------------------------------------------- BM25 */ const K1 = 1.2;
const B = 0.75;
function idf(term) {
    var _df_get;
    const n = (_df_get = df.get(term)) !== null && _df_get !== void 0 ? _df_get : 0;
    // Robertson/Sparck-Jones with the +1 guard, so a term in every doc still
    // scores marginally above zero rather than going negative.
    return Math.log(1 + (N - n + 0.5) / (n + 0.5));
}
function bm25(doc, term) {
    let tf = 0;
    for (const t of doc.terms)if (t === term) tf++;
    if (!tf) return 0;
    const norm = tf * (K1 + 1);
    const denom = tf + K1 * (1 - B + B * doc.length / avgLen);
    return idf(term) * (norm / denom);
}
/** Weights for the rescore blend. Tuning these is the actual job. */ const W = {
    lexical: 1,
    synonym: 0.45,
    category: 0.9,
    diet: 1.4,
    size: 0.8,
    price: 1,
    ctr: 0.5,
    atc: 0.7
};
function sizeFit(p, q) {
    if (!q.size || !p.size) return null;
    // Compare in a common base so "1 l" matches "1000 ml".
    const toBase = (v, u)=>u === "l" ? v * 1000 : u === "kg" ? v * 1000 : v;
    const a = toBase(q.size.value, q.size.unit);
    const b = toBase(p.size.value, p.size.unit);
    const liquidQ = q.size.unit === "l" || q.size.unit === "ml";
    const liquidP = p.size.unit === "l" || p.size.unit === "ml";
    if (liquidQ !== liquidP) return null; // different dimension, not comparable
    if (a === b) return 1;
    const ratio = Math.min(a, b) / Math.max(a, b);
    return ratio > 0.5 ? ratio - 0.5 : -0.3; // near miss is mild, far miss demotes
}
function search(q) {
    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
    if (!q.tokens.length && !q.entities.length) return [];
    const terms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expand"])(q.tokens);
    const hits = [];
    for (const doc of docs){
        const signals = [];
        let lexical = 0;
        let synonym = 0;
        for (const { term, expanded } of terms){
            const s = bm25(doc, term);
            if (!s) continue;
            if (expanded) synonym += s;
            else lexical += s;
        }
        // Nothing matched textually and no attribute pins it — skip.
        const attributeOnly = q.category === doc.product.category || q.diet.length > 0 && q.diet.every((d)=>doc.product.diet.includes(d));
        if (lexical === 0 && synonym === 0 && !attributeOnly) continue;
        if (lexical) signals.push({
            key: "lexical",
            label: "Lexical (BM25)",
            value: lexical * W.lexical
        });
        if (synonym) signals.push({
            key: "synonym",
            label: "Synonym expansion",
            value: synonym * W.synonym
        });
        if (q.category) {
            const match = q.category === doc.product.category;
            // A milk query shouldn't bury milk alternatives, and vice versa.
            const adjacent = q.category === "milk" && doc.product.category === "milk alternative" || q.category === "milk alternative" && doc.product.category === "milk";
            if (match) signals.push({
                key: "category",
                label: "Category match",
                value: W.category
            });
            else if (!adjacent) signals.push({
                key: "category",
                label: "Category mismatch",
                value: -W.category * 1.25
            });
        }
        let filteredOut;
        if (q.diet.length) {
            const met = q.diet.filter((d)=>doc.product.diet.includes(d));
            if (met.length === q.diet.length) {
                signals.push({
                    key: "diet",
                    label: "Satisfies ".concat(met.join(", ")),
                    value: W.diet
                });
            } else {
                const missing = q.diet.filter((d)=>!met.includes(d));
                // A hard dietary constraint is a filter, not a nudge — showing dairy
                // milk for "dairy free" is the classic relevance failure.
                signals.push({
                    key: "diet",
                    label: "Fails ".concat(missing.join(", ")),
                    value: -W.diet * 1.6
                });
                filteredOut = "demoted — not ".concat(missing.join(", "));
            }
        }
        const fit = sizeFit(doc.product, q);
        if (fit !== null) {
            signals.push({
                key: "size",
                label: fit >= 1 ? "Exact size match" : fit > 0 ? "Near size match" : "Wrong size",
                value: fit * W.size
            });
        }
        if (q.maxPrice !== undefined && doc.product.price > 0) {
            if (doc.product.price <= q.maxPrice) {
                const headroom = 1 - doc.product.price / q.maxPrice;
                signals.push({
                    key: "price",
                    label: "Within price ceiling",
                    value: (0.4 + headroom * 0.6) * W.price
                });
            } else {
                signals.push({
                    key: "price",
                    label: "Over price ceiling",
                    value: -W.price * 1.5
                });
                filteredOut = "over ₹".concat(q.maxPrice.toLocaleString("en-IN"));
            }
        }
        if (q.brand) {
            if (doc.product.brand.toLowerCase() === q.brand.toLowerCase()) {
                signals.push({
                    key: "brand",
                    label: "Brand match",
                    value: 1.1
                });
            }
        }
        signals.push({
            key: "ctr",
            label: "CTR prior",
            value: doc.product.ctr * W.ctr
        });
        signals.push({
            key: "atc",
            label: "Add-to-cart prior",
            value: doc.product.atc * W.atc
        });
        const score = signals.reduce((s, x)=>s + x.value, 0);
        hits.push({
            product: doc.product,
            score,
            signals,
            filteredOut
        });
    }
    hits.sort((a, b)=>b.score - a.score);
    return hits.slice(0, limit);
}
function normalise(hits) {
    if (!hits.length) return [];
    const max = Math.max(...hits.map((h)=>h.score));
    const min = Math.min(0, ...hits.map((h)=>h.score));
    const span = max - min || 1;
    return hits.map((h)=>({
            ...h,
            norm: Math.max(0.02, (h.score - min) / span)
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * All page copy and data. Transcribed verbatim from the design handoff —
 * do not paraphrase.
 */ __turbopack_context__.s([
    "archiveClosing",
    ()=>archiveClosing,
    "archiveIntro",
    ()=>archiveIntro,
    "archiveVideo",
    ()=>archiveVideo,
    "coreSkills",
    ()=>coreSkills,
    "demos",
    ()=>demos,
    "instagramTiles",
    ()=>instagramTiles,
    "lab",
    ()=>lab,
    "labClosing",
    ()=>labClosing,
    "labFeature",
    ()=>labFeature,
    "labIntro",
    ()=>labIntro,
    "marqueeTerms",
    ()=>marqueeTerms,
    "notes",
    ()=>notes,
    "papers",
    ()=>papers,
    "roles",
    ()=>roles,
    "skillsClosing",
    ()=>skillsClosing,
    "skillsIntro",
    ()=>skillsIntro,
    "stats",
    ()=>stats,
    "toolGroups",
    ()=>toolGroups
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
        highlights: [
            "Learning-to-Rank",
            "XGBoost",
            "Vector search",
            "NER query parsing",
            "LLM tooling",
            "Kafka · Event Hub"
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
        highlights: [
            "Elasticsearch 6 → 8",
            "Autosuggest from scratch",
            "−40% latency",
            "Redis caching",
            "Ranking & reviews",
            "Channel managers"
        ],
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
        highlights: [
            "Invoice discounting",
            "Microservices",
            "ES analytics dashboards",
            "Kanban platform",
            "Rate-limited middleware",
            "AWS S3 · SQS"
        ],
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
        highlights: [
            "Dynatrace → Grafana",
            "InfluxDB pipelines",
            "OpenTelemetry",
            "Memory-leak analysis",
            "API mocking",
            "React · Angular"
        ],
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
const coreSkills = [
    {
        kicker: "Relevance",
        name: "Elasticsearch",
        note: "Relevance tuning, the DSL by hand, and two 6.x → 8.x migrations that stayed online.",
        depth: 4,
        depthOf: 4,
        metric: "10M",
        metricNote: [
            "Docs indexed",
            "Near-realtime"
        ]
    },
    {
        kicker: "Throughput",
        name: "Java · Spring",
        note: "Search services that hold their nerve under load, with the hot path kept in Redis.",
        depth: 4,
        depthOf: 4,
        metric: "25K",
        metricNote: [
            "Requests / min",
            "−45% latency"
        ]
    },
    {
        kicker: "Ranking",
        name: "LTR · XGBoost",
        note: "Rescore pipelines, feature logging, and the judgement work that decides what better means.",
        depth: 3,
        depthOf: 4,
        metric: "3 yrs",
        metricNote: [
            "In production",
            "Rescoring live"
        ]
    }
];
const toolGroups = [
    {
        label: "Search & data",
        items: [
            {
                name: "Kafka",
                descriptor: "ingestion pipelines"
            },
            {
                name: "Redis",
                descriptor: "hot-path caching"
            },
            {
                name: "MongoDB",
                descriptor: "aggregation pipelines"
            }
        ]
    },
    {
        label: "Language",
        items: [
            {
                name: "NER",
                descriptor: "sizes, units, brands"
            },
            {
                name: "Vector search",
                descriptor: "dense retrieval, ANN"
            },
            {
                name: "Embeddings",
                descriptor: "two-tower, tagging"
            }
        ]
    },
    {
        label: "Backend",
        items: [
            {
                name: "Python",
                descriptor: "tooling & ML pipelines"
            },
            {
                name: "Microservices",
                descriptor: "event-driven"
            },
            {
                name: "LLM tooling",
                descriptor: "MCP, agents"
            }
        ]
    },
    {
        label: "Infra",
        items: [
            {
                name: "Kubernetes",
                descriptor: "orchestration, rollouts"
            },
            {
                name: "Docker",
                descriptor: "containers & CI"
            },
            {
                name: "AWS · GCP · Azure",
                descriptor: "multi-cloud deploys"
            },
            {
                name: "OpenTelemetry",
                descriptor: "tracing"
            }
        ]
    }
];
const skillsIntro = "Depth beats breadth in search work — most of my day happens inside the first three. Everything below them is a tool I have shipped, not a tool I have read about.";
const skillsClosing = "Anything on this page, I can walk you through in the code.";
const labFeature = {
    status: "In progress",
    kicker: "Flagship",
    title: "Natural query",
    blurb: "An Elasticsearch agent that speaks plain English. Ask it a question and it plans the query, runs it against my live cluster and answers. Describe a schema and it writes the mapping and creates the index — no console, no JSON by hand.",
    chain: [
        {
            label: "Plain English",
            sub: "prompt"
        },
        {
            label: "Agent",
            sub: "plan · tools"
        },
        {
            label: "MCP connector",
            sub: "elastic · custom",
            highlight: true
        },
        {
            label: "Elastic cluster",
            sub: "live index"
        }
    ],
    capabilities: [
        {
            title: "Writes mappings",
            body: "Creates indices and field types straight on the cluster."
        },
        {
            title: "Answers in English",
            body: "Reads back results instead of raw hit arrays."
        },
        {
            title: "Tool-scoped",
            body: "Every cluster action is an explicit MCP tool call."
        }
    ],
    stack: "Java 17, Spring Boot 3.x, MCP Java SDK, Elasticsearch 8.x",
    endpoint: "mcp://elastic · connected",
    session: [
        {
            kind: "tool",
            prompt: "make me an index for the product catalog, descriptions should be semantically searchable",
            tool: "create_index · product-catalog",
            fields: [
                [
                    "title",
                    "text + keyword"
                ],
                [
                    "price",
                    "scaled_float"
                ],
                [
                    "description",
                    "dense_vector[768] cosine"
                ]
            ],
            ack: "acknowledged: true"
        },
        {
            kind: "prose",
            prompt: "which categories lost the most impressions last week?",
            answer: "Footwear is down 18%, mostly on \u201crunning shoes\u201d. Two of its top sellers dropped out of the first page after the last reindex."
        }
    ],
    tools: [
        "search_index",
        "create_index",
        "put_mapping",
        "list_indices",
        "explain_query",
        "cluster_health"
    ],
    sessionNote: "Illustrative exchange — the connector exposes search, mapping and index tools to the agent."
};
const labIntro = "Right now that means one thing: giving Elasticsearch a conversation layer. An agent that holds a real connection to my cluster, understands what I\u2019m asking in English, and does the indexing work itself.";
const lab = [
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
const archiveIntro = "Two kinds of writing: engineering notes I published as I worked things out, and papers written with a proper method section.";
const notes = [
    {
        title: "End-to-end integration of Dynatrace and Grafana using Java",
        summary: "Wiring the APM tool into a metrics and visualisation stack — where the data actually has to be reshaped.",
        readMinutes: 6,
        year: "2021",
        href: "https://abhinavtyagi08.medium.com/end-to-end-integration-of-dynatrace-and-grafana-using-java-694ba326fdae"
    },
    {
        title: "Using the Dynatrace API with Postman",
        summary: "Token creation, headers, and pulling host metrics — the short version I wanted when I started.",
        readMinutes: 4,
        year: "2021",
        href: "https://abhinavtyagi08.medium.com/using-dynatrace-api-with-with-postman-7985902482cb"
    }
];
const papers = [
    {
        title: "Knowledge Extraction in Digit Recognition Using the MNIST Dataset",
        abstract: "How interpretable knowledge can be pulled back out of models trained on handwritten-digit recognition.",
        year: "2021",
        pages: 12,
        fields: "Machine learning · Interpretability",
        href: "https://www.igi-global.com/gateway/article/288321"
    },
    {
        title: "Algorithmic Analysis of an Automatic Attendance System using Facial Recognition",
        abstract: "A comparative analysis of detection and recognition pipelines for attendance automation.",
        year: "2020",
        pages: 10,
        fields: "Computer vision · Benchmarking",
        href: "https://www.igi-global.com/article/algorithmic-analysis-of-automatic-attendance-system-using-facial-recognition/286688"
    }
];
const archiveVideo = {
    id: "kSeDBrgKAVk",
    title: "Memory dump analysis in Dynatrace APM",
    blurb: "Walking through captured heap dumps in Dynatrace — reading allocation hotspots and tracing them back to the code that caused them."
};
const archiveClosing = "Written to be read later, mostly by me.";
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sections.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "num",
    ()=>num
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-client] (ecmascript)");
;
/**
 * Section numbering is derived, not hardcoded.
 *
 * A section with nothing in it doesn't render, and a hardcoded eyebrow would
 * then leave a hole in the sequence — "05 — Archive" followed by
 * "07 — Elsewhere". Deriving the numbers from what actually renders keeps them
 * contiguous now and correct again the moment content is added or removed.
 */ const order = [
    "search",
    "experience",
    "skills",
    "lab",
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notes"].length + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["papers"].length > 0 ? [
        "archive"
    ] : [],
    "instagram",
    "hello"
];
function num(id) {
    const i = order.indexOf(id);
    if (i === -1) throw new Error("Unknown section id: ".concat(id));
    return String(i + 1).padStart(2, "0");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchConsole.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchConsole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search/parse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search/rank.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sections.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ROW_H = 74;
const ROW_H_SM = 92;
const SIGNAL_H = 21;
const CHAR_MS = 64;
const SCENARIO_MS = 5600;
/** Auto-typed while the visitor hasn't taken the panel over. */ const EXAMPLES = [
    "dairy free milk 1l",
    "gluten free bread",
    "cheap snacks under 100",
    "organic vegetables"
];
/** Offered once the panel is handed over — the safety net for anyone who
    can't think of a query, and a quiet catalogue of what the parser knows. */ const SAMPLES = [
    "cheap snacks under 100",
    "sugar free biscuits",
    "1l milk no dairy"
];
function SearchConsole() {
    _s();
    const { reduced, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EXAMPLES[0]);
    /* `touched` stops the demo loop for good; `announce` fills the live region
     so the handover isn't a silent change for a screen reader. `queried`
     flips on the first real keystroke, which is when the chrome pill goes
     back to reporting hits and timing. */ const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [queried, setQueried] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [announce, setAnnounce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [onScreen, setOnScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [openRow, setOpenRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rowH, setRowH] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ROW_H);
    /* Row height follows the mobile breakpoint so the stacking maths stays in
     step with the taller rows the stylesheet switches to. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchConsole.useEffect": ()=>{
            const mq = window.matchMedia("(max-width: 767px)");
            const sync = {
                "SearchConsole.useEffect.sync": ()=>setRowH(mq.matches ? ROW_H_SM : ROW_H)
            }["SearchConsole.useEffect.sync"];
            sync();
            mq.addEventListener("change", sync);
            return ({
                "SearchConsole.useEffect": ()=>mq.removeEventListener("change", sync)
            })["SearchConsole.useEffect"];
        }
    }["SearchConsole.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchConsole.useEffect": ()=>{
            const el = panelRef.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "SearchConsole.useEffect": (param)=>{
                    let [e] = param;
                    return setOnScreen(e.isIntersecting);
                }
            }["SearchConsole.useEffect"], {
                threshold: 0.15
            });
            io.observe(el);
            return ({
                "SearchConsole.useEffect": ()=>io.disconnect()
            })["SearchConsole.useEffect"];
        }
    }["SearchConsole.useEffect"], []);
    /* ------------------------------------------------------- the engine --
   * Runs synchronously on every keystroke. The catalogue is ~40 documents,
   * so a full parse + BM25 recall + rescore is well under a millisecond —
   * the reported timing is measured, not decorative.
   */ const computed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchConsole.useMemo[computed]": ()=>{
            const t0 = performance.now();
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBrand"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseQuery"])(query), __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allBrands"]);
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalise"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["search"])(p, 5));
            return {
                parsed: p,
                hits: h,
                ms: performance.now() - t0
            };
        }
    }["SearchConsole.useMemo[computed]"], [
        query
    ]);
    /* Handing the panel over empties the field, but wiping the rows underneath
     would punish the click — and collapse the panel by ~95px while it's
     mid-morph. So the last real result set is held until the first keystroke
     re-queries. Once the visitor has actually typed, an empty field means an
     empty field. */ const [held, setHeld] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchConsole.useEffect": ()=>{
            if (query.trim()) setHeld(computed);
        }
    }["SearchConsole.useEffect"], [
        computed,
        query
    ]);
    const holding = !query.trim() && touched && !queried && held !== null;
    const { parsed, hits, ms } = holding ? held : computed;
    /* ------------------------------------------------- idle demo typing -- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchConsole.useEffect": ()=>{
            if (!ready || reduced || touched || !onScreen) return;
            let idx = 0;
            let timers = [];
            let loop = 0;
            let cancelled = false;
            const clear = {
                "SearchConsole.useEffect.clear": ()=>{
                    timers.forEach(clearTimeout);
                    timers = [];
                }
            }["SearchConsole.useEffect.clear"];
            const run = {
                "SearchConsole.useEffect.run": ()=>{
                    if (cancelled) return;
                    const text = EXAMPLES[idx];
                    clear();
                    setQuery("");
                    setOpenRow(null);
                    text.split("").forEach({
                        "SearchConsole.useEffect.run": (_, i)=>{
                            timers.push(window.setTimeout({
                                "SearchConsole.useEffect.run": ()=>setQuery(text.slice(0, i + 1))
                            }["SearchConsole.useEffect.run"], (i + 1) * CHAR_MS));
                        }
                    }["SearchConsole.useEffect.run"]);
                    idx = (idx + 1) % EXAMPLES.length;
                }
            }["SearchConsole.useEffect.run"];
            run();
            loop = window.setInterval(run, SCENARIO_MS);
            return ({
                "SearchConsole.useEffect": ()=>{
                    cancelled = true;
                    clear();
                    window.clearInterval(loop);
                }
            })["SearchConsole.useEffect"];
        }
    }["SearchConsole.useEffect"], [
        ready,
        reduced,
        touched,
        onScreen
    ]);
    const takeOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchConsole.useCallback[takeOver]": ()=>setTouched(true)
    }["SearchConsole.useCallback[takeOver]"], []);
    /* The gold bar. Clears the field rather than leaving the demo's last query
     in it, because an empty focused field is the clearest possible "type
     here" — but the results stay put underneath: wiping them would punish
     the click. */ const handOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchConsole.useCallback[handOver]": ()=>{
            setTouched(true);
            setQuery("");
            setOpenRow(null);
            setAnnounce("Demo stopped. Search field ready — type a query or pick a sample.");
            requestAnimationFrame({
                "SearchConsole.useCallback[handOver]": ()=>{
                    var _inputRef_current;
                    return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
                }
            }["SearchConsole.useCallback[handOver]"]);
        }
    }["SearchConsole.useCallback[handOver]"], []);
    const runSample = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchConsole.useCallback[runSample]": (text)=>{
            var _inputRef_current;
            setTouched(true);
            setQueried(true);
            setQuery(text);
            setOpenRow(null);
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }
    }["SearchConsole.useCallback[runSample]"], []);
    /* Stacking offsets: each row sits below the ones above it, and the open row
     is taller. Computing offsets rather than using normal flow keeps the
     re-rank a pure transform, so rows glide instead of jumping. */ const heights = hits.map((h)=>h.product.id === openRow ? rowH + h.signals.length * SIGNAL_H + 16 : rowH);
    const offsets = heights.reduce((acc, h, i)=>{
        acc.push(i === 0 ? 0 : acc[i - 1] + heights[i - 1]);
        return acc;
    }, []);
    const stackH = heights.reduce((a, b)=>a + b, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "searchband",
        id: "search",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchband__intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        "data-reveal": "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rule-inline",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["num"])("search"),
                            " — Live · query understanding"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "searchband__head",
                        "data-reveal": "80",
                        children: [
                            "I’m not a list of frameworks. I’m the person who needs to know",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "why"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            " the third result outranked the first."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__sub",
                        "data-reveal": "140",
                        children: "Search sits where language meets systems, and that’s exactly where I like to live. Query understanding, ranking models, ingestion pipelines that never sleep — the result is platforms serving 25K+ requests a minute across a 10-million-product catalog that still feel personal."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchConsole.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "searchband__demo",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__invite",
                        "data-reveal": "180",
                        children: "Search something. Watch it think."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__caption",
                        "data-reveal": "200",
                        children: [
                            "Type anything and it parses your words into entities, recalls candidates with BM25, then ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "re-ranks"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 190,
                                columnNumber: 16
                            }, this),
                            " them — every row tells you why it landed where it did."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel",
                        ref: panelRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__chrome",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "parse → recall → rescore"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 196,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel__status",
                                        children: touched && !queried ? "your turn" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "live · ",
                                                hits.length,
                                                " hit",
                                                hits.length === 1 ? "" : "s",
                                                mounted ? " · ".concat(ms.toFixed(2), " ms") : ""
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__query".concat(touched ? " is-live" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel__glyph",
                                        "aria-hidden": "true",
                                        children: "⌕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        className: "panel__input",
                                        value: query,
                                        onChange: (e)=>{
                                            takeOver();
                                            setQueried(true);
                                            setQuery(e.target.value);
                                            setOpenRow(null);
                                        },
                                        onFocus: takeOver,
                                        onKeyDown: takeOver,
                                        placeholder: "try dairy free milk 1l…",
                                        "aria-label": "Search the demo catalogue",
                                        spellCheck: false,
                                        autoComplete: "off"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "panel__clear",
                                        onClick: ()=>{
                                            var _inputRef_current;
                                            takeOver();
                                            setQuery("");
                                            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
                                        },
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__chips",
                                children: parsed.entities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "panel__nochips",
                                    children: query.trim() ? "no entities recognised — falling back to plain text" : " "
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchConsole.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this) : parsed.entities.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        style: {
                                            animationDelay: "".concat(i * 70, "ms")
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chip__type",
                                                children: e.type
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this),
                                            e.label
                                        ]
                                    }, "".concat(e.type, "-").concat(e.label), true, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__results",
                                style: {
                                    height: Math.max(stackH, rowH)
                                },
                                children: [
                                    hits.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "panel__empty",
                                        children: query.trim() ? "Nothing in the catalogue matches. It returns nothing rather than guessing." : "Start typing to search 40 products."
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    hits.map((h, rank)=>{
                                        const isOpen = h.product.id === openRow;
                                        const max = Math.max(...h.signals.map((s)=>Math.abs(s.value)), 1);
                                        var _h_filteredOut;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "result".concat(isOpen ? " is-open" : "").concat(h.filteredOut ? " is-demoted" : ""),
                                            style: {
                                                transform: "translateY(".concat(offsets[rank], "px)")
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "result__head",
                                                    onClick: ()=>setOpenRow(isOpen ? null : h.product.id),
                                                    "aria-expanded": isOpen,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "result__rank",
                                                            children: [
                                                                "#",
                                                                rank + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "result__body",
                                                            children: [
                                                                h.product.id === "me" ? // eslint-disable-next-line @next/next/no-img-element
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    className: "result__thumb result__thumb--me",
                                                                    src: "/assets/thumb-me.webp",
                                                                    alt: "",
                                                                    width: 44,
                                                                    height: 44,
                                                                    loading: "lazy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 300,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "result__thumb"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "result__text",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "result__title",
                                                                            children: [
                                                                                h.product.title,
                                                                                h.product.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "result__size",
                                                                                    children: [
                                                                                        " ",
                                                                                        "· ",
                                                                                        h.product.size.value,
                                                                                        " ",
                                                                                        h.product.size.unit.toUpperCase()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                                    lineNumber: 315,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 312,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "result__meta",
                                                                            children: (_h_filteredOut = h.filteredOut) !== null && _h_filteredOut !== void 0 ? _h_filteredOut : [
                                                                                h.product.brand,
                                                                                h.product.price > 0 ? "₹".concat(h.product.price.toLocaleString("en-IN")) : null
                                                                            ].filter(Boolean).join(" · ")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 321,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "result__bar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "result__fill",
                                                                style: {
                                                                    width: "".concat(Math.round(h.norm * 100), "%")
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "result__score".concat(h.norm > 0.7 ? " is-high" : ""),
                                                            children: h.norm.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "result__caret",
                                                            "aria-hidden": "true",
                                                            children: isOpen ? "hide" : "why?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "breakdown",
                                                    children: h.signals.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "breakdown__row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "breakdown__label",
                                                                    children: s.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "breakdown__track",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "breakdown__bar".concat(s.value < 0 ? " is-neg" : ""),
                                                                        style: {
                                                                            width: "".concat(Math.abs(s.value) / max * 100, "%")
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                                        lineNumber: 357,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 356,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "breakdown__val",
                                                                    children: [
                                                                        s.value >= 0 ? "+" : "−",
                                                                        Math.abs(s.value).toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, s.key + s.label, true, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, h.product.id, true, {
                                            fileName: "[project]/components/SearchConsole.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panelfoot".concat(touched ? " is-live" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panelfoot__slot",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "invite",
                                            onClick: handOver,
                                            "aria-label": "Try the search demo yourself",
                                            tabIndex: touched ? -1 : 0,
                                            "aria-hidden": touched,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "invite__line",
                                                    children: "Your turn — search for something"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "invite__tag",
                                                    "aria-hidden": "true",
                                                    children: [
                                                        "Takes 3 seconds ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "invite__arrow",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SearchConsole.tsx",
                                            lineNumber: 381,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panelfoot__slot",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "samplerow",
                                            role: "group",
                                            "aria-label": "Sample queries",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "samplerow__label",
                                                    "aria-hidden": "true",
                                                    children: "Try one →"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                SAMPLES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "samplechip",
                                                        tabIndex: touched ? 0 : -1,
                                                        onClick: ()=>runSample(s),
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SearchConsole.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "panel__note",
                        children: "// real BM25 + rule-based NER, in your browser · CTR/ATC are synthetic priors, not telemetry"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sr-only",
                        role: "status",
                        "aria-live": "polite",
                        children: announce
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__footnote",
                        "data-reveal": "220",
                        children: "Lexical match gets you candidates. Synonyms, attribute fit and demand signals decide who actually deserves the top slot."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 427,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchConsole.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchConsole.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(SearchConsole, "4tm8KDxeah71mbt9kg2if2yFlPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"]
    ];
});
_c = SearchConsole;
var _c;
__turbopack_context__.k.register(_c, "SearchConsole");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Stats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DURATION = 1400;
function Stats() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stats.useEffect": ()=>{
            const root = ref.current;
            if (!root) return;
            const nodes = Array.from(root.querySelectorAll("[data-count]"));
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const paint = {
                "Stats.useEffect.paint": (el, v)=>{
                    var _el_dataset_decimals;
                    const dec = ((_el_dataset_decimals = el.dataset.decimals) !== null && _el_dataset_decimals !== void 0 ? _el_dataset_decimals : "0") === "1";
                    var _el_dataset_prefix, _el_dataset_suffix;
                    el.textContent = "".concat((_el_dataset_prefix = el.dataset.prefix) !== null && _el_dataset_prefix !== void 0 ? _el_dataset_prefix : "").concat(dec ? v.toFixed(1) : Math.round(v)).concat((_el_dataset_suffix = el.dataset.suffix) !== null && _el_dataset_suffix !== void 0 ? _el_dataset_suffix : "");
                }
            }["Stats.useEffect.paint"];
            if (reduced) {
                nodes.forEach({
                    "Stats.useEffect": (el)=>paint(el, parseFloat(el.dataset.count))
                }["Stats.useEffect"]);
                return;
            }
            const done = new WeakSet();
            const count = {
                "Stats.useEffect.count": (el)=>{
                    if (done.has(el)) return;
                    done.add(el);
                    const target = parseFloat(el.dataset.count);
                    const t0 = performance.now();
                    const step = {
                        "Stats.useEffect.count.step": (now)=>{
                            const p = Math.min(1, (now - t0) / DURATION);
                            const eased = 1 - Math.pow(1 - p, 3);
                            paint(el, target * eased);
                            if (p < 1) requestAnimationFrame(step);
                        }
                    }["Stats.useEffect.count.step"];
                    requestAnimationFrame(step);
                }
            }["Stats.useEffect.count"];
            const io = new IntersectionObserver({
                "Stats.useEffect": (entries)=>entries.forEach({
                        "Stats.useEffect": (e)=>{
                            if (e.isIntersecting) {
                                count(e.target);
                                io.unobserve(e.target);
                            }
                        }
                    }["Stats.useEffect"])
            }["Stats.useEffect"], {
                threshold: 0.3
            });
            nodes.forEach({
                "Stats.useEffect": (el)=>io.observe(el)
            }["Stats.useEffect"]);
            return ({
                "Stats.useEffect": ()=>io.disconnect()
            })["Stats.useEffect"];
        }
    }["Stats.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "statsband",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cellgrid stats",
            ref: ref,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stats"].map((s)=>{
                var _s_prefix, _s_suffix, _s_prefix1, _s_suffix1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "stat",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stat__num",
                            "data-count": s.value,
                            "data-prefix": (_s_prefix = s.prefix) !== null && _s_prefix !== void 0 ? _s_prefix : "",
                            "data-suffix": (_s_suffix = s.suffix) !== null && _s_suffix !== void 0 ? _s_suffix : "",
                            children: [
                                (_s_prefix1 = s.prefix) !== null && _s_prefix1 !== void 0 ? _s_prefix1 : "",
                                s.value,
                                (_s_suffix1 = s.suffix) !== null && _s_suffix1 !== void 0 ? _s_suffix1 : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Stats.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                }, this);
            })
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
_s(Stats, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Stats;
var _c;
__turbopack_context__.k.register(_c, "Stats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** Node diameters, newest first. Position is derived from these. */ const NODE_SIZES = [
    11,
    7,
    7,
    5
];
/** First four-digit year in a period string — the year the role began. */ function startYear(period) {
    var _period_match;
    var _period_match_;
    return (_period_match_ = (_period_match = period.match(/\d{4}/)) === null || _period_match === void 0 ? void 0 : _period_match[0]) !== null && _period_match_ !== void 0 ? _period_match_ : "";
}
function Experience() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const triggers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Experience.useCallback[close]": ()=>{
            const id = open === null || open === void 0 ? void 0 : open.id;
            setOpen(null);
            // Return focus to the row that opened the drawer.
            if (id) requestAnimationFrame({
                "Experience.useCallback[close]": ()=>{
                    var _triggers_current_get;
                    return (_triggers_current_get = triggers.current.get(id)) === null || _triggers_current_get === void 0 ? void 0 : _triggers_current_get.focus();
                }
            }["Experience.useCallback[close]"]);
        }
    }["Experience.useCallback[close]"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "exp",
        id: "experience",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "exp__head",
                "data-reveal": "0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rule-inline",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["num"])("experience"),
                            " — Experience"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "exp__hint",
                        children: "Four roles · one rail"
                    }, void 0, false, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "spine",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "spine__rail",
                        "data-reveal": "0",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roles"].map((r, i)=>{
                        var _NODE_SIZES_i;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "spine__role",
                            "data-reveal": i * 90,
                            /* Node diameter drives its own centring — see the calc() in the
               stylesheet. Hand-copied offsets would drift at every breakpoint
               where the rail moves. */ style: {
                                ["--node"]: "".concat((_NODE_SIZES_i = NODE_SIZES[i]) !== null && _NODE_SIZES_i !== void 0 ? _NODE_SIZES_i : 5, "px")
                            },
                            onClick: ()=>setOpen(r),
                            "aria-haspopup": "dialog",
                            "aria-label": "".concat(r.company, ", ").concat(r.title, ", ").concat(r.period, " — open details"),
                            ref: (el)=>{
                                if (el) triggers.current.set(r.id, el);
                                else triggers.current.delete(r.id);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__year",
                                    "aria-hidden": "true",
                                    children: startYear(r.period)
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__node",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__namerow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spine__company",
                                            children: r.company
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        i === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spine__now",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "spine__now-dot"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Experience.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 19
                                                }, this),
                                                "Now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__meta",
                                    children: [
                                        r.title,
                                        " · ",
                                        r.period
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__blurb",
                                    children: r.blurb
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__chips",
                                    children: r.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spine__chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "spine__chip-plus",
                                                    "aria-hidden": "true",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Experience.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                h
                                            ]
                                        }, h, true, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "spine__cue",
                                    "aria-hidden": "true",
                                    children: [
                                        "Full story",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "spine__cue-arrow",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, r.id, true, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            open && mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleDrawer, {
                role: open,
                onClose: close
            }, void 0, false, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 110,
                columnNumber: 22
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Experience.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Experience, "elSYGaC0kC7J9J4ILA9Y85hOBmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"]
    ];
});
_c = Experience;
/* ------------------------------------------------------------- drawer */ function RoleDrawer(param) {
    let { role, onClose } = param;
    _s1();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingId = "drawer-".concat(role.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoleDrawer.useEffect": ()=>{
            var _focusables_;
            document.body.classList.add("is-locked");
            const panel = panelRef.current;
            const focusables = {
                "RoleDrawer.useEffect.focusables": ()=>{
                    var _panel_querySelectorAll;
                    return Array.from((_panel_querySelectorAll = panel === null || panel === void 0 ? void 0 : panel.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')) !== null && _panel_querySelectorAll !== void 0 ? _panel_querySelectorAll : []);
                }
            }["RoleDrawer.useEffect.focusables"];
            (_focusables_ = focusables()[0]) === null || _focusables_ === void 0 ? void 0 : _focusables_.focus();
            const onKey = {
                "RoleDrawer.useEffect.onKey": (e)=>{
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
                    if (e.shiftKey && (active === first || !(panel === null || panel === void 0 ? void 0 : panel.contains(active)))) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && active === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }["RoleDrawer.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "RoleDrawer.useEffect": ()=>{
                    document.body.classList.remove("is-locked");
                    document.removeEventListener("keydown", onKey);
                }
            })["RoleDrawer.useEffect"];
        }
    }["RoleDrawer.useEffect"], [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "drawer",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": headingId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drawer__scrim",
                onClick: onClose,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drawer__panel",
                ref: panelRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drawer__bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "drawer__meta",
                                children: [
                                    role.period,
                                    " · ",
                                    role.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "drawer__close",
                                onClick: onClose,
                                children: "Close ✕"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drawer__body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__kicker",
                                children: role.title
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "drawer__company",
                                id: headingId,
                                children: role.company
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__blurb",
                                children: role.blurb
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "drawer__rule"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__kicker",
                                children: "What I did"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "drawer__list",
                                children: role.bullets.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "drawer__item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "drawer__marker",
                                                "aria-hidden": "true",
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Experience.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: b
                                            }, void 0, false, {
                                                fileName: "[project]/components/Experience.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/Experience.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "drawer__rule"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "drawer__kicker",
                                children: "Stack"
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "drawer__chips",
                                children: role.stack.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "drawer__chip",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/Experience.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Experience.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Experience.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Experience.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Experience.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s1(RoleDrawer, "2Tru+9IeUxoEksoM8eA1LGy5uk8=");
_c1 = RoleDrawer;
var _c, _c1;
__turbopack_context__.k.register(_c, "Experience");
__turbopack_context__.k.register(_c1, "RoleDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const els = Array.from(document.querySelectorAll("[data-reveal]"));
            const show = {
                "Reveal.useEffect.show": (el)=>el.classList.add("is-revealed")
            }["Reveal.useEffect.show"];
            if (reduced) {
                els.forEach(show);
                return;
            }
            els.forEach({
                "Reveal.useEffect": (el)=>{
                    const delay = el.dataset.reveal;
                    if (delay) el.style.transitionDelay = "".concat(delay, "ms");
                }
            }["Reveal.useEffect"]);
            const io = new IntersectionObserver({
                "Reveal.useEffect": (entries)=>{
                    entries.forEach({
                        "Reveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                show(entry.target);
                                io.unobserve(entry.target);
                            }
                        }
                    }["Reveal.useEffect"]);
                }
            }["Reveal.useEffect"], {
                threshold: 0.12
            });
            els.forEach({
                "Reveal.useEffect": (el)=>{
                    // Already in view on load — reveal immediately rather than waiting.
                    const r = el.getBoundingClientRect();
                    if (r.top < window.innerHeight * 0.92) show(el);
                    else io.observe(el);
                }
            }["Reveal.useEffect"]);
            const fallback = window.setTimeout({
                "Reveal.useEffect.fallback": ()=>els.forEach(show)
            }["Reveal.useEffect.fallback"], 1500);
            return ({
                "Reveal.useEffect": ()=>{
                    io.disconnect();
                    window.clearTimeout(fallback);
                }
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return null;
}
_s(Reveal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollFx.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollFx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollFx() {
    _s();
    const raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollFx.useEffect": ()=>{
            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const bar = document.getElementById("progress");
            const portrait = document.getElementById("portrait-img");
            const apply = {
                "ScrollFx.useEffect.apply": ()=>{
                    raf.current = 0;
                    const y = window.scrollY;
                    if (bar) {
                        const max = document.documentElement.scrollHeight - window.innerHeight;
                        const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
                        bar.style.transform = "scaleX(".concat(p, ")");
                    }
                    if (portrait && !reduced) {
                        portrait.style.transform = "translateY(calc(-8% + ".concat(y * -0.05, "px))");
                    }
                }
            }["ScrollFx.useEffect.apply"];
            const onScroll = {
                "ScrollFx.useEffect.onScroll": ()=>{
                    if (!raf.current) raf.current = requestAnimationFrame(apply);
                }
            }["ScrollFx.useEffect.onScroll"];
            apply();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll, {
                passive: true
            });
            return ({
                "ScrollFx.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                    if (raf.current) cancelAnimationFrame(raf.current);
                }
            })["ScrollFx.useEffect"];
        }
    }["ScrollFx.useEffect"], []);
    return null;
}
_s(ScrollFx, "o6QTbMtE0l/O5auJofp0PuAeQ6M=");
_c = ScrollFx;
var _c;
__turbopack_context__.k.register(_c, "ScrollFx");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroBreath.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBreath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBreath.useEffect": ()=>{
            const field = document.getElementById("bg-breath");
            const dot = document.getElementById("work-dot");
            if (!field && !dot) return;
            const write = {
                "HeroBreath.useEffect.write": (v)=>{
                    if (field) {
                        field.style.transform = "scale(".concat(1 + v * BREATH_SCALE, ")");
                        field.style.opacity = String(0.86 + v * 0.14);
                    }
                    if (dot) dot.style.transform = "scale(".concat(1.04 - v * DOT_SCALE, ")");
                }
            }["HeroBreath.useEffect.write"];
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
            const tick = {
                "HeroBreath.useEffect.tick": (now)=>{
                    // dt is clamped so a backgrounded tab can't fast-forward the phase.
                    const dt = last ? Math.min((now - last) / 1000, 0.064) : 0;
                    last = now;
                    t += dt;
                    const period = 5.45 + Math.sin(t / 11.3) * 0.32 + Math.sin(t / 7.1 + 2.2) * 0.18;
                    phase = (phase + dt / period) % 1;
                    write(breath(phase));
                    raf = requestAnimationFrame(tick);
                }
            }["HeroBreath.useEffect.tick"];
            const start = {
                "HeroBreath.useEffect.start": ()=>{
                    if (running) return;
                    running = true;
                    last = 0;
                    if (field) field.style.willChange = "transform, opacity";
                    if (dot) dot.style.willChange = "transform";
                    raf = requestAnimationFrame(tick);
                }
            }["HeroBreath.useEffect.start"];
            const stop = {
                "HeroBreath.useEffect.stop": ()=>{
                    if (!running) return;
                    running = false;
                    cancelAnimationFrame(raf);
                    // Drop the compositor hint while parked — an idle promoted layer still
                    // costs memory.
                    if (field) field.style.willChange = "";
                    if (dot) dot.style.willChange = "";
                }
            }["HeroBreath.useEffect.stop"];
            // Parked both when the hero scrolls away and when the tab is hidden, so a
            // background tab costs nothing.
            const hero = document.getElementById("top");
            let onScreen = true;
            const sync = {
                "HeroBreath.useEffect.sync": ()=>{
                    if (onScreen && !document.hidden) start();
                    else stop();
                }
            }["HeroBreath.useEffect.sync"];
            const io = hero ? new IntersectionObserver({
                "HeroBreath.useEffect": (param)=>{
                    let [e] = param;
                    onScreen = e.isIntersecting;
                    sync();
                }
            }["HeroBreath.useEffect"], {
                threshold: 0
            }) : null;
            io === null || io === void 0 ? void 0 : io.observe(hero);
            document.addEventListener("visibilitychange", sync);
            sync();
            return ({
                "HeroBreath.useEffect": ()=>{
                    stop();
                    io === null || io === void 0 ? void 0 : io.disconnect();
                    document.removeEventListener("visibilitychange", sync);
                }
            })["HeroBreath.useEffect"];
        }
    }["HeroBreath.useEffect"], []);
    return null;
}
_s(HeroBreath, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HeroBreath;
var _c;
__turbopack_context__.k.register(_c, "HeroBreath");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_49a15583._.js.map