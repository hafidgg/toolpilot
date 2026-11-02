import { describe, expect, it } from "vitest";
import { checkLinkedInPost } from "../content-calculations";

describe("checkLinkedInPost", () => {
  it("labels the ~210 preview as approximate, never as fact", () => {
    for (const n of [50, 210, 211, 3000]) {
      const { message } = checkLinkedInPost("a".repeat(n));
      expect(message).toContain("approximate, varies by device; not documented by LinkedIn");
      expect(message).not.toMatch(/fits fully/i);
    }
  });

  it("keeps the existing tiers", () => {
    expect(checkLinkedInPost("a".repeat(210)).status).toBe("good");
    expect(checkLinkedInPost("a".repeat(211)).status).toBe("tight");
  });

  it("accepts 3,000 characters and flags 3,001 against the official limit", () => {
    expect(checkLinkedInPost("a".repeat(3000)).status).toBe("tight");
    const over = checkLinkedInPost("a".repeat(3001));
    expect(over.status).toBe("too-long");
    expect(over.message).toBe("Over LinkedIn's 3,000-character post limit.");
  });
});
