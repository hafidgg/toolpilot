import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ToolPilot — corrections, feedback, and requests.",
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description: "Get in touch with ToolPilot — corrections, feedback, and requests.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Contact</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Get in touch
      </h1>
      <p className="mt-4 text-sm text-muted leading-relaxed">
        Found an inaccurate limit, a bug, or have a tool you&apos;d like to
        see added? We read every message.
      </p>

      <div className="mt-8 space-y-4">
        <div className="panel p-6">
          <div className="text-[11px] uppercase tracking-wider text-faint mb-1">
            Email
          </div>
          <a
            href="mailto:hello@your-domain.com"
            className="text-sm text-ink hover:text-accent transition-colors"
          >
            hello@your-domain.com
          </a>
          <p className="mt-1 text-xs text-faint">
            [Placeholder — replace with your real contact address before publishing]
          </p>
        </div>

        <div className="panel p-6">
          <div className="text-[11px] uppercase tracking-wider text-faint mb-1">
            What to include for a correction report
          </div>
          <p className="text-sm text-muted leading-relaxed">
            The tool or article URL, what you expected to see, and what the
            tool actually showed. This helps us verify and fix issues faster.
          </p>
        </div>
      </div>
    </div>
  );
}
