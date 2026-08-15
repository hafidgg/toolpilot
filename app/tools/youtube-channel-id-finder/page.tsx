import type { Metadata } from "next";
import YoutubeChannelIdFinder from "@/components/calculators/YoutubeChannelIdFinder";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "YouTube Channel ID Finder",
  description:
    "Extract the handle, channel ID, or custom URL slug from any YouTube channel link.",
  alternates: { canonical: "/tools/youtube-channel-id-finder" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Channel ID Finder",
    description: "Extract the handle, channel ID, or custom URL slug from any YouTube channel link.",
  },
};

const faqItems = [
  {
    question: "What's the difference between a handle and a channel ID?",
    answer:
      "A handle (like @mkbhd) is the modern, user-chosen identifier shown in a channel's URL. A channel ID (starting with UC) is the underlying, permanent identifier YouTube assigns internally — used by the YouTube Data API and some embed integrations.",
  },
  {
    question: "Does this look up the actual channel ID from a handle?",
    answer:
      "No — this tool extracts whatever identifier is present in the URL you paste. Converting a handle to its underlying UC-prefixed channel ID requires a YouTube Data API lookup, which this client-side tool doesn't perform.",
  },
];

export default function YoutubeChannelIdFinderPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Channel ID Finder"
      >
        Paste any channel link to extract its handle, channel ID, or
          custom URL slug.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeChannelIdFinder />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-channel-id-finder" />
      </div>
    </div>
  );
}
