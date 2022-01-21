// React modules
import React, { Component } from 'react'
import Charts from '../../components/Charts/Charts'
// app styles & assets
import './HomePage.scss'
import logo from '../../assets/Icons/logo.svg'
// other sub components
import Card from '../../components/Card/Card'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Charts metric="89" title="RECOVERY" chartColor={"#28FF0A"} precentage={true} />
                <Card icon={logo}
                    header='ELEVATED RECOVERY'
                    content='Your HRV of 110 ms is 11.7% higher than your recent average. Your body is primed to take on Strain today.'
                />
            </div>
        )
    }
}
