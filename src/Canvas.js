import React, { Component } from 'react';

class Canvas extends Component {

  componentDidMount() {
    let board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];
    let template = ``;
    //painting board
    board.forEach(function(element,index) {
       if(element === 0){
            template += `
            <div class="empty-cell" id=${index}>
                ${element}
            </div>
        `
       }else{
            template += `
            <div class="cell" id=${index}>
                ${element}
            </div>
        `
       }
    });
    document.getElementById("canvas").innerHTML = template;  
      
  }
  render() {
    return (
        <div className="row">
            <div id="canvas">
            </div>
        </div>
    );
  }
}

export default Canvas;
