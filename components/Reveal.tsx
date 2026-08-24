"use client";

import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element as it enters the viewport.
 *
 * Two safeguards carried over from the prototype:
 *  - anything already above the fold is revealed on the first frame;
 *  - a 1500ms fallback reveals everything if the observer never fires.
 *
 * Per-element stagger comes from `data-reveal="<ms>"`, applied as
 * transition-delay. Mounted once, near the root.
 */
export default function Reveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const show = (el: HTMLElement) => el.classList.add("is-revealed");

    if (reduced) {
      els.forEach(show);
      return;
    }

    els.forEach((el) => {
      const delay = el.dataset.reveal;
      if (delay) el.style.transitionDelay = `${delay}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => {
      // Already in view on load — reveal immediately rather than waiting.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) show(el);
      else io.observe(el);
    });

    const fallback = window.setTimeout(() => els.forEach(show), 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
