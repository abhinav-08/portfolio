import { config } from "@/lib/site";

/** Decorative glow field + film grain. Purely presentational. */
export default function Background() {
  return (
    <div className="bg-field" aria-hidden="true">
      {/* Two nested elements so each owns exactly one transform: the outer
          plays the page-load bloom, the inner is written by HeroBreath. */}
      <div className="bg-field__breath" id="bg-breath">
        {config.backgroundMotion ? (
          <>
            <div className="glow glow--1" />
            <div className="glow glow--2" />
            <div className="glow glow--3" />
            <div className="glow glow--4" />
          </>
        ) : (
          <>
            <div className="glow glow--static-a" />
            <div className="glow glow--static-b" />
          </>
        )}
      </div>
      {config.filmGrain && <div className="grain" />}
    </div>
  );
}
