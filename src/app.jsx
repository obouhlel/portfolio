/** @format */

import React, { useState, useEffect } from 'react';
import Page from './page.jsx';
import ThemeToggleButton from './components/theme.jsx';


function App() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('isDarkMode');
		return savedMode ? JSON.parse(savedMode) : true;
	});

	useEffect(() => {
		localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	useEffect(() => {
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
			<ThemeToggleButton
				isDarkMode={isDarkMode}
				toggleTheme={toggleTheme}
			/>
			<Page isDarkMode={isDarkMode} />
		</>
	);
}

export default App;
