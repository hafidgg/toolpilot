import { describe, expect, it } from "vitest";
import { checkReadability } from "../seo-calculations";

const BEFORE =
  "It is important to note that in order to facilitate the subsequent utilization of the documentation, administrators should carefully evaluate the configuration options, which are described comprehensively in the appendix, before implementing any modifications.";
const AFTER =
  "Before you change any settings, read the options in the appendix. They explain what each one does. This makes the guide easier to use later.";

describe("checkReadability: Flesch-Kincaid grade and range flag", () => {
  it("scores the long sentence below 0 and flags it", () => {
    expect(checkReadability(BEFORE)).toMatchObject({
      words: 34, sentences: 1, syllables: 80,
      fleschScore: -26.7, fleschKincaidGrade: 25.4, outOfRange: true,
    });
  });

  it("scores the edited version inside the range", () => {
    expect(checkReadability(AFTER)).toMatchObject({
      words: 25, sentences: 3, syllables: 33,
      fleschScore: 86.7, fleschKincaidGrade: 3.2, outOfRange: false,
    });
  });

  it("flags a score above 100", () => {
    expect(checkReadability("The cat sat on the mat.")).toMatchObject({ fleschScore: 116.1, outOfRange: true });
  });

  it("can give a negative grade for very short text", () => {
    // 0.39 × 6 + 11.8 × 1 − 15.59 = −1.45, which Math.round takes to −1.4
    expect(checkReadability("The cat sat on the mat.")!.fleschKincaidGrade).toBe(-1.4);
  });
});
