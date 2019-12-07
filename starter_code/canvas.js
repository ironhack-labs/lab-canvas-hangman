let ctx = document.getElementById("hangman").getContext("2d");

class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
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
  }

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}

let line = new HangmanCanvas();

line.drawLines();
