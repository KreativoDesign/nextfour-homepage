import { describe, expect, it } from "vitest";
import {
  getHomepageGridOpacity,
  HOMEPAGE_GRID_FADE_DISTANCE,
  HOMEPAGE_GRID_MIN_OPACITY,
  homepageHeadlineLines,
  homepageHeadlineText,
} from "./homepage-motion";

describe("homepage headline motion model", () => {
  it("preserves the visible headline and continuous stagger indexes", () => {
    expect(homepageHeadlineText).toBe(
      "One Partner. Every Solution. Real Results."
    );
    expect(homepageHeadlineLines.flatMap(line => line.words)).toHaveLength(6);
    expect(homepageHeadlineLines.map(line => line.startIndex)).toEqual([0, 4]);
    expect(
      homepageHeadlineLines.filter(line => line.accent).map(line => line.id)
    ).toEqual(["result"]);
  });
});

describe("homepage gridline fade model", () => {
  const heroBottom = 720;

  it("keeps the grid at full strength through the hero", () => {
    expect(getHomepageGridOpacity(0, heroBottom)).toBe(1);
    expect(getHomepageGridOpacity(heroBottom, heroBottom)).toBe(1);
  });

  it("fades smoothly to the reduced resting opacity after the hero", () => {
    const midpoint = getHomepageGridOpacity(
      heroBottom + HOMEPAGE_GRID_FADE_DISTANCE / 2,
      heroBottom
    );

    expect(midpoint).toBeCloseTo((1 + HOMEPAGE_GRID_MIN_OPACITY) / 2, 5);
    expect(
      getHomepageGridOpacity(
        heroBottom + HOMEPAGE_GRID_FADE_DISTANCE,
        heroBottom
      )
    ).toBe(HOMEPAGE_GRID_MIN_OPACITY);
  });

  it("clamps overscroll and safely handles invalid measurements", () => {
    expect(getHomepageGridOpacity(-200, heroBottom)).toBe(1);
    expect(getHomepageGridOpacity(heroBottom + 9999, heroBottom)).toBe(
      HOMEPAGE_GRID_MIN_OPACITY
    );
    expect(getHomepageGridOpacity(Number.NaN, heroBottom)).toBe(1);
    expect(getHomepageGridOpacity(200, Number.POSITIVE_INFINITY)).toBe(1);
  });
});
