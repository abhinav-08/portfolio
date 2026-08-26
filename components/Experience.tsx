"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { roles, type Role } from "@/lib/content";
import { num } from "@/lib/sections";
import { useMounted } from "@/lib/hooks";

/** Node diameters, newest first. Position is derived from these. */
const NODE_SIZES = [11, 7, 7, 5];

/** First four-digit year in a period string — the year the role began. */
function startYear(period: string): string {
  return period.match(/\d{4}/)?.[0] ?? "";
}

export default function Experience() {
  const [open, setOpen] = useState<Role | null>(null);
  const triggers = useRef(new Map<string, HTMLButtonElement>());
  const mounted = useMounted();

  const close = useCallback(() => {
    const id = open?.id;
    setOpen(null);
    // Return focus to the row that opened the drawer.
    if (id) requestAnimationFrame(() => triggers.current.get(id)?.focus());
  }, [open]);

  return (
    <section className="exp" id="experience">
      <div className="exp__head" data-reveal="0">
        <p className="eyebrow">
          <span className="rule-inline" aria-hidden="true" />
          {num("experience")} — Experience
        </p>
        <p className="exp__hint">Four roles · one rail</p>
      </div>

      {/* "The Spine": the roles hang off one gold rail that dims into the
          past. Type size, copy opacity and node weight all descend with age,
          so seniority reads as physical presence rather than as a label. */}
      <div className="spine">
        <span className="spine__rail" data-reveal="0" aria-hidden="true" />

        {roles.map((r, i) => (
          <button
            type="button"
            className="spine__role"
            key={r.id}
            data-reveal={i * 90}
            /* Node diameter drives its own centring — see the calc() in the
               stylesheet. Hand-copied offsets would drift at every breakpoint
               where the rail moves. */
            style={{ ["--node" as string]: `${NODE_SIZES[i] ?? 5}px` }}
            onClick={() => setOpen(r)}
            aria-haspopup="dialog"
            aria-label={`${r.company}, ${r.title}, ${r.period} — open details`}
            ref={(el) => {
              if (el) triggers.current.set(r.id, el);
              else triggers.current.delete(r.id);
            }}
          >
            <span className="spine__year" aria-hidden="true">
              {startYear(r.period)}
            </span>
            <span className="spine__node" aria-hidden="true" />

            <span className="spine__namerow">
              <span className="spine__company">{r.company}</span>
              {i === 0 && (
                <span className="spine__now" aria-hidden="true">
                  <span className="spine__now-dot" />
                  Now
                </span>
              )}
            </span>

            <span className="spine__meta">
              {r.title} · {r.period}
            </span>
            <span className="spine__blurb">{r.blurb}</span>

            {/* The "+" reads as "there is more behind this" — it is half the
                click affordance, the cue below is the other half. */}
            <span className="spine__chips">
              {r.highlights.map((h) => (
                <span className="spine__chip" key={h}>
                  <span className="spine__chip-plus" aria-hidden="true">
                    +
                  </span>
                  {h}
                </span>
              ))}
            </span>

            {/* Nothing else on the block said "clickable" when standing still;
                hover-only affordances don't exist on touch at all. */}
            <span className="spine__cue" aria-hidden="true">
              Full story
              <span className="spine__cue-arrow">→</span>
            </span>
          </button>
        ))}
      </div>

      {/* Portalled to <body>: `.shell` sets z-index 1, which would otherwise
          trap the drawer's z-index 70 beneath the fixed header. */}
      {open &&
        mounted &&
        createPortal(<RoleDrawer role={open} onClose={close} />, document.body)}
    </section>
  );
}

/* ------------------------------------------------------------- drawer */

function RoleDrawer({ role, onClose }: { role: Role; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const headingId = `drawer-${role.id}`;

  useEffect(() => {
    document.body.classList.add("is-locked");

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      // Focus trap.
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !panel?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-labelledby={headingId}>
      <div className="drawer__scrim" onClick={onClose} aria-hidden="true" />

      <div className="drawer__panel" ref={panelRef}>
        <div className="drawer__bar">
          <span className="drawer__meta">
            {role.period} · {role.location}
          </span>
          <button type="button" className="drawer__close" onClick={onClose}>
            Close ✕
          </button>
        </div>

        <div className="drawer__body">
          <p className="drawer__kicker">{role.title}</p>
          <h2 className="drawer__company" id={headingId}>
            {role.company}
          </h2>
          <p className="drawer__blurb">{role.blurb}</p>

          <hr className="drawer__rule" />

          <p className="drawer__kicker">What I did</p>
          <ul className="drawer__list">
            {role.bullets.map((b, i) => (
              <li className="drawer__item" key={i}>
                <span className="drawer__marker" aria-hidden="true">
                  —
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <hr className="drawer__rule" />

          <p className="drawer__kicker">Stack</p>
          <div className="drawer__chips">
            {role.stack.map((s) => (
              <span className="drawer__chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
