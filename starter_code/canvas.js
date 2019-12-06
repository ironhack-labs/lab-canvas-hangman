let ctx = document.getElementById("hangman").getContext("2d");

class HangmanCanvas {
  constructor(secretWord) {
    // this.startPos = [secretWord[0], secretWord[1]];
    this.secretWord = secretWord;
    // this.startPos = [pos[0],pos[1]];
    // this.pos = pos
    // this.size = [50,50];
    // this.speed = [pxSec[0],pxSec[1]];
  }

  createBoard() {
    ctx.clearRect = (0, 0, 1200, 800);
  }

  drawLines() {
    ctx.setLineDash([32, 12]);
    ctx.beginPath();
    ctx.moveTo(275, 700);
    ctx.lineTo(575, 700);
    ctx.stroke();
  }

  writeCorrectLetter(index) {
   if (hangman.checkClickedLetters(index) === false) {
    console.log("hola");
   }
    // this.secretWord.forEach(function(e){
    //   if(e === index) {
    //     console.log("hola");
    //   }
    // })
  }

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}

let line = new HangmanCanvas();

// function drawLines(){line.drawLines()}
line.drawLines();

// window.addEventListener("DOMContentLoaded", drawLines);
