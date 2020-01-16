class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 40;
  }

  drawLines() {
    let x = 200
    const y = 600
    const number = this.secretWord.length
    this.ctx.font = "20px Cavolini"
    this.ctx.fillText(`Vida: `, 900, 50)
  }

  writeCorrectLetter(i) {
    this.ctx.font = "35px Cavolini"
    this.ctx.fillText(letter.toUpperCase(), this.index[i], 500)
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