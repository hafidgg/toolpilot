import { describe, it, expect } from "vitest";
import { runQualityGate } from "../quality-gate";

const basePassingInput = {
  opportunityType: "QUICK_WIN" as const,
  isRelevant: true,
  hasUserValueRationale: true,
  isDuplicateRecommendation: false,
  wouldCreateThinContent: false,
  wouldCreateDoorwayPage: false,
  wouldCreateDuplicatePage: false,
};

describe("runQualityGate", () => {
  it("passes when all checks are clean", () => {
    expect(runQualityGate(basePassingInput).pass).toBe(true);
  });

  it("rejects when not relevant", () => {
    const result = runQualityGate({ ...basePassingInput, isRelevant: false });
    expect(result.pass).toBe(false);
    expect(result.reason).toBeTruthy();
  });

  it("rejects when there is no user-value rationale", () => {
    const result = runQualityGate({ ...basePassingInput, hasUserValueRationale: false });
    expect(result.pass).toBe(false);
  });

  it("rejects duplicate recommendations", () => {
    const result = runQualityGate({ ...basePassingInput, isDuplicateRecommendation: true });
    expect(result.pass).toBe(false);
  });

  it("rejects thin content outcomes", () => {
    const result = runQualityGate({ ...basePassingInput, wouldCreateThinContent: true });
    expect(result.pass).toBe(false);
  });

  it("rejects doorway page outcomes", () => {
    const result = runQualityGate({ ...basePassingInput, wouldCreateDoorwayPage: true });
    expect(result.pass).toBe(false);
  });

  it("rejects duplicate page outcomes", () => {
    const result = runQualityGate({ ...basePassingInput, wouldCreateDuplicatePage: true });
    expect(result.pass).toBe(false);
  });

  it("every rejection includes an explicit reason", () => {
    const result = runQualityGate({ ...basePassingInput, isRelevant: false });
    expect(typeof result.reason).toBe("string");
    expect(result.reason!.length).toBeGreaterThan(0);
  });
});
