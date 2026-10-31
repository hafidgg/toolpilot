import { describe, it, expect } from "vitest";
import { parseInlineLinks } from "../inline-links";

describe("parseInlineLinks", () => {
  it("parses an external https link", () => {
    expect(parseInlineLinks("See [YouTube Help](https://support.google.com/youtube/answer/72431) for details.")).toEqual([
      { type: "text", text: "See " },
      { type: "link", text: "YouTube Help", href: "https://support.google.com/youtube/answer/72431", external: true },
      { type: "text", text: " for details." },
    ]);
  });

  it("parses a site-relative internal link", () => {
    expect(parseInlineLinks("Try the [checker](/tools/thumbnail-size-checker).")).toEqual([
      { type: "text", text: "Try the " },
      { type: "link", text: "checker", href: "/tools/thumbnail-size-checker", external: false },
      { type: "text", text: "." },
    ]);
  });

  it("parses two links in one paragraph", () => {
    const segs = parseInlineLinks("[A](https://a.example/x) and [B](/blog/b)");
    expect(segs).toEqual([
      { type: "link", text: "A", href: "https://a.example/x", external: true },
      { type: "text", text: " and " },
      { type: "link", text: "B", href: "/blog/b", external: false },
    ]);
  });

  it("returns plain text unchanged when there is no link", () => {
    const text = "A meta description doesn't directly influence search rankings.";
    expect(parseInlineLinks(text)).toEqual([{ type: "text", text }]);
  });

  it("leaves bracket and parenthesis text that is not a link unchanged", () => {
    for (const text of ["As noted [1] earlier (see below).", "[1] (see below)", "Use [brackets] (with space)"]) {
      expect(parseInlineLinks(text)).toEqual([{ type: "text", text }]);
    }
  });

  it("keeps javascript:, data: and protocol-relative URLs as plain text", () => {
    for (const text of [
      "Click [here](javascript:alert(1)) now",
      "[img](data:text/html;base64,AAAA)",
      "[cdn](//evil.example/x)",
      "[bad](https://)",
    ]) {
      expect(parseInlineLinks(text)).toEqual([{ type: "text", text }]);
    }
  });

  it("returns no segments for an empty string", () => {
    expect(parseInlineLinks("")).toEqual([]);
  });
});
