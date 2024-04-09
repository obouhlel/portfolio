/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Skills({ isDarkMode }) {
	const skillClass = clsx(
		'min-h-screen pt-20 pl-4 pr-4',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	const cardClass = clsx(
		'flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg',
		isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg'
	);

	return (
		<div className={skillClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Skills'
			/>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illo
				accusamus saepe dolor ipsam possimus quidem quisquam delectus aliquid.
				Voluptatum, non harum? Dicta inventore alias dignissimos delectus
				quaerat, atque quidem.
			</p>
		</div>
	);
}

export default Skills;
