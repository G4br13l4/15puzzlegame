import React, { Component } from 'react';

class Canvas extends Component {

  componentDidMount() {
    let board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
    let template = ``;
    //painting board
    board.forEach(function(element,index) {
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
    document.getElementById("canvas").innerHTML = template; 
  }

  handleClick(e) {
    //variables
    let position = parseInt(e.target.id);
    let numInPos = e.target.innerHTML;
    let posibPos = [];
    
    //evento al dar arriba
    if(position >= 5 && position <=16){
        let up = document.getElementById(`${position - 4}`).id;
        posibPos.push(up);    
    }

    //evento al dar abajo
    if(position >= 1 && position <=12){
        let down = document.getElementById(`${position + 4}`).id;
        posibPos.push(down);
    }

    //evento al dar a la derecha
    if(position % 4 !== 0 ){
        let rig = document.getElementById(`${position + 1}`).id;
        posibPos.push(rig);
    }
    
    //evento al dar a la izquierda
    if(position !== 1 && position !== 5 && position !== 9 && position !== 13){
        let lef = document.getElementById(`${position - 1}`).id;
        posibPos.push(lef);
    }
    
    posibPos.forEach(function(element) {
        let newPos = document.getElementById(element).innerHTML;
    
        if(newPos == 0){
            //intercambiar posicion (actual a nueva)
            document.getElementById(position).innerHTML = newPos;
            document.getElementById(position).className = "empty-cell";

            document.getElementById(element).innerHTML = numInPos;
            document.getElementById(element).className = "cell";
        }
      });
  }

  render() {
    return (
        <div className="row">
            <div id="canvas" onClick={this.handleClick}>
            </div>
        </div>
    );
  }
}

export default Canvas;
