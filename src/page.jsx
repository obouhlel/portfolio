/** @format */

import React, { useState, useEffect } from 'react';
import Profile from './pages/profile.jsx';
import Aboutme from './pages/aboutme.jsx';
import Skills from './pages/skills.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';

function Page({isDarkMode}) {
	const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('load', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('load', handleHashChange);
        };
    }, []);

	const pages = {
		'#home': <Profile isDarkMode={isDarkMode} />,
		'#about-me': <Aboutme isDarkMode={isDarkMode} />,
		'#skills': <Skills isDarkMode={isDarkMode} />,
		'#projects': <Projects isDarkMode={isDarkMode} />,
		'#contact': <Contact isDarkMode={isDarkMode} />,
	}

	let content;
	if (hash in pages) {
		content = pages[hash];
	}
	else {
		content = pages['#home'];
	}

	return (
		<>
			{content}
		</>
	);
}

export default Page;
