import { describe, expect, it } from "vitest";
import { getNextFourTheme, getThemeToggleLabel, resolveNextFourTheme } from "./theme";

describe("NextFour theme helpers", () => {
  it("uses a valid stored theme and falls back safely for invalid values", () => {
    expect(resolveNextFourTheme("light", "dark")).toBe("light");
    expect(resolveNextFourTheme("dark", "light")).toBe("dark");
    expect(resolveNextFourTheme("system", "dark")).toBe("dark");
    expect(resolveNextFourTheme(null, "dark")).toBe("dark");
  });

  it("toggles between the two supported themes with an accurate accessible label", () => {
    expect(getNextFourTheme("dark")).toBe("light");
    expect(getNextFourTheme("light")).toBe("dark");
    expect(getThemeToggleLabel("dark")).toBe("Switch to light mode");
    expect(getThemeToggleLabel("light")).toBe("Switch to dark mode");
  });
});
