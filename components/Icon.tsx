import { iconPaths } from "@/lib/icon-paths";

/**
 * Hand-drawn glyphs for tools that have no Simple Icons mark.
 * Stroked rather than filled, so they need their own render branch.
 */
const stroked: Record<string, React.ReactNode> = {
  // XGBoost / learning-to-rank: three ranked bars with a promotion arrow.
  ltr: (
    <>
      <path d="M3 7h11" />
      <path d="M3 12h7" />
      <path d="M3 17h9" />
      <path d="M18 15V5" />
      <path d="m15 8 3-3 3 3" />
    </>
  ),
  // Vendor-neutral cloud — the card covers AWS, GCP and Azure, so using any
  // one provider's mark would misrepresent the other two.
  cloud: (
    <>
      <path d="M17.5 18.5H7a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.53 1.56 3.95 3.95 0 0 1-.43 7.4Z" />
    </>
  ),
  // NLP — language going in, structure coming out.
  nlp: (
    <>
      <path d="M20 14.5a2.5 2.5 0 0 1-2.5 2.5H9l-4 3v-3H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h13A2.5 2.5 0 0 1 20 6.5Z" />
      <path d="M6.5 8.5h11" />
      <path d="M6.5 12h6" />
    </>
  ),
  // Vector search — a query point and its nearest neighbours in the space.
  vector: (
    <>
      <circle cx="11" cy="12" r="6.2" />
      <circle cx="11" cy="12" r="1.4" />
      <path d="m15.6 16.4 4.4 4.4" />
      <path d="M8.4 9.6 11 12l3.1-1.6" />
    </>
  ),
  // Embeddings — discrete tokens projected into a dense space.
  embeddings: (
    <>
      <circle cx="5.5" cy="6" r="1.3" />
      <circle cx="5.5" cy="12" r="1.3" />
      <circle cx="5.5" cy="18" r="1.3" />
      <path d="M8.4 6h2.2M8.4 12h2.2M8.4 18h2.2" />
      <circle cx="15" cy="8" r="1.1" />
      <circle cx="19" cy="11.5" r="1.1" />
      <circle cx="14.5" cy="15.5" r="1.1" />
      <circle cx="18.5" cy="17.5" r="1.1" />
    </>
  ),
  // NER — a span of text bracketed and tagged as an entity.
  ner: (
    <>
      <path d="M7 5H4.5v14H7" />
      <path d="M17 5h2.5v14H17" />
      <rect x="9" y="8" width="6" height="4" rx="1" />
      <path d="M9 15.5h6" />
    </>
  ),
};

export default function Icon({
  name,
  size = 26,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const filled = iconPaths[name];

  if (filled) {
    return (
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={filled} />
      </svg>
    );
  }

  const strokedGlyph = stroked[name];
  if (!strokedGlyph) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {strokedGlyph}
    </svg>
  );
}
