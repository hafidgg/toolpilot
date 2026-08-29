// TRAFFIC ENGINE — REPORT GENERATOR
// Pure functions: takes structured data in, produces JSON/MD strings out.

import type { Opportunity, CannibalizationCase, EngineReport } from "./types";

export interface ReportStats {
  totalQueriesParsed: number;
  totalPagesParsed: number;
  brandQueriesCount: number;
  noiseQueriesCount: number;
  wwwPageCount: number;
  nonWwwPageCount: number;
  hasQueryPageData: boolean;
}

export function buildEngineReport(
  dataLabel: EngineReport["dataLabel"],
  summary: EngineReport["summary"],
  opportunities: Opportunity[],
  cannibalization: CannibalizationCase[]
): EngineReport {
  return {
    generatedAt: new Date().toISOString(),
    dataLabel,
    summary,
    opportunities,
    cannibalization,
    rejectedCount: opportunities.filter((o) => o.qualityGate === "REJECTED").length,
  };
}

export function reportToJson(report: EngineReport, stats: ReportStats): string {
  return JSON.stringify({ ...report, stats }, null, 2);
}

function opportunityRow(o: Opportunity): string {
  return `| ${o.query} | ${o.page} | ${o.clicks} | ${o.impressions} | ${o.ctr.toFixed(2)}% | ${o.position.toFixed(1)} | ${o.intent} | ${o.opportunityType} | ${o.score.total} | ${o.priority} | ${o.recommendedAction} |`;
}

function byType(opportunities: Opportunity[], type: Opportunity["opportunityType"]): Opportunity[] {
  return opportunities
    .filter((o) => o.opportunityType === type && o.qualityGate === "PASS")
    .sort((a, b) => b.score.total - a.score.total);
}

export function reportToMarkdown(report: EngineReport, stats: ReportStats): string {
  const lines: string[] = [];

  lines.push("# ToolPilot — Traffic Opportunity Report");
  lines.push("");
  lines.push(`**DATA LABEL: ${report.dataLabel}**`);
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");

  lines.push("## Executive Summary");
  lines.push("");
  lines.push(`- Total clicks: ${report.summary.totalClicks}`);
  lines.push(`- Total impressions: ${report.summary.totalImpressions}`);
  lines.push(`- Average CTR: ${report.summary.averageCtr.toFixed(2)}%`);
  lines.push(`- Average position: ${report.summary.averagePosition.toFixed(1)}`);
  lines.push(`- Pages with impressions: ${report.summary.pagesWithImpressions}`);
  lines.push(`- Queries with impressions: ${report.summary.queriesWithImpressions}`);
  lines.push("");

  lines.push("## Normalization / Brand / Noise Statistics");
  lines.push("");
  lines.push(`- Queries parsed: ${stats.totalQueriesParsed}`);
  lines.push(`- Pages parsed: ${stats.totalPagesParsed}`);
  lines.push(`- Brand queries: ${stats.brandQueriesCount}`);
  lines.push(`- Noise queries: ${stats.noiseQueriesCount}`);
  lines.push(`- Page host variants — www: ${stats.wwwPageCount}, non-www: ${stats.nonWwwPageCount}`);
  lines.push(`- Query↔Page relationship confidence: ${stats.hasQueryPageData ? "DIRECT data available" : "INFERRED/UNKNOWN only (no Query+Page export supplied)"}`);
  lines.push("");

  const tableHeader = "| Query | Page | Clicks | Impressions | CTR | Position | Intent | Type | Score | Priority | Recommended Action |\n|---|---|---|---|---|---|---|---|---|---|---|";

  const sections: [string, Opportunity["opportunityType"]][] = [
    ["Quick Wins", "QUICK_WIN"],
    ["Near Page 1", "NEAR_PAGE_1"],
    ["Hidden Winners", "HIDDEN_WINNER"],
    ["Content Gaps", "CONTENT_GAP"],
    ["Internal Linking Opportunities", "INTERNAL_LINKING"],
  ];

  for (const [title, type] of sections) {
    const rows = byType(report.opportunities, type);
    lines.push(`## ${title}`);
    lines.push("");
    if (rows.length === 0) {
      lines.push("_None detected in this dataset. Not manufactured to fill the report._");
    } else {
      lines.push(tableHeader);
      for (const o of rows.slice(0, 10)) lines.push(opportunityRow(o));
    }
    lines.push("");
  }

  lines.push("## Cannibalization");
  lines.push("");
  if (report.cannibalization.length === 0) {
    lines.push("_No cannibalization detected in this dataset._");
  } else {
    lines.push("| Query | Competing Pages | Primary Page | Reason | Recommended Action |\n|---|---|---|---|---|");
    for (const c of report.cannibalization) {
      lines.push(`| ${c.query} | ${c.competingPages.join(", ")} | ${c.primaryPage} | ${c.primaryPageReason} | ${c.recommendedAction} |`);
    }
  }
  lines.push("");

  const rejected = report.opportunities.filter((o) => o.qualityGate === "REJECTED");
  lines.push("## Rejected Opportunities");
  lines.push("");
  lines.push(`Total rejected: ${report.rejectedCount}`);
  lines.push("");
  if (rejected.length > 0) {
    lines.push("| Query | Page | Opportunity Type | Rejection Reason |\n|---|---|---|---|");
    for (const o of rejected.slice(0, 20)) {
      lines.push(`| ${o.query} | ${o.page} | ${o.opportunityType} | ${o.rejectionReason ?? "unspecified"} |`);
    }
  }
  lines.push("");

  return lines.join("\n");
}
