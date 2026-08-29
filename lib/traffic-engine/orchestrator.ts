// TRAFFIC ENGINE — ORCHESTRATOR
// Wires: CSV -> parse -> normalize -> classify -> detect -> score
//        -> cannibalization -> quality-gate -> report
// This file imports existing modules unchanged. No production website
// code is imported or modified.

import * as fs from "fs";
import * as path from "path";

import { parseQueriesCsv, parsePagesCsv, parseQueryPageCsv } from "./csv-parser";
import { normalizeQuery, normalizeUrl } from "./normalize";
import { isBrandQuery, isNoiseQuery, classifyIntent } from "./classify";
import {
  isQuickWinPosition,
  isNearPageOnePosition,
  hasMeaningfulImpressions,
  isHiddenWinner,
} from "./detect";
import { computeScore, getBenchmarkCtr } from "./score";
import { detectCannibalization, type QueryPageSignal } from "./cannibalization";
import { runQualityGate } from "./quality-gate";
import { buildEngineReport, reportToJson, reportToMarkdown, type ReportStats } from "./report";
import type { Opportunity, EngineReport, PageRelationship } from "./types";

export interface OrchestratorInput {
  queriesCsvPath: string;
  pagesCsvPath: string;
  queryPageCsvPath?: string; // optional — raises confidence to DIRECT
  dataLabel: EngineReport["dataLabel"];
}

export interface OrchestratorOutput {
  report: EngineReport;
  stats: ReportStats;
  json: string;
  markdown: string;
}

function safeReadFile(filePath: string): string {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required input file not found: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf-8");
}

/**
 * Best-effort matching between a query and a page when no explicit
 * Query+Page export is available. This relationship is always marked
 * INFERRED — never presented as DIRECT/confirmed.
 *
 * Strategy: weighted token overlap against the page's URL slug.
 * Generic terms that appear across many ToolPilot tools ("generator",
 * "checker", "calculator", "tool", "maker", "builder", "creator",
 * "extractor", "counter", "converter") carry very low weight, since
 * they match almost every tool page and provide no real discriminating
 * signal. Specific/distinctive terms (e.g. "robots", "acronym",
 * "thumbnail", "youtube") carry full weight.
 *
 * A wrong INFERRED page is worse than UNKNOWN — this function is
 * intentionally conservative and requires a minimum confidence margin
 * before committing to a match.
 */
const GENERIC_TERM_WEIGHT = 0.05;
const SPECIFIC_TERM_WEIGHT = 1.0;

// Terms that occur across many ToolPilot tools and carry near-zero
// discriminating value on their own.
const GENERIC_TERMS = new Set([
  "generator",
  "generate",
  "checker",
  "check",
  "calculator",
  "calculate",
  "tool",
  "tools",
  "maker",
  "make",
  "builder",
  "build",
  "creator",
  "create",
  "extractor",
  "extract",
  "counter",
  "count",
  "converter",
  "convert",
  "formatter",
  "format",
  "splitter",
  "split",
  "finder",
  "find",
  "the",
  "for",
  "and",
  "a",
  "an",
  "to",
  "of",
]);

// Minimum score margin required before committing to a match, and
// minimum absolute score to avoid confidently matching on a single
// low-signal token.
const MIN_CONFIDENCE_SCORE = 0.9;
const MIN_WINNING_MARGIN = 0.3;

function tokenWeight(token: string): number {
  return GENERIC_TERMS.has(token) ? GENERIC_TERM_WEIGHT : SPECIFIC_TERM_WEIGHT;
}

