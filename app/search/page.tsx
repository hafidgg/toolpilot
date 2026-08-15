import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across every tool, guide, and article on ToolPilot.",
  twitter: {
    card: "summary_large_image",
    title: "Search",
    description: "Search across every tool, guide, and article on ToolPilot.",
  },
};

export default function SearchPage() {
  return <SearchClient />;
}
