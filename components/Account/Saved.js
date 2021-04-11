export default function Saved(props) {
	return (
		<div className="flex flex-col justify-center items-center" onClick={() => setTimeout(props.handleCancel(), 3000)}>
			<svg width="36" height="36" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="28" cy="28" r="28" fill="#09157F" />
				<path d="M18 28.8537L24.1017 35L38 21" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
			<div className="mt-5 text-center">Saved</div>
		</div>
	);
}
