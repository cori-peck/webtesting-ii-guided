import React, { Component } from 'react';
import './App.css';

import Greeting from './greeting/Greeting';

class App extends Component {
  state = {
    greeting: "No greeting for you"
  }

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <Greeting msg={this.state.greeting} />
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Web XVII' });
  }

  bye = () => {
    this.setState({greeting: 'Bye Web XVII' })
  }

}

export default App;
