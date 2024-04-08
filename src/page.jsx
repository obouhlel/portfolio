/** @format */

import React, { useState, useEffect } from 'react';
import Profile from './components/profile.jsx';
import Aboutme from './components/aboutme.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';

function Page({isDarkMode}) {
	return (
		<>
			<Profile isDarkMode={isDarkMode} />
			<Aboutme isDarkMode={isDarkMode} />
			<Skills isDarkMode={isDarkMode} />
			<Projects isDarkMode={isDarkMode} />
			<Contact isDarkMode={isDarkMode} />
		</>
	);
}

export default Page;
