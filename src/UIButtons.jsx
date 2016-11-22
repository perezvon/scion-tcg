import React, { Component } from 'react'

export default class UIButtons extends Component {
  constructor(props) {
      super(props);
      
  }
    
  render () {
    return (
      <div className='buttons'>
        <button className='ui_button' id='nextPhase' onClick={this.props.nextPhase}>Next Phase</button>
        <button className='ui_button' id='passTurn' onClick={this.props.passTurn}>Pass Turn</button>
        <button className='ui_button' id='drawCard' onClick={this.props.drawCard}>Draw Card</button>        
        <p>current turn: {this.props.turn === 0 ? 'Player One' : 'Player Two'}</p>
        <p>current phase: {this.props.phase}</p>
        <p>current deck: {this.props.deck}</p>
      </div>
    )
  }
};