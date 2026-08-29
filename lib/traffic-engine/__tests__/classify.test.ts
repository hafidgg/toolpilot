import { describe, it, expect } from "vitest";
import { isBrandQuery, isNoiseQuery, classifyIntent } from "../classify";

describe("isBrandQuery", () => {
  it("flags exact brand name", () => {
    expect(isBrandQuery("toolpilot")).toBe(true);
  });
  it("flags 'use toolpilot' variant", () => {
    expect(isBrandQuery("use toolpilot robots generator")).toBe(true);
  });
  it("does not flag unrelated queries", () => {
    expect(isBrandQuery("robots txt generator")).toBe(false);
  });
});

describe("isNoiseQuery", () => {
  it("flags filename-like patterns", () => {
    expect(isNoiseQuery("vid_20250117_143022").isNoise).toBe(true);
  });
  it("flags raw URLs", () => {
    expect(isNoiseQuery("https://example.com/page").isNoise).toBe(true);
  });
  it("does not flag legitimate queries", () => {
    expect(isNoiseQuery("acronym generator").isNoise).toBe(false);
  });
});

describe("classifyIntent", () => {
  it("classifies tool queries", () => {
    expect(classifyIntent("robots txt generator").intent).toBe("TOOL");
  });
  it("classifies how-to queries", () => {
    expect(classifyIntent("how to make a robots txt file").intent).toBe("HOW-TO");
  });
  it("classifies data/spec queries", () => {
    expect(classifyIntent("youtube thumbnail size").intent).toBe("DATA");
  });
  it("classifies knowledge queries", () => {
    expect(classifyIntent("what is a robots txt file").intent).toBe("KNOWLEDGE");
  });
  it("falls back to OTHER for unmatched short queries", () => {
    expect(classifyIntent("xyz").intent).toBe("OTHER");
  });
  it("every classification includes an explainable reason", () => {
    const result = classifyIntent("robots txt generator");
    expect(result.reason).toBeTruthy();
  });
});
