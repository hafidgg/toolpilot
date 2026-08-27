import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for ToolPilot.",
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
        Last updated: [DATE — fill in before publishing]
      </p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            No warranty on results
          </h2>
          <p>
            These tools are provided &quot;as is,&quot; without warranty of
            any kind. Platform specifications (character limits, image
            dimensions, truncation cutoffs) can change at any time — always
            verify against the platform&apos;s own current guidelines before
            relying on a result here for something important.
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
            other users.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Changes
          </h2>
          <p>
            [Placeholder — note that terms may be updated and how changes
            will be communicated.]
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
