
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {
    let canvas = document.querySelector('#hangman')
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 200, canvas.width, canvas.height);
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