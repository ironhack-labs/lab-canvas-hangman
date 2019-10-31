
class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.beginPath();
    this.ctx.moveTo(250, 550);
    this.ctx.lineTo(180,650);
    this.ctx.lineTo(320,650);
    this.ctx.lineTo(250,550);
    this.ctx.lineTo(250,100);
    this.ctx.lineTo(500,100);
    this.ctx.lineTo(500,200);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.arc(500, 250, 50, 0, 2 * Math.PI, true);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(500, 300);
    this.ctx.lineTo(500, 450);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(500, 450);
    this.ctx.lineTo(420, 550);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(500, 450);
    this.ctx.lineTo(580, 550);
    this.ctx.stroke();
    this.ctx.closePath();

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

