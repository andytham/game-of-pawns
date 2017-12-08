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

class ChessPiece {
  constructor(type, color, posX, posY, isAlive){
    this.type = type;
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.isAlive = isAlive;
  }
  pushIntoArray(){
    eval(this.color+"Pieces").push(this);
    //https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
    //includes other methods instead of eval();
  }
}


const whitePieces = [];

const createPawns = function createBothPlayersPawns(){
  const whitePawn1 = new ChessPiece("pawn", "white", 1, 2, true);
  const whitePawn2 = new ChessPiece("pawn", "white", 2, 2, true);
  const whitePawn3 = new ChessPiece("pawn", "white", 3, 2, true);
  const whitePawn4 = new ChessPiece("pawn", "white", 4, 2, true);
  const whitePawn5 = new ChessPiece("pawn", "white", 5, 2, true);
  const whitePawn6 = new ChessPiece("pawn", "white", 6, 2, true);
  const whitePawn7 = new ChessPiece("pawn", "white", 7, 2, true);
  const whitePawn8 = new ChessPiece("pawn", "white", 8, 2, true);
  for(i = 1; i < 9; i++){
    eval("whitePawn"+i).pushIntoArray();
    eval("blackPawn"+i).pushIntoArray();
  }
  console.log(whitePieces);
}


const $board = $('#board');

const createBoard = function createChessBoard(){
  for(i = 1; i < col.length+1; i++){
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

const initBoard = function initalizeChessBoard(){
  return;
}

createBoard();
createPawns();
initBoard();
}); //end of jquery
