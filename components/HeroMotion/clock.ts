"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cue sheet, in seconds. The handoff authors the piece as five scenes whose
 * durations sum to 12; these are the cumulative starts.
 *
 * Query 0 · Parse 2.2 · Headline 3.8 · Recall 5.4 · Rank 7.2 · end 12.0
 */
export const CUES = {
  query: 0,
  parse: 2.2,
  headline: 3.8,
  recall: 5.4,
  rank: 7.2,
} as const;

/** Where the card has finished assembling and the hold begins. */
export const HOLD_FROM = 9.4;

/**
 * The handover, in three overlapping beats.
 *
 * The handoff ends at 12.0 because its last 0.45s crossfades back to the t=0
 * frame, which is what makes the loop seamless. Playing once, that window hands
 * over to the page instead — and a handover needs longer than a loop seam, so
 * the piece runs past the authored total rather than eating into the finale.
 *
 *  STRIP    the card loses its border, ground, chips, tag, title and marquee,
 *           leaving a serif name on the left and the portrait on the right —
 *           which is the hero's own composition.
 *  VANISH   that name and portrait fade. At full strength they must not share
 *           the frame with the hero's: two sizes of "Abhinav Tyagi" offset by
 *           half a letter reads as a double exposure, not as a match cut.
 *  GROUND   the page's ambient layers — the background field's bloom and the
 *           header — are released while the overlay is still opaque. Nobody
 *           sees them arrive; the point is that the ground is already lit by
 *           the time the card thins. Released with everything else instead,
 *           mean frame luminance fell to 14 against a settled 58, and the
 *           handover read as a dip to black.
 *  HERO     the name, portrait and the rest of the hero. Late enough that the
 *           card's name and portrait have gone: the two are the same subject
 *           at slightly different sizes and places, so any real overlap
 *           doubles rather than dissolves. Measured peak simultaneous
 *           visibility at this offset is under 0.05.
 */
export const EXIT_FROM = 11.55;
export const STRIP_DUR = 0.4;
export const VANISH_AT = EXIT_FROM + STRIP_DUR;
export const VANISH_DUR = 0.4;
export const GROUND_AT = EXIT_FROM;
export const HERO_AT = EXIT_FROM + 0.68;
export const EXIT_DUR = STRIP_DUR + VANISH_DUR;
export const TOTAL = VANISH_AT + VANISH_DUR + 0.05;

/**
 * One rAF clock in seconds, from wall time.
 *
 * Wall-clock elapsed rather than accumulated frame deltas: rAF stops while the
 * tab is hidden, and a delta-summing clock would resume exactly where it left
 * off — a visitor who switched tabs comes back to a frozen intro mid-sentence.
 * Reading Date.now() means the piece has moved on, which is the right
 * behaviour for something that plays once and gets out of the way.
 *
 * `run` gates the clock so it does not start until the caller has decided the
 * intro should play at all.
 */
export function useIntroClock(run: boolean) {
  const [t, setT] = useState(0);
  const t0 = useRef<number | null>(null);

  useEffect(() => {
    if (!run) return;
    t0.current = Date.now();
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const e = (Date.now() - (t0.current as number)) / 1000;
      setT(e >= TOTAL ? TOTAL : e);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [run]);

  return t;
}
