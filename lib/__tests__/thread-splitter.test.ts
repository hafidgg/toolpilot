import { describe, expect, it } from "vitest";
import { charCount, splitIntoThread } from "../content-calculations";

// Chunks hold up to 272 characters (280 minus 8 reserved for " (n/m)").

describe("splitIntoThread counts characters with charCount", () => {
  it("counts an emoji as one character, not two", () => {
    // 68 words of "😀😀😀" joined by spaces: 271 characters, 475 UTF-16 units.
    const text = Array(68).fill("😀😀😀").join(" ");
    expect(charCount(text)).toBe(271);
    expect(text.length).toBe(475);
    expect(splitIntoThread(text)).toEqual([`${text} (1/1)`]);
  });

  it("splits emoji text once it passes 272 characters", () => {
    const text = Array(69).fill("😀😀😀").join(" "); // 275 characters
    const posts = splitIntoThread(text);
    expect(posts).toHaveLength(2);
    expect(posts.every((p) => charCount(p) <= 280)).toBe(true);
  });

  it("counts precomposed accented letters as one character each", () => {
    const text = Array(54).fill("café!").join(" "); // 54*5 + 53 = 323
    const posts = splitIntoThread(text);
    expect(posts.map(charCount)).toEqual([275, 59]);
  });

  it("keeps text that ends exactly at the 272-character chunk limit in one post", () => {
    const text = `${"a".repeat(135)} ${"b".repeat(135)}.`; // 272 characters
    expect(charCount(text)).toBe(272);
    expect(splitIntoThread(text)).toEqual([`${text} (1/1)`]);
  });

  it("moves the last word to a second post one character past the limit", () => {
    const text = `${"a".repeat(135)} ${"b".repeat(136)}.`; // 273 characters
    expect(splitIntoThread(text)).toEqual([`${"a".repeat(135)} (1/2)`, `${"b".repeat(136)}. (2/2)`]);
  });
});

describe("splitIntoThread hard-splits words longer than a post", () => {
  it("cuts a 300-character word into 272 + 28", () => {
    const word = "a".repeat(300);
    expect(splitIntoThread(word)).toEqual([`${"a".repeat(272)} (1/2)`, `${"a".repeat(28)} (2/2)`]);
  });

  it("keeps a 272-character word whole", () => {
    const word = "b".repeat(272);
    expect(splitIntoThread(word)).toEqual([`${word} (1/1)`]);
  });

  it("cuts a 273-character word into 272 + 1", () => {
    expect(splitIntoThread("c".repeat(273)).map(charCount)).toEqual([278, 7]);
  });

  it("cuts a long emoji run by characters, never inside an emoji", () => {
    const run = "😀".repeat(600);
    const posts = splitIntoThread(run);
    expect(posts.map(charCount)).toEqual([278, 278, 62]);
    expect(posts.every((p) => !p.includes("�") && charCount(p) <= 280)).toBe(true);
    expect(posts.map((p) => p.replace(/ \(\d+\/\d+\)$/, "")).join("")).toBe(run);
  });

  it("continues with normal words after a split word", () => {
    expect(splitIntoThread(`${"a".repeat(300)} b`)).toEqual([`${"a".repeat(272)} (1/2)`, `${"a".repeat(28)} b (2/2)`]);
  });
});
