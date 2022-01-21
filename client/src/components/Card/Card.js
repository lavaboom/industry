import React, { Component } from 'react';
// app styles & assets
import './Card.scss';

export default class Card extends Component {
  render() {
    return (
        <div className='card'>
            <div className='card-header'>
                <img className='card-header__icon' src={ this.props.icon } alt='' />
                <div className='card-header__text'>{ this.props.header }</div>
            </div>
            <div className='card-content'>{ this.props.content }</div>
        </div>
    );
  }
}
