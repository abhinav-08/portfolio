/**
 * Two authored canvases, one scene.
 *
 * The handoff is authored at a fixed 1920×1080. Contain-scaled onto a phone
 * that is roughly 390 CSS px wide, the scale factor lands near 0.20 — which
 * puts the pipeline labels at about 4px. The piece is not "smaller" at that
 * size, it is unreadable, and a 12-second gate nobody can read is worse than
 * no intro at all.
 *
 * So there is a second canvas, 1080×1920, carrying the same scene laid out
 * vertically. Same clock, same cues, same easings, same components — only the
 * geometry and type sizes differ. The wrapper picks whichever canvas scales
 * larger for the viewport it finds, which resolves correctly without a
 * breakpoint: a phone held upright takes the portrait canvas at ~0.36, a phone
 * turned sideways and every desktop takes the landscape one.
 *
 * Every number here is a canvas pixel, never a CSS pixel.
 */

export interface Layout {
  w: number;
  h: number;
  /** Bar centre before the lift, and after it. The camera origin follows. */
  barTop: [number, number];
  pipe: { x: number; w: number; top: number; font: number; gap: number };
  bar: {
    h: number;
    radius: number;
    pad: number;
    gap: number;
    font: number;
    glyph: number;
    caret: number;
    /** Distance from the word's baseline box to its tag pill. */
    pillDrop: number;
    /** Tag pill type. Its own field, not a fraction of the query size: on the
        portrait canvas a proportional pill falls under 7 CSS px on a phone. */
    pill: number;
  };
  row: {
    x: number;
    w: number;
    h: number;
    top: number;
    gap: number;
    pad: number;
    inner: number;
    font: number;
    meFont: number;
    rankW: number;
    barW: number;
    scoreW: number;
    meta: number;
  };
  card: { x: number; y: number; w: number; h: number };
  text: {
    left: number;
    top: number;
    right: number;
    gap: number;
    tag: number;
    name: number;
    title: number;
    why: number;
    whyTop: number;
    chipPadY: number;
    chipPadX: number;
    chipGap: number;
    chipValue: number;
    chipLabel: number;
  };
  portrait: {
    size: number;
    bottom: number;
    /** Right offset, or `null` to centre horizontally in the card. */
    right: number | null;
  };
  marquee: { h: number; font: number };
}

export const LANDSCAPE: Layout = {
  w: 1920,
  h: 1080,
  barTop: [485, 150],
  pipe: { x: 410, w: 1100, top: 72, font: 22, gap: 28 },
  bar: {
    h: 110,
    radius: 18,
    pad: 36,
    gap: 26,
    font: 44,
    glyph: 40,
    caret: 52,
    pillDrop: 34,
    pill: 20,
  },
  row: {
    x: 410,
    w: 1100,
    h: 84,
    top: 340,
    gap: 100,
    pad: 32,
    inner: 30,
    font: 32,
    meFont: 42,
    rankW: 40,
    barW: 200,
    scoreW: 64,
    meta: 22,
  },
  card: { x: 120, y: 100, w: 1680, h: 880 },
  text: {
    left: 90,
    top: 120,
    right: 820,
    gap: 18,
    tag: 22,
    name: 150,
    title: 24,
    why: 20,
    whyTop: 36,
    chipPadY: 18,
    chipPadX: 24,
    chipGap: 16,
    chipValue: 56,
    chipLabel: 18,
  },
  portrait: { size: 800, bottom: 70, right: -10 },
  marquee: { h: 70, font: 22 },
};

/**
 * Portrait. The card stops being a two-column split — there is no room beside
 * 150px display type at 1080 wide — so the name stacks above a centred
 * portrait, which is also how the hero itself reorders on a narrow screen.
 */
export const PORTRAIT: Layout = {
  w: 1080,
  h: 1920,
  /* The scene has to sit in the middle of a 1920-tall canvas, not at the top of
     it: pushed up, the rows ended two-thirds down and the bottom third was
     dead space. These numbers leave roughly even air above the pipeline and
     below the last row. */
  barTop: [1040, 500],
  pipe: { x: 60, w: 960, top: 280, font: 30, gap: 20 },
  bar: {
    h: 170,
    radius: 22,
    pad: 32,
    gap: 22,
    font: 40,
    glyph: 36,
    caret: 48,
    pillDrop: 40,
    pill: 26,
  },
  row: {
    x: 60,
    w: 960,
    h: 120,
    top: 820,
    gap: 150,
    pad: 28,
    inner: 24,
    font: 30,
    meFont: 40,
    rankW: 46,
    barW: 180,
    scoreW: 72,
    meta: 26,
  },
  card: { x: 50, y: 180, w: 980, h: 1560 },
  text: {
    left: 70,
    top: 90,
    right: 70,
    gap: 20,
    tag: 28,
    name: 150,
    title: 28,
    why: 26,
    whyTop: 44,
    chipPadY: 18,
    chipPadX: 22,
    chipGap: 16,
    chipValue: 54,
    chipLabel: 24,
  },
  /* Sized and placed to clear the chip row above it — at 700 the head ran
     straight into "25K+". */
  portrait: { size: 640, bottom: 120, right: null },
  marquee: { h: 90, font: 28 },
};

/**
 * Whichever canvas fills the viewport better. No breakpoint: the comparison is
 * the decision, so an unusual window resolves sensibly instead of falling into
 * whichever side of 900px it happens to land on.
 */
export function pickLayout(vw: number, vh: number): { layout: Layout; scale: number } {
  const land = Math.min(vw / LANDSCAPE.w, vh / LANDSCAPE.h);
  const port = Math.min(vw / PORTRAIT.w, vh / PORTRAIT.h);
  return port > land ? { layout: PORTRAIT, scale: port } : { layout: LANDSCAPE, scale: land };
}
