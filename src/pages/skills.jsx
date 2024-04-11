/** @format */

import React from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from '../components/texts.jsx';

function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(
                <span
                    key={i}
                    className='text-yellow-500'>
                    ★
                </span>
            );
        } else {
            stars.push(
                <span
                    key={i}
                    className='text-gray-300'>
                    ★
                </span>
            );
        }
    }
    return <div>{stars}</div>;
}

function Skills({ isDarkMode }) {
    const skillClass = clsx(
        'min-h-screen pt-20 px-4',
        'flex flex-col',
        isDarkMode ? 'bg-dark-app-bg' : 'bg-light-app-bg'
    );

    const gridClass = clsx(
        'grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center',
    );

    const cardClass = clsx(
        'flex flex-col flex-grow w-full h-full min-h-64 min-w-full p-4 m-4 rounded-lg',
        'border border-solid',
        isDarkMode ? 'bg-dark-ui-elt-bg' : 'bg-light-ui-elt-bg',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
    );

    const liClass = clsx(
        'flex flex-row justify-between items-center p-2',
        'text-lg font-bold'
    );

    return (
        <div className={skillClass}>
            <Title
                isDarkMode={isDarkMode}
                content='Skills'
                style='text-center'
            />
            <div className={gridClass}>
                <div className={cardClass}>
                    <Subtitle
                        isDarkMode={isDarkMode}
                        content='Rating information'
                        style='text-center mb-4'
                    />
                    <ul>
                        <li className={liClass}>
                            Learning <StarRating rating='1' />
                        </li>
                        <li className={liClass}>
                            Basic <StarRating rating='2' />
                        </li>
                        <li className={liClass}>
                            Intermediate <StarRating rating='3' />
                        </li>
                        <li className={liClass}>
                            Advanced <StarRating rating='4' />
                        </li>
                        <li className={liClass}>
                            Expert <StarRating rating='5' />
                        </li>
                    </ul>
                </div>
                <div className={cardClass}>
                    <Subtitle
                        isDarkMode={isDarkMode}
                        content='Programming Languages'
                        style='text-center mb-4'
                    />
                    <ul>
                        <li className={liClass}>
                            C <StarRating rating='4' />
                        </li>
                        <li className={liClass}>
                            C++ <StarRating rating='3' />
                        </li>
                        <li className={liClass}>
                            Python <StarRating rating='3' />
                        </li>
                        <li className={liClass}>
                            Makefiles <StarRating rating='3' />
                        </li>
                        <li className={liClass}>
                            HTML/CSS <StarRating rating='2' />
                        </li>
                        <li className={liClass}>
                            Javascript <StarRating rating='2' />
                        </li>
                    </ul>
                </div>
                <div className={cardClass}>
                    <Subtitle
                        isDarkMode={isDarkMode}
                        content='Front-end'
                        style='text-center mb-4'
                    />
                    <ul>
                        <li className={liClass}>
                            React <StarRating rating='2' />
                        </li>
                        <li className={liClass}>
                            Tailwind <StarRating rating='2' />
                        </li>
                    </ul>
                </div>
                <div className={cardClass}>
                    <Subtitle
                        isDarkMode={isDarkMode}
                        content='Back-end'
                        style='text-center mb-4'
                    />
                    <ul>
                        <li className={liClass}>
                            Django <StarRating rating='3' />
                        </li>
                        <li className={liClass}>
                            PostgreSQL <StarRating rating='3' />
                        </li>
                    </ul>
                </div>
                <div className={cardClass}>
                    <Subtitle
                        isDarkMode={isDarkMode}
                        content='DevOps'
                        style='text-center mb-4'
                    />
                    <ul>
                        <li className={liClass}>
                            Docker <StarRating rating='3' />
                        </li>
                        <li className={liClass}>
							Git <StarRating rating='4' />
						</li>
                        <li className={liClass}>
							Github <StarRating rating='3' />
						</li>
                        <li className={liClass}>
                            Nginx <StarRating rating='3' />
                        </li>
                    </ul>
                </div>
				<div className={cardClass}>
					<Subtitle
						isDarkMode={isDarkMode}
						content='Tools / OS'
						style='text-center mb-4'
					/>
					<ul>
						<li className={liClass}>
							Vim <StarRating rating='2' />
						</li>
						<li className={liClass}>
							Visual Studio Code <StarRating rating='3' />
						</li>
						<li className={liClass}>
							Linux <StarRating rating='3' />
						</li>
						<li className={liClass}>
							Windows <StarRating rating='3' />
						</li>
					</ul>
				</div>
            </div>
        </div>
    );
}

export default Skills;
