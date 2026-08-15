import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { categories, getAllTools } from "@/lib/tools-data";
import { guides } from "@/lib/guides";

const BASE_URL = "https://your-domain.com";

const COMPARE_SLUGS = [
  "character-counter-vs-word-counter",
  "youtube-title-vs-description",
  "emoji-counter-vs-character-counter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/privacy-policy",
    "/terms",
    "/blog",
    "/guides",
    "/search",
    "/editorial-policy",
    "/how-we-test",
    "/contact",
    "/changelog",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));

  const toolEntries: MetadataRoute.Sitemap = getAllTools().map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const compareEntries: MetadataRoute.Sitemap = COMPARE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...toolEntries,
    ...categoryEntries,
    ...guideEntries,
    ...compareEntries,
    ...postEntries,
  ];
}
