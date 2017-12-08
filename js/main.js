$(document).ready(() => {

let row = [];
let col = [];
row = ['poop','poop2',54,214,2];
col = ['a','b'];
  // for(i = 0; i < col.length;i++){
  //   let colCreate = document.createElement('div');
  //   colCreate.setAttribute('class', "col"+i);
  //   board.appendChild(colCreate);
  //   let currentCol = document.getElementsByClassName('col'+i)[0];
  //   for(j = 0; j < row.length;j++){
  //     let rowCreate = document.createElement('div');      rowCreate.setAttribute('class', 'col col'+i+ ' row'+j);
  //     currentCol.appendChild(rowCreate);
  //
  //   }
  // }
  // let test = document.createElement('img');
  // test.setAttribute('src','images/bishop.png');
const $board = $('#board');

let createBoard = function createChessBoard(){
  for(i = 0; i < col.length; i++){
    let $colCreate = $("<div>", {"class": "col col" + i});
    $board.append($colCreate);
    let $grabCurrentCol = $(".col" + i);
    //create row entries
    for(j = row.length; j > 0; j--){
      let $rowCreate = $("<div></div>", {"class": "row col" + i + " row" + j});
      $grabCurrentCol.append($rowCreate);
    }
  }
}


createBoard();
}); //end of jquery
