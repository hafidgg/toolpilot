import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What's new on ToolPilot — tools added, articles published, and site updates.",
  twitter: {
    card: "summary_large_image",
    title: "Changelog",
    description: "What's new on ToolPilot — tools added, articles published, and site updates.",
  },
};

interface ChangelogEntry {
  date: string;
  title: string;
  items: string[];
}

const entries: ChangelogEntry[] = [
  {
    date: "2026-08-02",
    title: "10 more tools, blog launch",
    items: [
      "Added Text Diff Checker, Duplicate Line Remover, Find and Replace Tool, Word Frequency Counter",
      "Added YouTube Thumbnail Downloader, YouTube Video ID Extractor, YouTube Timestamp Link Generator, YouTube Channel ID Finder",
      "Added Bio Character Counter, Pinterest Pin Description Checker, Twitter/X Thread Splitter",
      "Added Open Graph Tag Generator, FAQ Schema Generator, Readability Checker, Robots.txt Generator",
      "Published 5 new blog articles",
      "Added Editorial Policy, How We Test Our Tools, and Contact pages",
    ],
  },
  {
    date: "2026-07-15",
    title: "Site relaunch as a creator toolkit",
    items: [
      "Refocused the site entirely on content-creator tools",
      "Added 4 dynamic category pages with FAQ sections",
      "Added 3 tool comparison pages",
      "Added a full blog system with dedicated article pages",
    ],
  },
  {
    date: "2026-06-20",
    title: "Initial launch",
    items: [
      "Launched with Character Counter, Emoji Counter, Hashtag Formatter, and YouTube Title Checker",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <span className="eyebrow">Updates</span>
      <h1 className="mt-3 text-3xl font-display font-semibold text-ink">
        Changelog
      </h1>
      <p className="mt-4 text-sm text-muted leading-relaxed">
        A running record of tools, articles, and site updates.
      </p>

      <div className="mt-10 space-y-10">
        {entries.map((entry) => (
          <div key={entry.date}>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-faint">{entry.date}</span>
              <h2 className="text-base font-display font-semibold text-ink">
                {entry.title}
              </h2>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted list-disc list-inside">
              {entry.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
