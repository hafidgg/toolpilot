// Parses [link text](url) inside plain paragraph text. Only http(s) URLs and
// site-relative paths become links; anything else (javascript:, data:,
// protocol-relative, malformed) is left exactly as written.

export type InlineSegment =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string; external: boolean };

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function classifyHref(href: string): { external: boolean } | null {
  if (href.startsWith("/") && !href.startsWith("//")) return { external: false };
  if (!/^https?:\/\//i.test(href)) return null;
  try {
    const url = new URL(href);
    return url.protocol === "http:" || url.protocol === "https:" ? { external: true } : null;
  } catch {
    return null;
  }
}

export function parseInlineLinks(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  let plain = "";
  let last = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [whole, label, href] = match;
    const start = match.index ?? 0;
    const kind = classifyHref(href);
    plain += text.slice(last, start);
    if (kind) {
      if (plain) segments.push({ type: "text", text: plain });
      plain = "";
      segments.push({ type: "link", text: label, href, external: kind.external });
    } else {
      plain += whole;
    }
    last = start + whole.length;
  }

  plain += text.slice(last);
  if (plain) segments.push({ type: "text", text: plain });
  return segments;
}
