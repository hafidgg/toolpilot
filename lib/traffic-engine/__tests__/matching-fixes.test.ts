import { describe, it, expect } from "vitest";
import { inferPageForQuery } from "../orchestrator";
import { normalizeQuery } from "../normalize";

const BASE = "https://usetoolpilot.com";
const pages = (...paths: string[]) => paths.map((p) => ({ normalizedUrl: BASE + p }));
const infer = (query: string, pagePaths: string[]) =>
  inferPageForQuery(normalizeQuery(query).normalizedQuery, pages(...pagePaths));

describe("fix 1 — /tools/ tie-break", () => {
  it('"emoji counter" prefers /tools/emoji-counter over the compare page on a tie', () => {
    const r = infer("emoji counter", [
      "/tools/emoji-counter",
      "/compare/emoji-counter-vs-character-counter",
    ]);
    expect(r).toEqual({ page: `${BASE}/tools/emoji-counter`, relationship: "INFERRED" });
  });

  it("stays UNKNOWN when two /tools/ pages tie", () => {
    const r = infer("youtube", ["/tools/youtube-title-checker", "/tools/youtube-tag-generator"]);
    expect(r.relationship).toBe("UNKNOWN");
  });

  it("stays UNKNOWN when no tied page is a /tools/ page", () => {
    const r = infer("thumbnail", ["/blog/right-youtube-thumbnail-size", "/compare/thumbnail-vs-title"]);
    expect(r.relationship).toBe("UNKNOWN");
  });

  it("never overrides a clear non-tool winner", () => {
    const r = infer("youtube thumbnail size", [
      "/blog/right-youtube-thumbnail-size",
      "/tools/thumbnail-size-checker",
    ]);
    expect(r.page).toBe(`${BASE}/blog/right-youtube-thumbnail-size`);
  });
});

describe("fix 3 — accent folding", () => {
  it("générateur becomes generateur, not gnrateur", () => {
    expect(normalizeQuery("Générateur acronyme").normalizedQuery).toBe("generateur acronyme");
  });

  it("an accented query normalizes identically to its unaccented spelling", () => {
    expect(normalizeQuery("gerador de acrônimos").normalizedQuery).toBe(
      normalizeQuery("gerador de acronimos").normalizedQuery
    );
  });
});

describe("fix 5 — 'test' is a generic term", () => {
  it('"flesch kincaid test" does not resolve to /how-we-test on "test" alone', () => {
    const r = infer("flesch kincaid test", ["/how-we-test", "/tools/readability-checker"]);
    expect(r.page).not.toBe(`${BASE}/how-we-test`);
  });
});

describe("fix 1 — tie-break guards (from real-data diff)", () => {
  it('"reading ease" does not tie-break to a tool whose slug it only partly names', () => {
    const r = infer("reading ease", ["/tools/reading-time-calculator", "/blog/reading-time-vs-word-count"]);
    expect(r.relationship).toBe("UNKNOWN");
  });

  it('"word repetition counter" does not pick word-counter over word-frequency-counter', () => {
    const r = infer("word repetition counter", ["/tools/word-counter", "/tools/word-frequency-counter"]);
    expect(r.relationship).toBe("UNKNOWN");
  });
});
