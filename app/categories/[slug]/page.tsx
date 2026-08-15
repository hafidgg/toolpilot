import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/tools-data";
import Faq from "@/components/Faq";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
    openGraph: {
      title: category.label,
      description: category.description,
      type: "website",
      url: `/categories/${category.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: category.label,
      description: category.description,
    },
  };
}

const CATEGORY_TO_GUIDE: Record<string, string> = {
  "text-tools": "text-tools-guide",
  "youtube-tools": "youtube-tools-guide",
  "social-media-tools": "social-media-tools-guide",
  "seo-web-tools": "seo-tools-guide",
};

const CATEGORY_FAQ: Record<string, { question: string; answer: string }[]> = {
  "text-tools": [
    {
      question: "Are these tools free to use?",
      answer: "Yes, every tool on ToolPilot is free with no signup required.",
    },
    {
      question: "Is my text saved or sent anywhere?",
      answer:
        "No — all of these tools run entirely in your browser. Nothing you type is transmitted to a server.",
    },
  ],
  "youtube-tools": [
    {
      question: "Do these tools connect to my YouTube account?",
      answer:
        "No — none of these tools require a YouTube login or access to your channel. You paste in text or an image and get results instantly.",
    },
    {
      question: "How often do YouTube's limits change?",
      answer:
        "Character limits and thumbnail specs are generally stable, but YouTube does update them occasionally. If a tool's guidance seems off, check YouTube's official Creator help pages.",
    },
  ],
  "social-media-tools": [
    {
      question: "Do character limits change often?",
      answer:
        "Platforms occasionally adjust limits — X notably expanded its character limit for some account tiers. These tools reflect the standard limits at the time of writing.",
    },
    {
      question: "Can I use these for business accounts?",
      answer:
        "Yes — the character limits and formatting conventions apply the same way to personal and business accounts on each platform.",
    },
  ],
  "seo-web-tools": [
    {
      question: "Do I need technical SEO knowledge to use these?",
      answer:
        "No — each tool is designed to give you a clear pass/fail or a ready-to-use output without requiring background knowledge.",
    },
    {
      question: "Will these tools guarantee better search rankings?",
      answer:
        "No tool can guarantee rankings. These utilities help you follow known best practices (length limits, clean URLs, proper tagging) that remove easy, avoidable mistakes.",
    },
  ],
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const faqItems = CATEGORY_FAQ[category.slug] ?? [];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <Breadcrumbs items={[{ label: category.label }]} />
        <span className="eyebrow">Category</span>
        <h1 className="mt-3 h1-page">
          {category.label}
        </h1>
        <p className="mt-4 text-muted leading-relaxed">{category.description}</p>
        <Link
          href={`/guides/${CATEGORY_TO_GUIDE[category.slug]}`}
          className="btn-secondary mt-4 !inline-flex text-sm"
        >
          Read the complete guide →
        </Link>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {category.tools.map((tool, i) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group panel panel-interactive p-6 "
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all">
                →
              </span>
            </div>
            <h3 className="mt-4 text-lg font-display font-semibold text-ink">
              {tool.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {tool.shortDescription}
            </p>
          </Link>
        ))}
      </div>

      {faqItems.length > 0 && (
        <div className="mt-20 max-w-2xl">
          <h2 className="h2-section mb-4">
            Frequently asked questions
          </h2>
          <Faq items={faqItems} />
        </div>
      )}
    </div>
  );
}
