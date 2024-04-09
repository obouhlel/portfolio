/** @format */

import React from 'react';
import clsx from 'clsx';

function Title({ isDarkMode, content, style }) {
	const titleClass = clsx(
		style,
		'text-4xl font-bold',
		'transition-colors duration-300 ease-in-out',
		isDarkMode ? 'text-dark-high-contrast-text' : 'text-light-high-contrast-text'
	);

	return <h1 className={titleClass}>{content}</h1>;
}

function Subtitle({ isDarkMode, content, style }) {
	const subtitleClass = clsx(
		style,
		'text-xl font-semibold',
		'transition-colors duration-300 ease-in-out',
		isDarkMode ? 'text-dark-low-contrast-text' : 'text-light-low-contrast-text',
	);

	return <h2 className={subtitleClass}>{content}</h2>;
}

function Link({ isDarkMode, content, link, style }) {
	const linkClass = clsx(
		style,
		'text-lg font-semibold transition-colors duration-300 ease-in-out',
		isDarkMode ? 'text-dark-high-contrast-text hover:text-dark-low-contrast-text' : 'text-light-low-contrast-text hover:text-light-high-contrast-text',
	);

	return <a href={link} className={linkClass}>{content}</a>;
}

export { Title, Subtitle, Link };
