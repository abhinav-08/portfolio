import { config } from "@/lib/site";

/** Decorative glow field + film grain. Purely presentational. */
export default function Background() {
  return (
    <div className="bg-field" aria-hidden="true">
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
      {config.filmGrain && <div className="grain" />}
    </div>
  );
}
