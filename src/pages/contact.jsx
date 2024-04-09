/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Contact({ isDarkMode }) {
	const contactClass = clsx(
		'min-h-screen pt-20',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
	);

	return (
		<div className={contactClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Contact'
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

export default Contact;
