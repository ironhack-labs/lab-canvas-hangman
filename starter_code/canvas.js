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
    this.correctLettersPosX = 350;
    this.correctLettersPosY = 700;
    this.lineWidth = 40;
    this.lineMargin = 20;
    this.wrongLettterPosX = 550;
    this.wrongLettersPosY = 200;
    this.drawLines();
  }

  drawLines() {
    this.initialPos = this.correctLettersPosX;
    this.endPos = this.initialPos + this.lineWidth;
    for (let i = 0; i < this.secretLetters.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.initialPos, this.correctLettersPosY);
      this.ctx.lineTo(this.endPos, this.correctLettersPosY);
      this.ctx.stroke();
      this.initialPos += this.lineWidth + this.lineMargin;
      this.endPos += this.lineWidth + this.lineMargin;
    }
  }

  writeCorrectLetter(index) {
    this.ctx.font = "30px sans-serif";
    this.ctx.fillText(
      this.secretWord[index],
      this.correctLettersPosX + index * (this.lineWidth + this.lineMargin),
      this.correctLettersPosY - 10
    );
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "30px sans-serif";
    this.ctx.fillText(letter, this.wrongLettterPosX, this.wrongLettersPosY);
    this.wrongLettterPosX += this.lineMargin * 1.5;
    this.drawHangman(errorsLeft);
  }

  drawHangman(shape) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "#FF0000";
    switch (shape) {
      case 9:
        this.ctx.moveTo(250, 640);
        this.ctx.lineTo(200, 700);
        this.ctx.lineTo(300, 700);
        this.ctx.lineTo(250, 640);
        break;

      case 8:
        this.ctx.moveTo(250, 640);
        this.ctx.lineTo(250, 300);
        break;

      case 7:
        this.ctx.moveTo(250, 300);
        this.ctx.lineTo(500, 300);
        break;

      case 6:
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(500, 360);
        break;

      case 5:
        this.ctx.arc(500, 388, 28, 0, Math.PI * 2);
        break;

      case 4:
        this.ctx.moveTo(500, 416);
        this.ctx.lineTo(500, 530);
        break;

      case 3:
        this.ctx.moveTo(500, 530);
        this.ctx.lineTo(450, 580);
        break;

      case 2:
        this.ctx.moveTo(500, 530);
        this.ctx.lineTo(550, 580);
        break;

      case 1:
        this.ctx.moveTo(450, 440);
        this.ctx.lineTo(550, 440);
        break;

      case 0:
        this.ctx.arc(500, 400, 10, Math.PI, 0);
    }
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  gameOver() {}

  winner() {}
}
console.log("w " + canvas.width);
console.log("h " + canvas.height);
