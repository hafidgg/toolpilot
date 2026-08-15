import type { Metadata } from "next";
import YoutubeThumbnailDownloader from "@/components/calculators/YoutubeThumbnailDownloader";
import Faq from "@/components/Faq";
import ToolPageHeader from "@/components/ToolPageHeader";
import RelatedTools from "@/components/RelatedTools";
import RelatedGuide from "@/components/RelatedGuide";
import HowToUse from "@/components/HowToUse";
import Examples from "@/components/Examples";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader — All Resolutions",
  description:
    "Paste any YouTube link to get direct links to every available thumbnail resolution, from 120×90 up to 1280×720.",
  alternates: { canonical: "/tools/youtube-thumbnail-downloader" },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Thumbnail Downloader — All Resolutions",
    description: "Paste any YouTube link to get direct links to every available thumbnail resolution, from 120×90 up to 1280×720.",
  },
};

const howToSteps = [
  { text: "Copy any YouTube video URL (watch link, youtu.be link, or Shorts link)." },
  { text: "Paste it into the box." },
  { text: "The tool builds direct links to every available thumbnail resolution automatically." },
  { text: "Click any resolution to open or save that image." },
];

const exampleItems = [
  {
    title: "Finding a video's high-res thumbnail",
    description:
      "Paste a watch URL to get the 1280×720 maxresdefault link, useful for reference or reuse where you have rights to the image.",
  },
  {
    title: "Checking available thumbnail sizes",
    description:
      "See all five resolutions YouTube generates at once, from 120×90 up to 1280×720.",
  },
  {
    title: "Getting a thumbnail from a Shorts link",
    description:
      "Works with youtube.com/shorts/ links the same way it works with standard watch URLs.",
  },
];

const faqItems = [
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, completely free with no signup and no limit on how many thumbnails you can look up.",
  },
  {
    question: "Is this against YouTube's terms of service?",
    answer:
      "Thumbnail images are served from YouTube's own public image CDN at a predictable URL pattern based on video ID — this tool simply builds that URL for you. Reusing someone else's thumbnail image for your own content may still raise copyright concerns, so use this responsibly.",
  },
  {
    question: "Why doesn't maxresdefault work for some videos?",
    answer:
      "Not every video has a 1280×720 maxresdefault thumbnail generated — older or lower-resolution uploads may only have the smaller sizes available. Try the next size down if the top link doesn't load.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes — paste a link from the YouTube app's share menu directly into this tool on your phone's browser.",
  },
];

export default function YoutubeThumbnailDownloaderPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <ToolPageHeader
        category="YouTube Tools"
        categoryHref="/categories/youtube-tools"
        title="YouTube Thumbnail Downloader"
      >
        Paste any YouTube video link to get direct links to its thumbnail
          at every available resolution.
      </ToolPageHeader>

      <div className="mt-10">
        <YoutubeThumbnailDownloader />
      </div>

      <article className="mt-20 max-w-2xl">
        <h2 className="h2-section mb-4">What is a YouTube thumbnail downloader?</h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A YouTube thumbnail downloader extracts the video ID from a
            YouTube link and builds direct links to that video&apos;s
            thumbnail image at every resolution YouTube generates, from a
            small 120×90 preview up to the full 1280×720 version — without
            needing an API key or YouTube account.
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
          <p>This tool builds thumbnail URLs directly from the video ID pattern — it doesn&apos;t verify with YouTube that the video actually exists or is public, so an invalid or private video ID will produce links that don&apos;t load.</p>
          <p>Not every video has a maxresdefault (1280×720) image. Very old or low-resolution uploads may only have the smaller thumbnail sizes available.</p>
        </div>
      </div>

      <div className="mt-20 max-w-2xl">
        <RelatedTools categorySlug="youtube-tools" currentSlug="youtube-thumbnail-downloader" />
      </div>
      <div className="mt-6 max-w-2xl">
        <RelatedGuide href="/blog/find-youtube-video-id-and-thumbnail" title="How to Find Any YouTube Video's ID and Thumbnail URL" type="article" />
      </div>
    </div>
  );
}
