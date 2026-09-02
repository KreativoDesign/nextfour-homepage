import { describe, expect, it } from "vitest";
import { createLoopingItems, getLoopingIndex } from "./carousel";

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

describe("createLoopingItems", () => {
  it("creates three cycles with stable original indexes by default", () => {
    const looped = createLoopingItems(["a", "b"]);

    expect(looped).toHaveLength(6);
    expect(looped.map(({ item }) => item)).toEqual([
      "a",
      "b",
      "a",
      "b",
      "a",
      "b",
    ]);
    expect(looped.map(({ originalIndex }) => originalIndex)).toEqual([
      0, 1, 0, 1, 0, 1,
    ]);
    expect(looped.map(({ cycle }) => cycle)).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it("keeps at least two cycles when a smaller repeat count is requested", () => {
    expect(createLoopingItems(["a", "b"], 1)).toHaveLength(4);
  });

  it("returns an empty list for empty source content", () => {
    expect(createLoopingItems([])).toEqual([]);
  });
});
