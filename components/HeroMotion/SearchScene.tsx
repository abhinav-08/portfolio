"use client";

/**
 * The search scene — pipeline strip, search bar, result rows, and the card the
 * winning row expands into. Ported from the handoff's `hero-a.jsx`, which is
 * the source of truth for every position, size and timing.
 *
 * All geometry comes from a `Layout` (see ./layout.ts) so the same scene can be
 * authored on either the handoff's 1920×1080 canvas or a 1080×1920 one for
 * phones. Timing, easing and choreography are identical on both; only sizes and
 * positions move.
 *
 * Substitutions from the handoff, all deliberate: its Instrument Serif /
 * JetBrains Mono / Geist become the site's own faces, and its #E8A33D accent
 * becomes the site gold. The handoff asks for exactly this where the site has
 * its own tokens — the piece is meant to read as part of the page, not as an
 * inserted film.
 */

import { clamp01, draw, enter, lerp, pop } from "./motion";
import { CUES } from "./clock";
import { LANDSCAPE, type Layout } from "./layout";

const INK = "var(--text)";
const MUTE = "var(--text-55)";
const LINE = "var(--hairline)";
const BAR = "var(--surface-alt)";
const SERIF = "var(--font-serif)";
const MONO = "var(--font-mono)";
const SANS = "var(--font-sans)";

/* The query, split so the two tagged spans can carry their own highlight and
   pill. `typed` walks across the segments so one character counter drives all
   three. */
const SEGS: Array<{ text: string; tag?: string }> = [
  { text: "engineer", tag: "role" },
  { text: " who gets " },
  { text: "what people mean", tag: "intent" },
];
const QLEN = SEGS.reduce((n, s) => n + s.text.length, 0);

/* s0 → s1 is the rescore: BM25's guess, then what the signals decide. Abhinav
   is 4th on lexical score alone and 1st once the rescore runs, which is the
   whole argument the piece is making. */
const ROWS = [
  { t: "a list of frameworks", s0: 8.4, s1: 3.1, r1: 1 },
  { t: "keyword matcher, untuned", s0: 8.1, s1: 2.4, r1: 2 },
  { t: "regex-heavy autosuggest", s0: 7.7, s1: 1.9, r1: 3 },
  { t: "Abhinav Tyagi", s0: 7.2, s1: 9.8, r1: 0, me: true },
  { t: "cache that forgot to expire", s0: 6.9, s1: 1.2, r1: 4 },
];

const ROLES =
  "Majid Al Futtaim · SDE II  ✦  FabHotels · Senior Backend  ✦  Moglix / Credlix · Backend  ✦  Xoriant · Associate  ✦  ";

