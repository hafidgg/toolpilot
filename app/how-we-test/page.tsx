import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Test Our Tools",
  description: "How each tool on ToolPilot is verified before and after publishing.",
  twitter: {
    card: "summary_large_image",
    title: "How We Test Our Tools",
    description: "How each tool on ToolPilot is verified before and after publishing.",
  },
};

export default function HowWeTestPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Trust</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        How We Test Our Tools
      </h1>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Before a tool is published
          </h2>
          <p>
            Every calculation a tool performs is checked against known,
            hand-verified examples before it goes live — for instance, a
            character counter is tested against text of a known, manually
            counted length, and a readability checker is tested against
            text with a previously published Flesch score to confirm the
            formula implementation matches.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Where the numbers come from
          </h2>
          <p>
            Tools that reference a platform&apos;s limits (character counts,
            image dimensions, truncation cutoffs) are built from that
            platform&apos;s publicly documented specifications. Where a
            platform doesn&apos;t publish an exact number — like the
            approximate character count before a caption folds behind
            &quot;more&quot; — we note that the figure is an approximation
            based on observed behavior, not an official published limit.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            After publishing
          </h2>
          <p>
            Platform specifications change periodically. When we become
            aware that a limit has changed — through our own review or a
            report from a visitor — we update the tool and note the change.
            We don&apos;t claim perfect real-time accuracy against every
            platform update; treat these tools as a fast, convenient
            reference, and verify against the platform&apos;s own current
            guidelines for anything business-critical.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Found something wrong?
          </h2>
          <p>
            If a tool gives you a result that doesn&apos;t match what you
            see on a platform, please let us know through our{" "}
            <a href="/contact" className="text-accent hover:underline">
              contact page
            </a>
            . Reports like this are how these tools stay accurate over time.
          </p>
        </section>
      </div>
    </div>
  );
}
