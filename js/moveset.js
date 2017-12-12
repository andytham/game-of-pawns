// if(playerColor == "white"){
//   let forward2 = 2;
//   let forward1 = 1;
//   let backward1 = - 1;
//
// }

class PawnMoves extends ChessPiece{
  constructor(forward1, forward2, diagonalRight, diagonalLeft, enPassant, promotion){

  }
  forward1(){

  }
  forward2(){

  }

}


    else if (playerTurn == "black") {
      if (selectedChessPiece[0].color == "black") { //black pawn possible moves
        let rankFix = Number(selectedChessPiece[0].rank);
        let fileFix = Number(selectedChessPiece[0].file);
        let rank1Fix = Number(selectedChessPiece[0].rank) - 1;
        let rank2Fix = Number(selectedChessPiece[0].rank) - 2;
        let file1Fix = Number(selectedChessPiece[0].file) - 1;
        let fileRev1Fix = Number(selectedChessPiece[0].file) + 1;

        let move0 = $(".row" + rankFix + ".col" + fileFix);
        let move1 = $(".row" + rank1Fix + ".col" + fileFix);
        let move2 = $(".row" + rank2Fix + ".col" + fileFix);
        let move3 = $(".row" + rank1Fix + ".col" + file1Fix);
        let move4 = $(".row" + rank1Fix + ".col" + fileRev1Fix);
        let move5 = $(".row" + rankFix + ".col" + file1Fix); //en passant to their right
        let move6 = $(".row" + rankFix + ".col" + fileRev1Fix); //en passant to their left
        removeClicks();

        move0.css("border", "2px #4283ED solid");
        move0.click(function() {
          console.log("canceled click");
          render();
        })

        if (move1.attr("data-isAlive") == "false") {
          //set click event on this
          move1.css("border", "2px red solid");
          move1.click(function() { //single move forward
            //regex help, updates the position of the selected piece
            //https://stackoverflow.com/questions/10003683/javascript-get-number-from-string
            currentTarget = $(this).attr("class");
            let findPosRegex = currentTarget.match(/\d/g);
            selectedChessPiece[0].file = findPosRegex[0];
            selectedChessPiece[0].rank = findPosRegex[1];
            if (selectedChessPiece[0].rank == 1) {
              console.log("reached promotion");
              selectedChessPiece[0].piece = "queen"; //promote to queen
              console.log(selectedChessPiece[0].piece);
              render();
            }
            let historyRegex = currentTarget.match(/\d/g);
            updateHistory(historyRegex[1],historyRegex[0]);
            playerTurn = "white";
            render();
          })

          console.log(move2.attr("data-isAlive"));
          if (move2.attr("data-isAlive") == "false" && selectedChessPiece[0].rank == 7) { //double move forward
            move2.css("border", "2px red solid");
            move2.click(function() {
              currentTarget = $(this).attr("class");
              let findPosRegex = currentTarget.match(/\d/g);
              selectedChessPiece[0].file = findPosRegex[0];
              selectedChessPiece[0].rank = findPosRegex[1];
              selectedChessPiece[0].isEnPassantable = true;
              playerTurn = "white";
              render();
            });
          }
          console.log(move1.attr("data-isAlive"));
        } else if (move1.attr("data-isAlive") == "true") {
          console.log('something in the way');
        } else {
          console.log('something broke');
        }
        console.log("isalive" + move3.attr("data-isAlive") + "COLOR" + move3.attr("data-color"))
        if (move3.attr("data-isAlive") == "true" && move3.attr("data-color") == "white") {
          console.log('MOVE 3 TRYING TO EXECUTE')
          move3.css("border", "2px red solid");
          move3.click(function() {
            let targetColor = move3.attr("data-color");
            let targetPiece = move3.attr("data-piece");
            let targetNumber = move3.attr("data-number");
            let targetChessPiece = piecesInPlay.filter(function(tarPiece) {
              return tarPiece.color == targetColor && tarPiece.piece == targetPiece && tarPiece.number == targetNumber;
            });
            targetChessPiece[0].isAlive = false;
            selectedChessPiece[0].rank = targetChessPiece[0].rank;
            selectedChessPiece[0].file = targetChessPiece[0].file;
            playerTurn = "white";
            render();
          });
        } else if (move5.attr("data-isAlive") == "true" && move5.attr("data-color") == "white" && move5.attr("data-piece") == "pawn") { // En passant to the right
          let targetColor = move5.attr("data-color");
          let targetPiece = move5.attr("data-piece");
          let targetNumber = move5.attr("data-number");
          let targetChessPiece = piecesInPlay.filter(function(tarPiece) {
            return tarPiece.color == targetColor && tarPiece.piece == targetPiece && tarPiece.number == targetNumber;
          });

          if (targetChessPiece[0].isEnPassantable == true) {

            move3.css("border", "2px red solid");
            move3.click(function() {
              targetChessPiece[0].isAlive = false;
              selectedChessPiece[0].rank = rank1Fix;
              selectedChessPiece[0].file = file1Fix;
              playerTurn = "black";
              render();
            });
          }
        }
        if (move4.attr("data-isAlive") == "true" && move4.attr("data-color") == "white") {
          move4.css("border", "2px red solid");
          move4.click(function() {
            let targetColor = move4.attr("data-color");
            let targetPiece = move4.attr("data-piece");
            let targetNumber = move4.attr("data-number");
            let targetChessPiece = piecesInPlay.filter(function(tarPiece) {
              return tarPiece.color == targetColor && tarPiece.piece == targetPiece && tarPiece.number == targetNumber;
            });
            targetChessPiece[0].isAlive = false;
            selectedChessPiece[0].rank = targetChessPiece[0].rank;
            selectedChessPiece[0].file = targetChessPiece[0].file;
            playerTurn = "white";
            render();
          })
        } else if (move6.attr("data-isAlive") == "true" && move6.attr("data-color") == "white" && move6.attr("data-piece") == "pawn") { // En passant to the right
          let targetColor = move6.attr("data-color");
          let targetPiece = move6.attr("data-piece");
          let targetNumber = move6.attr("data-number");
          let targetChessPiece = piecesInPlay.filter(function(tarPiece) {
            return tarPiece.color == targetColor && tarPiece.piece == targetPiece && tarPiece.number == targetNumber;
          });

          if (targetChessPiece[0].isEnPassantable == true) {

            move4.css("border", "2px red solid");
            move4.click(function() {
              targetChessPiece[0].isAlive = false;
              selectedChessPiece[0].rank = rank1Fix;
              selectedChessPiece[0].file = fileRev1Fix;
              playerTurn = "black";

              render();
            });
          }
        }
      } //end of black pawn logic
