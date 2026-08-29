// TRAFFIC ENGINE — OPPORTUNITY SCORE
// Every component is documented. CTR benchmarks are industry-standard
// approximations, explicitly labeled "BENCHMARK" — never GSC-measured data.

import type { ScoreBreakdown } from "./types";

// Industry-standard approximate CTR-by-position benchmark.
// LABEL: BENCHMARK — not derived from ToolPilot's own GSC data.
const CTR_BENCHMARK: { position: number; expectedCtr: number }[] = [
  { position: 1, expectedCtr: 28 },
  { position: 2, expectedCtr: 15 },
  { position: 3, expectedCtr: 11 },
  { position: 5, expectedCtr: 7 },
  { position: 10, expectedCtr: 2.5 },
  { position: 15, expectedCtr: 1.5 },
  { position: 20, expectedCtr: 1 },
  { position: 50, expectedCtr: 0.3 },
  { position: 100, expectedCtr: 0.1 },
];

export function getBenchmarkCtr(position: number): number {
  // Linear interpolation between the nearest known benchmark points.
  const sorted = CTR_BENCHMARK;
  if (position <= sorted[0].position) return sorted[0].expectedCtr;
  if (position >= sorted[sorted.length - 1].position) {
    return sorted[sorted.length - 1].expectedCtr;
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    const a = sorted[i];
    const b = sorted[i + 1];
    if (position >= a.position && position <= b.position) {
      const ratio = (position - a.position) / (b.position - a.position);
      return a.expectedCtr + ratio * (b.expectedCtr - a.expectedCtr);
    }
  }
  return sorted[sorted.length - 1].expectedCtr;
}

export function computeScore(
  impressions: number,
  position: number,
  ctr: number,
  maxImpressionsInDataset: number
): ScoreBreakdown {
  const impressionsWeight =
    maxImpressionsInDataset > 0
      ? Math.min(impressions / maxImpressionsInDataset, 1)
      : 0;

  const positionWeight = 1 - Math.min(Math.max(position - 1, 0) / 99, 1);

  const expectedCtr = getBenchmarkCtr(position);
  const ctrGapWeight =
    expectedCtr > 0 ? Math.max(0, (expectedCtr - ctr) / expectedCtr) : 0;

  const total =
    impressionsWeight * 40 + positionWeight * 35 + ctrGapWeight * 25;

  return {
    impressionsWeight,
    positionWeight,
    ctrGapWeight,
    ctrBenchmarkSource: "BENCHMARK",
    total: Math.round(Math.min(Math.max(total, 0), 100) * 100) / 100,
  };
}
