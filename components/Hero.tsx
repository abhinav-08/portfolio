"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { identity, socials } from "@/lib/site";
import { facts, suggestions } from "@/lib/content";
import { useReducedMotion } from "@/lib/hooks";

const FULL = "Abhinav Tyagi";
const SEED = "abhi";
const GHOST = "nav Tyagi";

/** useLayoutEffect that degrades to useEffect on the server. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
  const { reduced, ready } = useReducedMotion();

  /* ------------------------------------------------ name autosuggest --
   * SSR (and the first client render) emit the *finished* state, so the
   * name is correct without JS and there is no hydration mismatch. A
   * layout effect rewinds to the empty state before the browser paints,
   * so the animation starts cleanly with no flash of the final name.
   */
  const [typed, setTyped] = useState(FULL);
  const [ghost, setGhost] = useState("");
  const [dot, setDot] = useState(".");
  const [caret, setCaret] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [suggestActive, setSuggestActive] = useState(-1);
  const rewound = useRef(false);

  useIsoLayoutEffect(() => {
    if (rewound.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    rewound.current = true;
    setTyped("");
    setDot("");
    setCaret(true);
  }, []);

  useEffect(() => {
    if (!ready || reduced) return;

    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    const START = 340;
    const STEP = 150;
    const typedAt = START + SEED.length * STEP; // 940ms

    SEED.split("").forEach((_, i) => {
      at(START + (i + 1) * STEP, () => setTyped(SEED.slice(0, i + 1)));
    });

    at(typedAt + 220, () => {
      setGhost(GHOST);
      setSuggestOpen(true);
    });
    at(typedAt + 900, () => setSuggestActive(0));
    at(typedAt + 1700, () => {
      setTyped(FULL);
      setGhost("");
      setDot(".");
      setCaret(false);
      setSuggestOpen(false);
      setSuggestActive(-1);
    });

    return () => timers.forEach(clearTimeout);
  }, [ready, reduced]);

  /* ------------------------------------------------------- live clock */
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  /* ----------------------------------------------------- magnetic CTA */
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (!ready || reduced) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ctaRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        el.style.transform =
          dist < 180 ? `translate(${dx * 0.15}px, ${dy * 0.15}px)` : "translate(0, 0)";
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ready, reduced]);

  return (
    <section className="hero" id="top">
      <div>
        <p className="eyebrow hero__eyebrow">
          <span className="rule-inline" aria-hidden="true" />
          Backend &amp; Search Engineer · Gurugram, IN
        </p>

        <div className="hero__name-wrap">
          <h1 className="hero__name" aria-label={FULL}>
            <span aria-hidden="true">
              {typed}
              <span className="hero__ghost">{ghost}</span>
              <span className="accent">{dot}</span>
              {caret && <span className="hero__caret" />}
            </span>
          </h1>

          {suggestOpen && (
            <div className="suggest" aria-hidden="true">
              {suggestions.map((s, i) => (
                <div
                  key={s}
                  className={`suggest__row${i === suggestActive ? " is-active" : ""}`}
                >
                  <span className="suggest__glyph">⌕</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="hero__lede">
          I teach machines what people <em>mean</em> — not just what they type. Five years of
          search platforms and ranking models that stay calm at 25K requests a minute.
        </p>

        <div className="cta-row">
          <a ref={ctaRef} className="btn btn--primary" href={`mailto:${identity.email}`}>
            Let&rsquo;s talk →
          </a>
          <a
            className="btn btn--ghost"
            href={identity.resume}
            download={identity.resumeFilename}
          >
            Resume ↓
          </a>
        </div>

        <div className="social-row">
          {socials.map((s) => (
            <a
              key={s.label}
              className={`social-link${s.accent ? " social-link--accent" : ""}`}
              href={s.href}
              {...(s.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { download: "download" in s ? s.download : undefined })}
            >
              {s.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div className="hero__figure">
        <div className="portrait">
          <div className="portrait__bloom" aria-hidden="true" />
          <div className="portrait__pool" aria-hidden="true" />
          <div className="portrait__mid" aria-hidden="true" />
          <div className="portrait__line" aria-hidden="true" />
          <picture>
            <source srcSet="/assets/portrait-cutout.webp" type="image/webp" />
            <img
              id="portrait-img"
              className="portrait__img"
              src="/assets/portrait-cutout.png"
              alt="Abhinav Tyagi"
              width={1097}
              height={1088}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <div className="portrait__meta">
          <span>Local time — {time || "--:--"}</span>
          <span>{identity.coords}</span>
        </div>

        {/* One line, values only. The BASED / TRADE / STACK / BELIEF labels are
            what forced four stacked rows; in context each value announces what
            it is, so the labels earn their space only as screen-reader text. */}
        <p className="herofacts">
          {facts.map((f, i) => (
            <span key={f.label}>
              {/* ✦, not ·, because several values contain their own "·"
                  separators — a gold dot between them was unreadable. */}
              {i > 0 && (
                <span className="herofacts__sep" aria-hidden="true">
                  {" ✦ "}
                </span>
              )}
              <span className="sr-only">{f.label}: </span>
              {f.value}
            </span>
          ))}
        </p>
      </div>

      <div className="scroll-cue" aria-hidden="true" />
    </section>
  );
}
