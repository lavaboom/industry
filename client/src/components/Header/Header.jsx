import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Buttons/Button";

// app styles & assets
import "./Header.scss";
import iconCoach from "../../assets/Icons/coach.svg";
import iconMenu from "../../assets/Icons/menu.svg";
import iconChevronDown from "../../assets/Icons/chevron-down.svg";
import chevronLeft from "../../assets/Icons/chevron_left.svg";
import chevronRight from "../../assets/Icons/chevron_right.svg";
import fourG from "../../assets/Icons/4g.svg";
import wifi from "../../assets/Icons/wifi.svg";
import battery from "../../assets/Icons/battery.svg";
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
				<div className="header__phone-icons">
					<p>9:41</p>
					<div className="header__phone-svgs">
						<img src={fourG} alt="d" />
						<img src={wifi} alt="sd" />
						<img src={battery} alt="sd" />
					</div>
				</div>
				{/* <img src={phoneIcons} alt="ali" className="header__phone-icons" /> */}
				<div className="header-buttons">
					<div className="profile-image"></div>
					<div className="header-buttons__icon-long">
						<img src={chevronLeft} alt="" className="header-buttons__icons " />
						<img src={chevronRight} alt="" className="header-buttons__icons " />
					</div>

					<div className="header-buttons__dates">
						<div>
							TODAY{" "}
							<img
								className="header-buttons__icon header-buttons__icon--center"
								src={iconChevronDown}
								alt="down"
							/>
						</div>
					</div>
					<div>
						<div className="profile-image2"></div>
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
