import React, { Component } from 'react'
import Battlefield from './Battlefield.jsx'
import UIButtons from './UIButtons.jsx'
import PlayerHand from './PlayerHand.jsx'
import StatsContainer from './StatsContainer.jsx'
import { currentGame, player } from './gameController'


export default class App extends Component {
    constructor (props) {
        super (props);
        this.nextPhase = this.nextPhase.bind(this);
        this.passTurn = this.passTurn.bind(this);
        this.drawCard = this.drawCard.bind(this);
        this.playCard = this.playCard.bind(this);
    }
    nextPhase () {
        currentGame.nextState(currentGame.currentState);
        this.setState({
            phase: currentGame.currentState.phase
        })
    }
    
      passTurn () {
    currentGame.currentState.nextTurn();
          this.setState({
              turn: currentGame.currentState.turn.activePlayer
          })
  }
      drawCard () {
    player.deck.draw(player.hand, 1);
    this.setState({
      deck: player.deck
    })
  }
    
    playCard () {
        this.setState({
            hand: player.hand
        })
        console.log(player.hand);
    }
    
    render () {
    return (
        <div>
            <Battlefield />
            <StatsContainer />
            <UIButtons nextPhase={this.nextPhase} passTurn={this.passTurn} drawCard={this.drawCard} turn={currentGame.currentState.turn.activePlayer} phase={currentGame.currentState.phase} deck={player.deck.name} />
            <PlayerHand hand={player.hand} playCard={this.playCard} />
        </div>)
  }
};
