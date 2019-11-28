let step = 60;

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
     for (let i=0; i<this.secretWord.length; i++) {
      this.ctx.moveTo(500 + step * i, 600);
      this.ctx.lineTo(530 + step * i, 600);
      this.ctx.stroke();
    }
  }

  writeCorrectLetter(letter, index) {
    this.ctx.font = "30px Arial";
    this.ctx.fillText(letter, 505+(step*index), 595);
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
