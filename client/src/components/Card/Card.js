import React, { Component } from 'react';
// app styles & assets
import './Card.scss';
import hide from '../../assets/Icons/hide.svg';
;


export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className="card__triangle">
        </div>
        <img src={hide} alt="icon" className="card__triangle__icon" />

        <div className='card-header'>
          <img className='card-header__icon' src={this.props.icon} alt='icon' />
          <div className='card-header__text'>{this.props.header}</div>
        </div>
        <div className='card-content'>{this.props.content}</div>
      </div>
    );
  }
}
