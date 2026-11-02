import { describe, expect, it } from "vitest";
import { extractYoutubeVideoId } from "../youtube-tools";
import { optimizeFileName } from "../seo-calculations";
import { checkPinterestPin, splitIntoThread } from "../content-calculations";

// Outputs captured before the step-1g fixes. Inputs the fixes do not target
// must keep producing exactly these.

const ID = "dQw4w9WgXcQ";

describe("extractYoutubeVideoId pinned outputs", () => {
  it.each([
    [ID, ID],
    [`  ${ID}  `, ID],
    [`https://www.youtube.com/watch?v=${ID}`, ID],
    [`https://youtube.com/watch?v=${ID}&t=42s`, ID],
    [`https://m.youtube.com/watch?v=${ID}`, ID],
    [`https://music.youtube.com/watch?v=${ID}&list=RD`, ID],
    [`youtube.com/watch?v=${ID}`, ID],
    [`www.youtube.com/watch?v=${ID}`, ID],
    [`https://youtu.be/${ID}`, ID],
    [`https://youtu.be/${ID}?si=abc123`, ID],
    [`https://youtu.be/${ID}?t=42`, ID],
    [`youtu.be/${ID}`, ID],
    [`https://www.youtube.com/shorts/${ID}`, ID],
    [`https://www.youtube.com/shorts/${ID}/`, ID],
    [`https://www.youtube.com/embed/${ID}`, ID],
    [`https://www.youtube.com/embed/${ID}?start=10`, ID],
    [`https://www.youtube.com/live/${ID}`, ID],
    [`https://www.youtube.com/live/${ID}?feature=share`, ID],
    [`https://www.youtube.com/watch?v=${ID}#t=42`, ID],
    // Longer v= value: the first 11 ID characters have always been returned.
    [`https://www.youtube.com/watch?v=${ID}extra`, ID],
    ["", null],
    ["   ", null],
    ["https://www.youtube.com/", null],
    ["https://www.youtube.com/watch", null],
    ["https://www.youtube.com/watch?v=short", null],
    [`https://vimeo.com/watch?v=${ID}`, null],
    [`https://example.com/?v=${ID}`, null],
    ["not a url", null],
    ["https://www.youtube.com/@channel", null],
    ["dQw4w9WgXc", null],
    ["dQw4w9WgXcQQ", null],
    [`https://youtube.com.evil.com/watch?v=${ID}`, null],
  ])("%j -> %j", (input, expected) => {
    expect(extractYoutubeVideoId(input)).toBe(expected);
  });
});

describe("optimizeFileName pinned outputs", () => {
  it.each([
    ["report.final.PDF", "report-final.pdf", "pdf"],
    ["photo.jpeg", "photo.jpeg", "jpeg"],
    ["archive.tar.gz", "archive-tar.gz", "gz"],
    ["no extension", "no-extension", ""],
    ["file.", "file", ""],
    [".hidden", "hidden", ""],
    ["IMG_4821 Orange Tabby Cat.JPG", "img-4821-orange-tabby-cat.jpg", "jpg"],
    ["My Photo.PNG", "my-photo.png", "png"],
    ["résumé 2026.docx", "resume-2026.docx", "docx"],
    ["a.b.c", "a-b.c", "c"],
    ["x.mp4", "x.mp4", "mp4"],
    ["Screenshot 2026-01-01 at 10.30.45.png", "screenshot-2026-01-01-at-10-30-45.png", "png"],
    ["version 2.0", "version-2.0", "0"],
    ["data.7z", "data.7z", "7z"],
    ["song.mp3", "song.mp3", "mp3"],
    ["..", "", ""],
    ["name.tar.gz2", "name-tar.gz2", "gz2"],
  ])("%j", (input, optimized, extension) => {
    expect(optimizeFileName(input)).toEqual({ optimized, extension });
  });
});

describe("splitIntoThread pinned outputs (ASCII text)", () => {
  const words = (n: number) => Array.from({ length: n }, (_, i) => `word${i}`).join(" ");

  it("returns nothing for empty text", () => {
    expect(splitIntoThread("")).toEqual([]);
  });
  it("keeps short text in one post", () => {
    expect(splitIntoThread("hello world")).toEqual(["hello world (1/1)"]);
  });
  it.each([
    [60, [275, 145]],
    [150, [275, 278, 272, 277, 13]],
  ])("%i words -> post lengths %j", (n, lengths) => {
    expect(splitIntoThread(words(n)).map((p) => p.length)).toEqual(lengths);
  });
});

describe("checkPinterestPin pinned title behavior", () => {
  it.each([
    [0, "good"],
    [100, "good"],
    [101, "too-long"],
  ])("title of %i characters is %s", (n, status) => {
    const r = checkPinterestPin("x".repeat(n), "");
    expect(r.titleLength).toBe(n);
    expect(r.titleStatus).toBe(status);
  });
});
