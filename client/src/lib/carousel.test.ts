import { describe, expect, it } from "vitest";
import { getLoopingIndex } from "./carousel";

describe("getLoopingIndex", () => {
  it("wraps forward from the last snap to the first", () => {
    expect(getLoopingIndex(4, 1, 5)).toBe(0);
  });

  it("wraps backward from the first snap to the last", () => {
    expect(getLoopingIndex(0, -1, 5)).toBe(4);
  });

  it("returns the current position for an empty snap list", () => {
    expect(getLoopingIndex(2, 1, 0)).toBe(0);
  });
});

