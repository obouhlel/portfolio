/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Skills({ isDarkMode }) {
	const skillClass = clsx(
		'min-h-screen pt-20',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	const cardClass = clsx(
		'flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg',
		isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg',
	);

	return (
		<div className={skillClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Compétences'
			/>
			<div className={cardClass}>
				<div className='md:ml-4 mt-4 md:mt-0'>
					<Subtitle
						isDarkMode={isDarkMode}
						content='Développement Web'
					/>
					<div className='mt-4 flex space-x-2'>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>SQL</li>
							<li>MongoDB</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
