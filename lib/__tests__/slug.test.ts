import { describe, expect, it } from "vitest";
import { optimizeFileName, slugify } from "../seo-calculations";

// Outputs captured before underscores became word separators; inputs without
// underscores must keep producing exactly these.
const PINNED_SLUGS: [string, string][] = [
  ["How to Calculate Position Size (With Examples)!", "how-to-calculate-position-size-with-examples"],
  ["Café Menu Ideas for 2026", "cafe-menu-ideas-for-2026"],
  ["Café Menu: 10 Best Crème Brûlée Recipes (2026)!", "cafe-menu-10-best-creme-brulee-recipes-2026"],
  ["  --Hello -- World--  ", "hello-world"],
  ["a   b\tc\nd", "a-b-c-d"],
  ["Ünïcödé & Symbols #1 @home", "unicode-symbols-1-home"],
  ["already-a-slug", "already-a-slug"],
  ["", ""],
  ["!!!", ""],
  ["C++ vs. C# — 2026", "c-vs-c-2026"],
];

const PINNED_FILES: [string, string, string][] = [
  ["IMG 4821 Orange Tabby Cat.JPG", "img-4821-orange-tabby-cat.jpg", "jpg"],
  ["My Photo (Final).PNG", "my-photo-final.png", "png"],
  ["archive.tar.gz", "archivetar.gz", "gz"],
  [".htaccess", "htaccess", ""],
  ["noext", "noext", ""],
  ["trailingdot.", "trailingdot", ""],
  ["Résumé 2026.pdf", "resume-2026.pdf", "pdf"],
  ["IMG-4821.jpeg", "img-4821.jpeg", "jpeg"],
];

describe("slugify pinned outputs (no underscores)", () => {
  it.each(PINNED_SLUGS)("%j", (input, expected) => {
    expect(slugify(input)).toBe(expected);
  });
});

describe("optimizeFileName pinned outputs (no underscores)", () => {
  it.each(PINNED_FILES)("%j", (input, optimized, extension) => {
    expect(optimizeFileName(input)).toEqual({ optimized, extension });
  });
});

describe("underscores are word separators", () => {
  it("converts underscore-only separators to hyphens", () => {
    expect(slugify("my_product_page")).toBe("my-product-page");
  });

  it("handles underscores mixed with spaces and hyphens", () => {
    expect(slugify("my_product_page final")).toBe("my-product-page-final");
    expect(slugify("a _ b-_c")).toBe("a-b-c");
  });

  it("trims leading and trailing underscores", () => {
    expect(slugify("__draft_post__")).toBe("draft-post");
  });

  it("collapses double underscores to one hyphen", () => {
    expect(slugify("summer__sale")).toBe("summer-sale");
  });

  it("applies to file names and keeps the extension", () => {
    expect(optimizeFileName("img_4821_orange_tabby_cat.JPG")).toEqual({
      optimized: "img-4821-orange-tabby-cat.jpg",
      extension: "jpg",
    });
    expect(optimizeFileName("IMG_4821 Orange Tabby Cat.JPG").optimized).toBe(
      "img-4821-orange-tabby-cat.jpg"
    );
  });
});