function inferPageForQuery(
  normalizedQuery: string,
  pages: { normalizedUrl: string }[]
): { page: string | null; relationship: PageRelationship } {
  const queryTokens = normalizedQuery
    .split(/[\s.]+/)
    .filter((t) => t.length > 1);

  if (queryTokens.length === 0) {
    return { page: null, relationship: "UNKNOWN" };
  }

  const scored: { url: string; score: number }[] = [];

  for (const p of pages) {
    // Slug tokens: the last path segment, split on hyphens, is the most
    // specific and reliable part of the URL for matching (e.g.
    // "robots-txt-generator" -> ["robots", "txt", "generator"]).
    const segments = p.normalizedUrl.toLowerCase().split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] ?? "";
    const slugTokens = new Set(lastSegment.split("-").filter(Boolean));

    let score = 0;
    for (const token of queryTokens) {
      if (slugTokens.has(token)) {
        score += tokenWeight(token);
      }
    }

    if (score > 0) {
      scored.push({ url: p.normalizedUrl, score });
    }
  }

  if (scored.length === 0) {
    return { page: null, relationship: "UNKNOWN" };
  }

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];
  const runnerUp = scored[1];

  // Require a minimum absolute confidence — a single generic-term hit
  // (score = 0.05) must never be enough to commit to a match.
  if (best.score < MIN_CONFIDENCE_SCORE) {
    return { page: null, relationship: "UNKNOWN" };
  }

  // Require a clear margin over the next-best candidate — if two pages
  // are near-tied, guessing between them is worse than admitting UNKNOWN.
  if (runnerUp && best.score - runnerUp.score < MIN_WINNING_MARGIN) {
    return { page: null, relationship: "UNKNOWN" };
  }

  return { page: best.url, relationship: "INFERRED" };
}

