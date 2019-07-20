class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }
  createBoard() {

  }
  drawLines() {


    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath()

      this.ctx.moveTo(5 + (i * 20), 20);
      this.ctx.lineTo(20 + (i * 20), 20);
      this.ctx.stroke();
      this.ctx.closePath();
    }
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
