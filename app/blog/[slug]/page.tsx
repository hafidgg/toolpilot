import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <Link
        href="/blog"
        className="btn-ghost !px-0 !py-1 text-xs font-mono"
      >
        ← Blog
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs text-muted">
        <span className="font-mono uppercase tracking-wider text-accent">
          {post.category}
        </span>
        <span>·</span>
        <span>{date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="mt-3 h1-page leading-tight">
        {post.title}
      </h1>

      <div className="mt-8 space-y-4 text-sm text-muted leading-relaxed">
        {post.content.map((block, i) =>
          block.type === "heading" ? (
            <h2
              key={i}
              className="text-lg font-display font-semibold text-ink pt-4"
            >
              {block.text}
            </h2>
          ) : (
            <p key={i}>{block.text}</p>
          )
        )}
      </div>

      <div className="mt-12 panel p-6 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-faint mb-1">
            Try the tool
          </div>
          <div className="text-sm text-ink font-medium">
            {post.relatedTool.label}
          </div>
        </div>
        <Link href={post.relatedTool.href} className="btn-primary text-sm">
          Open →
        </Link>
      </div>
    </div>
  );
}
