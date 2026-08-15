import Link from "next/link";
import { getCategoryBySlug } from "@/lib/tools-data";

export default function RelatedTools({
  categorySlug,
  currentSlug,
}: {
  categorySlug: string;
  currentSlug: string;
}) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const related = category.tools.filter((t) => t.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <div>
      <h2 className="h2-section mb-4">Related tools</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="panel panel-interactive p-4"
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
    </div>
  );
}
