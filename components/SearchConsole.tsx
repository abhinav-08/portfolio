"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { detectBrand, parseQuery } from "@/lib/search/parse";
import { catalogue } from "@/lib/search/catalogue";
import { allBrands, normalise, recallOrder, search, type Hit } from "@/lib/search/rank";
import { useMounted, useReducedMotion } from "@/lib/hooks";
import { num } from "@/lib/sections";

/* ------------------------------------------------------ stage clock --
 * Durations of the three pipeline stages, then a beat on the settled state.
 * Everything visual below is a pure function of (activeStage, prog), so
 * retiming the run happens here and nowhere else.
 */
/** Each stage names what it produces — the strip explains itself. */
const STAGES = [
  { name: "parse", note: "words → entities" },
  { name: "recall", note: "BM25 candidates" },
  { name: "rescore", note: "signals decide" },
] as const;
/* parse is the longest of the three on purpose. It is the stage a visitor has
   to actually read — every other stage is motion they can follow at a glance,
   but the chips are text, and three or four of them arriving one at a time
   need time on screen after the last one lands, not just while they arrive. */
const DURS = [2400, 1900, 1700];
const HOLD = 900;
const TOTAL = DURS[0] + DURS[1] + DURS[2] + HOLD;

/** Delay between the panel becoming visible and the query starting to type. */
const ARM_MS = 450;
const CHAR_MS = 72;
/** A keystroke re-runs the pipeline this long after typing stops. */
const DEBOUNCE_MS = 340;
/** Beat on the finished result before the loop moves to the next query. */
const CYCLE_MS = 1800;

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOutCubic = (v: number) => 1 - Math.pow(1 - v, 3);
const easeInOutCubic = (v: number) =>
  v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2;

/** Which stage is running, and how far through it. */
function phaseOf(t: number | null): { active: number; prog: number } {
  if (t === null) return { active: -1, prog: 0 };
  let e = t;
  for (let i = 0; i < 3; i++) {
    if (e < DURS[i]) return { active: i, prog: e / DURS[i] };
    e -= DURS[i];
  }
  return { active: 3, prog: 1 };
}

/**
 * Auto-typed while the visitor hasn't taken the panel over.
 *
 * "gluten free bread" leads because it is the clearest demonstration: one
 * exact match, then four rows visibly demoted for failing the constraint.
 * With the catalogue grown past 160 products there are now five genuine
 * dairy-free 1L milks, so that query returns a flat run of near-identical
 * scores and no demoted row — a correct result, but a duller opening.
 */
const EXAMPLES = [
  "gluten free bread",
  "dairy free milk 1l",
  "cheap snacks under 100",
  "organic vegetables",
];

/** The query the panel types to itself the first time it comes into view. */
const SAMPLE = EXAMPLES[0];

/** Offered once the panel is handed over — the safety net for anyone who
    can't think of a query, and a quiet catalogue of what the parser knows. */
const SAMPLES = ["cheap snacks under 100", "sugar free biscuits", "1l milk no dairy"];

interface Ranked extends Hit {
  norm: number;
}

