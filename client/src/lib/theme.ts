export type NextFourTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "nextfour-theme";
export const THEME_TRANSITION_DURATION = 260;

export function isNextFourTheme(value: string | null): value is NextFourTheme {
  return value === "light" || value === "dark";
}

export function resolveNextFourTheme(
  value: string | null,
  fallback: NextFourTheme
): NextFourTheme {
  return isNextFourTheme(value) ? value : fallback;
}

export function getNextFourTheme(theme: NextFourTheme): NextFourTheme {
  return theme === "dark" ? "light" : "dark";
}

export function getThemeToggleLabel(theme: NextFourTheme): string {
  return theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
}
