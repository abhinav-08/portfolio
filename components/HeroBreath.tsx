"use client";

import { useEffect } from "react";

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
 */

const BREATH_SCALE = 0.035; // ~12px of apparent radius change
const DOT_SCALE = 0.12; // anti-phase, a third of the amplitude

/** Asymmetric respiratory curve over one normalised cycle. */
function breath(p: number): number {
  if (p < 0.34) {
    const a = p / 0.34;
    return a * a * (3 - 2 * a); // inhale, eased
  }
  if (p < 0.42) return 1; // hold at the top
  const b = (p - 0.42) / 0.58;
  return 1 - b * b * (3 - 2 * b); // exhale, longer
}

export default function HeroBreath() {
  useEffect(() => {
    const field = document.getElementById("bg-breath");
    const dot = document.getElementById("work-dot");
    if (!field && !dot) return;

    const write = (v: number) => {
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

    const tick = (now: number) => {
      // dt is clamped so a backgrounded tab can't fast-forward the phase.
      const dt = last ? Math.min((now - last) / 1000, 0.064) : 0;
      last = now;
      t += dt;

      const period = 5.45 + Math.sin(t / 11.3) * 0.32 + Math.sin(t / 7.1 + 2.2) * 0.18;
      phase = (phase + dt / period) % 1;
      write(breath(phase));

      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      if (field) field.style.willChange = "transform, opacity";
      if (dot) dot.style.willChange = "transform";
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
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

    const sync = () => {
      if (onScreen && !document.hidden) start();
      else stop();
    };

    const io = hero
      ? new IntersectionObserver(
          ([e]) => {
            onScreen = e.isIntersecting;
            sync();
          },
          { threshold: 0 },
        )
      : null;
    io?.observe(hero!);

    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      stop();
      io?.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return null;
}
