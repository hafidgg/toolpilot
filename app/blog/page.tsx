import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on character limits, YouTube metadata, SEO fundamentals, and content formatting for creators.",
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Articles on character limits, YouTube metadata, SEO fundamentals, and content formatting for creators.",
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Blog</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Notes on numbers
      </h1>
      <p className="mt-4 text-sm text-muted leading-relaxed">
        Short, practical articles behind the calculators — how the math
        works, and how to read the results.
      </p>

      <div className="mt-10 space-y-1">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-5 border-b border-line-soft"
          >
            <div className="flex items-center gap-3 text-xs text-faint mb-2">
              <span className="badge !text-accent !border-accent-dim">
                {post.category}
              </span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-base font-display font-semibold text-ink group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="mt-1.5 text-sm text-muted leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
