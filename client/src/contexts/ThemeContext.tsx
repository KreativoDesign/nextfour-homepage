import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  getNextFourTheme,
  resolveNextFourTheme,
  THEME_STORAGE_KEY,
  THEME_TRANSITION_DURATION,
  type NextFourTheme,
} from "@/lib/theme";

type Theme = NextFourTheme;

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const hasAppliedInitialTheme = useRef(false);
  const transitionTimeout = useRef<number | undefined>(undefined);
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable && typeof window !== "undefined") {
      return resolveNextFourTheme(
        window.localStorage.getItem(THEME_STORAGE_KEY),
        defaultTheme
      );
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const shouldAnimate =
      hasAppliedInitialTheme.current && !prefersReducedMotion;

    if (shouldAnimate) {
      window.clearTimeout(transitionTimeout.current);
      root.classList.add("theme-transitioning");
      void root.offsetWidth;
    }

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    if (switchable) {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }

    if (shouldAnimate) {
      transitionTimeout.current = window.setTimeout(() => {
        root.classList.remove("theme-transitioning");
      }, THEME_TRANSITION_DURATION);
    }

    hasAppliedInitialTheme.current = true;
  }, [theme, switchable]);

  useEffect(() => {
    return () => window.clearTimeout(transitionTimeout.current);
  }, []);

  const toggleTheme = switchable
    ? () => {
        setTheme(getNextFourTheme);
      }
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
