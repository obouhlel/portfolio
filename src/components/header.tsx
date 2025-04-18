"use client";
import { Sun, Moon, Home, Briefcase, Folder, Mail } from "lucide-react";
import { useTheme } from "./theme/theme-provider";
import Link from "next/link";

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
    <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between border-b-2  dark:bg-gray-800/50 bg-gray-200/50 z-50">
      <div className="mx-3 h-full flex items-center gap-x-3">
        <Link
          href={"/"}
          className="text-2xl font-bold text-black dark:text-white flex items-center gap-x-2 relative group"
        >
          <Home />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Home
          </span>
        </Link>
        <Link
          href={"/parcours"}
          className="text-2xl font-bold text-black dark:text-white flex items-center gap-x-2 relative group"
        >
          <Briefcase />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Parcours
          </span>
        </Link>
        <Link
          href={"projets"}
          className="text-2xl font-bold text-black dark:text-white flex items-center gap-x-2 relative group"
        >
          <Folder />
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Projets
          </span>
        </Link>
        <Link
          href={"/contact"}
          className="text-2xl font-bold text-black dark:text-white flex items-center gap-x-2 relative group"
        >
          <Mail />
          <span className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Contact
          </span>
        </Link>
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