export default function SearchConsole() {
  const { reduced, ready } = useReducedMotion();
  const mounted = useMounted();
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  /* `touched` stops the demo loop for good; `announce` fills the live region
     so the handover isn't a silent change for a screen reader. `queried`
     flips on the first real keystroke, which is when the chrome pill goes
     back to reporting hits and timing. */
  const [touched, setTouched] = useState(false);
  const [queried, setQueried] = useState(false);
  const [announce, setAnnounce] = useState("");
  const [openRow, setOpenRow] = useState<string | null>(null);

  /* Elapsed ms inside the current pipeline run; null between runs. */
  const [t, setT] = useState<number | null>(null);
  /* True once a full run has finished. Before that the panel stays quiet
     while the query types itself; after it, typing updates results live. */
  const [hasRun, setHasRun] = useState(false);
  /** Wall-clock marks. Refs, not state — the loop reads them every frame. */
  const autoAt = useRef<number | null>(null);
  const runAt = useRef<number | null>(null);
  const runT0 = useRef<number | null>(null);
  const cycleAt = useRef<number | null>(null);
  const armed = useRef(false);
  /** Which example the loop is on. */
  const exampleIdx = useRef(0);
  /* The loop reads this every frame and must not be re-created when it flips,
     so it is a ref shadowing the state rather than an effect dependency. */
  const touchedRef = useRef(false);
  touchedRef.current = touched;

  /* Arm on visibility, not on mount: the section sits well below the fold, so
     a run started at mount would be over before anyone reached it. Once only —
     the observer disconnects itself. */
  useEffect(() => {
    const el = panelRef.current;
    if (!el || !ready || reduced) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || armed.current) return;
        armed.current = true;
        autoAt.current = Date.now() + ARM_MS;
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready, reduced]);

  /* One rAF loop drives typing, the debounce and the stage clock, all from
     wall-clock elapsed time. Not setInterval: browsers throttle and freeze
     timers in inactive tabs, so a timer-driven run stalls half finished.
     rAF pauses while hidden, and reading Date.now() each frame means the
     elapsed value self-corrects the moment it resumes. */
  useEffect(() => {
    if (!ready) return;
    if (reduced) {
      // No staged run at all — show the finished state and leave it there.
      setQuery(SAMPLE);
      setT(TOTAL);
      setHasRun(true);
      return;
    }

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const now = Date.now();

      const auto = !touchedRef.current;

      if (auto && autoAt.current !== null && now >= autoAt.current) {
        const text = EXAMPLES[exampleIdx.current];
        const chars = Math.min(text.length, Math.floor((now - autoAt.current) / CHAR_MS) + 1);
        setQuery(text.slice(0, chars));
        runAt.current = now + DEBOUNCE_MS;
        if (chars >= text.length) autoAt.current = null;
      }

      if (runAt.current !== null && now >= runAt.current) {
        runAt.current = null;
        runT0.current = now;
      }

      if (runT0.current !== null) {
        const e = now - runT0.current;
        if (e >= TOTAL) {
          runT0.current = null;
          setT(TOTAL);
          setHasRun(true);
          /* Keep going: hold the finished result for a beat, then move on to
             the next query. The loop only stops when the visitor takes over. */
          if (auto) cycleAt.current = now + CYCLE_MS;
        } else {
          setT(e);
        }
      }

      if (auto && cycleAt.current !== null && now >= cycleAt.current) {
        cycleAt.current = null;
        exampleIdx.current = (exampleIdx.current + 1) % EXAMPLES.length;
        setQuery("");
        setT(null);
        setOpenRow(null);
        autoAt.current = now + 320;
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [ready, reduced]);

  /** Queue a run on the debounce; Enter and the sample chips skip the wait. */
  const queueRun = useCallback((immediate = false) => {
    autoAt.current = null;
    if (immediate) {
      runAt.current = null;
      runT0.current = Date.now();
    } else {
      runAt.current = Date.now() + DEBOUNCE_MS;
    }
  }, []);

  /* ------------------------------------------------------- the engine --
   * Runs synchronously on every keystroke. The catalogue is ~40 documents,
   * so a full parse + BM25 recall + rescore is well under a millisecond —
   * the reported timing is measured, not decorative.
   */
  const computed = useMemo(() => {
    const t0 = performance.now();
    const p = detectBrand(parseQuery(query), allBrands);
    /* Recall the whole candidate set, then keep the top five. The count is
       what the header animates toward during the recall stage — "scanned N"
       is a real number, not a decorative one. */
    const all = search(p, Number.MAX_SAFE_INTEGER);
    const h = normalise(all.slice(0, 5));
    return {
      parsed: p,
      hits: h as Ranked[],
      candidates: all.length,
      /* What BM25 alone returned, so the rescore stage has a real "before"
         order to travel from. */
      recall: recallOrder(h),
      ms: performance.now() - t0,
    };
  }, [query]);

  /* Handing the panel over empties the field, but wiping the rows underneath
     would punish the click — and collapse the panel by ~95px while it's
     mid-morph. So the last real result set is held until the first keystroke
     re-queries. Once the visitor has actually typed, an empty field means an
     empty field. */
  const [held, setHeld] = useState<typeof computed | null>(null);
  useEffect(() => {
    if (query.trim()) setHeld(computed);
  }, [computed, query]);

  const holding = !query.trim() && touched && !queried && held !== null;
  const { parsed, hits, candidates, recall, ms } = holding ? held : computed;

  const takeOver = useCallback(() => setTouched(true), []);

  /* The gold bar. Clears the field rather than leaving the demo's last query
     in it, because an empty focused field is the clearest possible "type
     here" — but the results stay put underneath: wiping them would punish
     the click. */
  const handOver = useCallback(() => {
    setTouched(true);
    setQuery("");
    setOpenRow(null);
    autoAt.current = null;
    runAt.current = null;
    runT0.current = null;
    setT(null);
    setAnnounce("Demo stopped. Search field ready — type a query or pick a sample.");
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const runSample = useCallback(
    (text: string) => {
      setTouched(true);
      setQueried(true);
      setQuery(text);
      setOpenRow(null);
      queueRun(true);
      inputRef.current?.focus();
    },
    [queueRun],
  );

  /* Row heights and the flex gap, measured after layout. Both stacking orders
     are derived from these, so a wrapped title is accounted for exactly. */
  const resultsRef = useRef<HTMLDivElement>(null);
  const [geom, setGeom] = useState<{ heights: number[]; gap: number }>({
    heights: [],
    gap: 12,
  });

  /* ------------------------------------------------ staged presentation --
   * Rows live in normal flow. They used to be absolutely positioned at a
   * fixed row height, which collides the moment a title wraps — and titles
   * wrap at every narrow width. Reveal and reorder are therefore computed per
   * frame rather than handed to a CSS transition: the style object is
   * rewritten every frame, so a transition would restart each time and the
   * value would stay pinned at its start.
   */
  const { active, prog } = phaseOf(t);
  const n = hits.length;

  const recallMs =
    n === 0 ? -1 : active === 1 ? prog * DURS[1] : active >= 2 ? DURS[1] * 4 : -1;
  const stagger = n ? DURS[1] / n : 0;
  const ageOf = (recallRank: number) => recallMs - recallRank * stagger;

  /* ------------------------------------------------------- the reorder --
   * The DOM order never changes: rows are always rendered in their final,
   * rescored order and a transform puts them where recall had them. Re-sorting
   * the array instead would swap two rows between frames with no travel — the
   * reorder is the whole point of the stage, so it has to be visible.
   *
   * Doing that needs real geometry, because rows are in normal flow and a
   * wrapped title makes one taller than its neighbours. Heights are measured
   * after layout and the two stacking orders are accumulated from them.
   */
  const ranked = hits.map((h, finalRank) => {
    const r = recall.indexOf(h.product.id);
    return { hit: h, finalRank, recallRank: r < 0 ? finalRank : r };
  });

  const travel = useMemo(() => {
    if (geom.heights.length !== ranked.length) return ranked.map(() => 0);
    const { heights, gap } = geom;
    const top = (order: number[]) => {
      const out: number[] = [];
      let y = 0;
      for (const finalRank of order) {
        out[finalRank] = y;
        y += heights[finalRank] + gap;
      }
      return out;
    };
    const finalTop = top(ranked.map((r) => r.finalRank));
    const recallTop = top(
      [...ranked].sort((a, b) => a.recallRank - b.recallRank).map((r) => r.finalRank),
    );
    return ranked.map((r) => recallTop[r.finalRank] - finalTop[r.finalRank]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geom, hits]);

  const reordering = active === 2;
  /* Rows slide from their recall slot to their final one across the rescore,
     so `settle` is how far along that journey they are. */
  /* Rows only sit at their recall positions while parse and recall are on
     screen. Idle (active === -1, between loop cycles) has to settle too: left
     at 0 it holds the previous run's offsets over the next run's rows, and
     because those offsets were measured against different row heights, two
     rows land on the same line. */
  const settle = reordering ? easeInOutCubic(prog) : active === 0 || active === 1 ? 0 : 1;
  const dip = reordering ? 1 - 0.35 * Math.sin(Math.PI * clamp01((prog - 0.18) / 0.34)) : 1;

  /* Entity chips are the parse stage's output, so they arrive with it rather
     than the instant the engine returns — otherwise the answer is on screen
     before the step that produces it has started. */
  const chipCount =
    active < 0
      ? hasRun
        ? parsed.entities.length
        : 0
      : active === 0
        ? /* Finish the reveal at 70% of the stage, not at its very end. Spread
             across the full duration the last chip appeared on the frame parse
             handed over to recall, so the completed breakdown was never once on
             screen lit — the reveal needs to land before the stage does. */
          Math.floor(clamp01(prog / 0.7) * (parsed.entities.length + 0.4))
        : parsed.entities.length;

  /* Measure after layout, before paint: the travel offsets are needed on the
     very next frame the stage clock reads them. */
  useLayoutEffect(() => {
    const host = resultsRef.current;
    if (!host) return;
    const els = Array.from(host.querySelectorAll<HTMLElement>(".result"));
    if (els.length === 0) {
      setGeom((g) => (g.heights.length ? { heights: [], gap: g.gap } : g));
      return;
    }
    const heights = els.map((el) => el.getBoundingClientRect().height);
    /* Read the gap off the layout rather than hardcoding the stylesheet's
       value, so the two can never drift apart. */
    const gap =
      els.length > 1
        ? els[1].getBoundingClientRect().top - els[0].getBoundingClientRect().bottom
        : 12;
    setGeom((g) =>
      g.heights.length === heights.length &&
      g.heights.every((h, i) => Math.abs(h - heights[i]) < 0.5) &&
      Math.abs(g.gap - gap) < 0.5
        ? g
        : { heights, gap },
    );
  }, [hits, openRow]);

  /* Says in words what the panel is doing right now. The rail shows where in
     the pipeline we are; this says what that step means. */
  const caption =
    active === 0
      ? "finding entities"
      : active === 1
        ? "recalling candidates"
        : active === 2
          ? "re-ranking"
          : t === null
            ? "query understanding"
            : "final order";

  /* Header meta. `ms` is the measured figure animated up to itself — the
     number it lands on is the one the engine actually took. */
  const runMs = DURS[0] + DURS[1] + DURS[2];
  const overall = t === null ? 0 : clamp01(t / runMs);
  const status = active >= 0 && active < 3 ? "live" : t === null ? "idle" : "settled";
  const scanned = active === 1 ? Math.round(candidates * prog) : null;

  return (
    <section className="searchband" id="search">
      <div className="searchband__intro">
        <p className="eyebrow" data-reveal="0">
          <span className="rule-inline" aria-hidden="true" />
          {num("search")} — Live · query understanding
        </p>
        <h2 className="searchband__head" data-reveal="80">
          I&rsquo;m not a list of frameworks. I&rsquo;m the person who needs to know{" "}
          <span className="accent">why</span> the third result outranked the first.
        </h2>
        <p className="searchband__sub" data-reveal="140">
          Search sits where language meets systems, and that&rsquo;s exactly where I like to
          live. Query understanding, ranking models, ingestion pipelines that never sleep — the
          result is platforms serving 25K+ requests a minute across a 10-million-product catalog
          that still feel personal.
        </p>
      </div>

      <div className="searchband__demo">
        {/* The offer first, the mechanics second — the old copy led with BM25,
            which explains the panel instead of asking for a try. */}
        <p className="searchband__invite" data-reveal="180">
          Search something. Watch it think.
        </p>
        <p className="searchband__caption" data-reveal="200">
          Type anything and it parses your words into entities, recalls candidates with BM25,
          then <span className="accent">re-ranks</span> them — every row tells you why it landed
          where it did.
        </p>

        <div className="panel" ref={panelRef}>
          <div className="panel__chrome">
            <span className={`panel__title${active >= 0 && active < 3 ? " is-live" : ""}`}>
              {caption}
            </span>
            <span className={`panel__status is-${status}`}>
              {touched && !queried ? (
                "your turn"
              ) : (
                <>
                  {status}
                  {/* Nothing is counted until the stage that counts it has
                      run: parse reports no total, recall counts candidates,
                      rescore onward reports what survived. */}
                  {active === 0 || (active < 0 && !hasRun)
                    ? ""
                    : scanned !== null
                      ? ` · ${scanned.toLocaleString("en-IN")} scanned`
                      : ` · ${hits.length} hit${hits.length === 1 ? "" : "s"}`}
                  {/* The measured time is client-only: rendering a
                      performance.now() reading during SSR gives a different
                      string than hydration produces — a guaranteed mismatch. */}
                  {mounted ? ` · ${(ms * overall).toFixed(2)} ms` : ""}
                </>
              )}
            </span>
          </div>

          {/* `data-stage` is what lets the stylesheet spotlight whichever
              region the running stage is actually producing — chips for
              parse, rows for recall, scores for rescore. */}
          <div
            className={`panel__body${active >= 0 && active < 3 ? " is-running" : ""}`}
            data-stage={active}
          >
            {/* Vertical rail. Read top to bottom it is the pipeline; the
                connector between two dots fills as the stage above it runs. */}
            <ol className="rail" aria-label="Pipeline stages">
              {STAGES.map(({ name, note }, i) => {
                const state = active > i ? "done" : active === i ? "live" : "idle";
                const fill = state === "done" ? 1 : state === "live" ? prog : 0;
                return (
                  <li className={`rail__step is-${state}`} key={name}>
                    <span className="rail__marker" aria-hidden="true">
                      <span className="rail__dot" />
                      {/* Every step gets a connector, the last one included —
                          otherwise rescore is the one stage with no progress
                          to watch. Its line simply runs to the foot of the
                          rail instead of to another dot. */}
                      <span className="rail__line">
                        <span
                          className="rail__fill"
                          style={{ transform: `scaleY(${fill.toFixed(3)})` }}
                        />
                      </span>
                    </span>
                    <span className="rail__text">
                      <span className="rail__name">{name}</span>
                      <span className="rail__note">{note}</span>
                    </span>
                  </li>
                );
              })}
            </ol>

            <div className="panel__main">
              <div className={`panel__query${touched ? " is-live" : ""}`}>
                <span className="panel__glyph" aria-hidden="true">
                  ⌕
                </span>
                <input
                  ref={inputRef}
                  className="panel__input"
                  value={query}
                  onChange={(e) => {
                    takeOver();
                    setQueried(true);
                    setQuery(e.target.value);
                    setOpenRow(null);
                    queueRun();
                  }}
                  onFocus={takeOver}
                  onKeyDown={(e) => {
                    takeOver();
                    // Enter skips the debounce — waiting 340ms after a deliberate
                    // "go" reads as lag rather than as settling.
                    if (e.key === "Enter") queueRun(true);
                  }}
                  placeholder="try dairy free milk 1l…"
                  aria-label="Search the demo catalogue"
                  spellCheck={false}
                  autoComplete="off"
                />
                {query && (
                  <button
                    type="button"
                    className="panel__clear"
                    onClick={() => {
                      /* Clear is a reset, not a stop: it hands the panel back
                         to the demo loop from the first example. Focus stays
                         off the field — focusing it invites a keystroke, and
                         the first keystroke would immediately stop the loop
                         the visitor just asked to see again. */
                      setOpenRow(null);
                      setTouched(false);
                      setQueried(false);
                      touchedRef.current = false;
                      exampleIdx.current = 0;
                      runAt.current = null;
                      runT0.current = null;
                      cycleAt.current = null;
                      if (reduced) {
                        /* No rAF loop is running to pick the demo back up, so
                           restore the settled state directly rather than
                           leaving an empty field nothing will ever fill. */
                        setQuery(SAMPLE);
                        setT(TOTAL);
                        setHasRun(true);
                        autoAt.current = null;
                        return;
                      }
                      setQuery("");
                      setT(null);
                      setHasRun(false);
                      autoAt.current = Date.now() + ARM_MS;
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="panel__chips">
                {parsed.entities.length === 0 ? (
                  <span className="panel__nochips">
                    {query.trim() ? "no entities recognised — falling back to plain text" : " "}
                  </span>
                ) : (
                  parsed.entities.slice(0, chipCount).map((e, i) => (
                    <span
                      className="chip"
                      key={`${e.type}-${e.label}`}
                      style={{ animationDelay: `${i * 70}ms` }}
                    >
                      <span className="chip__type">{e.type}</span>
                      {e.label}
                    </span>
                  ))
                )}
              </div>

              <div className="panel__results" ref={resultsRef}>
                {/* Keyed on the engine's result, not on how many rows the stage
                clock has revealed yet — during parse there are hits, they just
                haven't arrived, and "nothing matches" would be a lie. */}
                {hits.length === 0 && (
                  <p className="panel__empty">
                    {query.trim()
                      ? "Nothing in the catalogue matches. It returns nothing rather than guessing."
                      : `Start typing to search ${catalogue.length - 1} products.`}
                  </p>
                )}

                {ranked.map(({ hit: h, finalRank, recallRank }) => {
                  const isOpen = h.product.id === openRow;
                  const max = Math.max(...h.signals.map((sig) => Math.abs(sig.value)), 1);
                  const e = easeOutCubic(clamp01(ageOf(recallRank) / 260));
                  /* Where recall put it, closing on where the rescore wants it. */
                  const dy = travel[finalRank] * (1 - settle);
                  /* Rank counts off the order currently on screen, so the
                     numbers flip mid-travel — which is what makes it read as a
                     re-rank rather than a crossfade. */
                  const shown = settle > 0.5 ? finalRank : recallRank;
                  return (
                    <div
                      className={`result${isOpen ? " is-open" : ""}${h.filteredOut ? " is-demoted" : ""}`}
                      key={h.product.id}
                      /* Emitted directly, never transitioned — see the note above
                     the row maths. */
                      style={{
                        opacity: (0.25 + 0.75 * e) * dip,
                        transform: `translate3d(${(10 * (1 - e)).toFixed(1)}px, ${dy.toFixed(1)}px, 0)`,
                        zIndex: Math.abs(dy) > 0.5 ? 1 : undefined,
                      }}
                    >
                      <button
                        type="button"
                        className="result__head"
                        onClick={() => setOpenRow(isOpen ? null : h.product.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="result__rank">#{shown + 1}</span>

                        <span className="result__body">
                          {h.product.id === "me" ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              className="result__thumb result__thumb--me"
                              src="/assets/thumb-me.webp"
                              alt=""
                              width={44}
                              height={44}
                              loading="lazy"
                            />
                          ) : (
                            <span className="result__thumb" />
                          )}
                          <span className="result__text">
                            <span className="result__title">
                              {h.product.title}
                              {h.product.size && (
                                <span className="result__size">
                                  {" "}
                                  · {h.product.size.value} {h.product.size.unit.toUpperCase()}
                                </span>
                              )}
                            </span>
                            <span className="result__meta">
                              {h.filteredOut ??
                                [
                                  h.product.brand,
                                  h.product.price > 0
                                    ? `₹${h.product.price.toLocaleString("en-IN")}`
                                    : null,
                                ]
                                  .filter(Boolean)
                                  .join(" · ")}
                            </span>
                          </span>
                        </span>

                        <span className="result__bar">
                          <span
                            className="result__fill"
                            style={{ width: `${Math.round(h.norm * 100)}%` }}
                          />
                        </span>

                        <span className={`result__score${h.norm > 0.7 ? " is-high" : ""}`}>
                          {h.norm.toFixed(2)}
                        </span>

                        <span className="result__caret" aria-hidden="true">
                          {isOpen ? "hide" : "why?"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="breakdown">
                          {h.signals.map((s) => (
                            <div className="breakdown__row" key={s.key + s.label}>
                              <span className="breakdown__label">{s.label}</span>
                              <span className="breakdown__track">
                                <span
                                  className={`breakdown__bar${s.value < 0 ? " is-neg" : ""}`}
                                  style={{ width: `${(Math.abs(s.value) / max) * 100}%` }}
                                />
                              </span>
                              <span className="breakdown__val">
                                {s.value >= 0 ? "+" : "−"}
                                {Math.abs(s.value).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bar and chips are two rows of one grid whose track sizes swap, so
              the handover reads as one object morphing rather than a swap.
              The ask sits after the rows on purpose: the reader arrives at it
              having just watched five products re-rank. */}
          <div className={`panelfoot${touched ? " is-live" : ""}`}>
            <div className="panelfoot__slot">
              <button
                type="button"
                className="invite"
                onClick={handOver}
                aria-label="Try the search demo yourself"
                tabIndex={touched ? -1 : 0}
                aria-hidden={touched}
              >
                <span className="invite__line">Your turn — search for something</span>
                <span className="invite__tag" aria-hidden="true">
                  Takes 3 seconds <span className="invite__arrow">→</span>
                </span>
              </button>
            </div>

            <div className="panelfoot__slot">
              <div className="samplerow" role="group" aria-label="Sample queries">
                <span className="samplerow__label" aria-hidden="true">
                  Try one →
                </span>
                {SAMPLES.map((s) => (
                  <button
                    type="button"
                    className="samplechip"
                    key={s}
                    tabIndex={touched ? 0 : -1}
                    onClick={() => runSample(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="panel__note">
          {
            "// real BM25 + rule-based NER, in your browser · CTR/ATC are synthetic priors, not telemetry"
          }
        </p>

        <p className="sr-only" role="status" aria-live="polite">
          {announce}
        </p>

        <p className="searchband__footnote" data-reveal="220">
          Lexical match gets you candidates. Synonyms, attribute fit and demand signals decide
          who actually deserves the top slot.
        </p>
      </div>
    </section>
  );
}
