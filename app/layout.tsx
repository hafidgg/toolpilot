import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.usetoolpilot.com"),
  title: {
    default: "ToolPilot — Free Tools for Content Creators",
    template: "%s | ToolPilot",
  },
  description:
    "Free, instant tools for content creators — character counters, YouTube helpers, hashtag formatters, and SEO utilities. No signup.",
  openGraph: {
    type: "website",
    siteName: "ToolPilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolPilot — Free Tools for Content Creators",
    description:
      "Free, instant tools for content creators — character counters, YouTube helpers, hashtag formatters, and SEO utilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "https://www.usetoolpilot.com/rss.xml",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ToolPilot",
  url: "https://www.usetoolpilot.com",
  description:
    "Free, browser-based tools for content creators — character counters, YouTube helpers, hashtag formatters, and SEO utilities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col`}
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
