import React, { Component } from 'react'

export default class Icon extends Component {
    render () {
        return (
            <div className="card_icon">{this.props.cost}</div>
        )
    }
}