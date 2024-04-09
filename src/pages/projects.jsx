/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Projects({ isDarkMode }) {
	const projectClass = clsx(
		'min-h-screen pt-20',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	return (
		<div className={projectClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Projets'
			/>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='flex flex-col items-start p-4 rounded-lg shadow-lg bg-dark-ui-elt-bg'>
					<Title
						isDarkMode={isDarkMode}
						content='Projet 1'
					/>
					<Subtitle
						isDarkMode={isDarkMode}
						content='Description du projet 1'
					/>
					<Subtitle
						isDarkMode={isDarkMode}
						content='Technologies utilisées:'
					/>
					<ul>
						<li>Techno 1</li>
						<li>Techno 2</li>
						<li>Techno 3</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Projects;
