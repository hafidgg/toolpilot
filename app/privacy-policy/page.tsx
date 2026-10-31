import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ToolPilot handles data and cookies.",
  alternates: { canonical: "/privacy-policy" },
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
        Last updated: October 31, 2026
      </p>

      <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Who we are
          </h2>
          <p>
            ToolPilot (usetoolpilot.com) is operated by Gougua Hafid, based in
            Morocco. In this policy, &quot;we&quot; and &quot;us&quot; refer
            to the operator of ToolPilot. You can reach us at{" "}
            <a href="mailto:contact@usetoolpilot.com" className="text-accent hover:underline">
              contact@usetoolpilot.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            No accounts
          </h2>
          <p>
            ToolPilot has no user accounts, sign-up forms, newsletters, or
            comments. We don&apos;t ask for your name, email address, or other
            contact details to use any tool. If you email us, we receive
            whatever you include in your message and use it only to reply.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Tool data
          </h2>
          <p>
            The text, keywords, and URLs you enter into almost every tool on
            this site are processed entirely in your browser using
            JavaScript. They are not sent to or stored on our servers.
          </p>
          <p className="mt-3">
            The one exception is the Open Graph Preview tool. The URL you
            enter there is sent to our server, which fetches that page and
            reads its meta tags. Our code does not save the URLs you submit,
            but, like any web request, the request may appear in our hosting
            provider&apos;s logs (see below). Your IP address is also kept
            briefly in memory to limit how many requests can be made per
            minute. The preview image is then loaded directly from the site
            you entered, so that site receives a normal request from your
            browser.
          </p>
          <p className="mt-3">
            Links produced by tools such as the YouTube Thumbnail Downloader
            point to YouTube&apos;s own servers. Nothing is requested from
            YouTube unless you open one of those links.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Analytics
          </h2>
          <p>
            We use Google Analytics 4, a service provided by Google, to
            understand how the site is used: for example, which pages are
            visited, how visitors arrive, and how long they stay. Google
            Analytics collects usage data, device and browser information, and
            an approximate location derived from your IP address. It uses
            cookies and similar identifiers to distinguish visitors.
          </p>
          <p className="mt-3">
            Google processes this data under its own terms. See{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses information from sites that use its services
            </a>
            . You can opt out of Google Analytics on all websites by
            installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
          <p className="mt-3">ToolPilot does not currently display advertising.</p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Cookies and local storage
          </h2>
          <p>
            ToolPilot itself does not set cookies. The cookies on this site
            come from Google Analytics, as described above. You can block or
            delete cookies in your browser settings.
          </p>
          <p className="mt-3">
            To show your &quot;recently used&quot; tools, the site saves the
            names of the last few tools you opened in your browser&apos;s
            local storage. This list stays on your device and is never sent to
            us. Clearing your browser&apos;s site data removes it.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Hosting
          </h2>
          <p>
            The site is hosted by Vercel. As with any web host, Vercel
            processes technical request information, such as IP address,
            browser user agent, and the page requested, in order to deliver
            the site and keep it secure. See{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Your rights
          </h2>
          <p>
            Depending on where you live, you may have rights over your
            personal data, such as the right to access, correct, or delete it,
            or to object to its processing. If you are in the European
            Economic Area or the United Kingdom, these rights come from the
            GDPR or UK GDPR. Moroccan data protection law (Law No. 09-08) also
            applies to us as a Morocco-based operator. Because we don&apos;t
            run accounts, most data about your visit is held by Google
            Analytics rather than by us. To make a request, email us and we
            will help where we can.
          </p>
        </section>

        <section>
          <h2 className="text-ink font-display font-semibold text-base mb-2">
            Changes to this policy
          </h2>
          <p>
            We will update this policy when the site changes, for example if
            we add new services. The date at the top shows when it was last
            revised.
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
