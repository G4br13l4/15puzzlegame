import React, { Component } from 'react';
import './App.css';
import Canvas from './Canvas';

class App extends Component {
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }      

  onKeyPressed(e) {
    console.log(e.keyCode);
  }   

  render() {
    return (
      
      <div className="App" onKeyDown={this.onKeyPressed}
      tabIndex="0">
        <header className="App-header">
          <h1 className="App-title">15 Puzzle Game</h1>
        </header>
        <Canvas/>
      </div>
      
    );
  }
}

export default App;
