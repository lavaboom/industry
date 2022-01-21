// React modules
import React, { Component } from 'react'
import Charts from '../../components/Charts/Charts';
// app styles & assets
import './HomePage.scss';
import logo from '../../assets/Icons/logo.svg';

// other sub components
import Card from '../../components/Card/Card';
import BarChart from "../../components/BarChart/BarChart";
import MetricsPanel from "../../components/MetricsPanel/MetricsPanel";

export default class HomePage extends

    Component {

    state = {
        activeView: 1,
    };



    switchView = (view) => {
        console.log(view);
        this.setState({
            activeView: view,
        });
    };

    render() {
        const { activeView } = this.state;

        return (
            <div className='home-page'>
                <Charts metric="65" title="FUNCTION" chartColor="#FDE500" precentage={true} />
                <Card icon={logo}
                    header='MODERATE FUNCTION'
                    content='Your Cognitive Function is 10% lower than average due to high stress levels. Try to get 1 extra hour of sleep tonight. '
                />
                <div className={`tip ${activeView === 1 ? "show" : ""}`}>
                    <Card icon={logo}
                        content="During this 7-day period, your average Cognitive Function (75%) was higher than its prior 30-day average (71%)." />
                    <BarChart array={90} />
                </div>

                <div className={`tip ${activeView === 2 ? "show" : ""}`}>
                    <Card icon={logo}
                        content="Your HRV of 110 ms is 11.7% higher than your recent average. Your body is primed to take on Strain today." />
                    <BarChart array={50} />
                </div><div className={`tip ${activeView === 3 ? "show" : ""}`}>
                    <Card icon={logo}
                        content="During this 7-day period, your average Cognitive Function (75%) was higher than its prior 30-day average (71%). Your HRV of 110 ms is 11.7% higher than your recent average. Your body is primed to take on Strain today." />
                    <BarChart array={70} />
                </div>





                <MetricsPanel switchView={this.switchView} />
            </div>
        )
    }
}
