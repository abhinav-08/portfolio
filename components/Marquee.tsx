import { marqueeTerms } from "@/lib/content";

/**
 * Decorative term band. The list is duplicated exactly twice; the keyframe
 * translates by half the track plus half a gap so the loop has no seam
 * (2N items carry 2N−1 gaps, so a plain −50% would be half a gap short).
 */
export default function Marquee() {
  const items = [...marqueeTerms, ...marqueeTerms];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((t, i) => (
          <span className="marquee__item" key={`${t}-${i}`}>
            {t}
            <span className="marquee__sep"> ✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
