/** @format */

import React from 'react';
import clsx from 'clsx';
import { ValidationError } from '@formspree/react';
import { ButtonForm } from './button.jsx';

function ContactForm({ onSubmit, state, isDarkMode }) {
	const formClass = clsx(
		'flex flex-col items-left p-4 mt-5 rounded-lg space-y-4 border-2 border-solid w-full h-auto',
		isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg',
		isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
	);

	return (
		<form
			onSubmit={onSubmit}
			className={formClass}>
			<div
				className='grid gap-4'
				style={{ gridTemplateColumns: 'max-content auto' }}>
				<label
					htmlFor='name'
					className='text-lg flex items-center justify-start font-bold'>
					Name :
				</label>
				<input
					id='name'
					type='text'
					name='name'
					className='p-2 border border-solid rounded-lg text-light-high-contrast-text w-full'
				/>
				<label
					htmlFor='email'
					className='text-lg flex items-center justify-start font-bold'>
					Email :
				</label>
				<input
					id='email'
					type='email'
					name='email'
					className='p-2 border border-solid rounded-lg text-light-high-contrast-text w-full'
				/>
				<ValidationError
					prefix='Email'
					field='email'
					errors={state.errors}
				/>
				<label
					htmlFor='subject'
					className='text-lg flex items-center justify-start font-bold'>
					Subject :
				</label>
				<input
					id='subject'
					type='text'
					name='subject'
					className='p-2 border border-solid rounded-lg text-light-high-contrast-text w-full'
				/>
			</div>
			<label
				htmlFor='message'
				className='text-lg font-bold'>
				Message :
			</label>
			<textarea
				id='message'
				name='message'
				className='p-2 border border-solid rounded-lg w-full h-40 text-light-high-contrast-text resize-y'
			/>
			<ValidationError
				prefix='Message'
				field='message'
				errors={state.errors}
			/>
			<ButtonForm
				state={state}
				isDarkMode={isDarkMode}
			/>
		</form>
	);
}

export default ContactForm;
