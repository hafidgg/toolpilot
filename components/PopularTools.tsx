import Link from "next/link";
import { getPopularTools } from "@/lib/tools-data";

export default function PopularTools() {
  const tools = getPopularTools();

  return (
    <section id="popular-tools" className="max-w-6xl mx-auto px-6 pt-8 scroll-mt-20">
      <span className="eyebrow">Popular Tools</span>
      <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="panel p-4 hover:border-accent-dim transition-colors"
          >
            <div className="text-sm font-display font-semibold text-ink">
              {tool.title}
            </div>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              {tool.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
