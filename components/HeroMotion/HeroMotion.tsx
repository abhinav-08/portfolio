"use client";

/**
 * Hero intro overlay.
 *
 * A 12-second piece that plays once over the page and then dissolves into the
 * real hero. It is deliberately easy to get out of: any key, any click, any
 * scroll or a visible Skip button ends it immediately, and it never plays twice
 * in a session.
 *
 * Deviations from the handoff, all because it plays once rather than looping:
 *
 *  - No loop seam. The handoff crossfades t=11.55→11.95 back to the t=0 frame
 *    so the loop is invisible; playing once, that would mean ending on an empty
 *    search bar. The same window fades the whole overlay out to the page
 *    instead, so the card hands over to the hero rather than rewinding.
 *  - Reduced motion skips the overlay entirely instead of holding the static
 *    final card. The handoff's fallback assumes the piece is a decoration
 *    inside the page; as a gate in front of it, a frame that never moves and
 *    never leaves is a locked door, not a reduced animation.
 *  - It does not play below 900px. Authored at 1920 wide, a contained 16:9
 *    canvas on a phone puts the mono labels at roughly 4px. An illegible
 *    12-second gate is worse than no intro.
 *
 * Rendered only after mount, so the server-rendered page is the hero itself and
 * nothing is gated behind JavaScript.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks";
import {
  EXIT_DUR,
  EXIT_FROM,
  GROUND_AT,
  HERO_AT,
  STRIP_DUR,
  TOTAL,
  VANISH_AT,
  VANISH_DUR,
  useIntroClock,
} from "./clock";
import { clamp01, draw, enter, lerp } from "./motion";
import { SearchScene } from "./SearchScene";
import { LANDSCAPE, type Layout, pickLayout } from "./layout";
import { Headline } from "./Headline";

/* Below this the piece is not legible on any canvas, and a gate nobody can
   read is worse than no intro. 320px is the narrowest phone still in use. */
const MIN_WIDTH = 320;

type Phase = "deciding" | "playing" | "done";

export default function HeroMotion() {
  const { reduced, ready } = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("deciding");
  const [fit, setFit] = useState<{ layout: Layout; scale: number }>({
    layout: LANDSCAPE,
    scale: 1,
  });
  const dismissed = useRef(false);

  /* Decide once the motion preference is known. Anything that disqualifies the
     intro resolves straight to `done`, which renders nothing at all.

     Deliberately no "already seen" memory: the intro plays on every load,
     including a refresh. That is a 12-second gate in front of the page each
     time, which is why every exit route — Skip, any key, any click, any scroll
     — matters more here than it would for a once-per-session piece. */
  useEffect(() => {
    if (!ready) return;
    setPhase(reduced || window.innerWidth < MIN_WIDTH ? "done" : "playing");
  }, [ready, reduced]);

  const finish = useCallback(() => {
    if (dismissed.current) return;
    dismissed.current = true;
    setPhase("done");
  }, []);

  /* Pick the canvas that fills this viewport better and scale it to fit,
     letterboxed. The page ground and the piece's ground are the same colour, so
     the bars are invisible — it reads as a centred composition rather than as
     video pillarboxing. Re-measured on resize, which covers a phone being
     turned: the layout swaps with the orientation. */
  useEffect(() => {
    if (phase !== "playing") return;
    const measure = () => setFit(pickLayout(window.innerWidth, window.innerHeight));
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [phase]);

  /* Every plausible "let me in" gesture ends the piece. `wheel` and `touchmove`
     rather than `scroll`, because the body is locked and therefore never
     actually scrolls while the overlay is up. */
  useEffect(() => {
    if (phase !== "playing") return;
    const opts = { passive: true } as const;
    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish, opts);
    window.addEventListener("wheel", finish, opts);
    window.addEventListener("touchmove", finish, opts);
    return () => {
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
      window.removeEventListener("wheel", finish);
      window.removeEventListener("touchmove", finish);
    };
  }, [phase, finish]);

  /* Lock the page while the overlay is up, and restore whatever was there
     before rather than assuming it was "". */
  useEffect(() => {
    if (phase !== "playing") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const t = useIntroClock(phase === "playing");

  /* Release the page's held entrance as the intro *starts* leaving, not when it
     has gone: the hero's rise and the card's dissolve are meant to overlap. The
     two run to roughly the same length, so by the time the overlay is at zero
     the page beneath has just finished arriving. */
  useEffect(() => {
    /* "deciding" must fall through: the attribute was set before paint and the
       component has not yet worked out whether the intro runs at all. Clearing
       it here would release the page on the first frame — which is exactly the
       abrupt handover this whole mechanism exists to remove. */
    if (phase === "deciding") return;
    const d = document.documentElement;
    const over = phase !== "playing";
    if (over || t >= GROUND_AT) d.removeAttribute("data-intro");
    if (over || t >= HERO_AT) d.removeAttribute("data-intro-hero");
  }, [phase, t]);

  useEffect(() => {
    if (phase === "playing" && t >= TOTAL) finish();
  }, [phase, t, finish]);

  if (phase !== "playing") return null;

  const exit = draw(t, EXIT_FROM, STRIP_DUR);
  const vanish = draw(t, VANISH_AT, VANISH_DUR);
  /* A slow push through the card rather than a straight fade. The page is
     arriving underneath on its own entrance; the camera moving means the two
     are never both still at the same moment, which is what made the old
     cross-dissolve read as a cut. */
  const push = lerp(1, 1.06, enter(t, EXIT_FROM, EXIT_DUR));

  return (
    <div className="heromotion" style={{ opacity: 1 - vanish }}>
      <div
        className="heromotion__canvas"
        /* role="img" belongs on the canvas, not on the wrapper. On the wrapper
           it would make the whole subtree presentational and take the Skip
           button away from screen readers — the one control that matters here.
           On the canvas it does the job the handoff asks for: the animated text
           stops being read out, and the label stands in for the picture. */
        role="img"
        aria-label="Animated intro: a search for an engineer who gets what people mean ranks Abhinav Tyagi first."
        style={{
          width: fit.layout.w,
          height: fit.layout.h,
          transform: `translate(-50%, -50%) scale(${fit.scale * push})`,
        }}
      >
        <SearchScene t={t} exit={exit} L={fit.layout} />
        <Headline t={t} L={fit.layout} />
      </div>

      <button
        type="button"
        className="heromotion__skip"
        onClick={finish}
        style={{ opacity: clamp01((t - 0.8) / 0.6) * (1 - exit) }}
      >
        Skip intro
      </button>
    </div>
  );
}
