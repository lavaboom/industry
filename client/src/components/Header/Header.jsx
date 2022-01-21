import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

// app styles & assets
import "./Header.scss";
import iconCoach from "../../assets/Icons/coach.svg";
import iconMenu from "../../assets/Icons/menu.svg";
import iconChevronDown from "../../assets/Icons/chevron-down.svg";

export default class Header extends Component {
	state = {
		activeView: 4,
	};

	onBtnClick() {
		console.warn("Whoop there it is");
	}

	switchView = (view) => {
		console.log(view);
		this.setState({
			activeView: view,
		});
	};

	render() {
		const { activeView } = this.state;

		return (
			<header className="header">
				<div className="header-buttons">
					<Button icon={iconChevronDown} onClick={this.onBtnClick} />
					<div className="header-buttons__dates">
						<div>
							TODAY{" "}
							<img
								className="header-buttons__icon"
								src={iconChevronDown}
								alt="down"
							/>
						</div>
					</div>
					<div className="header-buttons__icon">
						<img src={iconMenu} alt="right icon" />
					</div>
				</div>
				<div className="header-nav">
					<ul className="header-nav__menu">
						<li
							className={`header-nav__item  ${
								activeView === 1 ? "header-nav__item--active" : ""
							}`}
							onClick={() => this.switchView(1)}
						>
							OVERVIEW
						</li>

						<li
							className={`header-nav__item  ${
								activeView === 2 ? "header-nav__item--active" : ""
							}`}
							onClick={() => this.switchView(2)}
						>
							RECOVERY
						</li>

						<li
							className={`header-nav__item  ${
								activeView === 3 ? "header-nav__item--active" : ""
							}`}
							onClick={() => this.switchView(3)}
						>
							COGNITIVE
						</li>

						<li
							className={`header-nav__item  ${
								activeView === 4 ? "header-nav__item--active" : ""
							}`}
							onClick={() => this.switchView(4)}
						>
							STRAIN
						</li>
					</ul>
				</div>
			</header>
		);
	}
}
