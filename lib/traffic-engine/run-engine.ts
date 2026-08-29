// TRAFFIC ENGINE — CLI ENTRY POINT
// Usage: npx tsx lib/traffic-engine/run-engine.ts <data-dir> <output-dir> <CURRENT|HISTORICAL>

import * as path from "path";
import { runOrchestrator, writeReportFiles } from "./orchestrator";

const dataDir = process.argv[2] ?? "data/gsc";
const outputDir = process.argv[3] ?? "reports";
const labelArg = process.argv[4] ?? "HISTORICAL";

const dataLabel =
  labelArg === "CURRENT"
    ? ("CURRENT PERFORMANCE DATA" as const)
    : ("HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE" as const);

const queriesCsvPath = path.join(dataDir, "queries.csv");
const pagesCsvPath = path.join(dataDir, "pages.csv");
const queryPageCsvPath = path.join(dataDir, "query-page.csv");

const output = runOrchestrator({
  queriesCsvPath,
  pagesCsvPath,
  queryPageCsvPath,
  dataLabel,
});

writeReportFiles(output, outputDir);

console.log(`=== ${dataLabel} ===`);
console.log(`Queries parsed: ${output.stats.totalQueriesParsed}`);
console.log(`Pages parsed: ${output.stats.totalPagesParsed}`);
console.log(`Brand queries: ${output.stats.brandQueriesCount}`);
console.log(`Noise queries: ${output.stats.noiseQueriesCount}`);
console.log(`www pages: ${output.stats.wwwPageCount}, non-www pages: ${output.stats.nonWwwPageCount}`);
console.log(`Opportunities detected: ${output.report.opportunities.length}`);
console.log(`  - PASS: ${output.report.opportunities.filter((o) => o.qualityGate === "PASS").length}`);
console.log(`  - REJECTED: ${output.report.rejectedCount}`);
console.log(`Cannibalization cases: ${output.report.cannibalization.length}`);
console.log(`Reports written to: ${outputDir}/`);
