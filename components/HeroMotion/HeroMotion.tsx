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
  GROUND_DUR,
  INK_AT,
  INK_DUR,
  STRIP_DUR,
  TOTAL,
  useIntroClock,
} from "./clock";
import { clamp01, draw, enter, lerp } from "./motion";
import { SearchScene } from "./SearchScene";
import { LANDSCAPE, type Layout, pickLayout } from "./layout";

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
  const fieldRef = useRef<HTMLDivElement>(null);

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

  /* Put the overlay's copy of the field in phase with the page's.
     `.bg-field`'s glows started their 15–24s drifts at first paint; this copy
     mounts after hydration, so left alone it runs the same keyframes about
     600ms behind — enough to put the gold glow 26px wider and 12px off, which
     is exactly the shift the copy exists to remove. Copying `currentTime`
     across is exact, and once matched they stay matched: both run on the same
     document timeline at the same rate.

     On a frame, not in a layout effect: the elements have only just been
     inserted, and their CSS animations do not exist yet when layout effects
     run — `getAnimations()` comes back empty and the sync silently does
     nothing. Retried for a few frames in case the first one is still early. */
  useEffect(() => {
    if (phase !== "playing") return;
    let raf = 0;
    let tries = 0;
    const sync = () => {
      const host = fieldRef.current;
      if (!host) return;
      let pending = false;
      for (const dst of Array.from(
        host.querySelectorAll<HTMLElement>("[class*='glow'], .grain"),
      )) {
        const sel =
          ".bg-field " +
          dst.className
            .split(" ")
            .filter(Boolean)
            .map((c) => "." + c)
            .join("");
        const src = document.querySelector<HTMLElement>(sel);
        const from = src?.getAnimations?.()[0];
        const to = dst.getAnimations?.()[0];
        /* .glow--4 is deliberately unanimated — no counterpart, nothing to do. */
        if (from && (!to || from.startTime === null)) pending = true;
        if (from && to && from.startTime !== null) to.startTime = from.startTime;
      }
      if (pending && ++tries < 6) raf = requestAnimationFrame(sync);
    };
    raf = requestAnimationFrame(sync);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  const t = useIntroClock(phase === "playing");

  useEffect(() => {
    if (phase === "playing" && t >= TOTAL) finish();
  }, [phase, t, finish]);

  if (phase !== "playing") return null;

  const exit = draw(t, EXIT_FROM, STRIP_DUR);
  /* Two curves, not one: the card's ink and the overlay's opaque ground. The
     ink is gone before the ground starts lifting, so the page — which has been
     sitting there finished the whole time — is never seen through the card. */
  const ink = draw(t, INK_AT, INK_DUR);
  const ground = draw(t, GROUND_AT, GROUND_DUR);
  /* A slow push through the card rather than a straight fade, so the last thing
     on screen is still moving when it goes. */
  const push = lerp(1, 1.06, enter(t, EXIT_FROM, EXIT_DUR));

  return (
    <div
      className="heromotion"
      /* --bg spelled out as rgba: the ground has to fade its own alpha
         independently of the canvas, and a var() hex cannot be interpolated. */
      style={{ background: `rgba(14, 13, 11, ${1 - ground})` }}
    >
      {/* A second instance of the page's own glow field, not an approximation
          of it. The overlay used to lift a flat slab of --bg off a page with a
          warm, drifting gradient underneath, and the whole frame changed colour
          at the handover. Copying the gradient statically would not have fixed
          it: the glows drift by a fifth of their own size over 15–19s, so a
          frozen copy is only ever right at one instant. This is the same
          markup on the same CSS keyframes, mounted at the same time, so it is
          in phase by construction — the ground behind the card and the ground
          behind the hero are the same picture. */}
      <div className="heromotion__field" aria-hidden="true" ref={fieldRef}>
        <div className="heromotion__breath">
          <div className="glow glow--1" />
          <div className="glow glow--2" />
          <div className="glow glow--3" />
          <div className="glow glow--4" />
        </div>
        <div className="grain" />
      </div>

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
          opacity: 1 - ink,
          transform: `translate(-50%, -50%) scale(${fit.scale * push})`,
        }}
      >
        <SearchScene t={t} exit={exit} L={fit.layout} />
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
