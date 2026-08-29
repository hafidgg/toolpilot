import { describe, it, expect } from "vitest";
import { computeScore, getBenchmarkCtr } from "../score";

describe("getBenchmarkCtr", () => {
  it("returns exact known benchmark values", () => {
    expect(getBenchmarkCtr(1)).toBe(28);
    expect(getBenchmarkCtr(10)).toBe(2.5);
  });
  it("clamps below the lowest known position", () => {
    expect(getBenchmarkCtr(0)).toBe(28);
  });
  it("clamps beyond the highest known position", () => {
    expect(getBenchmarkCtr(200)).toBe(0.1);
  });
});

describe("computeScore", () => {
  it("returns a score within 0-100", () => {
    const result = computeScore(100, 10, 1.0, 500);
    expect(result.total).toBeGreaterThanOrEqual(0);
    expect(result.total).toBeLessThanOrEqual(100);
  });

  it("always labels the CTR source as BENCHMARK, never GSC data", () => {
    const result = computeScore(100, 10, 1.0, 500);
    expect(result.ctrBenchmarkSource).toBe("BENCHMARK");
  });

  it("gives a higher score to a better position at equal impressions/CTR", () => {
    const better = computeScore(100, 5, 1.0, 500);
    const worse = computeScore(100, 50, 1.0, 500);
    expect(better.total).toBeGreaterThan(worse.total);
  });

  it("gives a higher score to more impressions at equal position/CTR", () => {
    const more = computeScore(400, 10, 1.0, 500);
    const less = computeScore(50, 10, 1.0, 500);
    expect(more.total).toBeGreaterThan(less.total);
  });

  it("handles zero max impressions without dividing by zero", () => {
    const result = computeScore(0, 10, 1.0, 0);
    expect(Number.isFinite(result.total)).toBe(true);
  });
});
