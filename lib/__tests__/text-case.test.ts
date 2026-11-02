import { describe, expect, it } from "vitest";
import { convertTextCase } from "../content-calculations";

const title = (s: string) => convertTextCase(s, "title");
const sentence = (s: string) => convertTextCase(s, "sentence");

describe("title case: Microsoft minor-word rules", () => {
  it.each([
    ["a home to go back to", "A Home to Go Back To"],
    ["monitoring and operating a private or hybrid cloud", "Monitoring and Operating a Private or Hybrid Cloud"],
    ["the official microsoft blog", "The Official Microsoft Blog"],
    ["achieving excellence in the classroom through technology", "Achieving Excellence in the Classroom Through Technology"],
    ["ryse: son of rome", "Ryse: Son of Rome"],
    ["the teaching tool you're looking for", "The Teaching Tool You're Looking For"],
  ])("%j -> %j", (input, expected) => {
    expect(title(input)).toBe(expected);
  });

  it("capitalizes a minor word when it is first or last", () => {
    expect(title("to the end of the road to")).toBe("To the End of the Road To");
  });

  it("capitalizes the first word after a colon", () => {
    expect(title("guide: a quick start")).toBe("Guide: A Quick Start");
  });

  it("treats punctuation after a word as part of the last word", () => {
    expect(title("to go back to!")).toBe("To Go Back To!");
  });
});

describe("title case: word shapes", () => {
  it.each([
    ["you're here", "You're Here"],
    ["don't stop", "Don't Stop"],
    ["it's fine", "It's Fine"],
    ["you’re here", "You’re Here"],
    ["well-known example", "Well-Known Example"],
    ["the API docs", "The API Docs"],
    ["seo tips for SEO teams", "Seo Tips for SEO Teams"],
    ["12th annual report", "12th Annual Report"],
    ["\"quoted\" words", "\"Quoted\" Words"],
    ["multiple   spaces   here", "Multiple   Spaces   Here"],
    ["", ""],
    ["o'brien's story", "O'brien's Story"], // known limit: names like O'Brien
  ])("%j -> %j", (input, expected) => {
    expect(title(input)).toBe(expected);
  });

  it("lowercases an all-caps input instead of treating each word as an acronym", () => {
    expect(title("A HOME TO GO BACK TO")).toBe("A Home to Go Back To");
  });
});

describe("sentence case", () => {
  it.each([
    ["the API docs are here", "The API docs are here"],
    ["THE API DOCS", "The api docs"],
    ["yesterday i said i'm sure i've seen it", "Yesterday I said I'm sure I've seen it"],
    ["first one. then a second! and a third? yes", "First one. Then a second! And a third? Yes"],
    ["how to personalize Windows", "How to personalize windows"], // proper nouns aren't detected
    ["\"quoted\" start", "\"Quoted\" start"],
    ["it's an idea", "It's an idea"],
    ["", ""],
  ])("%j -> %j", (input, expected) => {
    expect(sentence(input)).toBe(expected);
  });

  it("doesn't treat words starting with i as the pronoun", () => {
    expect(sentence("ideas in it")).toBe("Ideas in it");
  });
});
