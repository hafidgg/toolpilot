import { describe, expect, it } from "vitest";
import { checkKeywordDensity } from "../seo-calculations";

const occ = (text: string, kw: string) => checkKeywordDensity(text, kw)?.occurrences;

describe("checkKeywordDensity whole-word matching", () => {
  it("does not match inside longer words or plurals", () => {
    expect(occ("The cat sat in a category.", "cat")).toBe(1);
    expect(occ("Two cats.", "cat")).toBe(0); // plurals are not counted
    expect(occ("A burr grinder. Blade grinders.", "grinder")).toBe(1);
  });

  it("matches phrases across any whitespace, case-insensitively", () => {
    expect(occ("Coffee grinder, coffee\n  GRINDER, coffee grinders", "coffee grinder")).toBe(2);
  });

  it("uses Unicode-aware boundaries for accented and Arabic text", () => {
    expect(occ("Le café est bon. Cafés et caféine.", "café")).toBe(1);
    expect(occ("كتاب جميل. الكتاب كتابي.", "كتاب")).toBe(1);
  });

  it("escapes regex characters in the keyword", () => {
    expect(occ("I write C++ and C+ code.", "c++")).toBe(1);
    expect(occ("Price is $5.00, not 5000.", "5.00")).toBe(1);
  });

  it("treats punctuation, apostrophes and hyphens as separators", () => {
    expect(occ("(grinder), grinder! \"grinder\"", "grinder")).toBe(3);
    expect(occ("The grinder's burrs; a burr-grinder.", "grinder")).toBe(2);
  });

  it("returns null for an empty keyword or text", () => {
    expect(checkKeywordDensity("some text", "  ")).toBeNull();
    expect(checkKeywordDensity("", "cat")).toBeNull();
  });

  it("keeps the density formula", () => {
    const r = checkKeywordDensity("coffee grinder is a coffee grinder ok", "coffee grinder")!;
    expect(r.totalWords).toBe(7);
    expect(r.density).toBeCloseTo((2 * 2 / 7) * 100, 10);
  });
});
