
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800)
    this.drawLines()
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

  writeCorrectLetter(letter) {  // Cambie index por letter

    this.ctx.beginPath()
    this.ctx.font = '100px Arial'
    for (let i = 0; i < this.secretWord.length; i++) { // Para cada letra en secretWord.
      if (letter == this.secretWord[i]) { // ¿Coincide la letra y el índice de secretWord?
        this.ctx.fillText(letter, 300 + 100 * i, 590)
      }
    }
    this.ctx.closePath()
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