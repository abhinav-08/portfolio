"use client";

import { useEffect, useRef } from "react";

/**
 * One rAF-throttled passive scroll listener driving both the top progress bar
 * and the hero portrait parallax. The parallax offset is *added to* the
 * portrait's base `translateY(-8%)`, never replacing it.
 */
export default function ScrollFx() {
  const raf = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = document.getElementById("progress");
    const portrait = document.getElementById("portrait-img");

    const apply = () => {
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

    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return null;
}
