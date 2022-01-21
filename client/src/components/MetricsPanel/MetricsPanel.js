import React, { Component } from 'react';
// app styles & assets
import './MetricsPanel.scss';
import iconBrain from '../../assets/Icons/brain.svg'
import iconStress from '../../assets/Icons/stress.svg'
import iconSleep from '../../assets/Icons/sleep.svg'
import iconDotted from '../../assets/Icons/dotted.svg'

export default class MetricsPanel extends Component {

  state = {
    activeButton: 1
  }

  clickHandler = (number) => {
    this.setState({ activeButton: number })
    this.props.switchView(number)
  }

  render() {


    return (

      <div className='panel'>
        <div
          className={`panel-card ${this.state.activeButton === 1 ? 'panel-card--selected' : ''}`}
          onClick={() => { this.clickHandler(1) }}
        >
          <img className='panel-card__icon' src={iconBrain} alt='function' />
          <div className='panel-card__desc'>FUNCTION</div>
          <div className='panel-card__metric'>75%</div>
        </div>
        <div
          className={`panel-card ${this.state.activeButton === 2 ? 'panel-card--selected' : ''}`}
          onClick={() => { this.clickHandler(2) }}
        >
          <img className='panel-card__icon' src={iconStress} alt='stress' />
          <div className='panel-card__desc'>STRESS</div>
          <div className='panel-card__metric'>10</div>
        </div>
        <div
          className={`panel-card ${this.state.activeButton === 3 ? 'panel-card--selected' : ''}`}
          onClick={() => { this.clickHandler(3) }}
        >
          <img className='panel-card__icon' src={iconSleep} alt='sleep' />
          <div className='panel-card__desc'>SLEEP</div>
          <div className='panel-card__metric'>7<span className='panel-card__subtext'>Hr</span></div>
        </div>
        <div className="pannel-average">
          7-Day Average
        </div>

      </div>
    );
  }
}
