
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)

  }

  drawLines() {

    this.ctx.beginPath()

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.moveTo(300 + 100 * i, 600)
      this.ctx.strokeStyle = 'purple'
      this.ctx.lineWidth = 3
      this.ctx.lineTo((300 + 100 * i) + 75,600)
      this.ctx.stroke()
    }

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