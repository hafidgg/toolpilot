// TRAFFIC ENGINE — OPPORTUNITY DETECTION RULES
// Pure functions, boundary-tested. No side effects.

export const MEANINGFUL_IMPRESSIONS_THRESHOLD = 10;

/**
 * QUICK_WIN: position 4–20 inclusive, meaningful impressions,
 * and a CTR gap versus benchmark (checked separately by the caller).
 */
export function isQuickWinPosition(position: number): boolean {
  return position >= 4 && position <= 20;
}

/**
 * NEAR_PAGE_1: position 8–20 inclusive, meaningful impressions.
 */
export function isNearPageOnePosition(position: number): boolean {
  return position >= 8 && position <= 20;
}

export function hasMeaningfulImpressions(impressions: number): boolean {
  return impressions >= MEANINGFUL_IMPRESSIONS_THRESHOLD;
}

/**
 * HIDDEN_WINNER: meaningful impressions, but clicks/CTR disproportionately
 * low relative to what the position would predict.
 * "Disproportionate" = actual CTR is less than 50% of benchmark CTR.
 */
export function isHiddenWinner(
  impressions: number,
  ctr: number,
  benchmarkCtr: number
): boolean {
  if (!hasMeaningfulImpressions(impressions)) return false;
  if (benchmarkCtr <= 0) return false;
  return ctr < benchmarkCtr * 0.5;
}

export interface ContentGapCandidate {
  query: string;
  hasRealDemand: boolean; // impressions/clicks exist in GSC
  isRelevantToToolPilot: boolean; // must be asserted by caller with evidence
  hasExistingPageForIntent: boolean;
}

/**
 * CONTENT_GAP requires ALL three conditions. Never auto-approved from
 * keyword appeal alone.
 */
export function isContentGap(candidate: ContentGapCandidate): boolean {
  return (
    candidate.hasRealDemand &&
    candidate.isRelevantToToolPilot &&
    !candidate.hasExistingPageForIntent
  );
}
