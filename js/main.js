$(document).ready(() => {

let row = [];
let col = [];
row = ['','','','','','','',''];
col = ['','','','','','','',''];
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

//chess piece class constructor
class ChessPiece {
  //rows are called ranks in chess
  //columns are called files in chess
  constructor(piece, color, rank, file, isAlive){
    this.piece = piece;
    this.color = color;
    this.rank = rank;
    this.file = file;
    this.isAlive = isAlive;
  }
  pushIntoArray(){
    //eval(this.color+"Pieces").push(this);
    //depends if I want one or two arrays;
    piecesInPlay.push(this);
    //https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
    //includes other methods instead of eval();
  }
}


const whitePieces = [];
const blackPieces = [];
// which is better
const piecesInPlay = [];

const createPawns = function createBothPlayersPawns(){
  const whitePawn1 = new ChessPiece("pawn", "white", 2, 1, true);
  const whitePawn2 = new ChessPiece("pawn", "white", 2, 2, true);
  const whitePawn3 = new ChessPiece("pawn", "white", 2, 3, true);
  const whitePawn4 = new ChessPiece("pawn", "white", 2, 4, true);
  const whitePawn5 = new ChessPiece("pawn", "white", 2, 5, true);
  const whitePawn6 = new ChessPiece("pawn", "white", 2, 6, true);
  const whitePawn7 = new ChessPiece("pawn", "white", 2, 7, true);
  const whitePawn8 = new ChessPiece("pawn", "white", 2, 8, true);
  const blackPawn1 = new ChessPiece("pawn", "black", 7, 8, true);
  const blackPawn2 = new ChessPiece("pawn", "black", 7, 7, true);
  const blackPawn3 = new ChessPiece("pawn", "black", 7, 6, true);
  const blackPawn4 = new ChessPiece("pawn", "black", 7, 5, true);
  const blackPawn5 = new ChessPiece("pawn", "black", 7, 4, true);
  const blackPawn6 = new ChessPiece("pawn", "black", 7, 3, true);
  const blackPawn7 = new ChessPiece("pawn", "black", 7, 2, true);
  const blackPawn8 = new ChessPiece("pawn", "black", 7, 1, true);
  for(i = 1; i < 9; i++){
    eval("whitePawn"+i).pushIntoArray();
    eval("blackPawn"+i).pushIntoArray();
  }
  console.log(piecesInPlay);
  console.log(piecesInPlay[0].piece)
}

const render = function placeChessPiecesBasedOnLocation(){
  //console.log(piecesInPlay);
  for(let entry of piecesInPlay){
    //console.log(entry);
    let $currentPieceLocation = $(".row" + entry.rank + ".col" + entry.file);
    let $newPiece = $("<img>").attr("src", `images/${entry.color}${entry.piece}.png`);
    $currentPieceLocation.append($newPiece);
    // $currentPieceLocation.css("background", `url('images/${entry.piece}.png')`);
    console.log($currentPieceLocation);
  }
  // for(i = 0; i < piecesInPlay.length; i++){
  //   console.log(this);
  // }
}

const removePiece = function removePieceFromBoard(){
  
}
]
const $board = $('#board');

const createBoard = function createChessBoard(){
  for(i = 1; i < col.length+1; i++){
    let $colCreate = $("<div>", {"class": "col col" + i});
    $board.append($colCreate);
    let $grabCurrentCol = $(".col" + i);
    //create row entries
    for(j = row.length; j > 0; j--){
      let $rowCreate = $("<div></div>", {"class": "row col" + i + " row" + j});
      $rowCreate.addClass("brown")
      //checkerize the background
      if(i % 2 == 0 && j % 2 == 1){
        $rowCreate.removeClass("brown")
        $rowCreate.addClass("beige");
      }
      if(i % 2 == 1 && j % 2 == 0){
        $rowCreate.removeClass("brown")
        $rowCreate.addClass("beige");
      }
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
render();
}); //end of jquery
