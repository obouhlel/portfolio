/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Projects({ isDarkMode }) {
	const projectClass = clsx(
		'min-h-screen pt-20 pl-4 pr-4',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	return (
		<div className={projectClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Projects'
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

export default Projects;
