/*jshint esversion: 6 */
// var canvas = document.getElementById('hangman');
// var ctx = canvas.getContext('2d');
var canvas = document.getElementById("hangman");
class HangmanCanvas {
  constructor(secretWord) {
    //this.ctx = document.getElementById("hangman").getContext("2d");
    this.ctx = canvas.getContext("2d");
    this.linePositionX = 250;
    this.linePositionY = 700;
    this.lineWidth = 40;
    this.lineMargin = 20;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
  }

  drawLines() {
    let secretLetters = hangman.secretWord.split("");
    let initialPos = this.linePositionX;
    let endPos = initialPos + this.lineWidth;
    for (let i = 0; i < secretLetters.length; i++) {
      // console.log(secretLetters[i]);
      // console.log(initialPos);
      // console.log(endPos);
      this.ctx.beginPath();
      this.ctx.moveTo(initialPos, this.linePositionY);
      this.ctx.lineTo(endPos, this.linePositionY);
      this.ctx.stroke();
      initialPos += this.lineWidth + this.lineMargin;
      endPos += this.lineWidth + this.lineMargin;
    }
  }

  writeCorrectLetter(index) {
    // if (hangman.checkClickedLetters(key)) {
    //   this.ctx.fillStyle = "black";
    //   this.ctx.font = "42px sans-serif";
    //   this.ctx.fillText(key, 50, 50);
    //   this.ctx.moveTo(50 + 5, 50 + 5);
    // }
  }

  writeWrongLetter(letter, errorsLeft) {
    // if (hangman.checkClickedLetters(key) === false) {
    //   this.ctx.fillStyle = "black";
    //   this.ctx.font = "42px sans-serif";
    //   this.ctx.fillText(key, 50, 50);
    //   this.ctx.moveTo(50 + 5, 50 + 5);
    // }
  }

  drawHangman(shape) {}

  gameOver() {}

  winner() {}
}
console.log("w " + canvas.width);
console.log("h " + canvas.height);
