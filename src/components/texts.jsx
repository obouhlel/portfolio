/** @format */

import React from "react";
import clsx from "clsx";

function Title({ mode, content }) {
	const titleClass = clsx({
		"text-4xl": true,
		"text-dark-high-contrast-text": mode === "dark",
		"text-light-high-contrast-text": mode === "light",
	});

	return <h1 className={titleClass}>{content}</h1>;
}

function Subtitle({ mode, content }) {
	const subtitleClass = clsx({
		"text-xl": true,
		"text-dark-low-contrast-text": mode === "dark",
		"text-light-low-contrast-text": mode === "light",
	});

	return <h2 className={subtitleClass}>{content}</h2>;
}

export { Title, Subtitle };
