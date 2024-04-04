import react from "react";
import clsx from "clsx";
import { Title, Subtitle } from "./texts.jsx";

function Skills({ mode }) {
	const skillClass = clsx({
		"min-h-screen": true,
		"bg-dark-app-bg": mode === "dark",
		"bg-light-app-bg": mode === "light",
	});

	const cardClass = clsx({
		"flex flex-col md:flex-row items-start p-4 rounded-lg shadow-lg": true,
		"bg-dark-ui-elt-bg": mode === "dark",
		"bg-light-ui-elt-bg": mode === "light",
	});

	return (
		<div className={skillClass}>
            <Title mode={mode} content='Compétences' />
            <div className={cardClass}>
                <div className='md:ml-4 mt-4 md:mt-0'>
                    <Subtitle mode={mode} content='Développement Web' />
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
