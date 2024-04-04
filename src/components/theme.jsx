import React from 'react';
import clsx from 'clsx';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeToggleButton({ isDarkMode, toggleTheme }) {
  const buttonTheme = clsx(
    "h-10 w-10 rounded-full flex items-center justify-center",
    isDarkMode
      ? "bg-dark-ui-elt-bg hover:bg-dark-hover-ui-elt-bg text-dark-high-contrast-text"
      : "bg-light-ui-elt-bg hover:bg-light-hover-ui-elt-bg text-light-high-contrast-text",
    "fixed top-5 right-5"
  );

  return (
    <button onClick={toggleTheme} className={buttonTheme}>
      {isDarkMode ? (
        <SunIcon className='h-5 w-5 text-dark-high-contrast-text' />
      ) : (
        <MoonIcon className='h-5 w-5 text-light-high-contrast-text' />
      )}
    </button>
  );
}

export default ThemeToggleButton;