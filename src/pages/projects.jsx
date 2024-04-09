/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';
import projects from '../data/projects.json';
import ProjectCard from '../components/projectCard.jsx';

function Projects({ isDarkMode }) {
	const projectClass = clsx(
		'min-h-screen pt-20 px-4',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	return (
		<div className={projectClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Projects'
				style='text-center'
			/>
			<div className='flex flex-col sm:flex-row justify-center'>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						isDarkMode={isDarkMode}
					/>
				))}
			</div>
		</div>
	);
}

export default Projects;
