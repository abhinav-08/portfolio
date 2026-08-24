"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/content";

const DURATION = 1400;

/** Count-up band. Each number animates 0 → target once, on reveal. */
export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const paint = (el: HTMLElement, v: number) => {
      const dec = (el.dataset.decimals ?? "0") === "1";
      el.textContent = `${el.dataset.prefix ?? ""}${
        dec ? v.toFixed(1) : Math.round(v)
      }${el.dataset.suffix ?? ""}`;
    };

    if (reduced) {
      nodes.forEach((el) => paint(el, parseFloat(el.dataset.count!)));
      return;
    }

    const done = new WeakSet<HTMLElement>();
    const count = (el: HTMLElement) => {
      if (done.has(el)) return;
      done.add(el);
      const target = parseFloat(el.dataset.count!);
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / DURATION);
        const eased = 1 - Math.pow(1 - p, 3);
        paint(el, target * eased);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            count(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.3 },
    );

    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="statsband">
      <div className="cellgrid stats" ref={ref}>
        {stats.map((s) => (
          <div className="stat" key={s.caption}>
            <div
              className="stat__num"
              data-count={s.value}
              data-prefix={s.prefix ?? ""}
              data-suffix={s.suffix ?? ""}
            >
              {s.prefix ?? ""}
              {s.value}
              {s.suffix ?? ""}
            </div>
            <div className="stat__cap">{s.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
