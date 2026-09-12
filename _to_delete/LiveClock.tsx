"use client";

import { useEffect, useRef } from "react";

const TZ = "Asia/Kolkata";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TZ,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Seconds-past-the-minute in the target zone, for the sweep. */
function secondsIn(d: Date): number {
  const s = fmt.formatToParts(d).find((p) => p.type === "second")?.value ?? "0";
  return Number(s);
}

/**
 * Gurugram wall-clock time, ticking once a second.
 *
 * Two things beyond printing the time:
 *  - on a minute change the value rolls (out up, in from below) via the Web
 *    Animations API — transform and opacity only, so it stays off the paint
 *    path;
 *  - it drives `#hero-sweep`, a gold overlay on the metadata hairline scaled
 *    to seconds/60, which quietly turns the divider into a clock face.
 *
 * SSR renders an empty string and the real value lands in an effect —
 * rendering a live time on the server is a guaranteed hydration mismatch.
 */
export default function LiveClock() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sweep = document.getElementById("hero-sweep");
    let lastMinute = "";

    const paint = (first: boolean) => {
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

      el.animate(
        [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-6px)", opacity: 0 },
        ],
        { duration: 170, easing: "cubic-bezier(0.4,0,1,1)", fill: "forwards" },
      ).onfinish = () => {
        el.textContent = text;
        el.animate(
          [
            { transform: "translateY(6px)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          { duration: 260, easing: "cubic-bezier(0.16,1,0.3,1)", fill: "forwards" },
        );
      };
    };

    paint(true);
    const id = window.setInterval(() => paint(false), 1000);
    return () => window.clearInterval(id);
  }, []);

  // suppressHydrationWarning: the effect fills this in immediately on mount.
  return <span className="clock" ref={ref} suppressHydrationWarning />;
}
