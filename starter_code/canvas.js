
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    ctx = this.ctx
    
    
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.ctx.fillStyle="white";
    this.ctx.fillRect(0, 0, 1200, 800);
    this.ctx.lineWidth(10)

  }

  drawLines() {
    this.ctx.beginPath()
    this.ctx.moveTo(1000,)

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