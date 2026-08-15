const STORAGE_KEY = "toolpilot:recently-used";
const MAX_ENTRIES = 6;

export function getRecentlyUsedSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function recordToolVisit(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    const current = getRecentlyUsedSlugs().filter((s) => s !== slug);
    const updated = [slug, ...current].slice(0, MAX_ENTRIES);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — fail silently
  }
}
