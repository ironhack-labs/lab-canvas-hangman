
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
    
  }

  createBoard() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 700);
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(20,650);
    this.ctx.lineTo(220, 650);
    this.ctx.lineTo(110, 550);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(110,550);
    this.ctx.lineTo(110, 100);
    this.ctx.moveTo(110, 100);
    this.ctx.lineTo(300, 100);
    this.ctx.closePath();
    this.ctx.stroke();
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


