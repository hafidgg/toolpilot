import { describe, expect, it } from "vitest";
import {
  checkAspectRatio,
  checkFileSize,
  checkFormat,
  checkResolution,
  MAX_DESKTOP_BYTES,
  MAX_MOBILE_BYTES,
} from "../thumbnail-checks";

describe("checkResolution", () => {
  it("passes 3840x2160 as the preferred resolution", () => {
    const r = checkResolution(3840, 2160);
    expect(r.status).toBe("pass");
    expect(r.message).toMatch(/preferred/);
  });

  it("passes 1920x1080 with a higher-is-better note", () => {
    const r = checkResolution(1920, 1080);
    expect(r.status).toBe("pass");
    expect(r.message).toMatch(/Higher is better/);
  });

  it("accepts 1280x720", () => {
    expect(checkResolution(1280, 720).status).toBe("pass");
  });

  it("accepts exactly 640 px wide and fails below it", () => {
    expect(checkResolution(640, 360).status).toBe("pass");
    expect(checkResolution(639, 360).status).toBe("fail");
  });

  it("never calls the preferred size required", () => {
    expect(checkResolution(1280, 720).message).not.toMatch(/required/i);
  });
});

describe("checkAspectRatio", () => {
  it("passes 16:9", () => {
    expect(checkAspectRatio(1280, 720).status).toBe("pass");
  });

  it("warns on non-16:9", () => {
    expect(checkAspectRatio(1080, 1080).status).toBe("warn");
    expect(checkAspectRatio(1200, 900).status).toBe("warn");
  });
});

describe("checkFileSize", () => {
  it("passes at exactly 2 MB and warns just above", () => {
    expect(checkFileSize(MAX_MOBILE_BYTES).status).toBe("pass");
    expect(checkFileSize(MAX_MOBILE_BYTES + 1).status).toBe("warn");
  });

  it("warns at exactly 50 MB and fails just above", () => {
    expect(checkFileSize(MAX_DESKTOP_BYTES).status).toBe("warn");
    expect(checkFileSize(MAX_DESKTOP_BYTES + 1).status).toBe("fail");
  });
});

describe("checkFormat", () => {
  it("accepts JPG and PNG only", () => {
    expect(checkFormat("image/jpeg").status).toBe("pass");
    expect(checkFormat("image/png").status).toBe("pass");
    expect(checkFormat("image/gif").status).toBe("fail");
    expect(checkFormat("image/webp").status).toBe("fail");
  });
});
