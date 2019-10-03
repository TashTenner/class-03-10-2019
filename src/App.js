import React, { Component } from 'react';

import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import { gradients } from './data/gradients';
import { generateColorHex } from './helpers';

console.log(gradients)
class App extends Component {
  state = {
    gradients: gradients,
    title: 'Pinta y colorea'
  }

  handleAddColor = () => {
    const { gradients } = this.state;
    this.setState({
      gradients: [[generateColorHex(), generateColorHex()], ...gradients],
      title: 'nuevo'
    }, () => {
      console.log('🤣', this.state.gradients)
    })
  }

  render() {
    console.log('render')
    const { title, gradients } = this.state;
    return (
      <div className="container">
        <h1>{title}</h1>
        <Button myProp={this.handleAddColor}>
          Add
        </Button>
        <div className="wrapper">
          {gradients.map((card, index) => {
            return (
              <Card key={`${card[0]}-${index}`} from={card[0]} to={card[1]} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
