"use client";

import { useEffect, useRef } from "react";
import { identity, socials } from "@/lib/site";
import { facts } from "@/lib/content";
import LiveClock from "@/components/LiveClock";
import { useReducedMotion } from "@/lib/hooks";

const FULL = "Abhinav Tyagi";

export default function Hero() {
  const { reduced, ready } = useReducedMotion();

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
      {/* Three blocks, not two columns. On mobile the portrait used to come
          first and pushed the name off the first screen; splitting the copy
          lets the name lead there while desktop keeps the same two-column
          composition via explicit grid placement. */}
      <div className="hero__head">
        <p className="eyebrow hero__eyebrow">
          <span className="rule-inline" aria-hidden="true" />
          Backend &amp; Search Engineer · Gurugram, IN
        </p>

        <h1 className="hero__name">
          {FULL}
          <span className="accent">.</span>
        </h1>
      </div>

      <div className="hero__body">
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

        {/* A drawn 1px element, not a border-top — borders can't be animated
            from zero width, and this one doubles as the minute sweep's track. */}
        <div className="hero__rule" aria-hidden="true">
          <span className="hero__sweep" id="hero-sweep" />
        </div>

        <div className="portrait__meta">
          <span className="hero__meta-l">
            Local time — <LiveClock />
          </span>
          <span className="hero__meta-r">{identity.coords}</span>
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
