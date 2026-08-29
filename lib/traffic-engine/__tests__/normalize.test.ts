import { describe, it, expect } from "vitest";
import { normalizeUrl, normalizeQuery } from "../normalize";

describe("normalizeUrl", () => {
  it("strips www and detects hostVariant=www", () => {
    const result = normalizeUrl("https://www.usetoolpilot.com/tools/robots-txt-generator");
    expect(result.hostVariant).toBe("www");
    expect(result.normalizedUrl).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("detects hostVariant=non-www", () => {
    const result = normalizeUrl("https://usetoolpilot.com/tools/acronym-generator");
    expect(result.hostVariant).toBe("non-www");
    expect(result.normalizedUrl).toBe("https://usetoolpilot.com/tools/acronym-generator");
  });

  it("strips trailing slash except for root", () => {
    expect(normalizeUrl("https://usetoolpilot.com/blog/").normalizedUrl).toBe(
      "https://usetoolpilot.com/blog"
    );
    expect(normalizeUrl("https://usetoolpilot.com/").normalizedUrl).toBe(
      "https://usetoolpilot.com/"
    );
  });

  it("preserves the original URL untouched", () => {
    const result = normalizeUrl("https://www.usetoolpilot.com/blog/");
    expect(result.originalUrl).toBe("https://www.usetoolpilot.com/blog/");
  });

  it("handles malformed input without throwing", () => {
    const result = normalizeUrl("not-a-url");
    expect(result.hostVariant).toBe("unknown");
    expect(result.originalUrl).toBe("not-a-url");
  });
});

describe("normalizeQuery", () => {
  it("lowercases and trims", () => {
    expect(normalizeQuery("  Robots.txt Generator  ").normalizedQuery).toBe(
      "robots.txt generator"
    );
  });

  it("collapses repeated whitespace", () => {
    expect(normalizeQuery("robots   txt    generator").normalizedQuery).toBe(
      "robots txt generator"
    );
  });

  it("preserves the raw query untouched", () => {
    const result = normalizeQuery("  Robots.txt Generator  ");
    expect(result.rawQuery).toBe("  Robots.txt Generator  ");
  });
});
