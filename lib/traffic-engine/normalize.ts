// TRAFFIC ENGINE — NORMALIZATION
// Deterministic, side-effect-free. Never mutates or discards raw input.

export interface NormalizedUrl {
  originalUrl: string;
  normalizedUrl: string;
  hostVariant: "www" | "non-www" | "unknown";
}

/**
 * Normalizes a URL for comparison purposes only.
 * Does NOT assume www = historical — that judgment belongs to the caller,
 * who has context about the dataset's time period relative to the
 * canonical correction date.
 */
export function normalizeUrl(rawUrl: string): NormalizedUrl {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    // Not a valid absolute URL — return as-is, host variant unknown.
    return {
      originalUrl: rawUrl,
      normalizedUrl: rawUrl.trim().toLowerCase(),
      hostVariant: "unknown",
    };
  }

  const hostVariant: "www" | "non-www" =
    url.hostname.startsWith("www.") ? "www" : "non-www";

  // http -> https (only if we're confident; do not force on unrelated domains)
  const protocol = "https:";

  const hostname = url.hostname.replace(/^www\./, "");

  // trailing slash normalization (strip, except root "/")
  let pathname = url.pathname;
  if (pathname.length > 1 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  // safe URL decoding of the pathname
  let decodedPathname = pathname;
  try {
    decodedPathname = decodeURIComponent(pathname);
  } catch {
    // leave as-is if decoding fails
  }

  const normalizedUrl = `${protocol}//${hostname}${decodedPathname}`;

  return {
    originalUrl: rawUrl,
    normalizedUrl,
    hostVariant,
  };
}

export interface NormalizedQuery {
  rawQuery: string;
  normalizedQuery: string;
}

/**
 * Normalizes a query string for matching/grouping purposes.
 * The raw query is always preserved separately — never destroyed.
 */
export function normalizeQuery(rawQuery: string): NormalizedQuery {
  const normalizedQuery = rawQuery
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    // collapse repeated punctuation, strip characters that don't aid matching
    .replace(/[""'']/g, '"')
    .replace(/[^\w\s".,-]/g, "");

  return { rawQuery, normalizedQuery };
}
