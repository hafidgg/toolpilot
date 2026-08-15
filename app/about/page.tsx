import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What ToolPilot is, who it's built for, and what we're trying to do.",
  twitter: {
    card: "summary_large_image",
    title: "About",
    description: "What ToolPilot is, who it's built for, and what we're trying to do.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">About</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Simple tools, done properly.
      </h1>
      <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
        <p>
          ToolPilot is a small set of free, browser-based tools for content
          creators — checking character limits, formatting captions,
          cleaning up YouTube metadata, and handling the small technical
          details of publishing. No accounts, no upsells.
        </p>
        <p>
          Everything on this site runs client-side in your browser. Nothing
          you type into a tool is sent to a server or stored anywhere,
          except the Open Graph Preview tool, which fetches the public page
          you ask it to check.
        </p>
      </div>

      <h2 className="mt-10 text-xl font-display font-semibold text-ink">
        Our mission
      </h2>
      <div className="mt-4 space-y-4 text-sm text-muted leading-relaxed">
        <p>
          Most tool sites bury a simple calculation behind ads, forced
          signups, or a UI built to maximize time-on-page rather than get
          you an answer. Our goal is the opposite: get you a correct answer
          as fast as possible, explain the reasoning behind it when that&apos;s
          useful, and stay out of your way otherwise.
        </p>
        <p>
          We&apos;d rather have fewer tools that work correctly and stay
          maintained than a long list padded out for search rankings. See{" "}
          <a href="/how-we-test" className="text-accent hover:underline">
            how we test our tools
          </a>{" "}
          and our{" "}
          <a href="/editorial-policy" className="text-accent hover:underline">
            editorial policy
          </a>{" "}
          for more on how we try to keep that promise.
        </p>
      </div>

      <div className="mt-10 text-sm text-muted leading-relaxed">
        <p>
          This site is independently run and is not affiliated with
          YouTube, Instagram, TikTok, LinkedIn, X, Pinterest, or any other
          platform referenced in these tools.
        </p>
      </div>
    </div>
  );
}
