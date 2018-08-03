import React, { Component } from 'react';
import './App.css';
import Canvas from './Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">15 Puzzle Game</h1>
        </header>
        <Canvas/>
      </div>
    );
  }
}

export default App;