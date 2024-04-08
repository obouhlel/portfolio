/** @format */

import react from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from './texts.jsx';
import Button from './button.jsx';
import Avatar from './avatar.jsx';

function Profile({ isDarkMode }) {
	const profileClass = clsx(
		'flex items-center justify-center min-h-screen',
	);

	const cardClass = clsx(
		'flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg animate-fade-in-up transition-all duration-500 ease-in-out',
		isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg'
	);

	return (
		<div className={profileClass}>
			<div className={cardClass}>
				<Avatar />
				<div className='md:ml-4 mt-4 md:mt-0'>
					<Title
						isDarkMode={isDarkMode}
						content='Oussama Bouhlel'
					/>
					<Subtitle
						isDarkMode={isDarkMode}
						content='Développeur Logiciel'
					/>
					<div className='mt-4 flex space-x-2'>
						<Button
							link='https://github.com/obouhlel'
							content='Github'
							isDarkMode={isDarkMode}
						/>
						<Button
							link='https://www.linkedin.com/in/oussama-bouhlel-7a9152294/'
							content='LinkedIn'
							isDarkMode={isDarkMode}
						/>
						<Button
							link='/portfolio/CV_BOUHLEL_Oussama.pdf'
							content='Mon CV'
							isDarkMode={isDarkMode}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
