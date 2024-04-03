import react from "react";

function Button({ link, content }) {
	return (
		<a href={link}>
			<button className='px-4 py-2 bg-solid-bg hover:bg-hover-solid-bg text-high-contrast-text rounded'>
				{content}
			</button>
		</a>
	);
}

export default Button;
