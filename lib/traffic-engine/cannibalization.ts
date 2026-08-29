// TRAFFIC ENGINE — CANNIBALIZATION DETECTION

import type { CannibalizationCase } from "./types";

export interface QueryPageSignal {
  query: string;
  page: string;
  clicks: number;
  impressions: number;
}

/**
 * Groups signals by normalized query and flags any query associated with
 * more than one distinct page. The primary page is the one with the most
 * clicks (tie-broken by impressions).
 */
export function detectCannibalization(
  signals: QueryPageSignal[]
): CannibalizationCase[] {
  const byQuery = new Map<string, QueryPageSignal[]>();

  for (const signal of signals) {
    const existing = byQuery.get(signal.query) ?? [];
    existing.push(signal);
    byQuery.set(signal.query, existing);
  }

  const cases: CannibalizationCase[] = [];

  for (const [query, group] of byQuery.entries()) {
    const distinctPages = Array.from(new Set(group.map((g) => g.page)));
    if (distinctPages.length < 2) continue;

    // Aggregate clicks/impressions per page in case of duplicate rows
    const perPage = new Map<string, { clicks: number; impressions: number }>();
    for (const g of group) {
      const agg = perPage.get(g.page) ?? { clicks: 0, impressions: 0 };
      agg.clicks += g.clicks;
      agg.impressions += g.impressions;
      perPage.set(g.page, agg);
    }

    const ranked = Array.from(perPage.entries()).sort((a, b) => {
      if (b[1].clicks !== a[1].clicks) return b[1].clicks - a[1].clicks;
      return b[1].impressions - a[1].impressions;
    });

    const [primaryPage] = ranked[0];

    cases.push({
      query,
      competingPages: distinctPages,
      primaryPage,
      primaryPageReason:
        "highest clicks (tie-broken by impressions) among competing pages",
      recommendedAction: `Consolidate internal links toward ${primaryPage}; ensure other competing pages link to it as the canonical resource for this query rather than duplicating content.`,
    });
  }

  return cases;
}
