"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cue sheet, in seconds.
 *
 * The handoff authors six cues — Query 0 · Parse 2.2 · Headline 3.8 ·
 * Recall 5.4 · Rank 7.2 · end 12.0 — where Headline is a 1.6s hard cut to a
 * full-bleed "I teach machines what people mean." The headline is gone, and
 * with it that 1.6s: deleting the shot alone would have left the search scene
 * sitting still from 3.8 to 5.4, parse finished and recall not yet started,
 * which is a longer dead frame than the shot it replaced. Recall and Rank move
 * up by exactly the shot's length instead, so every interval the handoff
 * specifies between the remaining cues is preserved.
 *
 * Query 0 · Parse 2.2 · Recall 3.8 · Rank 5.6
 */
export const CUES = {
  query: 0,
  parse: 2.2,
  recall: 3.8,
  rank: 5.6,
} as const;

/**
 * The handover, in three beats.
 *
 * The handoff ends at 12.0 because its last 0.45s crossfades back to the t=0
 * frame, which is what makes the loop seamless. Playing once, that window hands
 * over to the page instead.
 *
 *  STRIP   the card loses its border, ground, chips, tag, title and marquee,
 *          leaving a serif name and the portrait — the hero's own composition.
 *  INK     that name and portrait fade, while the overlay's ground is still
 *          opaque. Nothing of the page is visible yet.
 *  GROUND  the opaque ground lifts, revealing the page already settled
 *          underneath.
 *
 * INK finishing before GROUND is the whole trick, and it is not padding: the
 * page's name and portrait are the same subject as the card's, at a different
 * size and place. Fading both on one curve shows them at 50% together, which
 * reads as a double exposure. Separating them means the card is down to roughly
 * a quarter before any of the page shows through, and effectively gone by the
 * time it is half visible — the overlap is measured below 0.05.
 */
export const EXIT_FROM = 9.95;
export const STRIP_DUR = 0.4;
export const INK_AT = EXIT_FROM + STRIP_DUR;
export const INK_DUR = 0.34;
export const GROUND_AT = INK_AT + 0.24;
export const GROUND_DUR = 0.42;
export const EXIT_DUR = STRIP_DUR + INK_DUR;
export const TOTAL = GROUND_AT + GROUND_DUR + 0.05;

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
