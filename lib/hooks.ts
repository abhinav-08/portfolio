"use client";

import { useEffect, useState } from "react";

/**
 * Tracks `prefers-reduced-motion: reduce`.
 *
 * Returns `false` on the server and on the very first client render so markup
 * matches during hydration; the real value lands in the effect immediately
 * after. Components that use it to skip an animation should therefore render
 * the *animated start state* on first paint and let the effect decide — or,
 * where the end state is what matters (typing sequences), use `motionReady`
 * to avoid running the animation before the preference is known.
 */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    setReady(true);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return { reduced, ready };
}

/** True once mounted on the client — for anything that must not run on SSR. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
