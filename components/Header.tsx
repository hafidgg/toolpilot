"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/tools-data";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Close menus automatically on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  // Close an open dropdown on outside click or Escape — required for
  // keyboard and non-hover (touch/click) users, not just mouse users.
  useEffect(() => {
    if (!open) return;

    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="border-b border-line-soft bg-base/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-accent-soft border border-accent-dim font-mono text-[11px] font-semibold text-accent transition-transform group-hover:scale-105">
            ▸
          </span>
          <span className="font-display font-semibold text-sm text-ink tracking-tight">
            ToolPilot
          </span>
        </Link>

        {/* Desktop nav — click-toggle (not hover-only) so it's operable by
            keyboard and touch, not just a mouse. */}
        <nav ref={navRef} className="hidden md:flex items-center gap-1">
          {categories.map((cat) => {
            const isOpen = open === cat.slug;
            return (
              <div key={cat.slug} className="relative">
                <button
                  className="px-3 py-2 text-sm text-muted hover:text-ink transition-colors rounded-md hover:bg-raised"
                  onClick={() => setOpen(isOpen ? null : cat.slug)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {cat.label}
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="panel p-1.5 shadow-xl" role="menu">
                      {cat.tools.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/tools/${t.slug}`}
                          role="menuitem"
                          className="block px-3 py-2 text-sm text-muted hover:text-ink hover:bg-raised rounded-md transition-colors"
                        >
                          {t.title}
                        </Link>
                      ))}
                      <Link
                        href={`/categories/${cat.slug}`}
                        role="menuitem"
                        className="block px-3 py-2 text-xs font-mono text-accent hover:text-ink rounded-md transition-colors mt-1 border-t border-line-soft pt-2.5"
                      >
                        View all {cat.label} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/search"
            className="px-3 py-2 text-sm text-muted hover:text-ink transition-colors rounded-md hover:bg-raised"
          >
            Search
          </Link>
          <Link
            href="/guides"
            className="px-3 py-2 text-sm text-muted hover:text-ink transition-colors rounded-md hover:bg-raised"
          >
            Guides
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 text-sm text-muted hover:text-ink transition-colors rounded-md hover:bg-raised"
          >
            Blog
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-md hover:bg-raised transition-colors -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="#E6EDF3" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="#E6EDF3" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden border-t border-line-soft bg-base max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            <Link
              href="/search"
              className="px-3 py-2.5 text-sm text-ink rounded-md hover:bg-raised transition-colors"
            >
              Search
            </Link>
            <Link
              href="/guides"
              className="px-3 py-2.5 text-sm text-ink rounded-md hover:bg-raised transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2.5 text-sm text-ink rounded-md hover:bg-raised transition-colors"
            >
              Blog
            </Link>

            <div className="h-px bg-line-soft my-2" />

            {categories.map((cat) => {
              const expanded = mobileExpanded === cat.slug;
              return (
                <div key={cat.slug}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-ink rounded-md hover:bg-raised transition-colors"
                    onClick={() => setMobileExpanded(expanded ? null : cat.slug)}
                    aria-expanded={expanded}
                  >
                    {cat.label}
                    <span className="text-muted font-mono text-xs">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                  {expanded && (
                    <div className="pl-3 border-l border-line-soft ml-3 mb-1">
                      {cat.tools.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/tools/${t.slug}`}
                          className="block px-3 py-2 text-sm text-muted hover:text-ink rounded-md hover:bg-raised transition-colors"
                        >
                          {t.title}
                        </Link>
                      ))}
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="block px-3 py-2 text-xs font-mono text-accent"
                      >
                        View all {cat.label} →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
