# Abhinav Tyagi — Portfolio

Single-page personal site built from the Claude Design handoff. Next.js 15
(App Router) + TypeScript, statically exported to `out/` and deployed on
Cloudflare Pages.

No backend, no database, no environment variables, no secrets.

## Run it

Requires **Node 20 or newer** (`node -v` to check; the project is pinned to 22
via `.node-version`). Node ships with npm, so that's the only install.

```bash
cd portfolio
npm install      # ~1 min, once
npm run dev      # → http://localhost:3000
```

Edits to any file hot-reload in the browser. Ctrl-C to stop.

### All scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on :3000 with hot reload. This is the one you want day to day. |
| `npm run build` | Production static export → `./out`. This is the deploy artifact. |
| `npm run preview` | Serves `./out` on :3000 so you can check the real build. Run `build` first. |
| `npm run typecheck` | TypeScript, no emit. |
| `npm run lint` | ESLint. |

> **There is no `npm start`.** `next start` boots a Node server, which is
> incompatible with `output: 'export'` — it exits with an error. Use
> `npm run preview` to look at a production build locally. Nothing about this
> site needs a Node runtime to serve it; `out/` is plain HTML, CSS, JS and
> assets.

### Where to look first

- Copy and data → `lib/content.ts`
- Links, name, feature switches → `lib/site.ts`
- Anything visual → `app/globals.css`

## Where things live

| Path | What |
|---|---|
| `lib/site.ts` | Identity, links, nav, and the three visual switches (`backgroundMotion`, `filmGrain`, `openToWork`). **Set `SITE_URL` before deploying** — it drives canonical, OG and sitemap URLs. |
| `lib/content.ts` | Every piece of copy and data: roles + drawer bullets, search-demo scenarios, skill groups, lab items, writing, talks, stats, marquee terms, Instagram tiles. |
| `app/globals.css` | The entire design system — tokens as CSS custom properties, keyframes, component styles, breakpoints, reduced-motion overrides. |
| `app/layout.tsx` | Fonts (self-hosted), metadata, JSON-LD `Person` schema. |
| `app/fonts/` | Vendored woff2 files (Cormorant Garamond, Instrument Sans, IBM Plex Mono — all OFL). |
| `components/` | One file per section, plus `Reveal` (scroll reveals), `ScrollFx` (progress bar + hero parallax) and `Icon` (inline brand glyphs). |
| `lib/icon-paths.ts` | **Generated.** Brand SVG paths extracted from Simple Icons at authoring time. Regenerate with `node gen-icons.mjs`. |
| `lib/sections.ts` | Derived section numbering — see Page order below. |
| `public/_headers` | Cloudflare Pages security headers and cache policy. |

### Why plain CSS instead of Tailwind utilities

The handoff specifies exact gradients, `clamp()` ramps, keyframes and blur
stacks. Expressing those as Tailwind arbitrary values would be unreadable and
harder to keep faithful to the spec. Tailwind is installed and available for
incidental utilities; the design system itself is real CSS with named classes,
which maps 1:1 onto the handoff document.

## Page order

`01 Live · query understanding → 02 Experience → 03 Skills → 04 Lab →
05 Writing → 06 Talks → 07 Elsewhere → 08 Say hello`, with the hero and
marquee above.

There is no Essence section. Its personal statement and supporting paragraph
now open the query-understanding band, and its fact list (Based / Trade /
Stack / Belief) sits under the hero portrait as `.herofacts`.

**Section numbers are derived, not written by hand.** `lib/sections.ts` builds
the order from what actually renders and `num("skills")` returns `"03"`. A
section hidden because all its entries are placeholders is skipped, so the
sequence stays contiguous — and renumbers itself correctly the moment Talks
gets real content. Never hardcode an eyebrow number.

## Placeholder safety

`config.showPlaceholders` in `lib/site.ts` is `false`. Any entry in
`lib/content.ts` flagged `placeholder: true` is **filtered out of the built
site**, and a section whose entries are *all* placeholders renders nothing at
all. That is why Talks does not currently appear.

This exists so an unfinished card can never ship by accident. Flip the switch
to `true` only to preview a layout locally — never for a deploy.

To actually turn a section on: replace the placeholder content with real
entries and delete the `placeholder: true` line.

## Things to do before or after launch

- [ ] **Talks is hidden.** All three entries in `talks` are placeholders. Add
      real YouTube links, drop 16:9 thumbnails in `/public/assets/talks/`, set
      `thumb`, and remove the `placeholder` flags.
- [ ] Set `SITE_URL` in `lib/site.ts` to the real domain.
- [ ] Check the two Medium excerpts in `lib/content.ts` read as you'd write
      them. One was condensed from the post's subtitle, the other written from
      its opening line because Medium has no subtitle for it.
- [ ] Re-check the OG image (`public/assets/og.png`) renders well in
      LinkedIn/X preview tools.

## Design notes worth preserving

- The hero portrait's four shadow layers (`portrait__bloom` / `__pool` /
  `__mid` / `__line`) exist because the subject's forearms rest on a surface
  that the background removal deleted. Without them the pose floats. They are
  sized in percentages so the effect survives resizing.
- `.hero__name` keeps `min-height: 2em` and `padding-bottom: 0.1em`: the first
  reserves room for the autosuggest dropdown so opening it never shifts the
  page, the second stops the descender on "Tyagi" from clipping.
- The portrait's `translateY(-8%)` base offset is *combined with* scroll
  parallax in `ScrollFx.tsx`, not replaced by it.
- The experience drawer is portalled to `<body>`. `.shell` sets `z-index: 1`,
  which would otherwise trap the drawer's `z-index: 70` beneath the fixed
  header.
- The hero fact sheet is label/value rows, not the `.cellgrid` cells the
  Essence section used. Four stacked cells under the portrait made the hero's
  right column overrun the copy on the left by ~300px.
- Marquee and carousel duplicate their item lists exactly twice and translate
  by half the track **plus half a gap** — 2N items carry only 2N−1 gaps, so a
  plain −50% leaves a visible seam.
- Skills, Lab, Writing and Talks all use the same `.cellgrid` hairline
  pattern (1px grid gaps over a hairline background) rather than per-card
  rounded borders. The design system allows only 2px, 4px and 99px radii, so
  card-style rounded rectangles would read as foreign.
- The "AWS · GCP · Azure" card uses a vendor-neutral cloud glyph on purpose.
  Using any one provider's mark there would misrepresent the other two.

## Accessibility

Experience rows are real `<button>`s. The drawer is a labelled `role="dialog"`
with a focus trap, focus restoration and body scroll lock. The animated hero
name carries `aria-label="Abhinav Tyagi"` with the animated glyphs hidden.
Decorative layers are `aria-hidden`. `prefers-reduced-motion: reduce` disables
background drift, grain, marquee and carousel scrolling, both typing sequences,
count-ups, parallax and the magnetic button, while keeping fades and the drawer.

## Deploy

See `DEPLOY.md`.
