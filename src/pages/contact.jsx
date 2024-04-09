/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';
import ContactForm from '../components/form.jsx';
import { useForm } from '@formspree/react';

function Contact({ isDarkMode }) {
	const [state, handleSubmit] = useForm('xjvnpwzn');

	const contactClass = clsx(
		'min-h-screen pt-20 pl-4 pr-4 pb-10',
		isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg',
	);

	if (state.succeeded) {
		return (
			<div className={contactClass}>
				<Title
					isDarkMode={isDarkMode}
					content='Contact'
				/>
				<Subtitle
					isDarkMode={isDarkMode}
					content='Thanks for reaching out! I will get back to you as soon as possible.'
				/>
			</div>
		);
	}

	return (
		<div className={contactClass}>
			<Title
				isDarkMode={isDarkMode}
				content='Contact'
			/>
			<ContactForm onSubmit={handleSubmit} state={state} isDarkMode={isDarkMode} />
		</div>
	);
}

export default Contact;
