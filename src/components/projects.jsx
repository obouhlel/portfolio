import react from "react";
import clsx from "clsx";
import { Title, Subtitle } from "./texts.jsx";

function Projects({ mode }) {
	const projectClass = clsx({
		"min-h-screen": true,
		"bg-dark-app-bg": mode === "dark",
		"bg-light-app-bg": mode === "light",
	});

	return (
		<div className={projectClass}>
            <Title mode={mode} content='Projets' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-col items-start p-4 rounded-lg shadow-lg bg-dark-ui-elt-bg'>
                    <Title mode={mode} content='Projet 1' />
                    <Subtitle mode={mode} content='Description du projet 1' />
                    <Subtitle mode={mode} content='Technologies utilisées:' />
                    <ul>
                        <li>Techno 1</li>
                        <li>Techno 2</li>
                        <li>Techno 3</li>
                    </ul>
                </div>
            </div>
		</div>
	);
}

export default Projects;
