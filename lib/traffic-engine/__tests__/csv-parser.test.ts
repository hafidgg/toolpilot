import { describe, it, expect } from "vitest";
import { parseQueriesCsv, parsePagesCsv } from "../csv-parser";

describe("parseQueriesCsv — English headers", () => {
  it("parses a standard English-header queries export", () => {
    const csv = `Queries,Clicks,Impressions,CTR,Position
robots txt generator,0,120,0%,80.5`;
    const rows = parseQueriesCsv(csv);
    expect(rows).toHaveLength(1);
    expect(rows[0].query).toBe("robots txt generator");
    expect(rows[0].impressions).toBe(120);
    expect(rows[0].position).toBe(80.5);
  });
});

describe("parseQueriesCsv — French headers", () => {
  it("parses the French GSC export header format", () => {
    const csv = `Requêtes les plus fréquentes,Clics,Impressions,CTR,Position
acronym generator,0,45,"0,00 %","84,6"`;
    const rows = parseQueriesCsv(csv);
    expect(rows).toHaveLength(1);
    expect(rows[0].query).toBe("acronym generator");
    expect(rows[0].impressions).toBe(45);
    expect(rows[0].position).toBe(84.6);
  });
});

describe("parseQueriesCsv — error handling", () => {
  it("throws a clear error when no query column is found", () => {
    const csv = `Foo,Bar\n1,2`;
    expect(() => parseQueriesCsv(csv)).toThrow(/could not find a query column/);
  });

  it("returns an empty array for an empty input", () => {
    expect(parseQueriesCsv("")).toEqual([]);
  });
});

describe("parsePagesCsv — English and French headers", () => {
  it("parses English 'Top pages' header", () => {
    const csv = `Top pages,Clicks,Impressions,CTR,Position
https://usetoolpilot.com/tools/robots-txt-generator,1,218,0.5%,79.7`;
    const rows = parsePagesCsv(csv);
    expect(rows[0].page).toBe("https://usetoolpilot.com/tools/robots-txt-generator");
  });

  it("parses French 'Pages les plus populaires' header", () => {
    const csv = `Pages les plus populaires,Clics,Impressions,CTR,Position
https://usetoolpilot.com/tools/acronym-generator,0,"227","0,00 %","84,6"`;
    const rows = parsePagesCsv(csv);
    expect(rows[0].page).toBe("https://usetoolpilot.com/tools/acronym-generator");
    expect(rows[0].impressions).toBe(227);
  });
});
