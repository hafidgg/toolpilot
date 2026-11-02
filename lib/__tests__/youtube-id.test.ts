import { describe, expect, it } from "vitest";
import { extractYoutubeVideoId } from "../youtube-tools";

const ID = "dQw4w9WgXcQ";

describe("extractYoutubeVideoId: v= in any parameter position", () => {
  it.each([
    `https://m.youtube.com/watch?feature=share&v=${ID}`,
    `https://www.youtube.com/watch?list=PL1&v=${ID}`,
    `https://www.youtube.com/watch?app=desktop&t=42s&v=${ID}&pp=xyz`,
    `https://music.youtube.com/watch?list=RD&v=${ID}`,
    `youtube.com/watch?feature=share&v=${ID}`,
    `https://www.youtube.com/watch/?feature=share&v=${ID}`,
    `https://www.youtube.com/watch?feature=share&v=${ID}#t=42`,
  ])("%s", (input) => {
    expect(extractYoutubeVideoId(input)).toBe(ID);
  });
});

describe("extractYoutubeVideoId: other supported forms", () => {
  it.each([
    `HTTPS://WWW.YOUTUBE.COM/watch?v=${ID}`,
    `http://youtu.be/${ID}`,
    `https://youtu.be/${ID}/`,
    `https://youtu.be/${ID}?si=abc&t=42`,
    `https://www.youtube.com/embed/${ID}/`,
    `https://www.youtube.com/live/${ID}/`,
    `https://m.youtube.com/shorts/${ID}?feature=share`,
    `\n https://youtu.be/${ID} \t`,
  ])("%s", (input) => {
    expect(extractYoutubeVideoId(input)).toBe(ID);
  });
});

describe("extractYoutubeVideoId: returns null", () => {
  it.each([
    "",
    `https://notyoutube.com/watch?v=${ID}`,
    `https://youtube.co/watch?v=${ID}`,
    `https://www.youtube.com/?v=${ID}`,
    "https://www.youtube.com/watch?v=",
    "https://www.youtube.com/shorts/",
    "https://youtu.be/",
    `https://www.youtube.com/channel/${ID}`,
    "http://",
  ])("%j", (input) => {
    expect(extractYoutubeVideoId(input)).toBeNull();
  });
});
