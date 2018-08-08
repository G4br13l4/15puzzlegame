import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this); //porque llaman al metodo de componente hijo
    this.restart = this.restart.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }
  
  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }      

  onKeyPressed(e) {
    //detener se llame dos veces
    e.stopImmediatePropagation();
    //variables
    let keyPressed = e.keyCode;
    let board = document.querySelectorAll("#board div");
    let position = 0;
    board.forEach(function(element) {
        if(element.innerHTML==0){
            position = parseInt(element.id);
        }
    });
    let numInPos = document.getElementById(position).innerHTML;
    let newPos = 0;
    
    //evento key hacia arriba
    if(keyPressed === 38 && position >= 1 && position <=12){
      newPos = position + 4;
    }

    //evento key hacia abajo
    if(keyPressed === 40 && position >= 5 && position <=16){
      newPos = position - 4 ; 
    }
    
    //evento key hacia la izquierda
     if(keyPressed === 37 && position % 4 !== 0 ){
      newPos = position + 1;
    }

    //evento al dar click a la izquierda
    if(keyPressed === 39 && position !== 1 && position !== 5 && position !== 9 && position !== 13){
      newPos = position - 1;
    }

    //cambiando posicion
    if(position !== 0 && newPos !==0){
      document.getElementById(position).innerHTML = document.getElementById(newPos).innerHTML;
      document.getElementById(position).classList.add("full-cell","shake");
      document.getElementById(position).classList.remove("empty-cell");

      document.getElementById(newPos).innerHTML = numInPos;
      document.getElementById(newPos).classList.add("empty-cell");
      document.getElementById(newPos).classList.remove("full-cell","shake");
    } 
    this.refs.board.win();
  }   

  start(){
    this.refs.board.initBoard();
    setTimeout(function() {
       this.restart();
    }.bind(this), 2000); 
  }

  restart(){
    this.refs.board.randBoard();
  }

  closeModal(){
    let modal = document.getElementsByClassName("myModal")[0];
    modal.style.display = "none";
  }

  render() {
    return (
      
      <div className="App" onKeyDown={this.onKeyPressed}
      tabIndex="1">
        <header className="App-header">
          <h1 className="App-title">15 Puzzle Game</h1>
        </header>
        <div className="row row-btns" >
            <button onClick={this.start}>Start</button>
            <button onClick={this.restart}>Restart</button>
        </div>

        {/* Modal */}
        <div className="row">
          <div className="myModal">
            <span className="close" onClick={this.closeModal}>&times;</span>
            <p>YOU WIN!!! </p>
          </div>
        </div>

        
        <div className="row row-board">
          <Board ref="board"/>
        </div>
      </div>
      
    );
  }
}

export default App;
