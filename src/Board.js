import React, { Component } from 'react';

class Board extends Component {

  componentDidMount() {
   
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
    let template = ``;
    //painting board
    numbers.forEach(function(element,index) {
       if(element === 0){
            template += `
            <div class="empty-cell" id=${index + 1}>
                ${element}
            </div>
        `
       }else{
            template += `
            <div class="cell" id=${index + 1}>
                ${element}
            </div>
        `
       }
    });
    document.getElementById("board").innerHTML = template;
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
            document.getElementById(position).classList.remove("cell", "shake");

            document.getElementById(element).innerHTML = numInPos;
            document.getElementById(element).classList.add("cell", "shake");
            document.getElementById(element).classList.remove("empty-cell");
        }
      });
  }

  render() {
    return (
        <div id="board" onClick={this.handleClick}>
        </div>
    );
  }
}

export default Board;
