/** @format */

import React from 'react';
import clsx from 'clsx';
import { ButtonLink } from '../components/button.jsx';
import Avatar from '../components/avatar.jsx';
import { Title, Subtitle } from '../components/texts.jsx';

function Profile({ isDarkMode }) {
    const profileClass = clsx(
        'flex items-center justify-center min-h-screen pt-16 pl-4 pr-4',
    );

    const cardClass = clsx(
        'flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start p-4 md:p-8 rounded-lg',
        'border border-solid',
        'animate-drop transition-all duration-300 ease-in-out',
        isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border',
    );

    return (
        <div className={profileClass}>
            <div className={cardClass}>
                <Avatar />
                <div className='pl-0 pt-5 sm:pl-5 sm:pt-0 items-center justify-center'>
                    <Title
                        isDarkMode={isDarkMode}
                        content='Oussama BOUHLEL'
                        style='text-center'
                    />
                    <Subtitle
                        isDarkMode={isDarkMode}
                        content='Software developer | Paris, France'
                        style='text-center'
                    />
                    <h3 className='text-lg italic text-center'>
                        <span className="underline">Status :</span> Seeking a 6-month internship as a developer
                    </h3>
					<div className='mt-4 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2'>
                        <ButtonLink
                            link='mailto:oussama_bouhlel@outlook.fr'
                            content='Email'
                            isDarkMode={isDarkMode}
                        />
						<ButtonLink
							link='https://github.com/obouhlel'
							content='Github'
							isDarkMode={isDarkMode}
						/>
						<ButtonLink
							link='https://www.linkedin.com/in/oussama-bouhlel-7a9152294/'
							content='Linked In'
							isDarkMode={isDarkMode}
						/>
						<ButtonLink
							link='/portfolio/Oussama_BOUHLEL_CV_EN.pdf'
							content='CV EN'
							isDarkMode={isDarkMode}
						/>
						<ButtonLink
							link='/portfolio/Oussama_BOUHLEL_CV_FR.pdf'
							content='CV FR'
							isDarkMode={isDarkMode}
						/>
					</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
