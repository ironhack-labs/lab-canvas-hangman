let h = 540;
let v = 600;

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = hangman.secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 2.0;
  }

  drawLines() {
    let i = 0;
    let step = 60;

    for (i=0; i<this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(500 + step * i, 600);
      this.ctx.lineTo(530 + step * i, 600);
      this.ctx.closePath();
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
    }
  }

  writeCorrectLetter(index) {
    let step = 60;
    //hangman.checkIfLetter(keyCode);
    this.ctx.font = "30px Arial";
    this.ctx.fillText("A", 505+(step*index), 595);
  }

  writeWrongLetter(letter, errorsLeft) {}

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}

/* let hangman = new HangmanCanvas("Word");

hangman.createBoard();
hangman.writeCorrectLetter(2);
hangman.drawLines(); */
