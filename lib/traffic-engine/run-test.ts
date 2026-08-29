// TRAFFIC ENGINE — TEST RUN SCRIPT
// Purpose: verify the parser works end-to-end against a real GSC export.
// LABEL: HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE
// This output must NEVER be treated as a current SEO opportunity report.

import * as fs from "fs";
import { parseQueriesCsv, parsePagesCsv } from "./csv-parser";
import { normalizeQuery, normalizeUrl } from "./normalize";
import { isBrandQuery, isNoiseQuery, classifyIntent } from "./classify";

const queriesPath = process.argv[2];
const pagesPath = process.argv[3];

if (!queriesPath || !pagesPath) {
  console.error("Usage: run-test.ts <queries.csv> <pages.csv>");
  process.exit(1);
}

const queriesCsv = fs.readFileSync(queriesPath, "utf-8");
const pagesCsv = fs.readFileSync(pagesPath, "utf-8");

const queries = parseQueriesCsv(queriesCsv);
const pages = parsePagesCsv(pagesCsv);

let brandCount = 0;
let noiseCount = 0;
const intentCounts: Record<string, number> = {};

for (const q of queries) {
  const { normalizedQuery } = normalizeQuery(q.query);
  if (isBrandQuery(normalizedQuery)) brandCount++;
  const noise = isNoiseQuery(normalizedQuery);
  if (noise.isNoise) noiseCount++;
  const { intent } = classifyIntent(normalizedQuery);
  intentCounts[intent] = (intentCounts[intent] ?? 0) + 1;
}

let wwwCount = 0;
let nonWwwCount = 0;
for (const p of pages) {
  const { hostVariant } = normalizeUrl(p.page);
  if (hostVariant === "www") wwwCount++;
  if (hostVariant === "non-www") nonWwwCount++;
}

console.log("=== HISTORICAL TEST DATA — NOT CURRENT PERFORMANCE ===");
console.log(`Queries parsed: ${queries.length}`);
console.log(`Pages parsed: ${pages.length}`);
console.log(`Brand queries detected: ${brandCount}`);
console.log(`Noise queries detected: ${noiseCount}`);
console.log(`Intent distribution:`, intentCounts);
console.log(`Page host variants — www: ${wwwCount}, non-www: ${nonWwwCount}`);
console.log("=== END HISTORICAL TEST DATA ===");
