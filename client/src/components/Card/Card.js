import React, { Component } from 'react';
// app styles & assets
import './Card.scss';
import hide from '../../assets/Icons/hide.svg';
;


export default class Card extends Component {
  state = {
    animation: false
  }

  disapear = () => {
    this.setState({
      animation: true
    })
  }

  render() {
    return (

      <>
        {!this.props.bar ? <div className='card' onClick={this.disapear}>
          <div className={`card__triangle ${this.state.animation ? "animation" : ""}`} >
          </div>
          <img src={hide} alt="icon" className="card__triangle__icon" />

          <div className='card-header'>
            <img className='card-header__icon' src={this.props.icon} alt='icon' />
            <div className='card-header__text'>{this.props.header}</div>
          </div>
          <div className='card-content'>{this.props.content}</div>
        </div>
          :
          <div className='card2'>
            <div className='card2-header'>
              <img className='card2-header__icon' src={this.props.icon} alt='icon' />
            </div>
            <div className='card2-content'>{this.props.content}</div>
          </div>


        }
      </>

    );
  }
}
