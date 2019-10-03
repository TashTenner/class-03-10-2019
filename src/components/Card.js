import React, { Component } from 'react';

import './Card.css';

const cardGradient = (from, to) => ({
  'width': '170px',
  'borderRadius': '12px 12px 0px 0px',
  'backgroundImage': `linear-gradient(135deg, ${from} 10%, ${to} 100%)`,
  'height': '160px',
});

class Card extends Component {
  render() {
    const { from, to } = this.props;
    return (
      <div className="card">
        <div style={cardGradient(from, to)}>
        </div>
        <div className="card-description">
          <div className="card-color-from">{from}</div>
          <div className="card-color-to">{to}</div>
        </div>
      </div>
    );
  }
}

export default Card;