"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { detectBrand, parseQuery } from "@/lib/search/parse";
import { allBrands, normalise, search, type Hit } from "@/lib/search/rank";
import { useMounted, useReducedMotion } from "@/lib/hooks";
import { num } from "@/lib/sections";

const ROW_H = 74;
const ROW_H_SM = 92;
const SIGNAL_H = 21;
const CHAR_MS = 64;
const SCENARIO_MS = 5600;

/** Auto-typed while the visitor hasn't touched the input. */
const EXAMPLES = [
  "dairy free milk 1l",
  "gluten free bread",
  "cheap snacks under 100",
  "organic vegetables",
];

interface Ranked extends Hit {
  norm: number;
}

export default function SearchConsole() {
  const { reduced, ready } = useReducedMotion();
  const mounted = useMounted();
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState(EXAMPLES[0]);
  const [touched, setTouched] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const [rowH, setRowH] = useState(ROW_H);

  /* Row height follows the mobile breakpoint so the stacking maths stays in
     step with the taller rows the stylesheet switches to. */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setRowH(mq.matches ? ROW_H_SM : ROW_H);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ------------------------------------------------------- the engine --
   * Runs synchronously on every keystroke. The catalogue is ~40 documents,
   * so a full parse + BM25 recall + rescore is well under a millisecond —
   * the reported timing is measured, not decorative.
   */
  const { parsed, hits, ms } = useMemo(() => {
    const t0 = performance.now();
    const p = detectBrand(parseQuery(query), allBrands);
    const h = normalise(search(p, 5));
    return { parsed: p, hits: h as Ranked[], ms: performance.now() - t0 };
  }, [query]);

  /* ------------------------------------------------- idle demo typing -- */
  useEffect(() => {
    if (!ready || reduced || touched || !onScreen) return;

    let idx = 0;
    let timers: number[] = [];
    let loop = 0;
    let cancelled = false;

    const clear = () => {
      timers.forEach(clearTimeout);
      timers = [];
    };

    const run = () => {
      if (cancelled) return;
      const text = EXAMPLES[idx];
      clear();
      setQuery("");
      setOpenRow(null);
      text.split("").forEach((_, i) => {
        timers.push(
          window.setTimeout(() => setQuery(text.slice(0, i + 1)), (i + 1) * CHAR_MS),
        );
      });
      idx = (idx + 1) % EXAMPLES.length;
    };

    run();
    loop = window.setInterval(run, SCENARIO_MS);
    return () => {
      cancelled = true;
      clear();
      window.clearInterval(loop);
    };
  }, [ready, reduced, touched, onScreen]);

  const takeOver = useCallback(() => setTouched(true), []);

  /* Stacking offsets: each row sits below the ones above it, and the open row
     is taller. Computing offsets rather than using normal flow keeps the
     re-rank a pure transform, so rows glide instead of jumping. */
  const heights = hits.map((h) =>
    h.product.id === openRow ? rowH + h.signals.length * SIGNAL_H + 16 : rowH,
  );
  const offsets = heights.reduce<number[]>((acc, h, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + heights[i - 1]);
    return acc;
  }, []);
  const stackH = heights.reduce((a, b) => a + b, 0);

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
          result is platforms serving 25K+ requests a minute across a 10-million-product
          catalog that still feel personal.
        </p>
      </div>

      <div className="searchband__demo">
        <p className="searchband__caption" data-reveal="180">
          Type anything. It parses your words into entities, recalls candidates with BM25, then{" "}
          <span className="accent">re-ranks</span> them — and every row will tell you why it
          landed where it did.
        </p>

        <div className="panel" ref={panelRef}>
          <div className="panel__chrome">
            <span>parse → recall → rescore</span>
            <span className="panel__status">
              {hits.length} hit{hits.length === 1 ? "" : "s"}
              {/* The measured time is client-only: rendering a performance.now()
                  reading during SSR gives a different string than hydration
                  produces, which is a guaranteed text mismatch. */}
              {mounted ? ` · ${ms.toFixed(2)} ms` : ""}
            </span>
          </div>

          <div className="panel__query">
            <span className="panel__glyph" aria-hidden="true">
              ⌕
            </span>
            <input
              ref={inputRef}
              className="panel__input"
              value={query}
              onChange={(e) => {
                takeOver();
                setQuery(e.target.value);
                setOpenRow(null);
              }}
              onFocus={takeOver}
              onKeyDown={takeOver}
              placeholder="try: lactose free milk under 150"
              aria-label="Search the demo catalogue"
              spellCheck={false}
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                className="panel__clear"
                onClick={() => {
                  takeOver();
                  setQuery("");
                  inputRef.current?.focus();
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
              parsed.entities.map((e, i) => (
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

          <div className="panel__results" style={{ height: Math.max(stackH, rowH) }}>
            {hits.length === 0 && (
              <p className="panel__empty">
                {query.trim()
                  ? "Nothing in the catalogue matches. It returns nothing rather than guessing."
                  : "Start typing to search 40 products."}
              </p>
            )}

            {hits.map((h, rank) => {
              const isOpen = h.product.id === openRow;
              const max = Math.max(...h.signals.map((s) => Math.abs(s.value)), 1);
              return (
                <div
                  className={`result${isOpen ? " is-open" : ""}${h.filteredOut ? " is-demoted" : ""}`}
                  key={h.product.id}
                  style={{ transform: `translateY(${offsets[rank]}px)` }}
                >
                  <button
                    type="button"
                    className="result__head"
                    onClick={() => setOpenRow(isOpen ? null : h.product.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="result__rank">#{rank + 1}</span>

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
                      {isOpen ? "−" : "+"}
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

          <div className="panel__note">
            {
              "// real BM25 + rule-based NER, in your browser. CTR/ATC are synthetic priors, not telemetry."
            }
          </div>
        </div>

        <p className="searchband__footnote" data-reveal="220">
          Lexical match gets you candidates. Synonyms, attribute fit and demand signals decide
          who actually deserves the top slot.
        </p>
      </div>
    </section>
  );
}
