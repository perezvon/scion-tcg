import React, { Component } from 'react'
import Card from './Card.jsx'

export default class PlayerHand extends Component {
  constructor(props) {
      super(props);
  }

  render () {
    var playerHand = this.props.hand.map((card, index) => {return (<Card key={index} number={card} playCard={this.props.playCard} />)})
    return (
      <div className="player_hand"><p>Your Hand</p>{playerHand}</div>
    )
  }
}