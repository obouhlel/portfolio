/** @format */

import React from "react";
import clsx from "clsx";

function Button({ link, content, mode }) {
	const buttonClass = clsx({
		"px-4 py-2 rounded": true,
		"bg-dark-solid-bg hover:bg-dark-hover-solid-bg text-dark-high-contrast-text":
			mode === "dark",
		"bg-light-solid-bg hover:bg-light-hover-solid-bg text-dark-high-contrast-text":
			mode === "light",
	});

	return (
		<a href={link}>
			<button className={buttonClass}>{content}</button>
		</a>
	);
}

export default Button;
