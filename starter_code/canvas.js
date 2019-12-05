class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
  }

  createBoard() {
    this.ctx.beginPath();
    this.ctx.moveTo(200,200);
    this.ctx.lineTo(200,500); // Desenho e direcao das linhas
    this.ctx.strokeStyle = 'blue';
    this.ctx.moveTo(200,200);
    this.ctx.lineTo(400,200);
    this.ctx.moveTo(400,200);
    this.ctx.lineTo(400,250);
    this.ctx.stroke();
    //Head
    this.ctx.beginPath();
    this.ctx.arc(400,270,20,0,Math.PI * 2);
    this.ctx.strokeStyle = 'blue';
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(400,290);
    this.ctx.lineTo(400,350);
    this.ctx.stroke();
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