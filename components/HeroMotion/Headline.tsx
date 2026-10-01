"use client";

/**
 * The mid-piece headline. A hard cut, not a transition: it covers the search
 * scene completely from 3.8 to 5.4 and is gone on the frame after, which is
 * what gives the piece its one moment of punctuation.
 */

import { clamp01, enter, pop } from "./motion";
import { CUES } from "./clock";
import { LANDSCAPE, type Layout } from "./layout";

export function Headline({ t, L = LANDSCAPE }: { t: number; L?: Layout }) {
  const s = CUES.headline;
  if (t < s || t >= CUES.recall) return null;

  const a = enter(t, s, 0.35);
  const b = pop(t, s + 0.3, 0.4);
  const c = enter(t, s + 0.6, 0.4);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: L.headlineGap,
        zIndex: 5,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: L.headline,
          color: "var(--text)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textAlign: "center",
          padding: `0 ${L.headlinePad}px`,
          /* A slow push across the whole shot, so the cut lands on something
             already in motion rather than on a still. */
          transform: `scale(${1 + (t - s) * 0.03})`,
        }}
      >
        <span
          style={{
            opacity: a,
            display: "inline-block",
            transform: `translateY(${(1 - a) * 40}px)`,
          }}
        >
          I teach machines what people{" "}
        </span>{" "}
        <span
          style={{
            fontStyle: "italic",
            color: "var(--accent)",
            display: "inline-block",
            opacity: clamp01(b),
            transform: `scale(${0.6 + 0.4 * b})`,
          }}
        >
          mean.
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: L.headlineSub,
          color: "var(--text-55)",
          opacity: c,
          letterSpacing: "0.04em",
        }}
      >
        — not just what they type
      </div>
    </div>
  );
}
