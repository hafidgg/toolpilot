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

// Captured before inner dots became word separators; no inner dots here.
const PINNED_FILES_NO_INNER_DOTS: [string, string, string][] = [
  [".hidden", "hidden", ""],
  ["trailing.", "trailing", ""],
  ["Holiday Photo 2026.jpeg", "holiday-photo-2026.jpeg", "jpeg"],
];

describe("optimizeFileName pinned outputs (no inner dots)", () => {
  it.each(PINNED_FILES_NO_INNER_DOTS)("%j", (input, optimized, extension) => {
    expect(optimizeFileName(input)).toEqual({ optimized, extension });
  });
});

describe("inner dots in file names are word separators", () => {
  it.each([
    ["archive.tar.gz", "archive-tar.gz", "gz"],
    ["v1.2-notes.pdf", "v1-2-notes.pdf", "pdf"],
    ["a.b.c.JPG", "a-b-c.jpg", "jpg"],
    ["my..file.txt", "my-file.txt", "txt"],
    ["..double..dots..png", "double-dots.png", "png"],
  ])("%j", (input, optimized, extension) => {
    expect(optimizeFileName(input)).toEqual({ optimized, extension });
  });

  it("leaves slugify unchanged", () => {
    expect(slugify("v1.2 notes")).toBe("v12-notes");
  });
});

describe("optimizeFileName extension rule (1-5 letters or digits)", () => {
  it.each([
    ["v1.2 notes", "v1-2-notes", ""],
    ["report.final.PDF", "report-final.pdf", "pdf"],
    ["photo.jpeg", "photo.jpeg", "jpeg"],
    ["archive.tar.gz", "archive-tar.gz", "gz"],
    ["no extension", "no-extension", ""],
    ["file.", "file", ""],
    [".hidden", "hidden", ""],
    ["file.toolongext", "file-toolongext", ""],
    ["draft.v2 final", "draft-v2-final", ""],
    ["clip.MP4", "clip.mp4", "mp4"],
    ["notes.a_b", "notes-a-b", ""],
  ])("%j", (input, optimized, extension) => {
    expect(optimizeFileName(input)).toEqual({ optimized, extension });
  });
});
