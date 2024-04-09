/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle, Link } from './texts.jsx';

function ProjectCard({ project, isDarkMode }) {
    const badgesClass = clsx(
        'px-2 py-1 rounded-full border border-solid mx-1 my-1',
        isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
    );

    const cardClass = clsx(
        'w-96 h-full p-4 m-4 rounded-lg border border-solid flex flex-col',
        isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
    );

    return (
        <div className={cardClass}>
            <Title
                isDarkMode={isDarkMode}
                content={project.name}
                style='text-center mb-4'
            />
            <p className='mb-2'>{project.description}</p>
            <Subtitle
                content='Languages :'
                isDarkMode={isDarkMode}
                style='justify-start text-left'
            />
            <div className='flex flex-wrap'>
                {project.languages.map((language) => (
                    <div
                        key={`${language}-${project.id}`}
                        className={badgesClass}>
                        {language}
                    </div>
                ))}
            </div>
            {project.frameworks.length > 0 && (
                <>
                    <Subtitle
                        content='Frameworks :'
                        isDarkMode={isDarkMode}
                        style='text-left py-2'
                    />
                    <div className='flex flex-wrap'>
                        {project.frameworks.map((framework) => (
                            <div
                                key={`${framework}-${project.id}`}
                                className={badgesClass}>
                                {framework}
                            </div>
                        ))}
                    </div>
                </>
            )}
            {project.tools.length > 0 && (
                <>
                    <Subtitle
                        content='Tools :'
                        isDarkMode={isDarkMode}
                        style='text-left py-2'
                    />
                    <div className='flex flex-wrap'>
                        {project.tools.map((tool) => (
                            <div
                                key={`${tool}-${project.id}`}
                                className={badgesClass}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </>
            )}
            <div className='text-right'>
                <Link
                    link={project.url}
                    isDarkMode={isDarkMode}
                    content='View project'
                    style='text-right py-2' 
                />
            </div>
        </div>
    );
}

export default ProjectCard;