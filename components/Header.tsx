"use client";

import { useEffect, useState } from "react";
import { config, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll and close on Escape while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("is-locked");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="header">
        <a href="#top" className="wordmark" aria-label="Abhinav Tyagi — home">
          AT<span className="accent">.</span>
        </a>

        <nav className="nav" aria-label="Sections">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {config.openToWork && (
            <span className="pill-work">
              {/* Real element, not ::before — HeroBreath drives it anti-phase
                  to the glow, and JS can't write to a pseudo-element. */}
              <span className="pill-work__dot" id="work-dot" aria-hidden="true" />
              Open to work
            </span>
          )}
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-sheet"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="nav-sheet" id="nav-sheet">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