export function runOrchestrator(input: OrchestratorInput): OrchestratorOutput {
  const queriesCsv = safeReadFile(input.queriesCsvPath);
  const pagesCsv = safeReadFile(input.pagesCsvPath);

  const rawQueries = parseQueriesCsv(queriesCsv);
  const rawPages = parsePagesCsv(pagesCsv);

  const hasQueryPageData = !!input.queryPageCsvPath && fs.existsSync(input.queryPageCsvPath);

  // Build a normalized query -> normalized page DIRECT relationship map,
  // when a query-page.csv is actually supplied and parseable.
  const directRelationshipMap = new Map<string, string>();
  if (hasQueryPageData) {
    const queryPageCsv = fs.readFileSync(input.queryPageCsvPath!, "utf-8");
    const rawQueryPageRows = parseQueryPageCsv(queryPageCsv);
    for (const row of rawQueryPageRows) {
      const { normalizedQuery } = normalizeQuery(row.query);
      const { normalizedUrl } = normalizeUrl(row.page);
      // First relationship wins if the same query maps to multiple rows;
      // this is deterministic and never silently overwritten by inference.
      if (!directRelationshipMap.has(normalizedQuery)) {
        directRelationshipMap.set(normalizedQuery, normalizedUrl);
      }
    }
  }

  // --- Normalize pages ---
  const normalizedPages = rawPages.map((p) => {
    const { normalizedUrl, hostVariant } = normalizeUrl(p.page);
    return { ...p, normalizedUrl, hostVariant };
  });

  const wwwPageCount = normalizedPages.filter((p) => p.hostVariant === "www").length;
  const nonWwwPageCount = normalizedPages.filter((p) => p.hostVariant === "non-www").length;

  // --- Normalize + classify queries ---
  let brandQueriesCount = 0;
  let noiseQueriesCount = 0;

  const maxImpressions = Math.max(1, ...rawQueries.map((q) => q.impressions));

  const opportunities: Opportunity[] = [];
  const cannibalizationSignals: QueryPageSignal[] = [];

  for (const q of rawQueries) {
    const { normalizedQuery } = normalizeQuery(q.query);
    const isBrand = isBrandQuery(normalizedQuery);
    const noise = isNoiseQuery(normalizedQuery);
    const { intent } = classifyIntent(normalizedQuery);

    if (isBrand) brandQueriesCount++;
    if (noise.isNoise) noiseQueriesCount++;

    // Skip noise entirely from opportunity detection (still counted above).
    if (noise.isNoise) continue;

    // DIRECT relationship always takes priority and is never overridden
    // by inference, even if inference would suggest a different page.
    const directPage = directRelationshipMap.get(normalizedQuery);
    let targetPage: string;
    let relationship: PageRelationship;

    if (directPage) {
      targetPage = directPage;
      relationship = "DIRECT";
    } else {
      const inferred = inferPageForQuery(normalizedQuery, normalizedPages);
      if (inferred.page) {
        targetPage = inferred.page;
        relationship = "INFERRED";
      } else {
        targetPage = "UNKNOWN";
        relationship = "UNKNOWN";
      }
    }
    const page = relationship === "UNKNOWN" ? null : targetPage;

    if (page) {
      cannibalizationSignals.push({
        query: normalizedQuery,
        page: targetPage,
        clicks: q.clicks,
        impressions: q.impressions,
      });
    }

    const benchmarkCtr = getBenchmarkCtr(q.position);
    const score = computeScore(q.impressions, q.position, q.ctr, maxImpressions);

    let opportunityType: Opportunity["opportunityType"] | null = null;
    if (
      isQuickWinPosition(q.position) &&
      hasMeaningfulImpressions(q.impressions) &&
      q.ctr < benchmarkCtr
    ) {
      opportunityType = "QUICK_WIN";
    } else if (isNearPageOnePosition(q.position) && hasMeaningfulImpressions(q.impressions)) {
      opportunityType = "NEAR_PAGE_1";
    } else if (isHiddenWinner(q.impressions, q.ctr, benchmarkCtr)) {
      opportunityType = "HIDDEN_WINNER";
    }

    if (!opportunityType) continue; // not every query is an opportunity

    const qualityResult = runQualityGate({
      opportunityType,
      isRelevant: page !== null, // conservative: unmatched page = cannot assert relevance
      hasUserValueRationale: true,
      isDuplicateRecommendation: false,
      wouldCreateThinContent: false,
      wouldCreateDoorwayPage: false,
      wouldCreateDuplicatePage: false,
    });

    const recommendedAction = describeAction(opportunityType, targetPage);

    opportunities.push({
      query: q.query,
      page: targetPage,
      pageRelationship: relationship,
      opportunityType,
      score,
      priority: score.total >= 60 ? "P0" : score.total >= 35 ? "P1" : "P2",
      intent,
      isBrand,
      impressions: q.impressions,
      clicks: q.clicks,
      ctr: q.ctr,
      position: q.position,
      relevance: page ? "MEDIUM" : "LOW",
      recommendedAction,
      rationale: `Position ${q.position.toFixed(1)}, ${q.impressions} impressions, ${q.ctr.toFixed(2)}% CTR vs ${benchmarkCtr.toFixed(2)}% benchmark.`,
      qualityGate: qualityResult.pass ? "PASS" : "REJECTED",
      rejectionReason: qualityResult.reason,
    });
  }

  const cannibalization = detectCannibalization(cannibalizationSignals);

  const totalClicks = rawQueries.reduce((s, q) => s + q.clicks, 0);
  const totalImpressions = rawQueries.reduce((s, q) => s + q.impressions, 0);
  const averageCtr =
    rawQueries.length > 0 ? rawQueries.reduce((s, q) => s + q.ctr, 0) / rawQueries.length : 0;
  const averagePosition =
    rawQueries.length > 0 ? rawQueries.reduce((s, q) => s + q.position, 0) / rawQueries.length : 0;

  const report = buildEngineReport(
    input.dataLabel,
    {
      totalClicks,
      totalImpressions,
      averageCtr,
      averagePosition,
      pagesWithImpressions: rawPages.filter((p) => p.impressions > 0).length,
      queriesWithImpressions: rawQueries.filter((q) => q.impressions > 0).length,
    },
    opportunities,
    cannibalization
  );

  const stats: ReportStats = {
    totalQueriesParsed: rawQueries.length,
    totalPagesParsed: rawPages.length,
    brandQueriesCount,
    noiseQueriesCount,
    wwwPageCount,
    nonWwwPageCount,
    hasQueryPageData,
  };

  return {
    report,
    stats,
    json: reportToJson(report, stats),
    markdown: reportToMarkdown(report, stats),
  };
}

function describeAction(type: Opportunity["opportunityType"], page: string): string {
  switch (type) {
    case "QUICK_WIN":
      return `Improve title/meta/content on ${page} — position is competitive but CTR trails benchmark.`;
    case "NEAR_PAGE_1":
      return `Strengthen content depth and internal links to ${page} to push toward page 1.`;
    case "HIDDEN_WINNER":
      return `Review title/meta description on ${page} — impressions exist but clicks are disproportionately low.`;
    default:
      return `Review ${page}.`;
  }
}

export function writeReportFiles(output: OrchestratorOutput, outputDir: string): void {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "traffic-opportunity-report.json"), output.json, "utf-8");
  fs.writeFileSync(path.join(outputDir, "traffic-opportunity-report.md"), output.markdown, "utf-8");
}
