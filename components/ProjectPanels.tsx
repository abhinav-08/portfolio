"use client";

/**
 * The Lab as one row of expanding panels.
 *
 * Four projects, one open at a time. The others collapse to narrow strips with
 * their titles set sideways. Autoplay walks the row every six seconds with a
 * gold bar showing the time left; hovering a panel opens it and stops the
 * clock, leaving the row restarts it.
 *
 * Built from the handoff's geometry and motion values. Two things it asks for
 * are done differently and deliberately, both noted at the point they happen:
 * the open content's width is measured rather than pinned at 740px, and the
 * panels are real buttons so the row can be driven from a keyboard.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/content";
import { useReducedMotion } from "@/lib/hooks";

const OUT = { target: "_blank", rel: "noopener noreferrer" } as const;

const CYCLE_MS = 6000;
/** Must match the row's `gap` and the panel's horizontal padding in CSS. */
const GAP = 12;
const PAD_X = 48;
/** Active panel's flex-grow against 1 for each collapsed one. */
const GROW = 7;

export default function ProjectPanels() {
  const { reduced, ready } = useReducedMotion();
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  /* Flips off and on around each change so the bar can be rewound with no
     transition before it is animated again. */
  const [armed, setArmed] = useState(false);
  const [onScreen, setOnScreen] = useState(false);

  const running = ready && !reduced && onScreen && !paused;

  /* The handoff pins the open content to 740px so the text does not reflow
     while the panel is still growing. That number is tied to its 1280px
     artboard; this page is fluid and 1400 at its widest, where 740 would leave
     the copy in a column two-thirds the width of the panel holding it. Same
     intent, measured: the open panel's inner width at whatever size the row
     actually is, written once per resize so it is just as stable mid-animation. */
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth;
      const n = projects.length;
      const inner = ((w - (n - 1) * GAP) * GROW) / (GROW + n - 1) - PAD_X * 2;
      el.style.setProperty("--open-w", `${Math.max(0, Math.round(inner))}px`);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Off-screen the row should not be quietly cycling: it burns frames and the
     visitor arrives mid-sequence with no idea why panel three is open. */
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => setOnScreen(es.some((e) => e.isIntersecting)), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Rewind the bar to zero with no transition, then let it run on the next
     frame. Two frames, not one: a single rAF still lands inside the same style
     flush, the browser coalesces the two widths and the bar never replays. */
  useEffect(() => {
    setArmed(false);
    if (!running) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setArmed(true));
    });
    const t = window.setTimeout(() => setActive((a) => (a + 1) % projects.length), CYCLE_MS);
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(t);
    };
  }, [active, running]);

  const open = useCallback((i: number) => setActive(i), []);

  return (
    <div
      className="ppanels"
      data-reveal="120"
      ref={rowRef}
      onMouseLeave={() => setPaused(false)}
    >
      {projects.map((p, i) => {
        const isOpen = i === active;
        const n = String(i + 1).padStart(2, "0");
        return (
          <section
            key={p.title}
            className={`ppanel${isOpen ? " is-open" : ""}`}
            data-status={p.status}
            onMouseEnter={() => {
              setPaused(true);
              open(i);
            }}
          >
            {/* A button, not a div with a click handler: the collapsed strip is
                the control that opens the panel, so it has to be reachable and
                operable from a keyboard. It covers the strip, and once the
                panel is open it stops taking the pointer so the content under
                it — links included — is clickable. */}
            <button
              type="button"
              className="ppanel__hit"
              aria-expanded={isOpen}
              aria-label={`${p.title} — ${p.status}`}
              onFocus={() => open(i)}
              onClick={() => open(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                  e.preventDefault();
                  open((i + 1) % projects.length);
                }
                if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                  e.preventDefault();
                  open((i - 1 + projects.length) % projects.length);
                }
              }}
            />

            <span className="ppanel__spine" aria-hidden="true">
              <span className="ppanel__n">{n}</span>
              <span className="ppanel__spinetitle">{p.title}</span>
              <span className="ppanel__dot" />
            </span>

            <div className="ppanel__open">
              <p className="ppanel__meta">
                <span className="ppanel__metan">{n}</span>
                <span className="ppanel__pill">
                  <span className="ppanel__dot" aria-hidden="true" />
                  {p.status}
                </span>
                <span className="ppanel__cat">{p.category}</span>
              </p>

              <h3 className="ppanel__title">{p.title}</h3>
              <p className="ppanel__blurb">{p.blurb}</p>

              <p className="ppanel__flow">
                {p.flow.map((f, j) => (
                  <span className="ppanel__flowitem" key={f}>
                    {j > 0 && (
                      <span className="ppanel__arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                    <span className="ppanel__chip">{f}</span>
                  </span>
                ))}
              </p>

              <div className="ppanel__foot">
                <span className="ppanel__stack">
                  {p.stack.map((t) => (
                    <span className="ppanel__tag" key={t}>
                      {t}
                    </span>
                  ))}
                </span>
                {p.href ? (
                  <a
                    className="ppanel__cta"
                    href={p.href}
                    {...(p.href.startsWith("#") ? {} : OUT)}
                    /* Not focusable while the panel is shut — a link the eye
                       cannot see should not be a stop on the way through. */
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {p.hrefLabel} {p.href.startsWith("#") ? "↓" : "↗"}
                  </a>
                ) : (
                  <span className="ppanel__nolink">Not public yet</span>
                )}
              </div>
            </div>

            {isOpen && (
              <span
                className={`ppanel__bar${armed ? " is-running" : ""}`}
                aria-hidden="true"
                style={{ transitionDuration: `${CYCLE_MS}ms` }}
              />
            )}
          </section>
        );
      })}
    </div>
  );
}
