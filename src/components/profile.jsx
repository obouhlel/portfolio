import react from "react";
import Button from './button.jsx';
import Avatar from './avatar.jsx';

function Profile() {
	return (
		<div className='flex items-center justify-center min-h-screen bg-app-bg'>
			<div className='flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg bg-ui-elt-bg'>
				<Avatar />
				<div className='md:ml-4 mt-4 md:mt-0'>
					<h1 className='text-4xl font-bold text-high-contrast-text'>
						BOUHLEL Oussama
					</h1>
					<h2 className='text-xl text-low-contrast-text'>
						Software developper
					</h2>
					<div className='mt-4 flex space-x-2'>
						<Button
							link='https://github.com/obouhlel'
							content='Github'
						/>
						<Button
							link='https://www.linkedin.com/in/oussama-bouhlel-7a9152294/'
							content='LinkedIn'
						/>
						<Button
							link='/portfolio/CV_BOUHLEL_Oussama.pdf'
							content='Mon CV'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
