/**
 * Motion helpers for the hero intro.
 *
 * Three curves and two lerps — deliberately the whole toolkit. Every value in
 * the piece is a pure function of elapsed time, so the frame at t is
 * reproducible without any animation state, which is what lets the clock pause,
 * resume and skip without anything drifting out of sync.
 *
 * Easings are the exact formulas from the design handoff's `Easing` object; do
 * not substitute lookalikes, the overshoot and the expo tail are both visible.
 */

export const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
const easeOutBack = (t: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const prog = (t: number, start: number, dur: number, ease: (v: number) => number) =>
  ease(clamp01((t - start) / dur));

/** Arrivals: fast out of the gate, long settle. */
export const enter = (t: number, s: number, d = 0.5) => prog(t, s, d, easeOutExpo);
/** Transitions between two settled states, and anything that counts. */
export const draw = (t: number, s: number, d = 0.6) => prog(t, s, d, easeInOutCubic);
/** Punctuation — overshoots past 1 before settling. Clamp opacity, not scale. */
export const pop = (t: number, s: number, d = 0.4) => prog(t, s, d, easeOutBack);
