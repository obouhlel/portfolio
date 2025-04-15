"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Mode = "light" | "dark";

type ThemeContextType = {
  mode: Mode;
  toggleMode: () => void;
  mounted: boolean;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<Mode>("light");

  const applyTheme = (newMode: Mode) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newMode);
  };

  const savePreferences = (newMode: Mode) => {
    try {
      localStorage.setItem("mode", newMode);
    } catch (e) {
      console.error("Failed to save theme preferences", e);
    }
  };

  useEffect(() => {
    setMounted(true);

    try {
      const storedMode = localStorage.getItem("mode") as Mode | null;
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialMode = storedMode || (prefersDark ? "dark" : "light");

      applyTheme(initialMode);
      setMode(initialMode);
    } catch (e) {
      console.error("Error initializing theme", e);
    }
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    savePreferences(newMode);
    applyTheme(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
