import Link from "next/link";
import { categories } from "@/lib/tools-data";

export default function NotFound() {
  const popular = categories.flatMap((c) => c.tools.slice(0, 1));

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 h1-page">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        The link might be broken, or the page may have moved. Here are a few
        places to go instead.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-3 text-left">
        {popular.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="panel panel-interactive p-4 "
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

      <Link href="/" className="mt-10 inline-block btn-primary text-sm">
        Back to home
      </Link>
    </div>
  );
}
