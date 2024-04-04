import react from "react";
import clsx from "clsx";
import { Title, Subtitle } from "./texts.jsx";

function Aboutme({ mode }) {
	const aboutmeClass = clsx({
		"min-h-screen": true,
		"bg-dark-app-bg": mode === "dark",
		"bg-light-app-bg": mode === "light",
	});

	return (
		<div className={aboutmeClass}>
            <Title mode={mode} content='About Me' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illo accusamus saepe dolor ipsam possimus quidem quisquam delectus aliquid. Voluptatum, non harum? Dicta inventore alias dignissimos delectus quaerat, atque quidem.</p>
		</div>
	);
}

export default Aboutme;
