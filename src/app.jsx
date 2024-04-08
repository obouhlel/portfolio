/** @format */

import React, { useState, useEffect } from 'react';
import Header from './components/header.jsx';
import Page from './page.jsx';
import ThemeToggleButton from './components/theme.jsx';


function App() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('isDarkMode');
		return savedMode ? JSON.parse(savedMode) : false;
	});

	useEffect(() => {
		localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
		if (isDarkMode) {
			document.body.classList.add('dark-theme');
			document.body.classList.remove('light-theme');
		} else {
			document.body.classList.add('light-theme');
			document.body.classList.remove('dark-theme');
		}
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<>
			<Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
			<Page isDarkMode={isDarkMode} />
		</>
	);
}

export default App;
