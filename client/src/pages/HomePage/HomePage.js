// React modules
import React, { Component } from 'react'
import Charts from '../../components/Charts/Charts'
// app styles & assets
import './HomePage.scss'
import logo from '../../assets/Icons/logo.svg';

// other sub components

import Card from '../../components/Card/Card'
import MetricsPanel from '../../components/MetricsPanel/MetricsPanel'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Charts metric="7.1" title="DAY STRAIN" btnText="No Activities" chartColor="#0072BC" />
                {/* <MetricsPanel/> */}
                <Card icon={logo}
                    header='LIGHT EXERTION'
                    content='Strain between 6 and 9.9 is considered light. Your accumulated cardiovascular load is low.'
                />
            </div>
        )
    }
}
