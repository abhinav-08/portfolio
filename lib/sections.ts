import { talks, writing } from "@/lib/content";
import { config } from "@/lib/site";

/**
 * Section numbering is derived, not hardcoded.
 *
 * Sections whose entries are all placeholders don't render (see
 * `config.showPlaceholders`), and a hardcoded eyebrow would then leave a hole
 * in the sequence — "05 — Writing" followed by "07 — Elsewhere". Deriving the
 * numbers from what actually renders keeps them contiguous now, and correct
 * again the moment real Talks or Writing entries are added.
 */

function renders(items: { placeholder?: boolean }[]): boolean {
  return (config.showPlaceholders ? items : items.filter((i) => !i.placeholder)).length > 0;
}

const order: string[] = [
  "search",
  "experience",
  "skills",
  "lab",
  ...(renders(writing) ? ["writing"] : []),
  ...(renders(talks) ? ["talks"] : []),
  "instagram",
  "hello",
];

/** Zero-padded position of a section, e.g. num("skills") → "03". */
export function num(id: string): string {
  const i = order.indexOf(id);
  if (i === -1) throw new Error(`Unknown section id: ${id}`);
  return String(i + 1).padStart(2, "0");
}
