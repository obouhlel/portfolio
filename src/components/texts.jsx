/** @format */

import React from 'react';
import clsx from 'clsx';

function Title({ isDarkMode, content }) {
	const titleClass = clsx(
		'text-4xl font-bold transition-colors duration-300 ease-in-out',
		isDarkMode ? 'text-dark-high-contrast-text' : 'text-light-high-contrast-text'
	);

	return <h1 className={titleClass}>{content}</h1>;
}

function Subtitle({ isDarkMode, content }) {
	const subtitleClass = clsx(
		'text-xl font-semibold transition-colors duration-300 ease-in-out',
		isDarkMode ? 'text-dark-low-contrast-text' : 'text-light-low-contrast-text',
	);

	return <h2 className={subtitleClass}>{content}</h2>;
}

export { Title, Subtitle };
