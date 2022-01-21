import React from 'react';
// app styles & assets
import './NavBarBottom.scss'
import iconHome from '../../assets/Icons/home.svg'
import iconCamera from '../../assets/Icons/camera.svg'
import iconCoach from '../../assets/Icons/coach.svg'
import iconGroup from '../../assets/Icons/group.svg'
import iconMenu from '../../assets/Icons/menu.svg'

export default function NavBarBottom() {
  return (
    <div className='nav-bar-bottom'>
        <div className='nav-bar-bottom__item'>
            <img src={ iconHome } alt='Home' />
        </div>
        <div className='nav-bar-bottom__item'>
            <img src={ iconCoach } alt='Coach' />
        </div>
        <div className='nav-bar-bottom__item'>
            <img src={ iconCamera } alt='Camera' />
        </div>
        <div className='nav-bar-bottom__item'>
            <img src={ iconGroup } alt='Group' />
        </div>
        <div className='nav-bar-bottom__item'>
            <img src={ iconMenu } alt='Menu' />
        </div>
    </div>
  );
}
