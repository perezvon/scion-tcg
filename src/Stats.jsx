import React, { Component } from 'react'
import { player } from './gameController'

export default class Stats extends Component {
    render () {
    return (
        <div className="player_stats">
            {player.avatar}
            {player.lifeTotal}
            {player.cardsInHand}
            {player.cardsInDeck}
        </div>
    )
  }
};