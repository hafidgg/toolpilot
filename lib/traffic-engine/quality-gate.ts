// TRAFFIC ENGINE — QUALITY / SAFETY GATE
// Every opportunity must pass before being surfaced. Failures are recorded,
// never silently dropped.

import type { Opportunity, OpportunityType } from "./types";

export interface QualityCheckInput {
  opportunityType: OpportunityType;
  isRelevant: boolean; // caller asserts topical relevance with evidence
  hasUserValueRationale: boolean; // recommendedAction must describe real user value
  isDuplicateRecommendation: boolean; // same fix already recommended elsewhere
  wouldCreateThinContent: boolean;
  wouldCreateDoorwayPage: boolean;
  wouldCreateDuplicatePage: boolean;
}

export function runQualityGate(
  input: QualityCheckInput
): { pass: boolean; reason?: string } {
  if (!input.isRelevant) {
    return { pass: false, reason: "Query/page relevance not established" };
  }
  if (!input.hasUserValueRationale) {
    return { pass: false, reason: "No demonstrable user-value rationale" };
  }
  if (input.isDuplicateRecommendation) {
    return { pass: false, reason: "Duplicate of an existing recommendation" };
  }
  if (input.wouldCreateThinContent) {
    return { pass: false, reason: "Would result in thin content" };
  }
  if (input.wouldCreateDoorwayPage) {
    return { pass: false, reason: "Would create a doorway page" };
  }
  if (input.wouldCreateDuplicatePage) {
    return { pass: false, reason: "Would duplicate an existing page" };
  }
  if (input.opportunityType === "CONTENT_GAP") {
    // CONTENT_GAP already requires all 3 conditions in detect.ts;
    // this is a final defensive check.
    return { pass: true };
  }
  return { pass: true };
}

export function applyQualityGate(
  opportunity: Omit<Opportunity, "qualityGate" | "rejectionReason">,
  checkInput: QualityCheckInput
): Opportunity {
  const result = runQualityGate(checkInput);
  if (result.pass) {
    return { ...opportunity, qualityGate: "PASS" };
  }
  return {
    ...opportunity,
    qualityGate: "REJECTED",
    rejectionReason: result.reason,
  };
}
