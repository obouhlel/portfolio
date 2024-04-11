/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';
import projects from '../data/projects.json';
import ProjectCard from '../components/projectCard.jsx';

function Projects({ isDarkMode }) {
    const projectClass = clsx(
        'min-h-screen pt-20 px-0 sm:px-2',
        isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
    );

    const gridClass = clsx(
        'grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center',
    );

    return (
        <div className={projectClass}>
            <Title
                isDarkMode={isDarkMode}
                content='Projects'
                style='text-center'
            />
            <div className={gridClass}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isDarkMode={isDarkMode}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;