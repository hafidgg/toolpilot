import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/lib/guides";
import { getCategoryBySlug } from "@/lib/tools-data";
import { blogPosts } from "@/lib/blog-posts";
import Faq from "@/components/Faq";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `/guides/${guide.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = getCategoryBySlug(guide.categorySlug);
  const relatedPosts = category
    ? blogPosts.filter((post) => post.category === category.label)
    : [];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.publishedAt,
  };

  const tocItems = [
    ...guide.sections.map((s) => s.heading),
    ...(category ? ["Tool Directory"] : []),
    ...(relatedPosts.length > 0 ? ["Related Articles"] : []),
    "FAQ",
  ];

  const slugify = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: guide.title }]} />

      <span className="eyebrow">Guide</span>
      <h1 className="mt-3 h1-page">
        {guide.title}
      </h1>
      <p className="mt-4 text-muted leading-relaxed">{guide.description}</p>

      <nav className="mt-8 panel p-5">
        <div className="text-[11px] uppercase tracking-wider text-faint mb-3">
          On this page
        </div>
        <ul className="space-y-1.5">
          {tocItems.map((item) => (
            <li key={item}>
              <a
                href={`#${slugify(item)}`}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 space-y-4 text-sm text-muted leading-relaxed">
        {guide.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {guide.sections.map((section) => (
        <section key={section.heading} id={slugify(section.heading)} className="mt-12 scroll-mt-24">
          <h2 className="h2-section mb-4">
            {section.heading}
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            {section.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      ))}

      {category && (
        <section id="tool-directory" className="mt-12 scroll-mt-24">
          <h2 className="h2-section mb-4">
            Tool Directory
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {category.tools.map((tool) => (
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
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section id="related-articles" className="mt-12 scroll-mt-24">
          <h2 className="h2-section mb-4">
            Related Articles
          </h2>
          <div className="space-y-1">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block py-3 border-b border-line-soft text-sm text-ink hover:text-accent transition-colors"
              >
                {post.title} →
              </Link>
            ))}
          </div>
        </section>
      )}

      <section id="faq" className="mt-12 scroll-mt-24">
        <h2 className="h2-section mb-4">
          FAQ
        </h2>
        <Faq items={guide.faq} />
      </section>
    </div>
  );
}
