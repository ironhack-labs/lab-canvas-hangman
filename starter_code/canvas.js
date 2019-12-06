
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(125,675);
    this.ctx.lineTo(100,700);
    this.ctx.lineTo(150,700);
    this.ctx.lineTo(125,675);
    this.ctx.lineto(125,200);
    this.ctx.lineto(300,200);
    this.ctx.lineto(300,250);
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