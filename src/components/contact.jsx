import react from "react";
import clsx from "clsx";
import { Title, Subtitle } from "./texts.jsx";

function Contact({ mode }) {
	const contactClass = clsx({
		"min-h-screen": true,
		"bg-dark-app-bg": mode === "dark",
		"bg-light-app-bg": mode === "light",
	});

	return (
		<div className={contactClass}>
            <Title mode={mode} content='Contact' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam illo accusamus saepe dolor ipsam possimus quidem quisquam delectus aliquid. Voluptatum, non harum? Dicta inventore alias dignissimos delectus quaerat, atque quidem.</p>
		</div>
	);
}

export default Contact;