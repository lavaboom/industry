// React modules
import React, { Component } from 'react'
import Charts from '../../components/Charts/Charts';
// app styles & assets
import './HomePage.scss';
import logo from '../../assets/Icons/logo.svg';

// other sub components
import Card from '../../components/Card/Card';
import BarChart from "../../components/BarChart/BarChart";

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <Charts metric="65" title="FUNCTION" chartColor="#FDE500" precentage={true} />
                <Card icon={logo}
                    header='MODERATE FUNCTION'
                    content='Your Cognitive Function is 10% lower than average due to high stress levels. Try to get 1 extra hour of sleep tonight. '
                />
                <BarChart />

            </div>
        )
    }
}
