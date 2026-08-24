"use client";

import { useEffect, useRef, useState } from "react";
import { demos, type DemoRow } from "@/lib/content";
import { useReducedMotion } from "@/lib/hooks";
import { num } from "@/lib/sections";

const ROW_H = 74;
const ROW_H_SM = 90;
const CHAR_MS = 64;
const CHIPS_AFTER = 300;
const SCORES_AFTER = 640;
const SCENARIO_MS = 5200;

/** Deterministic shuffle seed per scenario so SSR and client agree. */
function scrambled(rows: DemoRow[], seed: number): DemoRow[] {
  const out = rows.map((r) => ({ ...r, score: 0.5 }));
  // Rotate rather than randomise — stable across renders, still visibly re-ranks.
  const k = seed % out.length;
  return [...out.slice(k), ...out.slice(0, k)];
}

export default function SearchConsole() {
  const { reduced, ready } = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [rowH, setRowH] = useState(ROW_H);

  const first = demos[0];
  const [query, setQuery] = useState(first.q);
  const [chips, setChips] = useState<string[]>(first.chips);
  const [latency, setLatency] = useState(first.lat);
  const [rows, setRows] = useState<DemoRow[]>(first.rows);

  /* Row height tracks the mobile breakpoint so translateY stays in step
     with the taller rows the stylesheet switches to under 768px. */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setRowH(mq.matches ? ROW_H_SM : ROW_H);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* Pause the loop while the panel is off-screen. */
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* The demo loop. */
  useEffect(() => {
    if (!ready || reduced || !visible) return;

    let idx = 0;
    let timers: number[] = [];
    let loop = 0;
    let cancelled = false;

    const clear = () => {
      timers.forEach(clearTimeout);
      timers = [];
    };
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    const run = () => {
      if (cancelled) return;
      const demo = demos[idx];
      clear();

      setChips([]);
      setQuery("");
      setLatency(demo.lat);
      setRows(scrambled(demo.rows, idx + 1));

      demo.q.split("").forEach((_, i) => {
        at((i + 1) * CHAR_MS, () => setQuery(demo.q.slice(0, i + 1)));
      });

      const typedAt = demo.q.length * CHAR_MS;
      at(typedAt + CHIPS_AFTER, () => setChips(demo.chips));
      at(typedAt + SCORES_AFTER, () => setRows(demo.rows));

      idx = (idx + 1) % demos.length;
    };

    run();
    loop = window.setInterval(run, SCENARIO_MS);

    return () => {
      cancelled = true;
      clear();
      window.clearInterval(loop);
    };
  }, [ready, reduced, visible]);

  /* Rank = position in a copy sorted by score descending. */
  const ranked = [...rows].sort((a, b) => b.score - a.score).map((r) => r.id);

  return (
    <section className="searchband" id="search">
      {/* Split by subject: who I am on the left, what the panel is doing on
          the right. Keeping all four copy blocks in one column alternated
          serif and sans twice, which read as two sections crammed together. */}
      <div className="searchband__intro">
        <p className="eyebrow" data-reveal="0">
          <span className="rule-inline" aria-hidden="true" />
          {num("search")} — Live · query understanding
        </p>
        <h2 className="searchband__head" data-reveal="80">
          I&rsquo;m not a list of frameworks. I&rsquo;m the person who needs to know{" "}
          <span className="accent">why</span> the third result outranked the first — and
          can&rsquo;t sleep until it doesn&rsquo;t.
        </h2>
        <p className="searchband__sub" data-reveal="140">
          Search sits where language meets systems, and that&rsquo;s exactly where I like to
          live. Query understanding, ranking models, ingestion pipelines that never sleep — the
          result is platforms serving 25K+ requests a minute across a 10-million-product catalog
          that still feel personal.
        </p>
      </div>

      <div className="searchband__demo">
        <p className="searchband__caption" data-reveal="180">
          This is roughly what my systems see when you type. Intent, units, geo, price — pulled
          out of the words, then <span className="accent">re-ranked</span> before you blink.
        </p>

        <div className="panel" ref={panelRef} aria-hidden="true">
          <div className="panel__chrome">
            <span>GET /search?q=…</span>
            <span className="panel__status">200 OK · {latency} ms</span>
          </div>

          <div className="panel__query">
            <span className="panel__glyph">⌕</span>
            <span>{query}</span>
            <span className="panel__caret" />
          </div>

          <div className="panel__chips">
            {chips.map((c, i) => (
              <span className="chip" key={c} style={{ animationDelay: `${i * 90}ms` }}>
                {c}
              </span>
            ))}
          </div>

          <div className="panel__results">
            {rows.map((r) => {
              const rank = ranked.indexOf(r.id);
              return (
                <div
                  className="result"
                  key={r.id}
                  style={{ transform: `translateY(${rank * rowH}px)` }}
                >
                  <span className="result__rank">#{rank + 1}</span>

                  <span className="result__body">
                    {r.isMe ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="result__thumb result__thumb--me"
                        src="/assets/thumb-me.webp"
                        alt=""
                        width={44}
                        height={44}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="result__thumb" />
                    )}
                    <span className="result__text">
                      <span className="result__title">{r.title}</span>
                      <span className="result__meta">{r.meta}</span>
                    </span>
                  </span>

                  <span className="result__bar">
                    <span
                      className="result__fill"
                      style={{ width: `${Math.round(r.score * 100)}%` }}
                    />
                  </span>

                  <span className={`result__score${r.score > 0.7 ? " is-high" : ""}`}>
                    {r.score.toFixed(2)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="panel__note">
            {"// live re-rank: lexical + semantic + CTR/ATC signals"}
          </div>
        </div>

        <p className="searchband__footnote" data-reveal="220">
          Lexical match gets you candidates. Semantics, CTR and add-to-cart rate decide who
          actually deserves the top slot.
        </p>
      </div>
    </section>
  );
}
