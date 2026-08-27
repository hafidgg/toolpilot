import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ToolPilot handles data and cookies.",
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "How ToolPilot handles data and cookies.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Privacy Policy
      </h1>
      <p className="mt-2 text-xs text-faint font-mono">
        Last updated: [DATE — fill in before publishing]
      </p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Tool data
          </h2>
          <p>
            The text, keywords, and files you enter into most tools on this
            site are processed entirely in your browser using JavaScript.
            They are never transmitted to, or stored on, our servers.
          </p>
          <p className="mt-3">
            The one exception is the Open Graph Preview tool: the URL you
            enter there is sent to our server so it can fetch that page and
            read its meta tags. We don&apos;t log or store the URLs
            submitted.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Analytics and advertising
          </h2>
          <p>
            [Placeholder — update once you add Google Analytics and/or
            Google AdSense. Disclose what data these services collect, such
            as IP address, device information, and browsing behavior, and
            link to Google&apos;s own privacy policy. Example: &quot;We use
            Google AdSense to display ads and Google Analytics to understand
            site traffic. These services may use cookies and similar
            technologies to collect information about your visits to this
            and other websites.&quot;]
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Cookies
          </h2>
          <p>
            [Placeholder — list any cookies set by third-party services once
            integrated, and how users can opt out or manage preferences.]
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Contact
          </h2>
          <p>
            Questions about this policy can be sent to{" "}
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
