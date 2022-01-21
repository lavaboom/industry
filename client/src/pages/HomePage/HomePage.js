// React modules
import React, { Component } from 'react'
// app styles & assets
import './HomePage.scss'
import iconCoach from '../../assets/Icons/coach.svg'
// other sub components
import Card from '../../components/Card/Card'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='placeholder'>Chart here</div>
                <Card icon={ iconCoach }
                    header='LIGHT EXERTION'
                    content='Strain between 6 and 9.9 is considered light. Your accumulated cardiovascular load is low.'
                />
            </div>
        )
    }
}
