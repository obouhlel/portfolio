/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle, Link } from '../components/texts.jsx';
import Timeline from '../components/timeline.jsx';

function AboutmeText({ isDarkMode }) {
	const aboutmeTextClass = clsx(
		'flex flex-col w-full sm:w-1/2 h-auto',
		'border border-solid rounded-lg p-4',
		isDarkMode ? 'bg-dark-subtle-bg' : 'bg-light-subtle-bg',
		isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
	);

	const paraText = clsx(
		'text-lg font-normal py-2 px-10 justify-center',
		'transition-colors duration-300 ease-in-out',
		isDarkMode
			? 'text-dark-high-contrast-text'
			: 'text-light-high-contrast-text'
	);

	return (
		<div className={aboutmeTextClass}>
			<Title
				isDarkMode={isDarkMode}
				content='About Me'
				style='text-center mb-10'
			/>
			<Subtitle
				isDarkMode={isDarkMode}
				content='Who am I?'
				style='text-center pt-2 pb-4'
			/>
			<p className={paraText}>
				I'm Oussama, at the moment I'm a student at 42 School in Paris. I am
				passionate about animation and manga, you can found me on this link{' '}
				<Link
					link='https://anilist.co/user/Oustoky'
					content='link'
					isDarkMode={isDarkMode}
				/>
				, and the new technologie, it's why I have decided to learn programming
				and electronics. I have learn to programming correctly and perform the
				langage C/C++, and more.
			</p>
			<Subtitle
				isDarkMode={isDarkMode}
				content='What are my qualities?'
				style='text-center pt-2 pb-4'
			/>
			<p className={paraText}>
				I am a very curious person, I like to learn new things and I am not
				afraid to take on new challenges. I am also a very rigorous person, I
				like to do things well and I am not afraid to work hard to achieve my
				goals. I like to play coding games. You can find me on{' '}
				<Link
					content='CodingGame'
					link='https://www.codingame.com/profile/14582a1e0986cc03d135c72913f6e5ed9404635'
					isDarkMode={isDarkMode}
				/>
				. My favorite game in Coding Game is{' '}
				<Link
					content='Mod Pod Racing'
					link='https://www.codingame.com/multiplayer/bot-programming/mad-pod-racing'
					isDarkMode={isDarkMode}
				/>
				. You can found my code on{' '}
				<Link
					content='Github'
					link='https://github.com/obouhlel/coding_games'
					isDarkMode={isDarkMode}
				/>
				.
			</p>
			<Subtitle
				isDarkMode={isDarkMode}
				content='How can you contact me?'
				style='text-center pt-2 pb-4'
			/>
			<p className={paraText}>
				You can contact me by email at{' '}
				<Link
					content='oussama_bouhlel@outlook.fr'
					link='mailto:oussama_bouhlel@outlook.fr'
					isDarkMode={isDarkMode}
				/>{' '}
				or via the contact form on the{' '}
				<Link
					content='contact page'
					link='#contact'
					isDarkMode={isDarkMode}
				/>
				.
			</p>
		</div>
	);
}

function Aboutme({ isDarkMode }) {
	const aboutmeClass = clsx(
		'w-full min-h-screen pt-20 px-2 sm:px-4 pb-4',
		'flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-x-4 sm:space-y-0',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	return (
		<div className={aboutmeClass}>
			<AboutmeText isDarkMode={isDarkMode} />
			<Timeline isDarkMode={isDarkMode} />
		</div>
	);
}

export default Aboutme;
