// TRAFFIC ENGINE — BRAND / NOISE / INTENT CLASSIFICATION
// Deterministic and explainable: every classification stores the matched rule.

import type { Intent } from "./types";

const BRAND_PATTERNS = [
  /\btoolpilot\b/i,
  /\buse\s*toolpilot\b/i,
  /\busetoolpilot\b/i,
];

export function isBrandQuery(normalizedQuery: string): boolean {
  return BRAND_PATTERNS.some((re) => re.test(normalizedQuery));
}

const NOISE_PATTERNS: { pattern: RegExp; reason: string }[] = [
  { pattern: /^vid_\d+/i, reason: "filename-like pattern (vid_NNNNN)" },
  { pattern: /\.(mp4|jpg|jpeg|png|gif|webp|pdf|mov)$/i, reason: "file extension in query" },
  { pattern: /^https?:\/\//i, reason: "raw URL as query" },
  { pattern: /^[a-f0-9]{16,}$/i, reason: "hex/hash-like string" },
];

export function isNoiseQuery(normalizedQuery: string): { isNoise: boolean; reason?: string } {
  for (const { pattern, reason } of NOISE_PATTERNS) {
    if (pattern.test(normalizedQuery)) {
      return { isNoise: true, reason };
    }
  }
  return { isNoise: false };
}

interface IntentRule {
  intent: Intent;
  pattern: RegExp;
  reasonLabel: string;
}

// Order matters: more specific rules first.
const INTENT_RULES: IntentRule[] = [
  { intent: "COMPARISON", pattern: /\b(vs|versus|or)\b.*\b(vs|versus|or)\b|\bdifference between\b/i, reasonLabel: "comparison keyword (vs/difference between)" },
  { intent: "HOW-TO", pattern: /\bhow (to|do i|can i)\b/i, reasonLabel: "how-to phrasing" },
  { intent: "TOOL", pattern: /\b(generator|checker|calculator|converter|builder|maker|creator|extractor|counter|splitter|finder|formatter)\b/i, reasonLabel: "tool-noun keyword" },
  { intent: "DATA", pattern: /\b(size|limit|dimensions?|character limit|max(imum)?|resolution|ratio)\b/i, reasonLabel: "spec/data keyword" },
  { intent: "KNOWLEDGE", pattern: /\b(what is|what does|why)\b/i, reasonLabel: "definitional phrasing" },
];

export function classifyIntent(normalizedQuery: string): { intent: Intent; reason: string } {
  for (const rule of INTENT_RULES) {
    if (rule.pattern.test(normalizedQuery)) {
      return { intent: rule.intent, reason: rule.reasonLabel };
    }
  }
  // SCENARIO: longer, contextual queries with no clear single-keyword match
  if (normalizedQuery.split(" ").length >= 5) {
    return { intent: "SCENARIO", reason: "long contextual query, no keyword rule matched" };
  }
  return { intent: "OTHER", reason: "no rule matched" };
}
