import React, { Component } from 'react'
import Card from './Card.jsx'
import { cards } from './game'

export default class AllCardsList extends Component {
  render () {
    var cardsList = cards.map(card => { return (<Card key={card.number} number={card.number} />)});
    return (
      <div className="cards_list">{cardsList}</div>
    )
  }
}