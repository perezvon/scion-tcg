import React, { Component } from 'react'
import Stats from './Stats'

export default class StatsContainer extends Component {
    render () {
    return (
        <div>
        <Stats player="opponent" />
        <Stats player="player" />
        </div>
    )
  }
};