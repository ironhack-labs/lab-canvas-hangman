
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect( 0, 0, 1200, 800 );

    this.ctx.beginPath();

    this.ctx.lineWidth = 10;
    this.ctx.strokeRect( 0, 0, 1200, 800 );
    this.ctx.stroke();

    this.drawLines();
  }

  drawLines() {
    let lineStartInit = 600;
    let lineStart = 0;
    let lineLength = 50;
    let lineGap = 10;
    let letterCount = 4;

    this.ctx.beginPath();

    this.ctx.lineWidth = 10;
    for( let xx=0; xx < letterCount; xx++ ) {
      lineStart = xx * (lineLength + lineGap);
      this.ctx.moveTo(lineStartInit+lineStart,600);
      this.ctx.lineTo(lineStartInit+lineStart+lineLength,600);
    }
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