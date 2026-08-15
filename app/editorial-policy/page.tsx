import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "How ToolPilot decides what to publish and how accuracy is maintained.",
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy",
    description: "How ToolPilot decides what to publish and how accuracy is maintained.",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Trust</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Editorial Policy
      </h1>
      <p className="mt-2 text-xs text-faint font-mono">
        Last updated: [DATE — fill in before publishing]
      </p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            What we publish
          </h2>
          <p>
            ToolPilot publishes two kinds of content: free browser-based
            tools, and articles that explain how to use them or the
            underlying concept behind them (character limits, readability,
            metadata, and similar topics). We don&apos;t publish sponsored
            posts, paid placements, or content written to promote a specific
            third-party product or service.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            How we source platform specifications
          </h2>
          <p>
            Character limits, image dimensions, and similar technical
            specifications referenced in our tools and articles are based
            on each platform&apos;s publicly documented guidelines at the
            time of writing. Platforms change these specifications without
            notice — if you find a limit that appears outdated, we welcome
            reports through our{" "}
            <a href="/contact" className="text-accent hover:underline">
              contact page
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Corrections
          </h2>
          <p>
            When we identify an error in a published article or a tool&apos;s
            underlying logic, we correct it as soon as practical and note
            the update date on the affected page. We don&apos;t silently
            alter factual claims after publication without a visible update
            marker.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Independence
          </h2>
          <p>
            ToolPilot is independently operated and not owned by, or
            affiliated with, any of the platforms referenced in our tools
            and articles (YouTube, Instagram, TikTok, LinkedIn, X,
            Pinterest, and others).
          </p>
        </section>
      </div>
    </div>
  );
}
