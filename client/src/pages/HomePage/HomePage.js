// React modules
import React, { Component } from 'react'
// app styles & assets
import './HomePage.scss'
// other sub components
import NavBarBottom from '../../components/NavBarBottom/NavBarBottom'
import BarChart from '../../components/BarChart/BarChart'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <p>This is Home Page</p>
                <BarChart />
                <NavBarBottom />
            </div>
        )
    }
}
