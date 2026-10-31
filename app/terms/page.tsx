import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for ToolPilot.",
  alternates: { canonical: "/terms" },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service",
    description: "Terms of use for ToolPilot.",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Terms of Service
      </h1>
      <p className="mt-2 text-xs text-faint font-mono">
        Last updated: October 31, 2026
      </p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            About these terms
          </h2>
          <p>
            ToolPilot (usetoolpilot.com) is operated by Gougua Hafid, based in
            Morocco. By using this site you agree to these terms. If you
            don&apos;t agree, please don&apos;t use the site. The tools are
            free and provided for general informational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            No warranty on results
          </h2>
          <p>
            These tools are provided &quot;as is,&quot; without warranty of
            any kind. Platform specifications (character limits, image
            dimensions, truncation cutoffs) can change at any time — always
            verify against the platform&apos;s own current guidelines before
            relying on a result here for something important. To the extent
            permitted by law, we are not liable for any loss or damage arising
            from your use of the site or its results.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Not affiliated with any platform
          </h2>
          <p>
            ToolPilot is independently operated and is not affiliated with,
            endorsed by, or officially connected to YouTube, Instagram,
            TikTok, LinkedIn, X, or any other platform referenced in these
            tools.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Acceptable use
          </h2>
          <p>
            You agree not to misuse this site, attempt to disrupt its
            operation, or scrape it at a rate that degrades service for
            other users. You are responsible for the content you enter into
            the tools and for having the right to use any material, such as
            images or text, that you obtain through them.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Site content
          </h2>
          <p>
            The articles, guides, tool descriptions, and design of ToolPilot
            belong to its operator. You may link to and quote short excerpts
            with attribution, but please don&apos;t republish substantial
            parts of the site without permission. Results you generate with
            the tools are yours to use.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Changes
          </h2>
          <p>
            We may update these terms from time to time. Changes take effect
            when they are posted on this page, and the date at the top shows
            when they were last revised. Continuing to use the site after a
            change means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Governing law
          </h2>
          <p>
            These terms are governed by the laws of the Kingdom of Morocco.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Contact
          </h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:contact@usetoolpilot.com" className="text-accent hover:underline">
              contact@usetoolpilot.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
