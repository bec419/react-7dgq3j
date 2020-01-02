import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Fraud Prevention Hub'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          We help customer avoid fraud by listing every known bank account linked to fraud and scammers.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
