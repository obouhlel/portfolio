/** @format */

import React from 'react';
import clsx from 'clsx';

function ButtonLink({ link, content, isDarkMode }) {
	const buttonClass = clsx(
		'px-4 py-2 rounded text-sm font-semibold transition-colors duration-300 ease-in-out',
		'border-2 border-solid',
		isDarkMode ? 'text-dark-high-contrast-text' : 'text-light-high-contrast-text',
		isDarkMode ? 'bg-dark-solid-bg hover:bg-dark-hover-solid-bg' : 'bg-light-solid-bg hover:bg-light-hover-solid-bg',
		isDarkMode ? 'border-dark-ui-elt-border hover:border-dark-hover-ui-elt-border' : 'border-light-ui-elt-border hover:border-light-hover-ui-elt-border',
	);

	return (
		<a href={link}>
			<button className={buttonClass}>{content}</button>
		</a>
	);
}

function ButtonForm({state, isDarkMode})
{
	const buttonClass = clsx(
		'px-4 py-2 rounded text-lg font-semibold transition-colors duration-300 ease-in-out',
		'border-2 border-solid',
		isDarkMode ? 'text-dark-high-contrast-text' : 'text-light-high-contrast-text',
		isDarkMode ? 'bg-dark-solid-bg hover:bg-dark-hover-solid-bg' : 'bg-light-solid-bg hover:bg-light-hover-solid-bg',
		isDarkMode ? 'border-dark-ui-elt-border hover:border-dark-hover-ui-elt-border' : 'border-light-ui-elt-border hover:border-light-hover-ui-elt-border',
	);

	return (
		<button type='submit' disabled={state.submitting} className={buttonClass}>Submit</button>
	);
}

export 	{ ButtonLink, ButtonForm };
