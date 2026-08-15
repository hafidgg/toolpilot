import Link from "next/link";
import { categories } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <nav aria-label="Footer" className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-accent-soft border border-accent-dim font-mono text-[10px] font-semibold text-accent">
                ▸
              </span>
              <span className="font-display font-semibold text-sm text-ink">
                ToolPilot
              </span>
            </Link>
            <p className="mt-3 text-xs text-muted leading-relaxed">
              Free, instant tools for content creators. No signup, no
              tracking.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-wider text-accent font-mono font-semibold mb-3 cursor-default select-none">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-xs text-muted hover:text-ink transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-wider text-accent font-mono font-semibold mb-3 cursor-default select-none">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="text-xs text-muted hover:text-ink transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs text-muted hover:text-ink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-xs text-muted hover:text-ink transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-xs text-muted hover:text-ink transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <a href="/rss.xml" className="text-xs text-muted hover:text-ink transition-colors">
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-wider text-accent font-mono font-semibold mb-3 cursor-default select-none">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-xs text-muted hover:text-ink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="text-xs text-muted hover:text-ink transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/how-we-test" className="text-xs text-muted hover:text-ink transition-colors">
                  How We Test
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-muted hover:text-ink transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-xs text-muted hover:text-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-muted hover:text-ink transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-10 pt-6 border-t border-line-soft flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            These tools are provided for convenience and are best-effort
            estimates. Platform limits and specifications can change —
            always double-check against the platform&apos;s official
            guidelines before publishing.
          </p>
          <span className="sm:ml-auto text-xs font-mono text-faint whitespace-nowrap">
            © {new Date().getFullYear()} ToolPilot
          </span>
        </div>
      </div>
    </footer>
  );
}
