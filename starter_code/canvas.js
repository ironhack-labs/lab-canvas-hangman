
class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
    this.origin = [300, 700];
    this.hyphen = 50;
    this.blank = 20;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    let x = this.origin[0];
    let y = this.origin[1];
  
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      x += this.hyphen;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      x += this.blank;
    }
  }

  writeCorrectLetter(index) {
    let x = this.origin[0] + (this.hyphen + this.blank) * index;
    let y = this.origin[1] - 10;
    let letter = this.secretWord[index];
    
    this.ctx.font = "50px Arial";
    this.ctx.fillText(letter, x, y);
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