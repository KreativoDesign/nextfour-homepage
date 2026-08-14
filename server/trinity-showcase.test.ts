import { describe, expect, it } from "vitest";
import { trinityDetails, trinityScreenshots } from "../client/src/lib/trinity-showcase";

describe("Trinity CRM showcase", () => {
  it("maps all four managed screenshot assets with descriptive captions", () => {
    expect(trinityScreenshots).toHaveLength(4);
    expect(trinityScreenshots.every((screenshot) =>
      screenshot.src.startsWith("/manus-storage/") &&
      screenshot.alt.length > 20 &&
      screenshot.title.length > 0 &&
      screenshot.description.length > 0
    )).toBe(true);
    expect(trinityScreenshots.filter((screenshot) => screenshot.featured)).toHaveLength(1);
  });

  it("contains onboarding, integrations, and support details", () => {
    expect(trinityDetails.map((detail) => detail.value)).toEqual([
      "onboarding",
      "integrations",
      "support",
    ]);
    expect(trinityDetails.every((detail) =>
      detail.content.length > 80 && detail.points.length === 3
    )).toBe(true);
  });
});
