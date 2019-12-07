/*jshint esversion: 6 */
var canvas = document.getElementById("hangman");
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = canvas.getContext("2d");
    this.secretWord = secretWord;
    this.secretLetters = hangman.secretWord.split("");
    this.createBoard();
    this.drawLines();
  }

  createBoard() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    //this.linePositionX = 250;
    this.guessedWordsPosX = 250;
    this.guessedWordsPosY = 700;
    this.lineWidth = 40;
    this.lineMargin = 20;
    this.wrongWordsPosX = 350;
    this.wrongWordsPosY = 200;
  }

  drawLines() {
    // this.initialPos = this.guessedWordsPosX;
    // this.endPos = initialPos + this.lineWidth;
    // for (let i = 0; i < this.secretLetters.length; i++) {
    //   // console.log(secretLetters[i]);
    //   // console.log(initialPos);
    //   // console.log(endPos);
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(this.initialPos, this.linePositionY);
    //   this.ctx.lineTo(this.endPos, this.guessedWordsPosY);
    //   this.ctx.stroke();
    //   initialPos += this.lineWidth + this.lineMargin;
    //   this.endPos += this.lineWidth + this.lineMargin;
    // }
  }

  // write(letter, x, y) {
  //   this.ctx.font = "70px Arial";
  //   this.ctx.fillText(letter, x, y);
  // }

  writeCorrectLetter(index) {
    console.log(index);
    this.ctx.font = "42px sans-serif";
    this.ctx.fillText(this.secretWord[index], 50, 50);
    this.ctx.moveTo(50 + 5, 50 + 5);
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
