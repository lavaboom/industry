// React modules
import React, { Component } from 'react'
import Charts from '../../components/Charts/Charts'
// app styles & assets
import './HomePage.scss'
import iconCoach from '../../assets/Icons/coach.svg'
// other sub components
import Card from '../../components/Card/Card'
import Button from "../../components/Buttons/Button"
import MetricsPanel from '../../components/MetricsPanel/MetricsPanel'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='placeholder'>
                    <Charts metric="7.1" title="DAY STRAIN" btnText="No Activities" />
                </div>
                {/* <MetricsPanel/> */}
                <Card icon={iconCoach}
                    header='LIGHT EXERTION'
                    content='Strain between 6 and 9.9 is considered light. Your accumulated cardiovascular load is low.'
                />
            </div>
        )
    }
}
