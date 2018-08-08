import React, { Component } from 'react';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initBoard:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0],
            randBoard: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0], 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.initBoard();
    }

    paintBoard(numbers){
        let template = ``;
        //painting board
        numbers.forEach(function(element,index) {
        if(element === 0){
                template += `
                <div class="cell empty-cell" id=${index + 1}>
                    ${element}
                </div>
            `
        }else{
                template += `
                <div class="cell full-cell" id=${index + 1}>
                    ${element}
                </div>
            `
        }
        });
        document.getElementById("board").innerHTML = template;
    }

    initBoard(){
       this.paintBoard(this.state.initBoard);
    }

    randBoard(){
        let numbers = this.state.randBoard;
        //Algoritmo Fisher Yates
        for (var i = numbers.length -1; i > 1; i--){
            let pick = Math.floor(i * Math.random()); //obtener random index
            let temp = numbers[i]; // guardar valor de actual posicion
            numbers[i] = numbers[pick]; // guardar valor random en posicion actual
            numbers[pick] = temp; // guardar valor actual en posicion random
        }
        this.paintBoard(numbers);
    }

    handleClick(e) {
    
    //variables
    let position = parseInt(e.target.id);
    let numInPos = e.target.innerHTML;
    let posibPos = [];
    
    //evento al dar click arriba
    if(position >= 5 && position <=16){
        let up = position - 4;
        posibPos.push(up);    
    }

    //evento al dar click abajo
    if(position >= 1 && position <=12){
        let down = position + 4;
        posibPos.push(down);
    }

    //evento al dar click a la derecha
    if(position % 4 !== 0 ){
        let rig = position + 1;
        posibPos.push(rig);
    }
    
    //evento al dar click a la izquierda
    if(position !== 1 && position !== 5 && position !== 9 && position !== 13){
        let lef = position - 1;
        posibPos.push(lef);
    }
    
    posibPos.forEach(function(element) {
        let newPos = document.getElementById(element).innerHTML;
    
        if(newPos == 0){
            //intercambiar posicion (actual a nueva)
            document.getElementById(position).innerHTML = newPos;
            document.getElementById(position).classList.add("empty-cell");
            document.getElementById(position).classList.remove("full-cell", "shake");

            document.getElementById(element).innerHTML = numInPos;
            document.getElementById(element).classList.add("full-cell", "shake");
            document.getElementById(element).classList.remove("empty-cell");
        }
      });
      this.win();
    }

    win(){
        let board = document.querySelectorAll("#board div");
        let counter = 0;
        board.forEach(function(element) {
            let num = parseInt(element.innerHTML);
            let id = parseInt(element.id);
            if(num == id){
                counter ++;
            }
        });
        if(counter == "15"){
            let modal = document.getElementsByClassName("myModal")[0];
            modal.style.display = "block";
        }
    }

    render() {
        return (
            <div id="board" onClick={this.handleClick}>
            </div>
        );
    }
}

export default Board;
