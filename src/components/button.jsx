/** @format */

import React from 'react';
import clsx from 'clsx';

function Button({ link, content, isDarkMode }) {
	const buttonClass = clsx(
		'px-4 py-2 rounded text-sm font-semibold transition-colors duration-300 ease-in-out',
		isDarkMode 
		? 'bg-dark-solid-bg text-dark-high-contrast-text hover:bg-dark-hover-solid-bg'
		: 'bg-light-solid-bg text-light-high-contrast-text hover:bg-light-hover-solid-bg'
	);

	return (
		<a href={link}>
			<button className={buttonClass}>{content}</button>
		</a>
	);
}

export default Button;
