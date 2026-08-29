import { describe, it, expect, beforeAll, afterAll } from "vitest";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { runOrchestrator, writeReportFiles } from "../orchestrator";

let tmpDir: string;

beforeAll(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "traffic-engine-test-"));

  const queriesCsv = `Queries,Clicks,Impressions,CTR,Position
robots txt generator,0,120,0.00%,8.0
acronym maker,1,60,1.50%,12.0
vid_20250117_143022,0,3,0%,10.0
toolpilot,5,50,10.00%,1.2`;

  const pagesCsv = `Pages,Clicks,Impressions,CTR,Position
https://usetoolpilot.com/tools/robots-txt-generator,0,120,0.00%,8.0
https://usetoolpilot.com/tools/acronym-generator,1,60,1.50%,12.0
https://www.usetoolpilot.com/tools/acronym-generator,0,10,0.00%,15.0`;

  fs.writeFileSync(path.join(tmpDir, "queries.csv"), queriesCsv, "utf-8");
  fs.writeFileSync(path.join(tmpDir, "pages.csv"), pagesCsv, "utf-8");
});

afterAll(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

describe("runOrchestrator — end-to-end", () => {
  it("parses both CSVs and produces summary totals", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    expect(output.stats.totalQueriesParsed).toBe(4);
    expect(output.stats.totalPagesParsed).toBe(3);
  });

  it("detects the brand query and excludes it from noise", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    expect(output.stats.brandQueriesCount).toBe(1);
  });

  it("detects the noise query (filename pattern)", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    expect(output.stats.noiseQueriesCount).toBe(1);
  });

  it("detects the www page variant", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    expect(output.stats.wwwPageCount).toBe(1);
    expect(output.stats.nonWwwPageCount).toBe(2);
  });

  it("classifies pageRelationship as INFERRED when no Query+Page CSV is supplied", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    const matched = output.report.opportunities.find((o) => o.page !== "UNKNOWN");
    expect(matched?.pageRelationship).toBe("INFERRED");
  });

  it("never marks pageRelationship as DIRECT without a Query+Page export", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    expect(output.report.opportunities.every((o) => o.pageRelationship !== "DIRECT")).toBe(true);
  });

  it("preserves the exact dataLabel passed in, unmodified", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    expect(output.report.dataLabel).toBe("HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE");
  });

  it("throws a clear error when a required input file is missing", () => {
    expect(() =>
      runOrchestrator({
        queriesCsvPath: path.join(tmpDir, "does-not-exist.csv"),
        pagesCsvPath: path.join(tmpDir, "pages.csv"),
        dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
      })
    ).toThrow(/not found/);
  });

  it("writes valid JSON and non-empty Markdown report files", () => {
    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    const outDir = path.join(tmpDir, "reports");
    writeReportFiles(output, outDir);

    const jsonContent = fs.readFileSync(path.join(outDir, "traffic-opportunity-report.json"), "utf-8");
    expect(() => JSON.parse(jsonContent)).not.toThrow();

    const mdContent = fs.readFileSync(path.join(outDir, "traffic-opportunity-report.md"), "utf-8");
    expect(mdContent.length).toBeGreaterThan(0);
    expect(mdContent).toContain("HISTORICAL TEST DATA");
  });

  it("does not fabricate opportunities when none are genuinely detected", () => {
    const emptyQueries = `Queries,Clicks,Impressions,CTR,Position\nirrelevant query,0,1,0%,95.0`;
    const emptyPages = `Pages,Clicks,Impressions,CTR,Position\nhttps://usetoolpilot.com/,0,1,0%,95.0`;
    fs.writeFileSync(path.join(tmpDir, "empty-queries.csv"), emptyQueries, "utf-8");
    fs.writeFileSync(path.join(tmpDir, "empty-pages.csv"), emptyPages, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "empty-queries.csv"),
      pagesCsvPath: path.join(tmpDir, "empty-pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
    // Position 95 with 1 impression meets no opportunity threshold.
    expect(output.report.opportunities.length).toBe(0);
  });
});

