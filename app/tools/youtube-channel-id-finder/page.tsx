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
      "A handle (like @mkbhd) is the short name YouTube says \"will also automatically become the new YouTube URL for your channel\", and it can be changed. The channel ID is what YouTube and its Data API use to identify the channel.",
  },
  {
    question: "Does this look up the actual channel ID from a handle?",
    answer:
      "No. It only reads the identifier that's already in the link you paste, and makes no request to YouTube. A handle link gives you the handle, not the channel ID.",
  },
  {
    question: "What does it return for each kind of link?",
    answer:
      "A youtube.com/@name link or a bare @name returns the handle. A /channel/ link returns the channel ID in it (we recognize IDs as \"UC\" followed by 22 characters, our pattern rather than a documented rule). A /c/ link returns the custom URL name, and a /user/ link the legacy username. Anything else is shown as an unrecognized format.",
  },
  {
    question: "Where do I find my own channel ID?",
    answer:
      "In YouTube's settings. YouTube Help says: \"You can see your channel's user and channel IDs in your advanced account settings on a computer or mobile browser.\"",
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
        Paste a channel link to read the handle, channel ID, custom URL
          or username that&apos;s in it. It doesn&apos;t look up the ID behind a
          handle.
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
