// TRAFFIC ENGINE — GSC CSV PARSER
// Supports both English and French GSC export column headers.

export interface RawQueriesRow {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface RawPagesRow {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

// Column header aliases observed in GSC exports (English + French).
const QUERY_HEADER_ALIASES = ["Top queries", "Queries", "Requêtes les plus fréquentes", "Requêtes"];
const PAGE_HEADER_ALIASES = ["Top pages", "Pages", "Pages les plus populaires"];
const CLICKS_ALIASES = ["Clicks", "Clics"];
const IMPRESSIONS_ALIASES = ["Impressions"];
const CTR_ALIASES = ["CTR"];
const POSITION_ALIASES = ["Position"];

function parseNumber(raw: string): number {
  // GSC French exports use comma as decimal separator for position/CTR.
  const cleaned = raw.replace("%", "").replace(",", ".").trim();
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function parseCsvLine(line: string): string[] {
  // Minimal CSV field splitter handling quoted fields with embedded commas.
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  fields.push(current);
  return fields;
}

function findColumnIndex(header: string[], aliases: string[]): number {
  return header.findIndex((h) => aliases.includes(h.trim()));
}

export function parseQueriesCsv(csvContent: string): RawQueriesRow[] {
  const lines = csvContent.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];

  const header = parseCsvLine(lines[0]);
  const queryIdx = findColumnIndex(header, QUERY_HEADER_ALIASES);
  const clicksIdx = findColumnIndex(header, CLICKS_ALIASES);
  const impressionsIdx = findColumnIndex(header, IMPRESSIONS_ALIASES);
  const ctrIdx = findColumnIndex(header, CTR_ALIASES);
  const positionIdx = findColumnIndex(header, POSITION_ALIASES);

  if (queryIdx === -1) {
    throw new Error(
      `Queries CSV: could not find a query column among headers: ${header.join(", ")}`
    );
  }

  const rows: RawQueriesRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i]);
    const query = fields[queryIdx]?.trim();
    if (!query) continue;
    rows.push({
      query,
      clicks: clicksIdx >= 0 ? parseNumber(fields[clicksIdx] ?? "0") : 0,
      impressions: impressionsIdx >= 0 ? parseNumber(fields[impressionsIdx] ?? "0") : 0,
      ctr: ctrIdx >= 0 ? parseNumber(fields[ctrIdx] ?? "0") : 0,
      position: positionIdx >= 0 ? parseNumber(fields[positionIdx] ?? "0") : 0,
    });
  }
  return rows;
}

export interface RawQueryPageRow {
  query: string;
  page: string;
}

const QUERY_PAGE_QUERY_ALIASES = ["Query", "Queries", "Requête", "Requêtes"];
const QUERY_PAGE_PAGE_ALIASES = ["Page", "Pages", "URL"];

export function parseQueryPageCsv(csvContent: string): RawQueryPageRow[] {
  const lines = csvContent.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];

  const header = parseCsvLine(lines[0]);
  const queryIdx = findColumnIndex(header, QUERY_PAGE_QUERY_ALIASES);
  const pageIdx = findColumnIndex(header, QUERY_PAGE_PAGE_ALIASES);

  if (queryIdx === -1 || pageIdx === -1) {
    throw new Error(
      `Query+Page CSV: could not find both query and page columns among headers: ${header.join(", ")}`
    );
  }

  const rows: RawQueryPageRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i]);
    const query = fields[queryIdx]?.trim();
    const page = fields[pageIdx]?.trim();
    if (!query || !page) continue;
    rows.push({ query, page });
  }
  return rows;
}

export function parsePagesCsv(csvContent: string): RawPagesRow[] {
  const lines = csvContent.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return [];

  const header = parseCsvLine(lines[0]);
  const pageIdx = findColumnIndex(header, PAGE_HEADER_ALIASES);
  const clicksIdx = findColumnIndex(header, CLICKS_ALIASES);
  const impressionsIdx = findColumnIndex(header, IMPRESSIONS_ALIASES);
  const ctrIdx = findColumnIndex(header, CTR_ALIASES);
  const positionIdx = findColumnIndex(header, POSITION_ALIASES);

  if (pageIdx === -1) {
    throw new Error(
      `Pages CSV: could not find a page column among headers: ${header.join(", ")}`
    );
  }

  const rows: RawPagesRow[] = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i]);
    const page = fields[pageIdx]?.trim();
    if (!page) continue;
    rows.push({
      page,
      clicks: clicksIdx >= 0 ? parseNumber(fields[clicksIdx] ?? "0") : 0,
      impressions: impressionsIdx >= 0 ? parseNumber(fields[impressionsIdx] ?? "0") : 0,
      ctr: ctrIdx >= 0 ? parseNumber(fields[ctrIdx] ?? "0") : 0,
      position: positionIdx >= 0 ? parseNumber(fields[positionIdx] ?? "0") : 0,
    });
  }
  return rows;
}
