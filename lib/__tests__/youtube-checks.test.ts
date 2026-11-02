import { describe, expect, it } from "vitest";
import {
  charCount,
  checkYoutubeDescription,
  checkYoutubeTitle,
  UNDOCUMENTED_PREVIEW_LABEL,
} from "../content-calculations";

describe("checkYoutubeTitle", () => {
  it("accepts exactly 100 characters", () => {
    const r = checkYoutubeTitle("a".repeat(100));
    expect(r.length).toBe(100);
    expect(r.status).not.toBe("over-limit");
  });

  it("flags 101 characters as over YouTube's official limit", () => {
    const r = checkYoutubeTitle("a".repeat(101));
    expect(r.status).toBe("over-limit");
    expect(r.message).toContain("100-character");
    expect(r.message).toContain("by 1");
  });

  it("labels 72 characters as a rule-of-thumb tier, not a documented cut-off", () => {
    const r = checkYoutubeTitle("a".repeat(72));
    expect(r.status).toBe("too-long");
    expect(r.message).toMatch(/rule of thumb/i);
    expect(r.message).not.toMatch(/will be cut off/i);
  });

  it("never states truncation as fact", () => {
    for (const n of [10, 65, 90]) {
      expect(checkYoutubeTitle("a".repeat(n)).message).not.toMatch(/fits fully|will be cut off/i);
    }
  });

  it("handles an empty title", () => {
    expect(checkYoutubeTitle("")).toEqual({ length: 0, status: "good", message: "Start typing your title." });
  });

  it("counts emoji with the site's charCount helper, not UTF-16 units", () => {
    const title = "🔪".repeat(100); // 200 UTF-16 code units
    expect(title.length).toBe(200);
    const r = checkYoutubeTitle(title);
    expect(r.length).toBe(charCount(title));
    expect(r.length).toBe(100);
    expect(r.status).not.toBe("over-limit");
    expect(checkYoutubeTitle(title + "🔪").status).toBe("over-limit");
  });
});

describe("checkYoutubeDescription", () => {
  it("labels every preview message as approximate and undocumented", () => {
    for (const n of [50, 120, 200]) {
      expect(checkYoutubeDescription("a".repeat(n)).previewMessage).toContain(UNDOCUMENTED_PREVIEW_LABEL);
    }
    expect(UNDOCUMENTED_PREVIEW_LABEL).toBe("approximate, varies by device (not documented by YouTube)");
  });

  it("keeps the existing preview tiers", () => {
    expect(checkYoutubeDescription("a".repeat(100)).previewStatus).toBe("good");
    expect(checkYoutubeDescription("a".repeat(101)).previewStatus).toBe("tight");
    expect(checkYoutubeDescription("a".repeat(157)).previewStatus).toBe("tight");
    expect(checkYoutubeDescription("a".repeat(158)).previewStatus).toBe("too-long");
  });

  it("accepts exactly 5,000 characters", () => {
    const r = checkYoutubeDescription("a".repeat(5000));
    expect(r.totalStatus).toBe("good");
    expect(r.totalMessage).toBe("Within YouTube's official 5,000-character description limit.");
  });

  it("flags 5,001 characters as over the official limit", () => {
    const r = checkYoutubeDescription("a".repeat(5001));
    expect(r.totalStatus).toBe("too-long");
    expect(r.totalMessage).toBe("Over YouTube's official 5,000-character description limit by 1.");
  });
});