export function SearchScene({
  t,
  exit = 0,
  L = LANDSCAPE,
}: {
  t: number;
  exit?: number;
  L?: Layout;
}) {
  const { parse: P, recall: Rc, rank: R } = CUES;
  const ROW = L.row;
  const CARDR = L.card;

  /* The handover strips the card back to the two things the hero also has — a
     serif name and the portrait — before anything fades. A flat cross-dissolve
     between the full card and the hero reads as a cut, because the two frames
     share almost no ink; take the border, the ground, the chips and the marquee
     away first and what is left already resembles what the page underneath is
     about to show. */
  const shell = 1 - clamp01(exit / 0.4);

  const lift = enter(t, P - 0.05, 0.55);
  const barTop = lerp(L.barTop[0], L.barTop[1], lift);
  /* The drift term is weighted by (1 - lift) so it is gone by the time the
     camera has settled — otherwise the scene keeps creeping for 10s. */
  const cam = lerp(1.32, 1, lift) + (1 - lift) * t * 0.02;
  const chars = Math.floor(draw(t, 0.3, 1.6) * QLEN);
  const caretOn = Math.floor(t * 2.5) % 2 === 0;
  const expand = draw(t, R + 0.8, 0.6);
  const chromeOut = 1 - enter(t, R + 0.7, 0.3);
  const rescore = draw(t, R, 0.7);
  const step = t < Rc ? 0 : t < R ? 1 : 2;
  const stepsIn = enter(t, P, 0.4);
  const cands = Math.round(lerp(9812440, 1240, draw(t, Rc, 1.3)));

  let typed = 0;

  return (
    <div
      className="hm-cam"
      style={{
        position: "absolute",
        inset: 0,
        transform: `scale(${cam})`,
        transformOrigin: `${L.w / 2}px ${barTop + L.bar.h / 2}px`,
      }}
    >
      {/* pipeline strip ------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: L.pipe.x,
          width: L.pipe.w,
          top: L.pipe.top,
          display: "flex",
          alignItems: "center",
          gap: L.pipe.gap,
          fontFamily: MONO,
          fontSize: L.pipe.font,
          letterSpacing: "0.04em",
          opacity: stepsIn * chromeOut,
          transform: `translateY(${(1 - stepsIn) * -20}px)`,
        }}
      >
        {["parse", "recall", "rescore"].map((s, i) => (
          <div
            key={s}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: i === step ? "var(--accent)" : i < step ? INK : MUTE,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                flexShrink: 0,
                background: i <= step ? (i === step ? "var(--accent)" : INK) : "transparent",
                border: `1.5px solid ${i === step ? "var(--accent)" : MUTE}`,
              }}
            />
            <span style={{ whiteSpace: "nowrap" }}>
              {i + 1} {s}
            </span>
          </div>
        ))}
        <div style={{ marginLeft: "auto", color: MUTE, whiteSpace: "nowrap" }}>
          candidates{" "}
          <span style={{ color: INK }}>{t < Rc ? "—" : cands.toLocaleString("en-US")}</span>
        </div>
      </div>

      {/* search bar ----------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: ROW.x,
          width: ROW.w,
          top: barTop,
          height: L.bar.h,
          borderRadius: L.bar.radius,
          border: `1.5px solid ${t > 0.2 && t < P ? "var(--text-32)" : LINE}`,
          background: BAR,
          display: "flex",
          alignItems: "center",
          gap: L.bar.gap,
          padding: `0 ${L.bar.pad}px`,
          boxSizing: "border-box",
          opacity: chromeOut,
        }}
      >
        <span style={{ fontFamily: SANS, fontSize: L.bar.glyph, color: MUTE }}>⌕</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: SANS,
            fontSize: L.bar.font,
            color: INK,
            whiteSpace: "pre",
            letterSpacing: "-0.01em",
          }}
        >
          {chars === 0 && <span style={{ color: MUTE }}>Search anything</span>}
          {SEGS.map((s, i) => {
            const n = clamp01((chars - typed) / s.text.length);
            const vis = s.text.slice(0, Math.round(n * s.text.length));
            typed += s.text.length;
            const hl = s.tag ? draw(t, P + 0.15 + i * 0.12, 0.35) : 0;
            const lab = s.tag ? pop(t, P + 0.3 + i * 0.12, 0.35) : 0;
            return (
              <span key={i} style={{ position: "relative", display: "inline-block" }}>
                {s.tag && (
                  <span
                    style={{
                      position: "absolute",
                      left: -6,
                      right: -6,
                      top: 4,
                      bottom: 4,
                      background: "var(--accent)",
                      opacity: 0.2,
                      borderRadius: 6,
                      transform: `scaleX(${hl})`,
                      transformOrigin: "left",
                    }}
                  />
                )}
                {s.tag && (
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -2,
                      height: 3,
                      background: "var(--accent)",
                      transform: `scaleX(${hl})`,
                      transformOrigin: "left",
                    }}
                  />
                )}
                <span style={{ position: "relative" }}>{vis}</span>
                {s.tag && (
                  <span
                    style={{
                      position: "absolute",
                      left: -6,
                      top: "100%",
                      marginTop: L.bar.pillDrop,
                      fontFamily: MONO,
                      fontSize: L.bar.pill,
                      color: "var(--bg)",
                      background: "var(--accent)",
                      padding: "4px 10px",
                      borderRadius: 6,
                      /* pop overshoots past 1 — clamp the opacity, keep the
                         overshoot on the scale, which is where it reads. */
                      opacity: clamp01(lab),
                      transform: `translateY(${(1 - lab) * 14}px) scale(${0.8 + 0.2 * lab})`,
                      transformOrigin: "left top",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.tag}
                  </span>
                )}
              </span>
            );
          })}
          <span
            style={{
              width: 3,
              height: L.bar.caret,
              background: "var(--accent)",
              marginLeft: 4,
              opacity: caretOn && t < P + 0.2 ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* result rows ---------------------------------------------------- */}
      {ROWS.map((r, i) => {
        const inP = enter(t, Rc + 0.25 + i * 0.09, 0.45);
        const rank = lerp(i, r.r1, rescore);
        const score = lerp(r.s0, r.s1, rescore);
        const y = ROW.top + rank * ROW.gap + (1 - inP) * 60;
        const fade = r.me ? 1 : chromeOut * (1 - 0.55 * rescore);
        const e = r.me ? expand : 0;
        const box = {
          left: lerp(ROW.x, CARDR.x, e),
          top: lerp(y, CARDR.y, e),
          width: lerp(ROW.w, CARDR.w, e),
          height: lerp(ROW.h, CARDR.h, e),
        };
        /* Row text clears out over the first third of the expansion, so the
           card is never caught wearing both layouts at once. */
        const rowContent = 1 - clamp01(e * 3);

        return (
          <div
            key={r.t}
            className="hm-row"
            style={{
              position: "absolute",
              ...box,
              opacity: inP * fade,
              borderRadius: lerp(14, 28, e),
              /* --surface-tile and the hairline spelled out as rgba, because
                 the handover has to fade their alpha and a var() hex cannot be
                 interpolated. Keep these in step with the tokens. */
              border: `1.5px solid ${
                r.me
                  ? rescore > 0.5
                    ? `rgba(200, 169, 110, ${shell})`
                    : `rgba(234, 228, 216, ${0.12 * shell})`
                  : LINE
              }`,
              background: r.me ? `rgba(23, 20, 18, ${shell})` : "transparent",
              overflow: "hidden",
              zIndex: r.me ? 2 : 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                gap: ROW.inner,
                padding: `0 ${ROW.pad}px`,
                opacity: rowContent,
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: ROW.meta,
                  color: MUTE,
                  width: ROW.rankW,
                  flexShrink: 0,
                }}
              >
                {String(Math.round(rank) + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: r.me ? SERIF : SANS,
                  fontSize: r.me ? ROW.meFont : ROW.font,
                  color: r.me ? INK : "var(--text-72)",
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {r.t}
              </span>
              <span
                style={{
                  width: ROW.barW,
                  height: 6,
                  flexShrink: 0,
                  borderRadius: 3,
                  background: LINE,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${score * 10}%`,
                    borderRadius: 3,
                    background: r.me ? "var(--accent)" : MUTE,
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: ROW.meta,
                  color: r.me ? "var(--accent)" : MUTE,
                  width: ROW.scoreW,
                  flexShrink: 0,
                  textAlign: "right",
                }}
              >
                {score.toFixed(2)}
              </span>
            </div>
            {r.me && <CardContent t={t} shell={shell} L={L} />}
          </div>
        );
      })}
    </div>
  );
}

function CardContent({ t, shell, L }: { t: number; shell: number; L: Layout }) {
  const R = CUES.rank;
  const T = L.text;
  const img = enter(t, R + 1.0, 0.7);
  const tag = enter(t, R + 1.2, 0.4);
  const name = enter(t, R + 1.3, 0.55);
  const title = enter(t, R + 1.55, 0.45);
  const why = enter(t, R + 1.8, 0.4);
  const chips: Array<[string, string]> = [
    ["25K+", "req / min"],
    ["~10M", "docs indexed"],
    ["−45%", "latency"],
  ];
  const centred = L.portrait.right === null;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: L.card.w,
        height: L.card.h,
        opacity: clamp01(img * 2),
      }}
    >
      {/* The handoff's own cutout, not the hero's. Same photo, different frame:
          the hero's fills 99% of its canvas, this one is a 1254² square with
          the subject inset to 87%, which is what keeps the arm clear of the
          card's right edge once `object-fit: contain` has done its work. */}
      <picture>
        <source srcSet="/assets/portrait-motion.webp" type="image/webp" />
        <img
          src="/assets/portrait-motion.png"
          alt=""
          className="hm-portrait"
          style={{
            position: "absolute",
            ...(centred
              ? { left: "50%", marginLeft: -L.portrait.size / 2 }
              : { right: L.portrait.right as number }),
            bottom: L.portrait.bottom,
            height: L.portrait.size,
            width: L.portrait.size,
            objectFit: "contain",
            opacity: img,
            transform: `translateY(${(1 - img) * 90}px) scale(${
              1.06 - 0.06 * img + (t - R) * 0.008
            })`,
            transformOrigin: "center bottom",
          }}
        />
      </picture>

      <div
        style={{
          position: "absolute",
          left: T.left,
          top: T.top,
          right: T.right,
          display: "flex",
          flexDirection: "column",
          gap: T.gap,
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: T.tag,
            color: "var(--accent)",
            letterSpacing: "0.06em",
            opacity: tag * shell,
            transform: `translateX(${(1 - tag) * -30}px)`,
          }}
        >
          #1 · RESCORED 9.80
        </div>
        <div
          style={{
            fontFamily: SERIF,
            fontSize: T.name,
            /* The handoff sets 0.92 against Instrument Serif. Cormorant has a
               far deeper descender, so at 0.92 the `g` of "Tyagi." drops out of
               its line box and lands on the title line below. The pair here
               keeps the two name lines as tight as the design asks while giving
               the descender somewhere to go. */
            lineHeight: 0.98,
            paddingBottom: 14,
            color: INK,
            letterSpacing: "-0.02em",
            opacity: name,
            transform: `translateY(${(1 - name) * 50}px)`,
          }}
        >
          Abhinav
          <br />
          Tyagi.
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: T.title,
            color: MUTE,
            opacity: title * shell,
            transform: `translateY(${(1 - title) * 20}px)`,
          }}
        >
          Backend &amp; Search Engineer · Gurugram, IN
        </div>
        <div
          style={{
            marginTop: T.whyTop,
            fontFamily: MONO,
            fontSize: T.why,
            color: MUTE,
            letterSpacing: "0.06em",
            opacity: why * shell,
          }}
        >
          WHY IT RANKED FIRST
        </div>
        <div style={{ display: "flex", gap: T.chipGap }}>
          {chips.map((c, i) => {
            const p = pop(t, R + 1.95 + i * 0.13, 0.4);
            return (
              <div
                key={c[0]}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  padding: `${T.chipPadY}px ${T.chipPadX}px`,
                  border: `1.5px solid ${LINE}`,
                  borderRadius: 14,
                  opacity: clamp01(p) * shell,
                  transform: `scale(${0.7 + 0.3 * p})`,
                  transformOrigin: "left center",
                }}
              >
                <span
                  style={{
                    fontFamily: SERIF,
                    fontSize: T.chipValue,
                    color: INK,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {c[0]}
                </span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: T.chipLabel,
                    color: MUTE,
                    whiteSpace: "nowrap",
                  }}
                >
                  {c[1]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* roles marquee — translated from t, not a CSS keyframe, so it stays
          locked to the same clock as everything else. */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: L.marquee.h,
          borderTop: `1.5px solid ${LINE}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background: "var(--bg)",
          opacity: shell,
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap",
            fontFamily: MONO,
            fontSize: L.marquee.font,
            color: INK,
            letterSpacing: "0.04em",
            transform: `translateX(${-(t - R) * 160}px)`,
          }}
        >
          {ROLES + ROLES + ROLES}
        </div>
      </div>
    </div>
  );
}
