import React from 'react';
// app styles & assets
import './MetricsPanel.scss';
import iconBrain from '../../assets/Icons/brain.svg'
import iconStress from '../../assets/Icons/stress.svg'
import iconSleep from '../../assets/Icons/sleep.svg'

export default function MetricsPanel() {
  return (
    <div className='panel'>
        <div className='panel-card panel-card--selected'>
            <img className='panel-card__icon' src={ iconBrain } alt='function' />
            <div className='panel-card__desc'>FUNCTION</div>
            <div className='panel-card__metric'>74%</div>
        </div>
        <div className='panel-card'>
            <img className='panel-card__icon' src={ iconStress } alt='stress' />
            <div className='panel-card__desc'>STRESS</div>
            <div className='panel-card__metric'>16</div>
        </div>
        <div className='panel-card'>
            <img className='panel-card__icon' src={ iconSleep } alt='sleep' />
            <div className='panel-card__desc'>SLEEP</div>
            <div className='panel-card__metric'>8 <span className='panel-card__subtext'>hours</span></div>
        </div>
    </div>
  );
}
