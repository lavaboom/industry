import "./Button.scss";

export default function Button({
	text,
	icon,
	onClick,
	btnStyle,
	containerStyle,
	image,
}) {
	return (
		<div
			className={`button__container ${containerStyle ? containerStyle : ""}`}
		>
			<button
				onClick={onClick}
				className={`button ${btnStyle ? btnStyle : ""} ${
					text ? "button--text" : ""
				}`}
			>
				{text ? text : ""}
				{!icon ? <></> : <img src={icon} alt="icon" className="button__icon" />}
			</button>
		</div>
	);
}
