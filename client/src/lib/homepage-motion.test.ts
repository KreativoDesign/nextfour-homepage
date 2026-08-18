import { describe, expect, it } from "vitest";
import { homepageHeadlineLines, homepageHeadlineText } from "./homepage-motion";

describe("homepage headline motion model", () => {
  it("preserves the visible headline and continuous stagger indexes", () => {
    expect(homepageHeadlineText).toBe("One Partner. Every Solution. Real Results.");
    expect(homepageHeadlineLines.flatMap((line) => line.words)).toHaveLength(6);
    expect(homepageHeadlineLines.map((line) => line.startIndex)).toEqual([0, 4]);
    expect(homepageHeadlineLines.filter((line) => line.accent).map((line) => line.id)).toEqual([
      "result",
    ]);
  });
});
