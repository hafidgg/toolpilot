// TRAFFIC ENGINE — CORE TYPES
// Isolated from production website code. Read-only analysis tool.

export interface GSCQueryRow {
  rawQuery: string;
  normalizedQuery: string;
  clicks: number;
  impressions: number;
  ctr: number; // percentage, as exported by GSC (e.g. 4.2 = 4.2%)
  position: number;
  isBrand: boolean;
  isNoise: boolean;
  intent: Intent;
  intentReason: string; // explainable rule that matched
}

export interface GSCPageRow {
  originalUrl: string;
  normalizedUrl: string;
  hostVariant: "www" | "non-www" | "unknown";
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export type Intent =
  | "TOOL"
  | "DATA"
  | "KNOWLEDGE"
  | "HOW-TO"
  | "COMPARISON"
  | "SCENARIO"
  | "OTHER";

export type PageRelationship = "DIRECT" | "INFERRED" | "UNKNOWN";

export type OpportunityType =
  | "QUICK_WIN"
  | "NEAR_PAGE_1"
  | "HIDDEN_WINNER"
  | "CONTENT_GAP"
  | "INTERNAL_LINKING"
  | "CANNIBALIZATION";

export type Priority = "P0" | "P1" | "P2";

export interface ScoreBreakdown {
  impressionsWeight: number;
  positionWeight: number;
  ctrGapWeight: number;
  ctrBenchmarkSource: "BENCHMARK"; // always explicitly labeled, never confused with real GSC data
  total: number; // 0-100
}

export interface Opportunity {
  query: string;
  page: string;
  pageRelationship: PageRelationship;
  opportunityType: OpportunityType;
  score: ScoreBreakdown;
  priority: Priority;
  intent: Intent;
  isBrand: boolean;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  relevance: "HIGH" | "MEDIUM" | "LOW";
  recommendedAction: string;
  rationale: string;
  qualityGate: "PASS" | "REJECTED";
  rejectionReason?: string;
}

export interface CannibalizationCase {
  query: string;
  competingPages: string[];
  primaryPage: string;
  primaryPageReason: string;
  recommendedAction: string;
}

export interface EngineReport {
  generatedAt: string;
  dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE" | "CURRENT PERFORMANCE DATA";
  summary: {
    totalClicks: number;
    totalImpressions: number;
    averageCtr: number;
    averagePosition: number;
    pagesWithImpressions: number;
    queriesWithImpressions: number;
  };
  opportunities: Opportunity[];
  cannibalization: CannibalizationCase[];
  rejectedCount: number;
}
