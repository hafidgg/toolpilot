import { describe, it, expect } from "vitest";
import {
  isQuickWinPosition,
  isNearPageOnePosition,
  hasMeaningfulImpressions,
  isHiddenWinner,
  isContentGap,
  MEANINGFUL_IMPRESSIONS_THRESHOLD,
} from "../detect";

describe("QUICK_WIN boundary conditions", () => {
  it("position 3.9 is NOT a quick win", () => {
    expect(isQuickWinPosition(3.9)).toBe(false);
  });
  it("position 4 IS quick-win eligible", () => {
    expect(isQuickWinPosition(4)).toBe(true);
  });
  it("position 20 IS quick-win eligible", () => {
    expect(isQuickWinPosition(20)).toBe(true);
  });
  it("position 20.1 is NOT a quick win", () => {
    expect(isQuickWinPosition(20.1)).toBe(false);
  });
});

describe("NEAR_PAGE_1 boundary conditions", () => {
  it("position 7.9 is NOT near page 1", () => {
    expect(isNearPageOnePosition(7.9)).toBe(false);
  });
  it("position 8 IS eligible", () => {
    expect(isNearPageOnePosition(8)).toBe(true);
  });
  it("position 20 IS eligible", () => {
    expect(isNearPageOnePosition(20)).toBe(true);
  });
  it("position 20.1 is NOT eligible", () => {
    expect(isNearPageOnePosition(20.1)).toBe(false);
  });
});

describe("meaningful impressions threshold", () => {
  it(`impressions below ${MEANINGFUL_IMPRESSIONS_THRESHOLD} are not meaningful`, () => {
    expect(hasMeaningfulImpressions(MEANINGFUL_IMPRESSIONS_THRESHOLD - 1)).toBe(false);
  });
  it(`impressions at exactly ${MEANINGFUL_IMPRESSIONS_THRESHOLD} are meaningful`, () => {
    expect(hasMeaningfulImpressions(MEANINGFUL_IMPRESSIONS_THRESHOLD)).toBe(true);
  });
});

describe("HIDDEN_WINNER detection", () => {
  it("rejects when impressions are not meaningful", () => {
    expect(isHiddenWinner(5, 0.1, 2.5)).toBe(false);
  });
  it("flags when CTR is less than 50% of benchmark", () => {
    expect(isHiddenWinner(50, 1.0, 2.5)).toBe(true); // 1.0 < 1.25 (50% of 2.5)
  });
  it("does not flag when CTR is at or above 50% of benchmark", () => {
    expect(isHiddenWinner(50, 1.25, 2.5)).toBe(false);
  });
  it("does not flag when benchmark CTR is zero (guards division)", () => {
    expect(isHiddenWinner(50, 1.0, 0)).toBe(false);
  });
});

describe("CONTENT_GAP requires all three conditions", () => {
  it("rejects when demand is missing", () => {
    expect(
      isContentGap({
        query: "x",
        hasRealDemand: false,
        isRelevantToToolPilot: true,
        hasExistingPageForIntent: false,
      })
    ).toBe(false);
  });
  it("rejects when not relevant", () => {
    expect(
      isContentGap({
        query: "x",
        hasRealDemand: true,
        isRelevantToToolPilot: false,
        hasExistingPageForIntent: false,
      })
    ).toBe(false);
  });
  it("rejects when an existing page already satisfies intent", () => {
    expect(
      isContentGap({
        query: "x",
        hasRealDemand: true,
        isRelevantToToolPilot: true,
        hasExistingPageForIntent: true,
      })
    ).toBe(false);
  });
  it("accepts only when all three conditions hold", () => {
    expect(
      isContentGap({
        query: "x",
        hasRealDemand: true,
        isRelevantToToolPilot: true,
        hasExistingPageForIntent: false,
      })
    ).toBe(true);
  });
});
