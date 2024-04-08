/** @format */

import React from 'react';
import clsx from 'clsx';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

function ThemeToggleButton({ isDarkMode, toggleTheme }) {
	const buttonTheme = clsx(
		'h-10 w-10 rounded-full border border-solid',
		'flex items-center justify-center',
		'fixed top-3 right-8 sm:right-3',
        isDarkMode ? 'text-dark-high-contrast-text hover:text-dark-low-contrast-text' : 'text-light-high-contrast-text  hover:text-light-low-contrast-text',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border',
        isDarkMode ? 'bg-dark-app-bg hover:bg-dark-subtle-bg' : 'bg-light-app-bg hover:bg-light-subtle-bg',
	);

	return (
		<button
			onClick={toggleTheme}
			className={buttonTheme}>
			{isDarkMode ? (
				<SunIcon className='h-5 w-5 text-dark-high-contrast-text' />
			) : (
				<MoonIcon className='h-5 w-5 text-light-high-contrast-text' />
			)}
		</button>
	);
}

export default ThemeToggleButton;
