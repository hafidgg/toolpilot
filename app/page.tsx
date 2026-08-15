import Link from "next/link";
import { categories, getAllTools } from "@/lib/tools-data";
import PopularTools from "@/components/PopularTools";
import RecentlyUsedTools from "@/components/RecentlyUsedTools";

export default function Home() {
  const toolCount = getAllTools().length;

  return (
    <div>
      <section className="terminal-grid border-b border-line-soft relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #4C8DFF 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative">
          <span className="eyebrow">
            {toolCount} free tools · No signup · Instant
          </span>
          <h1 className="h1-hero mt-4 max-w-2xl">
            Small tools for creators, done properly.
          </h1>
          <p className="mt-5 max-w-xl text-muted leading-relaxed">
            Fast, browser-based tools for writing captions, checking YouTube
            titles, formatting hashtags, and cleaning up the technical side
            of publishing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="#popular-tools" className="btn-primary">
              Browse popular tools
            </Link>
            <Link href="/guides" className="btn-secondary">
              Read the guides
            </Link>
          </div>
        </div>
      </section>

      <RecentlyUsedTools />
      <PopularTools />

      {categories.map((cat) => (
        <section key={cat.slug} className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">{cat.label}</span>
            <Link
              href={`/categories/${cat.slug}`}
              className="text-xs font-mono text-faint hover:text-ink transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {cat.tools.map((tool, i) => (
              <ToolCard
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                index={String(i + 1).padStart(2, "0")}
                title={tool.title}
                description={tool.shortDescription}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-6xl mx-auto px-6 pt-8 pb-24">
        <div className="panel p-8 md:p-10">
          <span className="eyebrow">Why these tools</span>
          <div className="mt-4 grid md:grid-cols-3 gap-8 text-sm text-muted leading-relaxed">
            <p>
              No account, no email, no tracking. Every calculation runs in
              your browser — nothing you enter is sent anywhere.
            </p>
            <p>
              Single-purpose by design. Each tool does one job well instead
              of burying it inside a bloated all-in-one dashboard.
            </p>
            <p>
              Designed to be read at a glance — the numbers that matter are
              always the largest thing on the screen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ToolCard({
  href,
  index,
  title,
  description,
}: {
  href: string;
  index: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group panel panel-interactive p-6 md:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-faint">{index}</span>
        <span className="text-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all">
          →
        </span>
      </div>
      <h3 className="mt-4 text-lg font-display font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </Link>
  );
}
