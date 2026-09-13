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
 */ const CATEGORY_TERMS = [
    [
        "milk alternative",
        /\b(oat|almond|soy|soya|coconut|cashew|rice) ?milk\b|\bmilk alt(ernative)?s?\b|\bplant milk\b|\b(dairy[\s-]?free|non[\s-]?dairy|vegan|plant[\s-]?based)\b[^.]{0,12}\bmilk\b/
    ],
    /* "frozen" sits above "dairy" deliberately: "ice cream" contains "cream",
     and the first match wins. Reordering is cheaper than a lookbehind. */ [
        "frozen",
        /\b(frozen|freezer|ice cream|fries|paratha)\b/
    ],
    [
        "dairy",
        /\b(curd|dahi|yogh?urt|paneer|butter|makhan|cheese|mozzarella|ghee|cream|malai|lassi|chaas)\b/
    ],
    [
        "milk",
        /\bmilk\b|\bdoodh\b/
    ],
    [
        "eggs",
        /\b(eggs?|anda|ande)\b/
    ],
    [
        "bread",
        /\b(bread|loaf|bun|pav|bakery|rusk|breadsticks?)\b/
    ],
    [
        "breakfast",
        /\b(oats|porridge|cereals?|cornflakes|corn flakes|muesli|granola|jam|honey|shahad|peanut butter|breakfast)\b/
    ],
    [
        "snacks",
        /\b(snacks?|chips|crisps|biscuits?|cookies?|namkeen|bhujia|sev|chocolates?|nuts|popcorn|makhana|noodles|maggi)\b/
    ],
    [
        "produce",
        /\b(fruits?|vegetables?|veggies|produce|greens|salad|sabzi|sabji)\b/
    ],
    [
        "spices",
        /\b(spices?|masala|haldi|turmeric|chilli|chili|mirch|jeera|cumin|dhania|coriander powder|pepper|seasoning)\b/
    ],
    [
        "condiments",
        /\b(ketchup|sauces?|mayonnaise|mayo|pickles?|achar|chutney|vinegar|sirka|dips?)\b/
    ],
    [
        "staples",
        /\b(rice|chawal|atta|flour|besan|sooji|rava|poha|dals?|lentils?|pulses|rajma|chana|oil|sugar|cheeni|salt|namak|staples?|grocer(y|ies)|ration)\b/
    ],
    [
        "beverages",
        /\b(tea|chai|coffee|juice|water|soda|cola|soft drinks?|drinks?|beverages?|milkshake)\b/
    ],
    [
        "personal care",
        /\b(soap|shampoo|toothpaste|handwash|sanitiser|sanitizer|deodorant|hair oil|sanitary|toilet paper|personal care|toiletries)\b/
    ],
    [
        "baby",
        /\b(baby|diapers?|nappy|wipes|infant|toddler)\b/
    ],
    [
        "pet",
        /\b(pet|dog|cat|kibble|litter)\b/
    ],
    [
        "household",
        /\b(detergent|dishwash|bartan|cleaning|cleaner|disinfectant|phenyl|pocha|tissue|paper towels?|foil|cling film|garbage|bin bags?|dustbin|kachra|mop|scrub|sponge|duster|mosquito|machhar|pest|cockroach|insect|air freshener|room spray|bulb|matchbox|household|home essentials)\b/
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
    // staples & grains
    milk: [
        "dairy",
        "doodh"
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
    atta: [
        "flour",
        "roti"
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
    chickpea: [
        "chana",
        "chole",
        "kabuli"
    ],
    oil: [
        "ghani",
        "cooking oil"
    ],
    sugar: [
        "cheeni",
        "sweetener"
    ],
    salt: [
        "namak"
    ],
    jaggery: [
        "gur",
        "sweetener"
    ],
    poha: [
        "flattened rice"
    ],
    sooji: [
        "rava",
        "semolina"
    ],
    besan: [
        "gram flour",
        "chickpea"
    ],
    // dairy
    curd: [
        "dahi",
        "yoghurt",
        "yogurt"
    ],
    yoghurt: [
        "curd",
        "dahi"
    ],
    paneer: [
        "cottage cheese"
    ],
    butter: [
        "makhan"
    ],
    ghee: [
        "clarified butter"
    ],
    cream: [
        "malai"
    ],
    egg: [
        "anda",
        "ande"
    ],
    // bakery & breakfast
    bread: [
        "loaf",
        "atta"
    ],
    bun: [
        "pav"
    ],
    oats: [
        "porridge",
        "cereal"
    ],
    cereal: [
        "flakes",
        "muesli",
        "granola"
    ],
    honey: [
        "shahad"
    ],
    // snacks
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
    namkeen: [
        "bhujia",
        "sev",
        "mixture"
    ],
    nuts: [
        "almonds",
        "dry fruit",
        "cashew"
    ],
    noodles: [
        "maggi",
        "instant"
    ],
    makhana: [
        "fox nuts"
    ],
    // produce
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
    onion: [
        "pyaz"
    ],
    potato: [
        "aloo"
    ],
    apple: [
        "seb"
    ],
    mango: [
        "aam"
    ],
    lemon: [
        "nimbu"
    ],
    cucumber: [
        "kheera"
    ],
    ginger: [
        "adrak"
    ],
    garlic: [
        "lehsun"
    ],
    cauliflower: [
        "gobi"
    ],
    okra: [
        "bhindi",
        "lady finger"
    ],
    peas: [
        "matar"
    ],
    corn: [
        "makai",
        "sweet corn"
    ],
    coriander: [
        "dhania"
    ],
    // spices & condiments
    turmeric: [
        "haldi"
    ],
    chilli: [
        "mirch",
        "spicy"
    ],
    cumin: [
        "jeera"
    ],
    pepper: [
        "kali mirch"
    ],
    masala: [
        "spice",
        "blend",
        "seasoning"
    ],
    pickle: [
        "achar"
    ],
    ketchup: [
        "sauce",
        "tamatar"
    ],
    vinegar: [
        "sirka"
    ],
    // beverages
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
    // household
    detergent: [
        "washing",
        "laundry",
        "kapda"
    ],
    dishwash: [
        "bartan",
        "utensil"
    ],
    cleaner: [
        "cleaning",
        "disinfectant"
    ],
    floor: [
        "pocha",
        "phenyl"
    ],
    tissue: [
        "paper towels",
        "roll"
    ],
    garbage: [
        "bin bags",
        "dustbin",
        "kachra"
    ],
    mosquito: [
        "machhar",
        "repellent"
    ],
    pest: [
        "insect",
        "cockroach"
    ],
    // intent-ish
    cheap: [
        "budget",
        "value"
    ],
    healthy: [
        "baked",
        "millet",
        "protein"
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
 * A grocery and household catalogue for the live search demo.
 *
 * Everything here is invented product data — the point is the retrieval and
 * ranking code in ./parse.ts and ./rank.ts, which is real. `ctr` and `atc` are
 * synthetic demand priors standing in for what a real deployment learns from
 * click logs; they are labelled as such in the UI.
 *
 * Two rules when adding rows:
 *
 *  1. `diet` is a claim, not a tag. Only list what the product genuinely
 *     satisfies — the dietary signal is a hard filter in rank.ts, so a wrong
 *     entry here shows up as a wrong answer on the page. Dairy is
 *     `vegetarian`, never `vegan`; eggs are neither.
 *  2. A new `category` needs a matching entry in CATEGORY_TERMS in parse.ts,
 *     or nothing a visitor types will ever route to it.
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
        diet: [
            "vegetarian"
        ],
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
        diet: [
            "vegetarian"
        ],
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
            "lactose-free",
            "vegetarian"
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
    {
        id: "p08",
        title: "Double-toned milk",
        brand: "Amul",
        category: "milk",
        tags: [
            "dairy",
            "skimmed",
            "low fat"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 66,
        diet: [
            "vegetarian"
        ],
        ctr: 0.34,
        atc: 0.27
    },
    {
        id: "p09",
        title: "Buffalo milk",
        brand: "Gokul",
        category: "milk",
        tags: [
            "dairy",
            "full fat",
            "creamy"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 84,
        diet: [
            "vegetarian"
        ],
        ctr: 0.18,
        atc: 0.14
    },
    {
        id: "p0a",
        title: "Rice milk",
        brand: "Nutrimix",
        category: "milk alternative",
        tags: [
            "rice",
            "plant based"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 175,
        diet: [
            "dairy-free",
            "lactose-free",
            "vegan",
            "gluten-free"
        ],
        ctr: 0.09,
        atc: 0.06
    },
    {
        id: "p0b",
        title: "Cashew milk, barista",
        brand: "Sofit",
        category: "milk alternative",
        tags: [
            "cashew",
            "plant based",
            "nut",
            "barista"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 210,
        diet: [
            "dairy-free",
            "lactose-free",
            "vegan"
        ],
        ctr: 0.13,
        atc: 0.09
    },
    {
        id: "p0c",
        title: "Condensed milk",
        brand: "Nestlé",
        category: "dairy",
        tags: [
            "milkmaid",
            "dessert",
            "baking",
            "sweet"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 135,
        diet: [
            "vegetarian"
        ],
        ctr: 0.25,
        atc: 0.2
    },
    // ---- dairy ---------------------------------------------------------------
    {
        id: "p70",
        title: "Fresh curd",
        brand: "Mother Dairy",
        category: "dairy",
        tags: [
            "dahi",
            "yoghurt",
            "probiotic"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 55,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.62,
        atc: 0.53
    },
    {
        id: "p71",
        title: "Greek yoghurt, plain",
        brand: "Epigamia",
        category: "dairy",
        tags: [
            "yogurt",
            "high protein",
            "dahi"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 150,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.38,
        atc: 0.29
    },
    {
        id: "p72",
        title: "Paneer block",
        brand: "Amul",
        category: "dairy",
        tags: [
            "cottage cheese",
            "malai",
            "protein"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 95,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.57,
        atc: 0.48
    },
    {
        id: "p73",
        title: "Salted butter",
        brand: "Amul",
        category: "dairy",
        tags: [
            "makhan",
            "spread",
            "baking"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 275,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.59,
        atc: 0.5
    },
    {
        id: "p74",
        title: "Cheese slices",
        brand: "Britannia",
        category: "dairy",
        tags: [
            "processed cheese",
            "sandwich"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 140,
        diet: [
            "vegetarian"
        ],
        ctr: 0.44,
        atc: 0.36
    },
    {
        id: "p75",
        title: "Mozzarella, shredded",
        brand: "Go",
        category: "dairy",
        tags: [
            "pizza cheese",
            "cheese"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 185,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.33,
        atc: 0.26
    },
    {
        id: "p76",
        title: "Cow ghee",
        brand: "Amul",
        category: "dairy",
        tags: [
            "clarified butter",
            "desi ghee"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 650,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.47,
        atc: 0.4
    },
    {
        id: "p77",
        title: "Fresh cream",
        brand: "Amul",
        category: "dairy",
        tags: [
            "malai",
            "whipping",
            "dessert"
        ],
        size: {
            value: 250,
            unit: "ml"
        },
        price: 90,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.3,
        atc: 0.24
    },
    {
        id: "p78",
        title: "Probiotic lassi, sweet",
        brand: "Mother Dairy",
        category: "dairy",
        tags: [
            "chaas",
            "yoghurt drink"
        ],
        size: {
            value: 200,
            unit: "ml"
        },
        price: 25,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.36,
        atc: 0.3
    },
    {
        id: "p79",
        title: "Vegan curd, coconut",
        brand: "Epigamia",
        category: "dairy",
        tags: [
            "dahi",
            "plant based",
            "coconut"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 120,
        diet: [
            "vegan",
            "dairy-free",
            "lactose-free",
            "gluten-free"
        ],
        ctr: 0.11,
        atc: 0.08
    },
    // ---- eggs ----------------------------------------------------------------
    {
        id: "p80",
        title: "Farm eggs, brown",
        brand: "Eggoz",
        category: "eggs",
        tags: [
            "anda",
            "protein",
            "free range"
        ],
        size: {
            value: 6,
            unit: "pack"
        },
        price: 90,
        diet: [
            "gluten-free"
        ],
        ctr: 0.54,
        atc: 0.46
    },
    {
        id: "p81",
        title: "White eggs, tray",
        brand: "Suguna",
        category: "eggs",
        tags: [
            "anda",
            "protein",
            "bulk"
        ],
        size: {
            value: 30,
            unit: "pack"
        },
        price: 330,
        diet: [
            "gluten-free"
        ],
        ctr: 0.41,
        atc: 0.35
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
        diet: [
            "vegetarian"
        ],
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
        diet: [
            "vegetarian"
        ],
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
            "gluten-free",
            "vegetarian"
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
        diet: [
            "vegetarian"
        ],
        ctr: 0.21,
        atc: 0.15
    },
    {
        id: "p14",
        title: "White sandwich bread",
        brand: "Britannia",
        category: "bread",
        tags: [
            "loaf",
            "maida",
            "sandwich"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 45,
        diet: [
            "vegetarian"
        ],
        ctr: 0.5,
        atc: 0.43
    },
    {
        id: "p15",
        title: "Burger buns",
        brand: "Harvest Gold",
        category: "bread",
        tags: [
            "bun",
            "pav",
            "bakery"
        ],
        size: {
            value: 6,
            unit: "pack"
        },
        price: 50,
        diet: [
            "vegetarian"
        ],
        ctr: 0.3,
        atc: 0.25
    },
    {
        id: "p16",
        title: "Ladi pav",
        brand: "Modern",
        category: "bread",
        tags: [
            "bun",
            "pav bhaji",
            "bakery"
        ],
        size: {
            value: 6,
            unit: "pack"
        },
        price: 40,
        diet: [
            "vegetarian"
        ],
        ctr: 0.35,
        atc: 0.3
    },
    {
        id: "p17",
        title: "Garlic breadsticks",
        brand: "Theobroma",
        category: "bread",
        tags: [
            "bakery",
            "sticks",
            "herb"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 160,
        diet: [
            "vegetarian"
        ],
        ctr: 0.15,
        atc: 0.11
    },
    {
        id: "p18",
        title: "Brown rusk, elaichi",
        brand: "Britannia",
        category: "bread",
        tags: [
            "toast",
            "tea time",
            "bakery"
        ],
        size: {
            value: 300,
            unit: "g"
        },
        price: 60,
        diet: [
            "vegetarian"
        ],
        ctr: 0.27,
        atc: 0.22
    },
    // ---- breakfast -----------------------------------------------------------
    {
        id: "p90",
        title: "Rolled oats",
        brand: "Quaker",
        category: "breakfast",
        tags: [
            "oats",
            "porridge",
            "cereal",
            "fibre"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 215,
        diet: [
            "vegan"
        ],
        ctr: 0.52,
        atc: 0.44
    },
    {
        id: "p91",
        title: "Corn flakes, original",
        brand: "Kellogg's",
        category: "breakfast",
        tags: [
            "cereal",
            "flakes"
        ],
        size: {
            value: 475,
            unit: "g"
        },
        price: 240,
        diet: [
            "vegetarian"
        ],
        ctr: 0.44,
        atc: 0.36
    },
    {
        id: "p92",
        title: "Fruit & nut muesli",
        brand: "Bagrry's",
        category: "breakfast",
        tags: [
            "cereal",
            "granola",
            "oats"
        ],
        size: {
            value: 700,
            unit: "g"
        },
        price: 420,
        diet: [
            "vegetarian"
        ],
        ctr: 0.3,
        atc: 0.24
    },
    {
        id: "p93",
        title: "Peanut butter, crunchy",
        brand: "Pintola",
        category: "breakfast",
        tags: [
            "spread",
            "protein",
            "nut butter"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 450,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.41,
        atc: 0.34
    },
    {
        id: "p94",
        title: "Mixed fruit jam",
        brand: "Kissan",
        category: "breakfast",
        tags: [
            "spread",
            "preserve",
            "sweet"
        ],
        size: {
            value: 700,
            unit: "g"
        },
        price: 210,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.38,
        atc: 0.31
    },
    {
        id: "p95",
        title: "Raw forest honey",
        brand: "Dabur",
        category: "breakfast",
        tags: [
            "shahad",
            "sweetener",
            "natural"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 480,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.35,
        atc: 0.28
    },
    {
        id: "p96",
        title: "Instant poha mix",
        brand: "MTR",
        category: "breakfast",
        tags: [
            "flattened rice",
            "ready mix"
        ],
        size: {
            value: 80,
            unit: "g"
        },
        price: 45,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.19,
        atc: 0.15
    },
    {
        id: "p97",
        title: "Chocolate health drink mix",
        brand: "Bournvita",
        category: "breakfast",
        tags: [
            "malt",
            "milk additive",
            "kids"
        ],
        size: {
            value: 750,
            unit: "g"
        },
        price: 380,
        diet: [
            "vegetarian"
        ],
        ctr: 0.4,
        atc: 0.33
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
    {
        id: "p26",
        title: "Aloo bhujia",
        brand: "Haldiram's",
        category: "snacks",
        tags: [
            "namkeen",
            "sev",
            "spicy"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 110,
        diet: [
            "vegetarian"
        ],
        ctr: 0.58,
        atc: 0.49
    },
    {
        id: "p27",
        title: "Masala peanuts",
        brand: "Haldiram's",
        category: "snacks",
        tags: [
            "namkeen",
            "moongphali",
            "spicy"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 65,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.42,
        atc: 0.35
    },
    {
        id: "p28",
        title: "Marie biscuits",
        brand: "Britannia",
        category: "snacks",
        tags: [
            "cookies",
            "tea time",
            "light"
        ],
        size: {
            value: 300,
            unit: "g"
        },
        price: 45,
        diet: [
            "vegetarian"
        ],
        ctr: 0.5,
        atc: 0.44
    },
    {
        id: "p29",
        title: "Choco-chip cookies",
        brand: "Unibic",
        category: "snacks",
        tags: [
            "biscuits",
            "sweet",
            "chocolate"
        ],
        size: {
            value: 250,
            unit: "g"
        },
        price: 120,
        diet: [
            "vegetarian"
        ],
        ctr: 0.37,
        atc: 0.3
    },
    {
        id: "p2a",
        title: "Salted popcorn",
        brand: "Act II",
        category: "snacks",
        tags: [
            "microwave",
            "corn",
            "movie"
        ],
        size: {
            value: 3,
            unit: "pack"
        },
        price: 90,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.29,
        atc: 0.24
    },
    {
        id: "p2b",
        title: "Mixed dry fruits",
        brand: "Happilo",
        category: "snacks",
        tags: [
            "nuts",
            "raisins",
            "cashew",
            "dry fruit"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 620,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.33,
        atc: 0.26
    },
    {
        id: "p2c",
        title: "Makhana, roasted peri-peri",
        brand: "Farmley",
        category: "snacks",
        tags: [
            "fox nuts",
            "healthy",
            "baked"
        ],
        size: {
            value: 100,
            unit: "g"
        },
        price: 150,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.21,
        atc: 0.16
    },
    {
        id: "p2d",
        title: "Instant noodles, masala",
        brand: "Maggi",
        category: "snacks",
        tags: [
            "ready to eat",
            "2 minute",
            "noodles"
        ],
        size: {
            value: 12,
            unit: "pack"
        },
        price: 168,
        diet: [
            "vegetarian"
        ],
        ctr: 0.71,
        atc: 0.63
    },
    {
        id: "p2e",
        title: "Sugar-free dark chocolate",
        brand: "Sugarfree",
        category: "snacks",
        tags: [
            "cocoa",
            "diabetic",
            "bar"
        ],
        size: {
            value: 80,
            unit: "g"
        },
        price: 140,
        diet: [
            "sugar-free",
            "vegetarian"
        ],
        ctr: 0.14,
        atc: 0.1
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
    {
        id: "p35",
        title: "Onions",
        brand: "Fresho",
        category: "produce",
        tags: [
            "vegetable",
            "pyaz",
            "fresh"
        ],
        size: {
            value: 2,
            unit: "kg"
        },
        price: 70,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.77,
        atc: 0.7
    },
    {
        id: "p36",
        title: "Potatoes",
        brand: "Fresho",
        category: "produce",
        tags: [
            "vegetable",
            "aloo",
            "fresh"
        ],
        size: {
            value: 2,
            unit: "kg"
        },
        price: 60,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.75,
        atc: 0.68
    },
    {
        id: "p37",
        title: "Organic cauliflower",
        brand: "24 Mantra",
        category: "produce",
        tags: [
            "vegetable",
            "gobi",
            "fresh"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 95,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.26,
        atc: 0.2
    },
    {
        id: "p38",
        title: "Green capsicum",
        brand: "Fresho",
        category: "produce",
        tags: [
            "vegetable",
            "shimla mirch",
            "fresh"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 55,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.31,
        atc: 0.25
    },
    {
        id: "p39",
        title: "Lady finger",
        brand: "Fresho",
        category: "produce",
        tags: [
            "vegetable",
            "bhindi",
            "okra",
            "fresh"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 40,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.34,
        atc: 0.28
    },
    {
        id: "p3a",
        title: "Coriander leaves",
        brand: "Fresho",
        category: "produce",
        tags: [
            "herb",
            "dhania",
            "garnish",
            "fresh"
        ],
        size: {
            value: 100,
            unit: "g"
        },
        price: 15,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.46,
        atc: 0.4
    },
    {
        id: "p3b",
        title: "Ginger",
        brand: "Fresho",
        category: "produce",
        tags: [
            "adrak",
            "aromatic",
            "fresh"
        ],
        size: {
            value: 250,
            unit: "g"
        },
        price: 45,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.43,
        atc: 0.37
    },
    {
        id: "p3c",
        title: "Garlic",
        brand: "Fresho",
        category: "produce",
        tags: [
            "lehsun",
            "aromatic",
            "fresh"
        ],
        size: {
            value: 250,
            unit: "g"
        },
        price: 60,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.45,
        atc: 0.39
    },
    {
        id: "p3d",
        title: "Apples, Shimla",
        brand: "Fresho",
        category: "produce",
        tags: [
            "fruit",
            "seb",
            "fresh"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 180,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.52,
        atc: 0.43
    },
    {
        id: "p3e",
        title: "Alphonso mangoes",
        brand: "Fresho",
        category: "produce",
        tags: [
            "fruit",
            "aam",
            "seasonal",
            "fresh"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 650,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.4,
        atc: 0.3
    },
    {
        id: "p3f",
        title: "Seedless grapes",
        brand: "Fresho",
        category: "produce",
        tags: [
            "fruit",
            "angoor",
            "fresh"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 95,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.37,
        atc: 0.3
    },
    {
        id: "p3g",
        title: "Organic baby spinach",
        brand: "24 Mantra",
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
        price: 80,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.17,
        atc: 0.13
    },
    {
        id: "p3h",
        title: "Lemons",
        brand: "Fresho",
        category: "produce",
        tags: [
            "fruit",
            "nimbu",
            "fresh"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 50,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.48,
        atc: 0.42
    },
    {
        id: "p3i",
        title: "Cucumber",
        brand: "Fresho",
        category: "produce",
        tags: [
            "vegetable",
            "kheera",
            "salad",
            "fresh"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 35,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.39,
        atc: 0.33
    },
    {
        id: "p3j",
        title: "Organic mixed salad leaves",
        brand: "24 Mantra",
        category: "produce",
        tags: [
            "greens",
            "lettuce",
            "salad",
            "leafy"
        ],
        size: {
            value: 150,
            unit: "g"
        },
        price: 140,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.15,
        atc: 0.11
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
    {
        id: "p45",
        title: "Sona masoori rice",
        brand: "Daawat",
        category: "staples",
        tags: [
            "chawal",
            "grain",
            "everyday"
        ],
        size: {
            value: 10,
            unit: "kg"
        },
        price: 720,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.44,
        atc: 0.38
    },
    {
        id: "p46",
        title: "Moong dal, yellow",
        brand: "Tata Sampann",
        category: "staples",
        tags: [
            "lentil",
            "pulses",
            "split"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 165,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.4,
        atc: 0.34
    },
    {
        id: "p47",
        title: "Chana dal",
        brand: "Tata Sampann",
        category: "staples",
        tags: [
            "lentil",
            "pulses",
            "bengal gram"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 120,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.36,
        atc: 0.31
    },
    {
        id: "p48",
        title: "Rajma, chitra",
        brand: "24 Mantra",
        category: "staples",
        tags: [
            "kidney beans",
            "pulses",
            "organic"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 140,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.24,
        atc: 0.19
    },
    {
        id: "p49",
        title: "Kabuli chana",
        brand: "Tata Sampann",
        category: "staples",
        tags: [
            "chickpeas",
            "pulses",
            "chole"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 150,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.33,
        atc: 0.28
    },
    {
        id: "p4a",
        title: "Sunflower refined oil",
        brand: "Fortune",
        category: "staples",
        tags: [
            "cooking oil",
            "refined",
            "frying"
        ],
        size: {
            value: 5,
            unit: "l"
        },
        price: 790,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.5,
        atc: 0.44
    },
    {
        id: "p4b",
        title: "Extra virgin olive oil",
        brand: "Figaro",
        category: "staples",
        tags: [
            "cooking oil",
            "salad",
            "mediterranean"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 950,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.22,
        atc: 0.16
    },
    {
        id: "p4c",
        title: "Besan, gram flour",
        brand: "Rajdhani",
        category: "staples",
        tags: [
            "flour",
            "chickpea",
            "pakora"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 95,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.3,
        atc: 0.26
    },
    {
        id: "p4d",
        title: "Sooji, rava",
        brand: "Rajdhani",
        category: "staples",
        tags: [
            "semolina",
            "upma",
            "flour"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 70,
        diet: [
            "vegetarian"
        ],
        ctr: 0.27,
        atc: 0.23
    },
    {
        id: "p4e",
        title: "Refined sugar",
        brand: "Madhur",
        category: "staples",
        tags: [
            "cheeni",
            "sweetener"
        ],
        size: {
            value: 5,
            unit: "kg"
        },
        price: 290,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.54,
        atc: 0.48
    },
    {
        id: "p4f",
        title: "Iodised salt",
        brand: "Tata",
        category: "staples",
        tags: [
            "namak",
            "seasoning"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 28,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.7,
        atc: 0.64
    },
    {
        id: "p4g",
        title: "Poha, thick",
        brand: "Rajdhani",
        category: "staples",
        tags: [
            "flattened rice",
            "breakfast",
            "chawal"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 75,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.26,
        atc: 0.22
    },
    {
        id: "p4h",
        title: "Organic brown rice",
        brand: "24 Mantra",
        category: "staples",
        tags: [
            "chawal",
            "grain",
            "whole grain"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 185,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.19,
        atc: 0.15
    },
    {
        id: "p4i",
        title: "Vermicelli, roasted",
        brand: "Bambino",
        category: "staples",
        tags: [
            "seviyan",
            "noodles",
            "kheer"
        ],
        size: {
            value: 900,
            unit: "g"
        },
        price: 110,
        diet: [
            "vegetarian"
        ],
        ctr: 0.18,
        atc: 0.15
    },
    // ---- spices --------------------------------------------------------------
    {
        id: "pa0",
        title: "Turmeric powder",
        brand: "Everest",
        category: "spices",
        tags: [
            "haldi",
            "masala",
            "seasoning"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 75,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.47,
        atc: 0.41
    },
    {
        id: "pa1",
        title: "Red chilli powder",
        brand: "Everest",
        category: "spices",
        tags: [
            "lal mirch",
            "masala",
            "spicy"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 95,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.46,
        atc: 0.4
    },
    {
        id: "pa2",
        title: "Coriander powder",
        brand: "Everest",
        category: "spices",
        tags: [
            "dhania",
            "masala",
            "seasoning"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 70,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.38,
        atc: 0.33
    },
    {
        id: "pa3",
        title: "Garam masala",
        brand: "MDH",
        category: "spices",
        tags: [
            "masala",
            "blend",
            "seasoning"
        ],
        size: {
            value: 100,
            unit: "g"
        },
        price: 85,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.44,
        atc: 0.38
    },
    {
        id: "pa4",
        title: "Cumin seeds",
        brand: "Tata Sampann",
        category: "spices",
        tags: [
            "jeera",
            "whole spice",
            "tadka"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 120,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.4,
        atc: 0.35
    },
    {
        id: "pa5",
        title: "Organic black pepper",
        brand: "24 Mantra",
        category: "spices",
        tags: [
            "kali mirch",
            "whole spice",
            "seasoning"
        ],
        size: {
            value: 100,
            unit: "g"
        },
        price: 180,
        diet: [
            "vegan",
            "gluten-free",
            "organic"
        ],
        ctr: 0.21,
        atc: 0.16
    },
    {
        id: "pa6",
        title: "Mustard seeds",
        brand: "Catch",
        category: "spices",
        tags: [
            "rai",
            "whole spice",
            "tadka"
        ],
        size: {
            value: 100,
            unit: "g"
        },
        price: 40,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.26,
        atc: 0.22
    },
    {
        id: "pa7",
        title: "Chai masala",
        brand: "Everest",
        category: "spices",
        tags: [
            "tea masala",
            "blend",
            "aromatic"
        ],
        size: {
            value: 50,
            unit: "g"
        },
        price: 55,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.19,
        atc: 0.15
    },
    // ---- condiments ----------------------------------------------------------
    {
        id: "pb0",
        title: "Tomato ketchup",
        brand: "Kissan",
        category: "condiments",
        tags: [
            "sauce",
            "tamatar",
            "dip"
        ],
        size: {
            value: 1,
            unit: "kg"
        },
        price: 150,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.52,
        atc: 0.45
    },
    {
        id: "pb1",
        title: "Veg mayonnaise",
        brand: "Veeba",
        category: "condiments",
        tags: [
            "sauce",
            "dip",
            "spread"
        ],
        size: {
            value: 875,
            unit: "g"
        },
        price: 210,
        diet: [
            "vegetarian"
        ],
        ctr: 0.39,
        atc: 0.33
    },
    {
        id: "pb2",
        title: "Soy sauce",
        brand: "Ching's",
        category: "condiments",
        tags: [
            "sauce",
            "chinese",
            "umami"
        ],
        size: {
            value: 200,
            unit: "ml"
        },
        price: 75,
        diet: [
            "vegan"
        ],
        ctr: 0.28,
        atc: 0.23
    },
    {
        id: "pb3",
        title: "Mango pickle",
        brand: "Mother's Recipe",
        category: "condiments",
        tags: [
            "achar",
            "aam",
            "spicy"
        ],
        size: {
            value: 400,
            unit: "g"
        },
        price: 130,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.34,
        atc: 0.29
    },
    {
        id: "pb4",
        title: "Mint coriander chutney",
        brand: "Veeba",
        category: "condiments",
        tags: [
            "dip",
            "hari chutney",
            "sauce"
        ],
        size: {
            value: 250,
            unit: "g"
        },
        price: 95,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.2,
        atc: 0.16
    },
    {
        id: "pb5",
        title: "Apple cider vinegar",
        brand: "Dabur",
        category: "condiments",
        tags: [
            "vinegar",
            "sirka",
            "health"
        ],
        size: {
            value: 500,
            unit: "ml"
        },
        price: 190,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.23,
        atc: 0.17
    },
    {
        id: "pb6",
        title: "Peri-peri seasoning",
        brand: "Veeba",
        category: "condiments",
        tags: [
            "sauce",
            "spicy",
            "dip"
        ],
        size: {
            value: 300,
            unit: "g"
        },
        price: 120,
        diet: [
            "vegetarian"
        ],
        ctr: 0.17,
        atc: 0.13
    },
    // ---- frozen --------------------------------------------------------------
    {
        id: "pc0",
        title: "Frozen green peas",
        brand: "Safal",
        category: "frozen",
        tags: [
            "matar",
            "vegetable",
            "freezer"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 95,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.48,
        atc: 0.42
    },
    {
        id: "pc1",
        title: "Frozen french fries",
        brand: "McCain",
        category: "frozen",
        tags: [
            "aloo",
            "potato",
            "freezer",
            "snack"
        ],
        size: {
            value: 750,
            unit: "g"
        },
        price: 185,
        diet: [
            "vegan"
        ],
        ctr: 0.44,
        atc: 0.37
    },
    {
        id: "pc2",
        title: "Frozen malabar paratha",
        brand: "ID",
        category: "frozen",
        tags: [
            "paratha",
            "flatbread",
            "freezer"
        ],
        size: {
            value: 5,
            unit: "pack"
        },
        price: 140,
        diet: [
            "vegetarian"
        ],
        ctr: 0.36,
        atc: 0.31
    },
    {
        id: "pc3",
        title: "Vanilla ice cream tub",
        brand: "Amul",
        category: "frozen",
        tags: [
            "dessert",
            "freezer",
            "sweet"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 280,
        diet: [
            "vegetarian"
        ],
        ctr: 0.42,
        atc: 0.35
    },
    {
        id: "pc4",
        title: "Frozen sweet corn",
        brand: "Safal",
        category: "frozen",
        tags: [
            "makai",
            "vegetable",
            "freezer"
        ],
        size: {
            value: 500,
            unit: "g"
        },
        price: 110,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.25,
        atc: 0.2
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
    {
        id: "p54",
        title: "Masala chai tea bags",
        brand: "Tata Tea",
        category: "beverages",
        tags: [
            "chai",
            "tea bags",
            "spiced"
        ],
        size: {
            value: 50,
            unit: "pack"
        },
        price: 180,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.38,
        atc: 0.32
    },
    {
        id: "p55",
        title: "Instant coffee powder",
        brand: "Nescafé",
        category: "beverages",
        tags: [
            "coffee",
            "caffeine",
            "classic"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 610,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.47,
        atc: 0.4
    },
    {
        id: "p56",
        title: "Green tea bags",
        brand: "Lipton",
        category: "beverages",
        tags: [
            "tea",
            "antioxidant",
            "light"
        ],
        size: {
            value: 100,
            unit: "pack"
        },
        price: 350,
        diet: [
            "vegan",
            "gluten-free"
        ],
        ctr: 0.3,
        atc: 0.24
    },
    {
        id: "p57",
        title: "Packaged drinking water",
        brand: "Bisleri",
        category: "beverages",
        tags: [
            "water",
            "mineral",
            "bottle"
        ],
        size: {
            value: 20,
            unit: "l"
        },
        price: 90,
        diet: [
            "vegan",
            "sugar-free",
            "gluten-free"
        ],
        ctr: 0.6,
        atc: 0.55
    },
    {
        id: "p58",
        title: "Cola, no sugar",
        brand: "Coca-Cola",
        category: "beverages",
        tags: [
            "soft drink",
            "fizzy",
            "diet",
            "soda"
        ],
        size: {
            value: 750,
            unit: "ml"
        },
        price: 45,
        diet: [
            "vegan",
            "sugar-free"
        ],
        ctr: 0.5,
        atc: 0.44
    },
    {
        id: "p59",
        title: "Tender coconut water",
        brand: "Cocofly",
        category: "beverages",
        tags: [
            "nariyal pani",
            "natural",
            "hydration"
        ],
        size: {
            value: 200,
            unit: "ml"
        },
        price: 50,
        diet: [
            "vegan",
            "gluten-free",
            "sugar-free"
        ],
        ctr: 0.26,
        atc: 0.21
    },
    {
        id: "p5a",
        title: "Rose milkshake",
        brand: "Amul",
        category: "beverages",
        tags: [
            "milk drink",
            "flavoured",
            "sweet"
        ],
        size: {
            value: 180,
            unit: "ml"
        },
        price: 30,
        diet: [
            "vegetarian",
            "gluten-free"
        ],
        ctr: 0.22,
        atc: 0.18
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
            "detergent",
            "bartan"
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
            "clothes",
            "kapda"
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
    {
        id: "p63",
        title: "Dishwash bar",
        brand: "Vim",
        category: "household",
        tags: [
            "cleaning",
            "utensil",
            "bartan",
            "soap"
        ],
        size: {
            value: 4,
            unit: "pack"
        },
        price: 60,
        diet: [],
        ctr: 0.45,
        atc: 0.4
    },
    {
        id: "p64",
        title: "Liquid laundry detergent",
        brand: "Ariel",
        category: "household",
        tags: [
            "washing",
            "clothes",
            "front load"
        ],
        size: {
            value: 2,
            unit: "l"
        },
        price: 590,
        diet: [],
        ctr: 0.35,
        atc: 0.29
    },
    {
        id: "p65",
        title: "Floor cleaner, citrus",
        brand: "Lizol",
        category: "household",
        tags: [
            "cleaning",
            "disinfectant",
            "phenyl",
            "pocha"
        ],
        size: {
            value: 2,
            unit: "l"
        },
        price: 380,
        diet: [],
        ctr: 0.5,
        atc: 0.43
    },
    {
        id: "p66",
        title: "Toilet cleaner",
        brand: "Harpic",
        category: "household",
        tags: [
            "cleaning",
            "bathroom",
            "disinfectant"
        ],
        size: {
            value: 1,
            unit: "l"
        },
        price: 195,
        diet: [],
        ctr: 0.52,
        atc: 0.46
    },
    {
        id: "p67",
        title: "Glass cleaner spray",
        brand: "Colin",
        category: "household",
        tags: [
            "cleaning",
            "window",
            "spray"
        ],
        size: {
            value: 500,
            unit: "ml"
        },
        price: 110,
        diet: [],
        ctr: 0.33,
        atc: 0.28
    },
    {
        id: "p68",
        title: "Garbage bags, medium",
        brand: "Ezee",
        category: "household",
        tags: [
            "bin bags",
            "dustbin",
            "kachra"
        ],
        size: {
            value: 30,
            unit: "pack"
        },
        price: 140,
        diet: [],
        ctr: 0.41,
        atc: 0.36
    },
    {
        id: "p69",
        title: "Aluminium foil roll",
        brand: "Freshwrapp",
        category: "household",
        tags: [
            "kitchen",
            "wrap",
            "foil"
        ],
        size: {
            value: 72,
            unit: "pack"
        },
        price: 160,
        diet: [],
        ctr: 0.29,
        atc: 0.24
    },
    {
        id: "p6a",
        title: "Cling film wrap",
        brand: "Freshwrapp",
        category: "household",
        tags: [
            "kitchen",
            "wrap",
            "plastic"
        ],
        size: {
            value: 30,
            unit: "pack"
        },
        price: 120,
        diet: [],
        ctr: 0.2,
        atc: 0.16
    },
    {
        id: "p6b",
        title: "Scrub pads, pack of 6",
        brand: "Scotch-Brite",
        category: "household",
        tags: [
            "cleaning",
            "utensil",
            "sponge"
        ],
        size: {
            value: 6,
            unit: "pack"
        },
        price: 90,
        diet: [],
        ctr: 0.38,
        atc: 0.33
    },
    {
        id: "p6c",
        title: "Microfibre cleaning cloth",
        brand: "Scotch-Brite",
        category: "household",
        tags: [
            "cleaning",
            "duster",
            "wipe"
        ],
        size: {
            value: 3,
            unit: "pack"
        },
        price: 180,
        diet: [],
        ctr: 0.22,
        atc: 0.18
    },
    {
        id: "p6d",
        title: "Spin mop with bucket",
        brand: "Spotzero",
        category: "household",
        tags: [
            "cleaning",
            "pocha",
            "floor"
        ],
        price: 1250,
        diet: [],
        ctr: 0.18,
        atc: 0.12
    },
    {
        id: "p6e",
        title: "Mosquito repellent refill",
        brand: "Good Knight",
        category: "household",
        tags: [
            "pest",
            "machhar",
            "liquid"
        ],
        size: {
            value: 45,
            unit: "ml"
        },
        price: 85,
        diet: [],
        ctr: 0.44,
        atc: 0.39
    },
    {
        id: "p6f",
        title: "Cockroach killer gel",
        brand: "Hit",
        category: "household",
        tags: [
            "pest",
            "insect",
            "spray"
        ],
        size: {
            value: 20,
            unit: "g"
        },
        price: 210,
        diet: [],
        ctr: 0.24,
        atc: 0.2
    },
    {
        id: "p6g",
        title: "Air freshener, lavender",
        brand: "Godrej Aer",
        category: "household",
        tags: [
            "room spray",
            "fragrance",
            "home"
        ],
        size: {
            value: 220,
            unit: "ml"
        },
        price: 225,
        diet: [],
        ctr: 0.27,
        atc: 0.22
    },
    {
        id: "p6h",
        title: "Naphthalene balls",
        brand: "Maxo",
        category: "household",
        tags: [
            "wardrobe",
            "moth",
            "freshener"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 70,
        diet: [],
        ctr: 0.14,
        atc: 0.11
    },
    {
        id: "p6i",
        title: "Fabric conditioner, rose",
        brand: "Comfort",
        category: "household",
        tags: [
            "washing",
            "clothes",
            "softener"
        ],
        size: {
            value: 860,
            unit: "ml"
        },
        price: 245,
        diet: [],
        ctr: 0.26,
        atc: 0.21
    },
    {
        id: "p6j",
        title: "Bathroom cleaning brush",
        brand: "Gala",
        category: "household",
        tags: [
            "cleaning",
            "toilet",
            "brush"
        ],
        price: 150,
        diet: [],
        ctr: 0.16,
        atc: 0.13
    },
    {
        id: "p6k",
        title: "Matchbox, pack of 10",
        brand: "Homelite",
        category: "household",
        tags: [
            "kitchen",
            "fire",
            "essentials"
        ],
        size: {
            value: 10,
            unit: "pack"
        },
        price: 20,
        diet: [],
        ctr: 0.31,
        atc: 0.28
    },
    {
        id: "p6l",
        title: "LED bulb, 9W cool white",
        brand: "Philips",
        category: "household",
        tags: [
            "lighting",
            "bulb",
            "electrical"
        ],
        size: {
            value: 2,
            unit: "pack"
        },
        price: 240,
        diet: [],
        ctr: 0.29,
        atc: 0.24
    },
    // ---- personal care -------------------------------------------------------
    {
        id: "pd0",
        title: "Bathing soap, sandal",
        brand: "Mysore Sandal",
        category: "personal care",
        tags: [
            "soap",
            "bath",
            "fragrance"
        ],
        size: {
            value: 4,
            unit: "pack"
        },
        price: 220,
        diet: [],
        ctr: 0.42,
        atc: 0.36
    },
    {
        id: "pd1",
        title: "Anti-dandruff shampoo",
        brand: "Head & Shoulders",
        category: "personal care",
        tags: [
            "hair",
            "shampoo",
            "scalp"
        ],
        size: {
            value: 650,
            unit: "ml"
        },
        price: 560,
        diet: [],
        ctr: 0.37,
        atc: 0.3
    },
    {
        id: "pd2",
        title: "Toothpaste, whitening",
        brand: "Colgate",
        category: "personal care",
        tags: [
            "dental",
            "brush",
            "oral"
        ],
        size: {
            value: 200,
            unit: "g"
        },
        price: 135,
        diet: [],
        ctr: 0.55,
        atc: 0.48
    },
    {
        id: "pd3",
        title: "Handwash refill, aloe",
        brand: "Dettol",
        category: "personal care",
        tags: [
            "soap",
            "hygiene",
            "liquid"
        ],
        size: {
            value: 1500,
            unit: "ml"
        },
        price: 280,
        diet: [],
        ctr: 0.4,
        atc: 0.35
    },
    {
        id: "pd4",
        title: "Hand sanitiser",
        brand: "Dettol",
        category: "personal care",
        tags: [
            "hygiene",
            "alcohol",
            "gel"
        ],
        size: {
            value: 500,
            unit: "ml"
        },
        price: 180,
        diet: [],
        ctr: 0.21,
        atc: 0.17
    },
    {
        id: "pd5",
        title: "Deodorant spray",
        brand: "Nivea",
        category: "personal care",
        tags: [
            "body spray",
            "fragrance",
            "roll on"
        ],
        size: {
            value: 150,
            unit: "ml"
        },
        price: 260,
        diet: [],
        ctr: 0.28,
        atc: 0.23
    },
    {
        id: "pd6",
        title: "Coconut hair oil",
        brand: "Parachute",
        category: "personal care",
        tags: [
            "hair",
            "oil",
            "nariyal"
        ],
        size: {
            value: 600,
            unit: "ml"
        },
        price: 290,
        diet: [],
        ctr: 0.39,
        atc: 0.34
    },
    {
        id: "pd7",
        title: "Sanitary pads, XL",
        brand: "Whisper",
        category: "personal care",
        tags: [
            "feminine hygiene",
            "napkin"
        ],
        size: {
            value: 30,
            unit: "pack"
        },
        price: 330,
        diet: [],
        ctr: 0.33,
        atc: 0.29
    },
    {
        id: "pd8",
        title: "Toilet paper rolls",
        brand: "Origami",
        category: "personal care",
        tags: [
            "tissue",
            "bathroom",
            "roll"
        ],
        size: {
            value: 6,
            unit: "pack"
        },
        price: 240,
        diet: [],
        ctr: 0.3,
        atc: 0.25
    },
    // ---- baby ----------------------------------------------------------------
    {
        id: "pe0",
        title: "Baby diapers, pants M",
        brand: "Pampers",
        category: "baby",
        tags: [
            "nappy",
            "infant",
            "toddler"
        ],
        size: {
            value: 62,
            unit: "pack"
        },
        price: 950,
        diet: [],
        ctr: 0.36,
        atc: 0.31
    },
    {
        id: "pe1",
        title: "Baby wipes, fragrance-free",
        brand: "Himalaya",
        category: "baby",
        tags: [
            "wipes",
            "infant",
            "gentle"
        ],
        size: {
            value: 72,
            unit: "pack"
        },
        price: 190,
        diet: [],
        ctr: 0.3,
        atc: 0.26
    },
    {
        id: "pe2",
        title: "Baby cereal, rice",
        brand: "Nestlé Cerelac",
        category: "baby",
        tags: [
            "infant food",
            "porridge",
            "weaning"
        ],
        size: {
            value: 300,
            unit: "g"
        },
        price: 285,
        diet: [
            "vegetarian"
        ],
        ctr: 0.24,
        atc: 0.2
    },
    // ---- pet -----------------------------------------------------------------
    {
        id: "pf0",
        title: "Adult dog food, chicken",
        brand: "Pedigree",
        category: "pet",
        tags: [
            "dog",
            "kibble",
            "pet food"
        ],
        size: {
            value: 3,
            unit: "kg"
        },
        price: 780,
        diet: [],
        ctr: 0.27,
        atc: 0.23
    },
    {
        id: "pf1",
        title: "Cat litter, clumping",
        brand: "Drools",
        category: "pet",
        tags: [
            "cat",
            "litter",
            "pet care"
        ],
        size: {
            value: 5,
            unit: "kg"
        },
        price: 650,
        diet: [],
        ctr: 0.17,
        atc: 0.14
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
    "recallOrder",
    ()=>recallOrder,
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
function recallOrder(hits) {
    const lex = (h)=>h.signals.reduce((acc, x)=>x.key === "lexical" || x.key === "synonym" ? acc + x.value : acc, 0);
    return [
        ...hits
    ].sort((a, b)=>lex(b) - lex(a)).map((h)=>h.product.id);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$catalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search/catalogue.ts [app-client] (ecmascript)");
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
;
/* ------------------------------------------------------ stage clock --
 * Durations of the three pipeline stages, then a beat on the settled state.
 * Everything visual below is a pure function of (activeStage, prog), so
 * retiming the run happens here and nowhere else.
 */ /** Each stage names what it produces — the strip explains itself. */ const STAGES = [
    {
        name: "parse",
        note: "words → entities"
    },
    {
        name: "recall",
        note: "BM25 candidates"
    },
    {
        name: "rescore",
        note: "signals decide"
    }
];
const DURS = [
    1400,
    1900,
    1700
];
const HOLD = 900;
const TOTAL = DURS[0] + DURS[1] + DURS[2] + HOLD;
/** Delay between the panel becoming visible and the query starting to type. */ const ARM_MS = 450;
const CHAR_MS = 72;
/** A keystroke re-runs the pipeline this long after typing stops. */ const DEBOUNCE_MS = 340;
/** Beat on the finished result before the loop moves to the next query. */ const CYCLE_MS = 1800;
const clamp01 = (v)=>Math.max(0, Math.min(1, v));
const easeOutCubic = (v)=>1 - Math.pow(1 - v, 3);
const easeInOutCubic = (v)=>v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;
/** Which stage is running, and how far through it. */ function phaseOf(t) {
    if (t === null) return {
        active: -1,
        prog: 0
    };
    let e = t;
    for(let i = 0; i < 3; i++){
        if (e < DURS[i]) return {
            active: i,
            prog: e / DURS[i]
        };
        e -= DURS[i];
    }
    return {
        active: 3,
        prog: 1
    };
}
/**
 * Auto-typed while the visitor hasn't taken the panel over.
 *
 * "gluten free bread" leads because it is the clearest demonstration: one
 * exact match, then four rows visibly demoted for failing the constraint.
 * With the catalogue grown past 160 products there are now five genuine
 * dairy-free 1L milks, so that query returns a flat run of near-identical
 * scores and no demoted row — a correct result, but a duller opening.
 */ const EXAMPLES = [
    "gluten free bread",
    "dairy free milk 1l",
    "cheap snacks under 100",
    "organic vegetables"
];
/** The query the panel types to itself the first time it comes into view. */ const SAMPLE = EXAMPLES[0];
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
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    /* `touched` stops the demo loop for good; `announce` fills the live region
     so the handover isn't a silent change for a screen reader. `queried`
     flips on the first real keystroke, which is when the chrome pill goes
     back to reporting hits and timing. */ const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [queried, setQueried] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [announce, setAnnounce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openRow, setOpenRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* Elapsed ms inside the current pipeline run; null between runs. */ const [t, setT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    /* True once a full run has finished. Before that the panel stays quiet
     while the query types itself; after it, typing updates results live. */ const [hasRun, setHasRun] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /** Wall-clock marks. Refs, not state — the loop reads them every frame. */ const autoAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const runAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const runT0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cycleAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const armed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /** Which example the loop is on. */ const exampleIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* The loop reads this every frame and must not be re-created when it flips,
     so it is a ref shadowing the state rather than an effect dependency. */ const touchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    touchedRef.current = touched;
    /* Arm on visibility, not on mount: the section sits well below the fold, so
     a run started at mount would be over before anyone reached it. Once only —
     the observer disconnects itself. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchConsole.useEffect": ()=>{
            const el = panelRef.current;
            if (!el || !ready || reduced) return;
            const io = new IntersectionObserver({
                "SearchConsole.useEffect": (entries)=>{
                    if (!entries.some({
                        "SearchConsole.useEffect": (e)=>e.isIntersecting
                    }["SearchConsole.useEffect"]) || armed.current) return;
                    armed.current = true;
                    autoAt.current = Date.now() + ARM_MS;
                    io.disconnect();
                }
            }["SearchConsole.useEffect"], {
                threshold: 0.4
            });
            io.observe(el);
            return ({
                "SearchConsole.useEffect": ()=>io.disconnect()
            })["SearchConsole.useEffect"];
        }
    }["SearchConsole.useEffect"], [
        ready,
        reduced
    ]);
    /* One rAF loop drives typing, the debounce and the stage clock, all from
     wall-clock elapsed time. Not setInterval: browsers throttle and freeze
     timers in inactive tabs, so a timer-driven run stalls half finished.
     rAF pauses while hidden, and reading Date.now() each frame means the
     elapsed value self-corrects the moment it resumes. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchConsole.useEffect": ()=>{
            if (!ready) return;
            if (reduced) {
                // No staged run at all — show the finished state and leave it there.
                setQuery(SAMPLE);
                setT(TOTAL);
                setHasRun(true);
                return;
            }
            let raf = 0;
            const loop = {
                "SearchConsole.useEffect.loop": ()=>{
                    raf = requestAnimationFrame(loop);
                    const now = Date.now();
                    const auto = !touchedRef.current;
                    if (auto && autoAt.current !== null && now >= autoAt.current) {
                        const text = EXAMPLES[exampleIdx.current];
                        const chars = Math.min(text.length, Math.floor((now - autoAt.current) / CHAR_MS) + 1);
                        setQuery(text.slice(0, chars));
                        runAt.current = now + DEBOUNCE_MS;
                        if (chars >= text.length) autoAt.current = null;
                    }
                    if (runAt.current !== null && now >= runAt.current) {
                        runAt.current = null;
                        runT0.current = now;
                    }
                    if (runT0.current !== null) {
                        const e = now - runT0.current;
                        if (e >= TOTAL) {
                            runT0.current = null;
                            setT(TOTAL);
                            setHasRun(true);
                            /* Keep going: hold the finished result for a beat, then move on to
             the next query. The loop only stops when the visitor takes over. */ if (auto) cycleAt.current = now + CYCLE_MS;
                        } else {
                            setT(e);
                        }
                    }
                    if (auto && cycleAt.current !== null && now >= cycleAt.current) {
                        cycleAt.current = null;
                        exampleIdx.current = (exampleIdx.current + 1) % EXAMPLES.length;
                        setQuery("");
                        setT(null);
                        setOpenRow(null);
                        autoAt.current = now + 320;
                    }
                }
            }["SearchConsole.useEffect.loop"];
            raf = requestAnimationFrame(loop);
            return ({
                "SearchConsole.useEffect": ()=>cancelAnimationFrame(raf)
            })["SearchConsole.useEffect"];
        }
    }["SearchConsole.useEffect"], [
        ready,
        reduced
    ]);
    /** Queue a run on the debounce; Enter and the sample chips skip the wait. */ const queueRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchConsole.useCallback[queueRun]": function() {
            let immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            autoAt.current = null;
            if (immediate) {
                runAt.current = null;
                runT0.current = Date.now();
            } else {
                runAt.current = Date.now() + DEBOUNCE_MS;
            }
        }
    }["SearchConsole.useCallback[queueRun]"], []);
    /* ------------------------------------------------------- the engine --
   * Runs synchronously on every keystroke. The catalogue is ~40 documents,
   * so a full parse + BM25 recall + rescore is well under a millisecond —
   * the reported timing is measured, not decorative.
   */ const computed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchConsole.useMemo[computed]": ()=>{
            const t0 = performance.now();
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectBrand"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$parse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseQuery"])(query), __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allBrands"]);
            /* Recall the whole candidate set, then keep the top five. The count is
       what the header animates toward during the recall stage — "scanned N"
       is a real number, not a decorative one. */ const all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["search"])(p, Number.MAX_SAFE_INTEGER);
            const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalise"])(all.slice(0, 5));
            return {
                parsed: p,
                hits: h,
                candidates: all.length,
                /* What BM25 alone returned, so the rescore stage has a real "before"
         order to travel from. */ recall: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$rank$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recallOrder"])(h),
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
    const { parsed, hits, candidates, recall, ms } = holding ? held : computed;
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
            autoAt.current = null;
            runAt.current = null;
            runT0.current = null;
            setT(null);
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
            queueRun(true);
            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
        }
    }["SearchConsole.useCallback[runSample]"], [
        queueRun
    ]);
    /* Row heights and the flex gap, measured after layout. Both stacking orders
     are derived from these, so a wrapped title is accounted for exactly. */ const resultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [geom, setGeom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        heights: [],
        gap: 12
    });
    /* ------------------------------------------------ staged presentation --
   * Rows live in normal flow. They used to be absolutely positioned at a
   * fixed row height, which collides the moment a title wraps — and titles
   * wrap at every narrow width. Reveal and reorder are therefore computed per
   * frame rather than handed to a CSS transition: the style object is
   * rewritten every frame, so a transition would restart each time and the
   * value would stay pinned at its start.
   */ const { active, prog } = phaseOf(t);
    const n = hits.length;
    const recallMs = n === 0 ? -1 : active === 1 ? prog * DURS[1] : active >= 2 ? DURS[1] * 4 : -1;
    const stagger = n ? DURS[1] / n : 0;
    const ageOf = (recallRank)=>recallMs - recallRank * stagger;
    /* ------------------------------------------------------- the reorder --
   * The DOM order never changes: rows are always rendered in their final,
   * rescored order and a transform puts them where recall had them. Re-sorting
   * the array instead would swap two rows between frames with no travel — the
   * reorder is the whole point of the stage, so it has to be visible.
   *
   * Doing that needs real geometry, because rows are in normal flow and a
   * wrapped title makes one taller than its neighbours. Heights are measured
   * after layout and the two stacking orders are accumulated from them.
   */ const ranked = hits.map((h, finalRank)=>{
        const r = recall.indexOf(h.product.id);
        return {
            hit: h,
            finalRank,
            recallRank: r < 0 ? finalRank : r
        };
    });
    const travel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchConsole.useMemo[travel]": ()=>{
            if (geom.heights.length !== ranked.length) return ranked.map({
                "SearchConsole.useMemo[travel]": ()=>0
            }["SearchConsole.useMemo[travel]"]);
            const { heights, gap } = geom;
            const top = {
                "SearchConsole.useMemo[travel].top": (order)=>{
                    const out = [];
                    let y = 0;
                    for (const finalRank of order){
                        out[finalRank] = y;
                        y += heights[finalRank] + gap;
                    }
                    return out;
                }
            }["SearchConsole.useMemo[travel].top"];
            const finalTop = top(ranked.map({
                "SearchConsole.useMemo[travel].finalTop": (r)=>r.finalRank
            }["SearchConsole.useMemo[travel].finalTop"]));
            const recallTop = top([
                ...ranked
            ].sort({
                "SearchConsole.useMemo[travel].recallTop": (a, b)=>a.recallRank - b.recallRank
            }["SearchConsole.useMemo[travel].recallTop"]).map({
                "SearchConsole.useMemo[travel].recallTop": (r)=>r.finalRank
            }["SearchConsole.useMemo[travel].recallTop"]));
            return ranked.map({
                "SearchConsole.useMemo[travel]": (r)=>recallTop[r.finalRank] - finalTop[r.finalRank]
            }["SearchConsole.useMemo[travel]"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SearchConsole.useMemo[travel]"], [
        geom,
        hits
    ]);
    const reordering = active === 2;
    /* Rows slide from their recall slot to their final one across the rescore,
     so `settle` is how far along that journey they are. */ /* Rows only sit at their recall positions while parse and recall are on
     screen. Idle (active === -1, between loop cycles) has to settle too: left
     at 0 it holds the previous run's offsets over the next run's rows, and
     because those offsets were measured against different row heights, two
     rows land on the same line. */ const settle = reordering ? easeInOutCubic(prog) : active === 0 || active === 1 ? 0 : 1;
    const dip = reordering ? 1 - 0.35 * Math.sin(Math.PI * clamp01((prog - 0.18) / 0.34)) : 1;
    /* Entity chips are the parse stage's output, so they arrive with it rather
     than the instant the engine returns — otherwise the answer is on screen
     before the step that produces it has started. */ const chipCount = active < 0 ? hasRun ? parsed.entities.length : 0 : active === 0 ? Math.floor(prog * (parsed.entities.length + 0.4)) : parsed.entities.length;
    /* Measure after layout, before paint: the travel offsets are needed on the
     very next frame the stage clock reads them. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SearchConsole.useLayoutEffect": ()=>{
            const host = resultsRef.current;
            if (!host) return;
            const els = Array.from(host.querySelectorAll(".result"));
            if (els.length === 0) {
                setGeom({
                    "SearchConsole.useLayoutEffect": (g)=>g.heights.length ? {
                            heights: [],
                            gap: g.gap
                        } : g
                }["SearchConsole.useLayoutEffect"]);
                return;
            }
            const heights = els.map({
                "SearchConsole.useLayoutEffect.heights": (el)=>el.getBoundingClientRect().height
            }["SearchConsole.useLayoutEffect.heights"]);
            /* Read the gap off the layout rather than hardcoding the stylesheet's
       value, so the two can never drift apart. */ const gap = els.length > 1 ? els[1].getBoundingClientRect().top - els[0].getBoundingClientRect().bottom : 12;
            setGeom({
                "SearchConsole.useLayoutEffect": (g)=>g.heights.length === heights.length && g.heights.every({
                        "SearchConsole.useLayoutEffect": (h, i)=>Math.abs(h - heights[i]) < 0.5
                    }["SearchConsole.useLayoutEffect"]) && Math.abs(g.gap - gap) < 0.5 ? g : {
                        heights,
                        gap
                    }
            }["SearchConsole.useLayoutEffect"]);
        }
    }["SearchConsole.useLayoutEffect"], [
        hits,
        openRow
    ]);
    /* Says in words what the panel is doing right now. The rail shows where in
     the pipeline we are; this says what that step means. */ const caption = active === 0 ? "finding entities" : active === 1 ? "recalling candidates" : active === 2 ? "re-ranking" : t === null ? "query understanding" : "final order";
    /* Header meta. `ms` is the measured figure animated up to itself — the
     number it lands on is the one the engine actually took. */ const runMs = DURS[0] + DURS[1] + DURS[2];
    const overall = t === null ? 0 : clamp01(t / runMs);
    const status = active >= 0 && active < 3 ? "live" : t === null ? "idle" : "settled";
    const scanned = active === 1 ? Math.round(candidates * prog) : null;
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
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["num"])("search"),
                            " — Live · query understanding"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 400,
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
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            " the third result outranked the first."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__sub",
                        "data-reveal": "140",
                        children: "Search sits where language meets systems, and that’s exactly where I like to live. Query understanding, ranking models, ingestion pipelines that never sleep — the result is platforms serving 25K+ requests a minute across a 10-million-product catalog that still feel personal."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchConsole.tsx",
                lineNumber: 399,
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
                        lineNumber: 419,
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
                                lineNumber: 424,
                                columnNumber: 16
                            }, this),
                            " them — every row tells you why it landed where it did."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 422,
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
                                        className: "panel__title".concat(active >= 0 && active < 3 ? " is-live" : ""),
                                        children: caption
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel__status is-".concat(status),
                                        children: touched && !queried ? "your turn" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                status,
                                                active === 0 || active < 0 && !hasRun ? "" : scanned !== null ? " · ".concat(scanned.toLocaleString("en-IN"), " scanned") : " · ".concat(hits.length, " hit").concat(hits.length === 1 ? "" : "s"),
                                                mounted ? " · ".concat((ms * overall).toFixed(2), " ms") : ""
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel__body".concat(active >= 0 && active < 3 ? " is-running" : ""),
                                "data-stage": active,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "rail",
                                        "aria-label": "Pipeline stages",
                                        children: STAGES.map((param, i)=>{
                                            let { name, note } = param;
                                            const state = active > i ? "done" : active === i ? "live" : "idle";
                                            const fill = state === "done" ? 1 : state === "live" ? prog : 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rail__step is-".concat(state),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rail__marker",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rail__dot"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rail__line",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rail__fill",
                                                                    style: {
                                                                        transform: "scaleY(".concat(fill.toFixed(3), ")")
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rail__text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rail__name",
                                                                children: name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rail__note",
                                                                children: note
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchConsole.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, name, true, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 470,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 465,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel__main",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel__query".concat(touched ? " is-live" : ""),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "panel__glyph",
                                                        "aria-hidden": "true",
                                                        children: "⌕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 17
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
                                                            queueRun();
                                                        },
                                                        onFocus: takeOver,
                                                        onKeyDown: (e)=>{
                                                            takeOver();
                                                            // Enter skips the debounce — waiting 340ms after a deliberate
                                                            // "go" reads as lag rather than as settling.
                                                            if (e.key === "Enter") queueRun(true);
                                                        },
                                                        placeholder: "try dairy free milk 1l…",
                                                        "aria-label": "Search the demo catalogue",
                                                        spellCheck: false,
                                                        autoComplete: "off"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 17
                                                    }, this),
                                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "panel__clear",
                                                        onClick: ()=>{
                                                            /* Clear is a reset, not a stop: it hands the panel back
                         to the demo loop from the first example. Focus stays
                         off the field — focusing it invites a keystroke, and
                         the first keystroke would immediately stop the loop
                         the visitor just asked to see again. */ setOpenRow(null);
                                                            setTouched(false);
                                                            setQueried(false);
                                                            touchedRef.current = false;
                                                            exampleIdx.current = 0;
                                                            runAt.current = null;
                                                            runT0.current = null;
                                                            cycleAt.current = null;
                                                            if (reduced) {
                                                                /* No rAF loop is running to pick the demo back up, so
                           restore the settled state directly rather than
                           leaving an empty field nothing will ever fill. */ setQuery(SAMPLE);
                                                                setT(TOTAL);
                                                                setHasRun(true);
                                                                autoAt.current = null;
                                                                return;
                                                            }
                                                            setQuery("");
                                                            setT(null);
                                                            setHasRun(false);
                                                            autoAt.current = Date.now() + ARM_MS;
                                                        },
                                                        children: "Clear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 494,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel__chips",
                                                children: parsed.entities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "panel__nochips",
                                                    children: query.trim() ? "no entities recognised — falling back to plain text" : " "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 19
                                                }, this) : parsed.entities.slice(0, chipCount).map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, this),
                                                            e.label
                                                        ]
                                                    }, "".concat(e.type, "-").concat(e.label), true, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 560,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "panel__results",
                                                ref: resultsRef,
                                                children: [
                                                    hits.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "panel__empty",
                                                        children: query.trim() ? "Nothing in the catalogue matches. It returns nothing rather than guessing." : "Start typing to search ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2f$catalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["catalogue"].length - 1, " products.")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchConsole.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 19
                                                    }, this),
                                                    ranked.map((param)=>{
                                                        let { hit: h, finalRank, recallRank } = param;
                                                        const isOpen = h.product.id === openRow;
                                                        const max = Math.max(...h.signals.map((sig)=>Math.abs(sig.value)), 1);
                                                        const e = easeOutCubic(clamp01(ageOf(recallRank) / 260));
                                                        /* Where recall put it, closing on where the rescore wants it. */ const dy = travel[finalRank] * (1 - settle);
                                                        /* Rank counts off the order currently on screen, so the
                     numbers flip mid-travel — which is what makes it read as a
                     re-rank rather than a crossfade. */ const shown = settle > 0.5 ? finalRank : recallRank;
                                                        var _h_filteredOut;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "result".concat(isOpen ? " is-open" : "").concat(h.filteredOut ? " is-demoted" : ""),
                                                            /* Emitted directly, never transitioned — see the note above
                     the row maths. */ style: {
                                                                opacity: (0.25 + 0.75 * e) * dip,
                                                                transform: "translate3d(".concat((10 * (1 - e)).toFixed(1), "px, ").concat(dy.toFixed(1), "px, 0)"),
                                                                zIndex: Math.abs(dy) > 0.5 ? 1 : undefined
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
                                                                                shown + 1
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 619,
                                                                            columnNumber: 25
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
                                                                                    lineNumber: 624,
                                                                                    columnNumber: 29
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "result__thumb"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                                    lineNumber: 633,
                                                                                    columnNumber: 29
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
                                                                                                    lineNumber: 639,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                                            lineNumber: 636,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "result__meta",
                                                                                            children: (_h_filteredOut = h.filteredOut) !== null && _h_filteredOut !== void 0 ? _h_filteredOut : [
                                                                                                h.product.brand,
                                                                                                h.product.price > 0 ? "₹".concat(h.product.price.toLocaleString("en-IN")) : null
                                                                                            ].filter(Boolean).join(" · ")
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                                            lineNumber: 645,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                                    lineNumber: 635,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 621,
                                                                            columnNumber: 25
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
                                                                                lineNumber: 660,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "result__score".concat(h.norm > 0.7 ? " is-high" : ""),
                                                                            children: h.norm.toFixed(2)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "result__caret",
                                                                            "aria-hidden": "true",
                                                                            children: isOpen ? "hide" : "why?"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 670,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 23
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
                                                                                    lineNumber: 679,
                                                                                    columnNumber: 31
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
                                                                                        lineNumber: 681,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                                    lineNumber: 680,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "breakdown__val",
                                                                                    children: [
                                                                                        s.value >= 0 ? "+" : "−",
                                                                                        Math.abs(s.value).toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                                    lineNumber: 686,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, s.key + s.label, true, {
                                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                                            lineNumber: 678,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                                    lineNumber: 676,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, h.product.id, true, {
                                                            fileName: "[project]/components/SearchConsole.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/SearchConsole.tsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 459,
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
                                                    lineNumber: 715,
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
                                                            lineNumber: 717,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SearchConsole.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SearchConsole.tsx",
                                            lineNumber: 707,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 706,
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
                                                    lineNumber: 724,
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
                                                        lineNumber: 728,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SearchConsole.tsx",
                                            lineNumber: 723,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchConsole.tsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchConsole.tsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "panel__note",
                        children: "// real BM25 + rule-based NER, in your browser · CTR/ATC are synthetic priors, not telemetry"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sr-only",
                        role: "status",
                        "aria-live": "polite",
                        children: announce
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 749,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "searchband__footnote",
                        "data-reveal": "220",
                        children: "Lexical match gets you candidates. Synonyms, attribute fit and demand signals decide who actually deserves the top slot."
                    }, void 0, false, {
                        fileName: "[project]/components/SearchConsole.tsx",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchConsole.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchConsole.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s(SearchConsole, "vJj7zQckS1z0jiOfsRzBhPhI//E=", false, function() {
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