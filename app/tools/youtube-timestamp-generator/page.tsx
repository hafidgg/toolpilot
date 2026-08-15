import type { Metadata } from "next";
import YoutubeTimestampGenerator from "@/components/calculators/YoutubeTimestampGenerator";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "YouTube Timestamp Link Generator",
  description:
    "Turn a YouTube URL and a timestamp into a direct link that jumps straight to that moment in the video.",
  alternates: { canonical: "/tools/youtube-timestamp-generator" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Timestamp Link Generator",
    description: "Turn a YouTube URL and a timestamp into a direct link that jumps straight to that moment in the video.",
  },
};

const faqItems = [
  {
    question: "How does the timestamp parameter work?",
    answer:
      "YouTube supports a &t= (or ?t=) parameter in the URL, expressed in seconds, that tells the player to start at that point when the link is opened.",
  },
  {
    question: "Can I use hours in the timestamp?",
    answer:
      "Yes — enter the time as hh:mm:ss (for example, 1:15:30) and it will be converted to the correct number of seconds automatically.",
  },
];

export default function YoutubeTimestampGeneratorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Timestamp Link Generator"
      >
        Share the exact moment in a video — paste a URL and a timestamp to
          get a direct link.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeTimestampGenerator />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-timestamp-generator" />
      </div>
    </div>
  );
}
