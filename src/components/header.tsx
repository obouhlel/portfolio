"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme/theme-provider";

export default function Header() {
  const { mode, toggleMode, mounted } = useTheme();

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between">
        <div className="invisible">Loading...</div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between border-b-2 dark:bg-gray-800 bg-gray-200 z-50">
      <div className="mx-3">
        <h1 className="text-2xl font-bold">Oussama BOUHLEL</h1>
      </div>
      <div className="flex items-center space-x-4 relative">
        <button
          onClick={toggleMode}
          className={`p-2 rounded-full cursor-pointer`}
          aria-label={
            mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {mode === "dark" ? (
            <Sun className="font-bold" />
          ) : (
            <Moon className="font-bold" />
          )}
        </button>
      </div>
    </header>
  );
}
