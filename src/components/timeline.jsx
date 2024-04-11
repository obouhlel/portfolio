import React, { useState } from 'react';
import clsx from 'clsx';
import { Title, Subtitle } from './texts.jsx';

function TimeEvent({ year, title, children, isDarkMode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const eventClass = clsx(
        'flex flex-row w-full h-auto',
        isDarkMode ? 'text-dark-app-text' : 'text-light-app-text'
    );

    const cirlceEvent = clsx(
        'flex justify-center items-center w-12 h-12 my-2 rounded-full border border-solid cursor-pointer',
        'transition-colors duration-300 ease-in-out',
        'text-lg font-bold',
        isDarkMode ? 'text-dark-high-contrast-text' :  'text-light-high-contrast-text',
        isDarkMode ? 'bg-dark-ui-elt-bg hover:bg-dark-hover-ui-elt-bg' : 'bg-light-ui-elt-bg hover:bg-light-hover-ui-elt-bg',
        isDarkMode ? 'border-dark-ui-elt-border hover:border-dark-hover-ui-elt-border' : 'border-light-ui-elt-border hover:border-light-hover-ui-elt-border'
    );

    const informationClass = clsx(
        'flex flex-col justify-start w-full h-auto p-4'
    );

    const textPara = clsx(
        'text-lg font-normal py-2 px-10 justify-center',
        'transition-colors duration-300 ease-in-out',
    );

    return (
        <div className={eventClass}>
            <div className={cirlceEvent} onClick={() => setIsExpanded(!isExpanded)}>
                {year}
            </div>
            <div className={informationClass}>
                <Subtitle isDarkMode={isDarkMode} content={title} style='text-left' />
                {isExpanded && <p className={textPara}>{children}</p>}
            </div>
        </div>
    );
}

function Timeline({ isDarkMode })
{
    const timelineClass = clsx(
        'flex flex-col w-full sm:w-1/2 h-auto',
        'border border-solid rounded-lg p-4',
        isDarkMode ? 'bg-dark-subtle-bg' : 'bg-light-subtle-bg',
        isDarkMode ? 'border-dark-ui-elt-border' : 'border-light-ui-elt-border'
    );

    return (
        <div className={timelineClass}>
            <Title isDarkMode={isDarkMode} content='Timeline' style='text-center' />
            <p className='text-center italic'>click on the year to see more information</p>
            <TimeEvent year='2022' title='[Student] 42 School' isDarkMode={isDarkMode}>
                I was a student at 42 School in the Paris. I have learn to programming correctly and perform the langage C/C++.
            </TimeEvent>
            <TimeEvent year='2021' title='[Student] ATS Prepa' isDarkMode={isDarkMode}>
                I was a student at an ATS preparatory class. I have learn to work in team and to be rigorous, and take a lot of knowledge in mathematics and physics. To try to enter in the best engineering school in France, but I have failed.
            </TimeEvent>
            <TimeEvent year='2019' title='[Worker] SIMAERO' isDarkMode={isDarkMode}>
                Worked as a technician in the company SIMAERO. I was in charge of the maintenance of the aircrafts simulator. I have learn to work in team and to be autonomous, and to be rigorous. I have also learn how aircrafts work. And I have perform my english with the customers.
            </TimeEvent>
            <TimeEvent year='2019' title='[Intership] STEG' isDarkMode={isDarkMode}>
                I have done an internship in the company STEG. I have compare two different types of solar panels and I have to make a report to show the differences between them.
            </TimeEvent>
            <TimeEvent year='2016' title='[Student] IUT DUT GEII' isDarkMode={isDarkMode}>
                I was a student at the IUT of Cergy-Pontoise in the GEII department. I have learn the electronics, computer science, mathematics and physics.
            </TimeEvent>
            <TimeEvent year='2016' title='[Student] BAC STI2D' isDarkMode={isDarkMode}>
                I have obtained my baccalaureate in the STI2D department. I have learn the basics of mathematics and physics, with the specialization architecture and construction.
            </TimeEvent>
        </div>
    );
}

export default Timeline;