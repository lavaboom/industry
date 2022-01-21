import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
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
						<NavLink className="header-nav__item" to="/overview">
							OVERVIEW
						</NavLink>
						<NavLink className="header-nav__item" to="/recovery">
							RECOVERY
						</NavLink>
						<NavLink className="header-nav__item" to="/cognitive">
							COGNITIVE
						</NavLink>
						<NavLink className="header-nav__item" exact to="/">
							STRAIN
						</NavLink>
					</ul>
				</div>
			</header>
		);
	}
}
