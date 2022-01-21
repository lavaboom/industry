// React modules
import React, { Component } from 'react'
import Charts from '../../components/Charts/Charts'
// app styles & assets
import './HomePage.scss'
import iconCoach from '../../assets/Icons/coach.svg'
// other sub components
import Card from '../../components/Card/Card'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Charts metric="7.1" title="DAY STRAIN" btnText="No Activities" />
                <Card icon={iconCoach}
                    header='LIGHT EXERTION'
                    content='Strain between 6 and 9.9 is considered light. Your accumulated cardiovascular load is low.'
                />
            </div>
        )
    }
}
