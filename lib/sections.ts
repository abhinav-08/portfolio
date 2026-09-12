import { notes, papers } from "@/lib/content";

/**
 * Section numbering is derived, not hardcoded.
 *
 * A section with nothing in it doesn't render, and a hardcoded eyebrow would
 * then leave a hole in the sequence — "05 — Archive" followed by
 * "07 — Elsewhere". Deriving the numbers from what actually renders keeps them
 * contiguous now and correct again the moment content is added or removed.
 */

const order: string[] = [
  "search",
  "experience",
  "skills",
  "lab",
  ...(notes.length + papers.length > 0 ? ["archive"] : []),
  "instagram",
  "hello",
];

/** Zero-padded position of a section, e.g. num("skills") → "03". */
export function num(id: string): string {
  const i = order.indexOf(id);
  if (i === -1) throw new Error(`Unknown section id: ${id}`);
  return String(i + 1).padStart(2, "0");
}
