import { describe, expect, it } from "vitest";
import { BIO_LIMITS, PLATFORM_LIMITS } from "../content-calculations";

describe("PLATFORM_LIMITS", () => {
  it("keeps every platform and number unchanged", () => {
    expect(PLATFORM_LIMITS.map((p) => [p.key, p.limit])).toEqual([
      ["x", 280],
      ["instagram", 2200],
      ["tiktok", 150],
      ["facebook", 63206],
      ["linkedin", 3000],
      ["youtube-desc", 5000],
      ["threads", 500],
    ]);
  });

  it("marks only the officially confirmed limits as verified", () => {
    const verified = PLATFORM_LIMITS.filter((p) => p.verified).map((p) => p.key);
    expect(verified).toEqual(["linkedin", "youtube-desc"]);
    for (const p of PLATFORM_LIMITS) expect(typeof p.verified).toBe("boolean");
  });

  it("no longer carries the unsourced Facebook engagement note", () => {
    const fb = PLATFORM_LIMITS.find((p) => p.key === "facebook");
    expect(fb?.note).toBeUndefined();
  });
});

describe("BIO_LIMITS", () => {
  it("keeps every platform and number, all unverified", () => {
    expect(BIO_LIMITS.map((p) => [p.key, p.limit, p.verified])).toEqual([
      ["instagram", 150, false],
      ["tiktok", 80, false],
      ["x", 160, false],
      ["youtube", 1000, false],
      ["linkedin", 220, false],
      ["threads", 150, false],
    ]);
  });
});
