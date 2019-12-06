
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0,0,1200,800);
    this.ctx.lineWidth = 5;
    console.log("print")
    this.drawLines();
  }

  drawLines() {
    let x = 300
    this.ctx.beginPath();
    this.ctx.moveTo(x,600);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.lineTo(x+50, 600);
      this.ctx.moveTo(x+60, 600);
      console.log(i)
      x+=60;
    }
    this.ctx.stroke();
    this.ctx.closePath();
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