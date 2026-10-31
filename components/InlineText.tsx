import type { ReactNode } from "react";
import Link from "next/link";
import { parseInlineLinks } from "@/lib/inline-links";

// Called as a function (not rendered as a component) so that paragraphs
// without links produce exactly the same markup as a bare string.
export function renderInlineText(text: string): ReactNode {
  const segments = parseInlineLinks(text);
  if (segments.length === 1 && segments[0].type === "text") return text;

  return segments.map((seg, i) => {
    if (seg.type === "text") return seg.text;
    return seg.external ? (
      <a key={i} href={seg.href} rel="noopener noreferrer" className="text-accent hover:underline">
        {seg.text}
      </a>
    ) : (
      <Link key={i} href={seg.href} className="text-accent hover:underline">
        {seg.text}
      </Link>
    );
  });
}
