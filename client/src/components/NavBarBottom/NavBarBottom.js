import React from 'react';
// app styles & assets
import './NavBarBottom.scss'
import iconHome from '../../assets/Icons/home.svg'
import iconCamera from '../../assets/Icons/camera.svg'
import iconCoach from '../../assets/Icons/coach.svg'
import iconGroup from '../../assets/Icons/group.svg'
import iconMenu from '../../assets/Icons/menu.svg'
import { NavLink } from 'react-router-dom';
;



export default function NavBarBottom() {

    return (
        <div className='nav-bar-bottom'>
            <div className='nav-bar-bottom__item nav-bar-bottom__item--active'>
                <img src={iconHome} alt='Home' className='nav-bar-bottom__item-icon--active' />
            </div>
            <div className='nav-bar-bottom__item'>
                <img src={iconCoach} alt='Coach' className='nav-bar-bottom__item-icon' />
            </div>
            <div className='nav-bar-bottom__item'>
                <img src={iconCamera} alt='Camera' className='nav-bar-bottom__item-icon' />
            </div>
            <div className='nav-bar-bottom__item'>
                <img src={iconGroup} alt='Group' className='nav-bar-bottom__item-icon' />
            </div>
            <div className='nav-bar-bottom__item'>
                <img src={iconMenu} alt='Menu' className='nav-bar-bottom__item-icon' />
            </div>
        </div>
    );
}
