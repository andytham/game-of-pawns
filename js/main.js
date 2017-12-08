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
  constructor(piece, color, number, rank, file, isAlive, isSelected){
    this.piece = piece;
    this.color = color;
    this.number = number;
    this.rank = rank;
    this.file = file;
    this.isAlive = isAlive;
    this.isSelected = isSelected;
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
  const whitepawn1 = new ChessPiece("pawn", "white", 1, 2, 1, true, false);
  const whitepawn2 = new ChessPiece("pawn", "white", 2, 2, 2, true, false);
  const whitepawn3 = new ChessPiece("pawn", "white", 3, 2, 3, true, false);
  const whitepawn4 = new ChessPiece("pawn", "white", 4, 2, 4, true, false);
  const whitepawn5 = new ChessPiece("pawn", "white", 5, 2, 5, true, false);
  const whitepawn6 = new ChessPiece("pawn", "white", 6, 2, 6, true, false);
  const whitepawn7 = new ChessPiece("pawn", "white", 7, 2, 7, true, false);
  const whitepawn8 = new ChessPiece("pawn", "white", 8, 2, 8, true, false);
  const blackpawn1 = new ChessPiece("pawn", "black", 1, 7, 8, true, false);
  const blackpawn2 = new ChessPiece("pawn", "black", 2, 7, 7, true, false);
  const blackpawn3 = new ChessPiece("pawn", "black", 3, 7, 6, true, false);
  const blackpawn4 = new ChessPiece("pawn", "black", 4, 7, 5, true, false);
  const blackpawn5 = new ChessPiece("pawn", "black", 5, 7, 4, true, false);
  const blackpawn6 = new ChessPiece("pawn", "black", 6, 7, 3, true, false);
  const blackpawn7 = new ChessPiece("pawn", "black", 7, 7, 2, true, false);
  const blackpawn8 = new ChessPiece("pawn", "black", 8, 7, 1, true, false);
  for(i = 1; i < 9; i++){
    eval("whitepawn"+i).pushIntoArray();
    eval("blackpawn"+i).pushIntoArray();
  }
    console.log(piecesInPlay[1]);
  // console.log(piecesInPlay);
  // console.log(piecesInPlay[0].piece)
}

const render = function placeChessPiecesBasedOnLocation(){
  //console.log(piecesInPlay);

  for(let entry of piecesInPlay){
    //console.log(entry);
    // wipe board?

    //checks if piece is alive then places on board
    if(entry.isAlive === true){
      let $currentPieceLocation = $(".row" + entry.rank + ".col" + entry.file);
      let $newPiece = $("<img>").attr("src", `images/${entry.color}${entry.piece}.png`);
      $currentPieceLocation.attr({
        "data-color": entry.color,
        "data-piece": entry.piece,
        "data-number": entry.number,
        "data-isAlive": entry.isAlive
      });

      //console.log($currentPieceLocation);
      $currentPieceLocation.append($newPiece);
      $currentPieceLocation.click(selectPiece);
      // $currentPieceLocation.css("background", `url('images/${entry.piece}.png')`);
    }
  }
  // for(i = 0; i < piecesInPlay.length; i++){
  //   console.log(this);
  // }
}
//select piece for action
const selectPiece = function selectPiece(){
  this.isSelected = true;
  //console.log(this);
  checkAllowedMoves(this);
}


//click again on piece to deselect
const deselectPiece = function deselectPiece(){
  this.isSelected = false;
}

const checkAllowedMoves = function checkWhichMovesArePossibleForSelectedPiece(selectedPiece){
  $selectedPiece = $(selectedPiece);
  //console.log($selectedPiece.attr("data-piece"));
  let findColor = $selectedPiece.attr("data-color");
  let findPiece = $selectedPiece.attr("data-piece");
  let findNumber = $selectedPiece.attr("data-number");
  //https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  //find the object in the array
  let findObjectInArray = piecesInPlay.filter(function(selPiece){
    return selPiece.color == findColor && selPiece.piece == findPiece && selPiece.number == findNumber;
  })
  console.log(findObjectInArray);
  console.log(findObjectInArray[0].rank);
  //possibleMoves stores each possible square move
  let possibleMoves = [];
  possibleMoves.push(`.row${findObjectInArray[0].rank + 2}.col${findObjectInArray[0].file}`);  possibleMoves.push(`.row${findObjectInArray[0].rank + 1}.col${findObjectInArray[0].file}`);  possibleMoves.push(`.row${findObjectInArray[0].rank + 1}.col${findObjectInArray[0].file - 1}`);
  possibleMoves.push(`.row${findObjectInArray[0].rank + 1}.col${findObjectInArray[0].file + 1}`);
  possibleMoves.push(findObjectInArray[0]);
  console.log(possibleMoves + 'hello');
  for(i = 0; i < possibleMoves; i++){
    //check if empty space
    if($(possibleMoves).attr("data-isAlive") == true){
      console.log('yes there is something here');
    } else{
      console.log('there is nothing here');
    }
    let targetedSquare = $(possibleMoves[i]);
    let targetColor = $selectedPiece.attr("data-color");
    let targetPiece = $selectedPiece.attr("data-piece");
    let targetNumber = $selectedPiece.attr("data-number");
  }
  if(this.piece === "pawn"){
    if(this.color === "white"){
      let newPos = `row${this.rank} col${this.file}`;
      console.log(newPos);
    }
  }
}

//
const removeClicks = function clearClickEvents(){

}

const updatePos = function updateChessPiecePosition(){

}

const removePiece = function removePieceFromBoard(){
  $(this).detach();
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
