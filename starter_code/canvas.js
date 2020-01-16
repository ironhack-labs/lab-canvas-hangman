
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.createBoard()
  }

  drawLines() {
    this.ctx.beginPath()
    this.ctx.moveTo(700, 500)
    this.ctx.lineTo(750, 500)
    this.ctx.closePath()
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