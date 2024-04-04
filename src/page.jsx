/** @format */

import React, { useState, useEffect } from "react";
import Profile from "./components/profile.jsx";
import Aboutme from "./components/aboutme.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import ThemeToggleButton from "./components/theme.jsx";

function Page() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("isDarkMode");
		return savedMode ? JSON.parse(savedMode) : true;
	});

	useEffect(() => {
		localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark-theme");
			document.body.classList.remove("light-theme");
		} else {
			document.body.classList.add("light-theme");
			document.body.classList.remove("dark-theme");
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
			<Profile mode={isDarkMode ? "dark" : "light"} />
			<Aboutme mode={isDarkMode ? "dark" : "light"} />
			<Skills mode={isDarkMode ? "dark" : "light"} />
			<Projects mode={isDarkMode ? "dark" : "light"} />
			<Contact mode={isDarkMode ? "dark" : "light"} />
		</>
	);
}

export default Page;