describe("query-page.csv — DIRECT relationship support", () => {
  it("uses a DIRECT relationship when query-page.csv provides one", () => {
    const qpCsv = `Query,Page\nrobots txt generator,https://usetoolpilot.com/tools/robots-txt-generator`;
    fs.writeFileSync(path.join(tmpDir, "query-page.csv"), qpCsv, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      queryPageCsvPath: path.join(tmpDir, "query-page.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots txt generator");
    expect(opp?.pageRelationship).toBe("DIRECT");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("normalizes www vs non-www when matching DIRECT relationships", () => {
    const qpCsv = `Query,Page\nrobots txt generator,https://www.usetoolpilot.com/tools/robots-txt-generator`;
    fs.writeFileSync(path.join(tmpDir, "query-page-www.csv"), qpCsv, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      queryPageCsvPath: path.join(tmpDir, "query-page-www.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots txt generator");
    expect(opp?.pageRelationship).toBe("DIRECT");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("normalizes trailing slash when matching DIRECT relationships", () => {
    const qpCsv = `Query,Page\nrobots txt generator,https://usetoolpilot.com/tools/robots-txt-generator/`;
    fs.writeFileSync(path.join(tmpDir, "query-page-slash.csv"), qpCsv, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      queryPageCsvPath: path.join(tmpDir, "query-page-slash.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots txt generator");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("falls back to INFERRED when a query is absent from query-page.csv", () => {
    const qpCsv = `Query,Page\nsome other query,https://usetoolpilot.com/tools/word-counter`;
    fs.writeFileSync(path.join(tmpDir, "query-page-partial.csv"), qpCsv, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      queryPageCsvPath: path.join(tmpDir, "query-page-partial.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots txt generator");
    expect(opp?.pageRelationship).toBe("INFERRED");
  });

  it("marks UNKNOWN when no reliable page can be inferred and no DIRECT data exists", () => {
    const noMatchQueries = `Queries,Clicks,Impressions,CTR,Position\nzzz completely unrelated,0,15,0%,9.0`;
    const noMatchPages = `Pages,Clicks,Impressions,CTR,Position\nhttps://usetoolpilot.com/tools/word-counter,0,15,0%,9.0`;
    fs.writeFileSync(path.join(tmpDir, "nomatch-queries.csv"), noMatchQueries, "utf-8");
    fs.writeFileSync(path.join(tmpDir, "nomatch-pages.csv"), noMatchPages, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "nomatch-queries.csv"),
      pagesCsvPath: path.join(tmpDir, "nomatch-pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "zzz completely unrelated");
    expect(opp?.pageRelationship).toBe("UNKNOWN");
    expect(opp?.page).toBe("UNKNOWN");
  });

  it("DIRECT relationship overrides what inference would have incorrectly matched", () => {
    const qpCsv = `Query,Page\nrobots txt generator,https://usetoolpilot.com/tools/robots-txt-generator`;
    fs.writeFileSync(path.join(tmpDir, "query-page-override.csv"), qpCsv, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "queries.csv"),
      pagesCsvPath: path.join(tmpDir, "pages.csv"),
      queryPageCsvPath: path.join(tmpDir, "query-page-override.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots txt generator");
    expect(opp?.page).not.toBe("https://usetoolpilot.com/tools/acronym-generator");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("REGRESSION: 'robots.txt generator' must resolve to robots-txt-generator, not acronym-generator, when query-page data says so", () => {
    const regressionQueries = `Queries,Clicks,Impressions,CTR,Position\nrobots.txt generator,0,45,0%,77.9`;
    const regressionPages = `Pages,Clicks,Impressions,CTR,Position
https://usetoolpilot.com/tools/robots-txt-generator,0,45,0%,77.9
https://usetoolpilot.com/tools/acronym-generator,0,45,0%,77.9`;
    const regressionQP = `Query,Page\nrobots.txt generator,https://usetoolpilot.com/tools/robots-txt-generator`;

    fs.writeFileSync(path.join(tmpDir, "regression-queries.csv"), regressionQueries, "utf-8");
    fs.writeFileSync(path.join(tmpDir, "regression-pages.csv"), regressionPages, "utf-8");
    fs.writeFileSync(path.join(tmpDir, "regression-qp.csv"), regressionQP, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "regression-queries.csv"),
      pagesCsvPath: path.join(tmpDir, "regression-pages.csv"),
      queryPageCsvPath: path.join(tmpDir, "regression-qp.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots.txt generator");
    expect(opp?.page).not.toBe("https://usetoolpilot.com/tools/acronym-generator");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
    expect(opp?.pageRelationship).toBe("DIRECT");
  });
});

describe("inferPageForQuery — semantic weighted matching (Phase 3.2)", () => {
  const standardPages = `Pages,Clicks,Impressions,CTR,Position
https://usetoolpilot.com/tools/robots-txt-generator,0,50,0%,78.0
https://usetoolpilot.com/tools/acronym-generator,0,50,0%,80.0
https://usetoolpilot.com/blog/right-youtube-thumbnail-size,0,50,0%,81.0
https://usetoolpilot.com/tools/word-counter,0,50,0%,75.0
https://usetoolpilot.com/tools/character-counter,0,50,0%,76.0
https://usetoolpilot.com/tools/hashtag-formatter,0,50,0%,79.0`;

  function runWithQuery(query: string) {
    const queriesCsv = `Queries,Clicks,Impressions,CTR,Position\n${query},0,20,0%,80.0`;
    fs.writeFileSync(path.join(tmpDir, "sem-queries.csv"), queriesCsv, "utf-8");
    fs.writeFileSync(path.join(tmpDir, "sem-pages.csv"), standardPages, "utf-8");
    return runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "sem-queries.csv"),
      pagesCsvPath: path.join(tmpDir, "sem-pages.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });
  }

  it('REGRESSION 1: "robots.txt generator" resolves to robots-txt-generator, not acronym-generator', () => {
    const output = runWithQuery("robots.txt generator");
    const opp = output.report.opportunities.find((o) => o.query === "robots.txt generator");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
    expect(opp?.pageRelationship).toBe("INFERRED");
  });

  it('REGRESSION 2: "robots txt builder" resolves to robots-txt-generator', () => {
    const output = runWithQuery("robots txt builder");
    const opp = output.report.opportunities.find((o) => o.query === "robots txt builder");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it('REGRESSION 3: "acronym generator" resolves to acronym-generator', () => {
    const output = runWithQuery("acronym generator");
    const opp = output.report.opportunities.find((o) => o.query === "acronym generator");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/acronym-generator");
  });

  it('REGRESSION 4: "youtube thumbnail size" resolves to the thumbnail-size blog post', () => {
    const output = runWithQuery("youtube thumbnail size");
    const opp = output.report.opportunities.find((o) => o.query === "youtube thumbnail size");
    expect(opp?.page).toBe("https://usetoolpilot.com/blog/right-youtube-thumbnail-size");
  });

  it("REGRESSION 5: a query containing only the generic term 'generator' does not confidently pick an arbitrary generator page", () => {
    const output = runWithQuery("generator");
    const opp = output.report.opportunities.find((o) => o.query === "generator");
    // Either UNKNOWN, or if somehow surfaced, must never claim high confidence
    // via a single generic-term hit alone.
    expect(opp?.pageRelationship).not.toBe("DIRECT");
    if (opp?.page && opp.page !== "UNKNOWN") {
      throw new Error(
        `Expected UNKNOWN for a purely generic query, but got a confident match: ${opp.page}`
      );
    }
  });

  it("REGRESSION 6: an ambiguous query with no distinctive terms resolves to UNKNOWN", () => {
    const output = runWithQuery("free online tool");
    const opp = output.report.opportunities.find((o) => o.query === "free online tool");
    expect(opp === undefined || opp.pageRelationship === "UNKNOWN").toBe(true);
  });

  it("REGRESSION 7: existing DIRECT relationship behavior is completely unchanged", () => {
    const qpCsv = `Query,Page\nrobots.txt generator,https://usetoolpilot.com/tools/robots-txt-generator`;
    fs.writeFileSync(path.join(tmpDir, "sem-qp.csv"), qpCsv, "utf-8");
    const queriesCsv = `Queries,Clicks,Impressions,CTR,Position\nrobots.txt generator,0,20,0%,80.0`;
    fs.writeFileSync(path.join(tmpDir, "sem-queries-direct.csv"), queriesCsv, "utf-8");
    fs.writeFileSync(path.join(tmpDir, "sem-pages-direct.csv"), standardPages, "utf-8");

    const output = runOrchestrator({
      queriesCsvPath: path.join(tmpDir, "sem-queries-direct.csv"),
      pagesCsvPath: path.join(tmpDir, "sem-pages-direct.csv"),
      queryPageCsvPath: path.join(tmpDir, "sem-qp.csv"),
      dataLabel: "HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE",
    });

    const opp = output.report.opportunities.find((o) => o.query === "robots.txt generator");
    expect(opp?.pageRelationship).toBe("DIRECT");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("does not confuse robots-txt-generator with acronym-generator on shared generic term 'generator'", () => {
    const output = runWithQuery("acronym maker");
    const opp = output.report.opportunities.find((o) => o.query === "acronym maker");
    expect(opp?.page).toBe("https://usetoolpilot.com/tools/acronym-generator");
  });
});
