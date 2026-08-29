import { describe, it, expect } from "vitest";
import { detectCannibalization } from "../cannibalization";

describe("detectCannibalization", () => {
  it("does not flag a query with only one associated page", () => {
    const result = detectCannibalization([
      { query: "robots txt generator", page: "/tools/robots-txt-generator", clicks: 1, impressions: 100 },
    ]);
    expect(result).toHaveLength(0);
  });

  it("flags a query associated with two or more distinct pages", () => {
    const result = detectCannibalization([
      { query: "youtube thumbnail size", page: "/blog/right-youtube-thumbnail-size", clicks: 5, impressions: 200 },
      { query: "youtube thumbnail size", page: "/tools/thumbnail-size-checker", clicks: 2, impressions: 80 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0].competingPages).toHaveLength(2);
  });

  it("selects the page with the most clicks as primary", () => {
    const result = detectCannibalization([
      { query: "q", page: "/a", clicks: 2, impressions: 100 },
      { query: "q", page: "/b", clicks: 9, impressions: 50 },
    ]);
    expect(result[0].primaryPage).toBe("/b");
  });

  it("tie-breaks by impressions when clicks are equal", () => {
    const result = detectCannibalization([
      { query: "q", page: "/a", clicks: 3, impressions: 40 },
      { query: "q", page: "/b", clicks: 3, impressions: 90 },
    ]);
    expect(result[0].primaryPage).toBe("/b");
  });

  it("never recommends creating a new page", () => {
    const result = detectCannibalization([
      { query: "q", page: "/a", clicks: 1, impressions: 20 },
      { query: "q", page: "/b", clicks: 1, impressions: 20 },
    ]);
    expect(result[0].recommendedAction.toLowerCase()).not.toContain("create a new page");
  });
});
