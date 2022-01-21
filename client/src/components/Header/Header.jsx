import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import iconCoach from '../../assets/Icons/coach.svg'
import iconMenu from '../../assets/Icons/menu.svg'
import iconChevronDown from '../../assets/Icons/chevron-down.svg'

export default class Header extends Component {

    render() {
        return (
            <header className='header'>
                <div className='header-buttons'>
                    <div className='header-buttons__icon'>
                        <img src={ iconCoach } alt='left icon' />
                    </div>
                    <div className='header-buttons__dates'>
                        <div>TODAY <img className='header-buttons__icon' src={ iconChevronDown } alt='down' /></div>
                    </div>
                    <div className='header-buttons__icon'>
                    <img src={ iconMenu } alt='right icon' />
                    </div>
                </div>
                <div className='header-nav'>
                    <ul className='header-nav__menu'>
                        <li className='header-nav__item'>OVERVIEW</li>
                        <li className='header-nav__item header-nav__item--selected'>STRAIN</li>
                        <li className='header-nav__item'>RECOVERY</li>
                        <li className='header-nav__item'>SLEEP</li>
                    </ul>
                </div>
            </header>
        )
    }
}
