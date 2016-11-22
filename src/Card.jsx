import React, { Component } from 'react'
import { cards } from './game'
import Icon from './Icon.jsx'
import sun from "../public/svg/sun.svg"
import skull from "../public/svg/skull.svg"
import flame from "../public/svg/flame.svg"
import drop from "../public/svg/drop.svg"
import tree from "../public/svg/tree.svg"
import zero from "../public/svg/zero.svg"
import one from "../public/svg/one.svg"
import two from "../public/svg/two.svg"
import three from "../public/svg/three.svg"
import four from "../public/svg/four.svg"
import five from "../public/svg/five.svg"
import six from "../public/svg/six.svg"



export default class Card extends Component {
  render () {
    var cardNumber = this.props.number;
    var card = cards.filter((card) => { return card.number === cardNumber})[0];
    var name = card.name,
      type = card.type,
      subtype = card.subtype,
      cost = card.cost,
      cardText = card.card_text,
      flavorText = card.flavor_text,
      image = card.image,
      artist = card.artist,
      power = card.power,
      toughness = card.toughness,
      colors = card.colors || [];
      
      //iconize costs
      let iconizedCost;
      if (cost) {
          iconizedCost = cost.split('{').map((char, index) => {
          let iconized;
          switch (char) {
                case 'W}': 
                  iconized = <img src={sun} alt="W" />;
                  break;
                case 'B}': 
                  iconized = <img src={skull} alt="B" />;
                  break;
                case 'R}': 
                  iconized = <img src={flame} alt="R" />;
                  break;      
                case 'U}': 
                  iconized = <img src={drop} alt="U" />;
                  break;
                case 'G}': 
                  iconized = <img src={tree} alt="G" />;
                  break;  
                case '0': 
                  iconized = <img src={zero} alt="0" />;
                  break;  
                case '1': 
                  iconized = <img src={one} alt="1" />;
                  break;
                case '2': 
                  iconized = <img src={two} alt="2" />;
                  break;  
                case '3': 
                  iconized = <img src={three} alt="3" />;
                  break;  
                case '4': 
                  iconized = <img src={four} alt="4" />;
                  break;  
                case '5': 
                  iconized = <img src={five} alt="5" />;
                  break;  
                case '6': 
                  iconized = <img src={six} alt="6" />;
                  break;
                default : 
                  iconized = '';
                  }
          return (<Icon cost={iconized} key={index} />);
      });
      }
      
    var isCreature;
    if (type === 'Creature' || type === 'Legendary Creature') {
      isCreature = power + ' / ' + toughness;
    } else isCreature = '';

    var imageStyle = {
      backgroundImage: 'url(' + image + ')'
    }
    

    var cardColor;
    if (colors.length === 1) {
      switch (colors[0]) {
        case 'Blue':
          cardColor = {
            background: 'rgb(50, 109, 161)'
          }
          break;
        case 'Green':
          cardColor = {
            background: 'rgb(83, 130, 37)'
          }
          break;
        case 'Red':
          cardColor = {
            background: 'rgb(116, 19, 28)'
          }
          break;
        case 'White':
          cardColor = {
            color: 'black',
            background: 'rgb(230, 228, 228)'
          }
          break;
        case 'Black':
          cardColor = {
            background: 'rgb(20, 22, 23)'
          }
          break;
      }
    } else if (colors.length > 1) cardColor = {
      color: 'black',
      background: 'rgb(230, 211, 148)'
    };
    else cardColor = {
      background: 'rgb(135, 106, 98)'
    }
    if (subtype && subtype === 'Token') {
      var tokenImageStyle = {
        height: '260px',
        backgroundImage: 'url(' + image + ')'
      }
      var tokenStyle = {
        textAlign: 'center',
        fontSize: '16px',
        marginTop: '2px',
        paddingTop: '2px'
      }
      return (

        <div className="card" style={cardColor} onClick={this.props.playCard}>
        <div className="card_name" style={tokenStyle}>{name}</div>
        <div className="card_image" style={tokenImageStyle}></div>
      
    <div className="card_footer" style={tokenStyle}>
           <div>{isCreature}</div>
      </div>
 </div>
      )
    } else {
      return (
        <div className="card" style={cardColor}> 
       <div className="card_header">
           <div className="card_name">{name} </div>
           <div className="card_cost">{iconizedCost}</div>
       </div>
        
        <div className="card_image" style={imageStyle}></div>
        
        <div className="card_type">{type}</div>
         <div className="card_text">
  <div className="rule_text">{cardText}</div>
  <hr />
  <div className="flavor_text">{flavorText}</div>
 </div>
         <div className="card_footer">
  <div className="card_artist">{artist}</div> 
           <div className="card_stats">{isCreature}</div>
 </div>
     </div>
      )
    }
  }
};