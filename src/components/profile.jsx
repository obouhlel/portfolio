/** @format */

import react from "react";
import clsx from "clsx";
import { Title, Subtitle } from "./texts.jsx";
import Button from "./button.jsx";
import Avatar from "./avatar.jsx";

function Profile({ mode }) {
	const profileClass = clsx({
		"flex items-center justify-center min-h-screen": true,
		"bg-dark-app-bg": mode === "dark",
		"bg-light-app-bg": mode === "light",
	});

	const cardClass = clsx({
		"flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg": true,
		"bg-dark-ui-elt-bg": mode === "dark",
		"bg-light-ui-elt-bg": mode === "light",
	});

	return (
		<div className={profileClass}>
			<div className={cardClass}>
				<Avatar />
				<div className='md:ml-4 mt-4 md:mt-0'>
					<Title mode={mode} content='Oussama Bouhlel' />
					<Subtitle mode={mode} content='Développeur Logiciel' />
					<div className='mt-4 flex space-x-2'>
						<Button
							link='https://github.com/obouhlel'
							content='Github'
							mode={mode}
						/>
						<Button
							link='https://www.linkedin.com/in/oussama-bouhlel-7a9152294/'
							content='LinkedIn'
							mode={mode}
						/>
						<Button
							link='/portfolio/CV_BOUHLEL_Oussama.pdf'
							content='Mon CV'
							mode={mode}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
