import { describe, expect, it } from "vitest";
import { featuredContent } from "./featured-content";

describe("featured homepage content", () => {
  it("provides a compact set of distinct, service-linked featured cards", () => {
    expect(featuredContent).toHaveLength(3);
    expect(new Set(featuredContent.map(item => item.service.route)).size).toBe(
      3
    );
    expect(featuredContent.every(item => item.service.image.length > 0)).toBe(
      true
    );
    expect(featuredContent.every(item => item.action.length > 0)).toBe(true);
  });

  it("uses outcome-led titles without placeholder or testimonial content", () => {
    expect(featuredContent.map(item => item.title)).toEqual([
      "Make the first impression count.",
      "Turn attention into momentum.",
      "Keep every opportunity moving.",
    ]);
    expect(
      featuredContent.some(item =>
        /testimonial|review|rating/i.test(item.description)
      )
    ).toBe(false);
  });
});
