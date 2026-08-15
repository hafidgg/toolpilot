import type { Metadata } from "next";
import YoutubeVideoIdExtractor from "@/components/calculators/YoutubeVideoIdExtractor";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "YouTube Video ID Extractor",
  description:
    "Extract the 11-character video ID from any YouTube URL format — watch links, youtu.be, shorts, or embeds.",
  alternates: { canonical: "/tools/youtube-video-id-extractor" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video ID Extractor",
    description: "Extract the 11-character video ID from any YouTube URL format — watch links, youtu.be, shorts, or embeds.",
  },
};

const howToSteps = [
  { text: "Copy a YouTube link in any format (watch, youtu.be, embed, or Shorts)." },
  { text: "Paste it into the box." },
  { text: "The 11-character video ID appears instantly." },
  { text: "Copy the ID with the Copy button." },
];

const exampleItems = [
  {
    title: "Standard watch URL",
    input: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    output: "dQw4w9WgXcQ",
  },
  {
    title: "Short youtu.be link",
    input: "https://youtu.be/dQw4w9WgXcQ",
    output: "dQw4w9WgXcQ",
  },
  {
    title: "Shorts link",
    input: "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    output: "dQw4w9WgXcQ",
  },
];

const faqItems = [
  {
    question: "What formats does this support?",
    answer:
      "Standard watch URLs, youtu.be short links, embed URLs, Shorts links, and live stream links — this tool checks all of them for the 11-character video ID.",
  },
  {
    question: "What is a YouTube video ID used for?",
    answer:
      "It's the unique identifier YouTube assigns to every video, used in embed codes, the YouTube Data API, and thumbnail URLs.",
  },
  {
    question: "Is this tool free?",
    answer:
      "Yes, completely free with no signup required.",
  },
  {
    question: "Is my link stored or sent anywhere?",
    answer:
      "No — the extraction happens entirely in your browser using JavaScript. Nothing you paste is sent to a server.",
  },
];

export default function YoutubeVideoIdExtractorPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Video ID Extractor"
      >
        Paste any YouTube link to pull out the underlying video ID.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeVideoIdExtractor />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a YouTube video ID?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Every YouTube video has a unique 11-character ID, regardless of
            which URL format links to it. Developers and creators extract
            it for embedding videos, querying the YouTube Data API, and
            building thumbnail URLs — this tool pulls it out of any link
            format automatically instead of you having to spot it manually.
          </p>
        </div>
      </article>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">How to use it</h2>
        <HowToUse steps={howToSteps} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Examples</h2>
        <Examples items={exampleItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">
          Frequently asked questions
        </h2>
        <Faq items={faqItems} />
      </div>

      <div className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">Limitations</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>This tool checks whether the input matches YouTube&apos;s known URL and ID patterns — it doesn&apos;t verify against YouTube that the video actually exists.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-video-id-extractor" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/find-youtube-video-id-and-thumbnail" title="How to Find Any YouTube Video's ID and Thumbnail URL" type="article" />
      </div>
    </div>
  );
}
