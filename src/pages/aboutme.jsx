/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Aboutme({ isDarkMode }) {
	const aboutmeClass = clsx(
		'min-h-screen pt-20',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	return (
		<div className={aboutmeClass}>
			<Title
				isDarkMode={isDarkMode}
				content='About Me'
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

export default Aboutme;
