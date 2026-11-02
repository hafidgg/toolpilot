import { describe, expect, it } from "vitest";
import { checkPinterestPin } from "../content-calculations";

describe("checkPinterestPin uses Pinterest's documented limits", () => {
  it("accepts an 800-character description", () => {
    const r = checkPinterestPin("", "y".repeat(800));
    expect(r.descriptionStatus).toBe("good");
    expect(r.descriptionMessage).toBe("Within Pinterest's 800-character description limit.");
  });

  it("no longer flags descriptions between 501 and 800", () => {
    expect(checkPinterestPin("", "y".repeat(501)).descriptionStatus).toBe("good");
  });

  it("flags 801 characters and cites the limit", () => {
    const r = checkPinterestPin("", "y".repeat(801));
    expect(r.descriptionStatus).toBe("too-long");
    expect(r.descriptionMessage).toBe("Over Pinterest's 800-character description limit by 1.");
  });

  it("keeps the 100-character title limit", () => {
    expect(checkPinterestPin("x".repeat(100), "").titleMessage).toBe("Within Pinterest's 100-character title limit.");
    expect(checkPinterestPin("x".repeat(102), "").titleMessage).toBe("Over Pinterest's 100-character title limit by 2.");
  });

  it("counts an emoji as one character", () => {
    expect(checkPinterestPin("📌".repeat(100), "").titleStatus).toBe("good");
  });
});
