import { describe, expect, it } from "vitest";
import { convertTextCase } from "../content-calculations";
import { checkReadability } from "../seo-calculations";

// Outputs captured before the step-1h fixes. Inputs the fixes do not target
// must keep producing exactly these.

describe("convertTextCase pinned outputs: title", () => {
  it.each([
    ["", ""],
    ["hello world", "Hello World"],
    ["HELLO WORLD", "Hello World"],
    ["quick brown fox", "Quick Brown Fox"],
    ["well-known example", "Well-Known Example"],
    ["first. second! third? fourth", "First. Second! Third? Fourth"],
    ["café menu", "Café Menu"],
    ["12 easy recipes", "12 Easy Recipes"],
    ["multiple   spaces here", "Multiple   Spaces Here"],
    ["line one\nline two", "Line One\nLine Two"],
  ])("%j -> %j", (input, expected) => {
    expect(convertTextCase(input, "title")).toBe(expected);
  });
});

describe("convertTextCase pinned outputs: sentence", () => {
  it.each([
    ["", ""],
    ["hello world", "Hello world"],
    ["HELLO WORLD", "Hello world"],
    ["quick brown fox", "Quick brown fox"],
    ["well-known example", "Well-known example"],
    ["first. second! third? fourth", "First. Second! Third? Fourth"],
    ["café menu", "Café menu"],
    ["12 easy recipes", "12 easy recipes"],
    ["you're here", "You're here"],
    ["i think so", "I think so"],
    ["a home to go back to", "A home to go back to"],
    ["multiple   spaces here", "Multiple   spaces here"],
    ["line one\nline two", "Line one\nline two"],
  ])("%j -> %j", (input, expected) => {
    expect(convertTextCase(input, "sentence")).toBe(expected);
  });
});

describe("convertTextCase pinned outputs: other cases", () => {
  it.each([
    ["uppercase", "you're here", "YOU'RE HERE"],
    ["uppercase", "the API docs", "THE API DOCS"],
    ["lowercase", "HELLO WORLD", "hello world"],
    ["lowercase", "the API docs", "the api docs"],
    ["camel", "hello world", "helloWorld"],
    ["camel", "well-known example", "wellknownExample"],
    ["camel", "café menu", "cafMenu"],
    ["camel", "12 easy recipes", "12EasyRecipes"],
    ["camel", "a home to go back to", "aHomeToGoBackTo"],
  ] as const)("%s %j -> %j", (c, input, expected) => {
    expect(convertTextCase(input, c)).toBe(expected);
  });
});

describe("checkReadability pinned outputs", () => {
  it.each([
    ["The cat sat on the mat.", 116.1, "Very easy (5th grade)", 6, 1, 6],
    ["Readability matters. Short sentences help readers.", 20.5, "Very difficult (graduate level)", 6, 2, 13],
    ["word", 121.2, "Very easy (5th grade)", 1, 1, 1],
    [
      "Before you change any settings, read the options in the appendix. They explain what each one does. This makes the guide easier to use later.",
      86.7, "Easy (6th grade)", 25, 3, 33,
    ],
  ])("%j", (text, fleschScore, gradeLevel, words, sentences, syllables) => {
    expect(checkReadability(text)).toMatchObject({ fleschScore, gradeLevel, words, sentences, syllables });
  });

  it("returns null for empty text", () => {
    expect(checkReadability("   ")).toBeNull();
  });
});
