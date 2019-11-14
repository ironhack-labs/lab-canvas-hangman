
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {

  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}