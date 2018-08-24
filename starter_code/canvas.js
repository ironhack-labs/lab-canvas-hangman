class HangmanCanvas {
  constructor(secret) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.canvasSecret = secret.split("");
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 2;
  }

  drawLines() {
    var x = 228;
    var y = 700;
    var letterSpace = 108;
    console.log(this.canvasSecret);
    this.ctx.beginPath();
    // this.canvasSecret.split('').forEach(element => {

    // });
    for (var i = 0; i < this.canvasSecret.length; i++) {
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + letterSpace, y);
      this.ctx.stroke();
      x += letterSpace + 10;
    }
  }
  writeCorrectLetter(letter, i) {
    var x = 260;
    var y = 680;
    var letterSpace = 108;
    this.ctx.font = "102px serif";
    this.ctx.beginPath();
    console.log(letter);
    console.log(this.canvasSecret);

    // let currentLetter = this.canvasSecret.indexOf(letter);
    this.ctx.fillText(letter, x + i * (letterSpace + 10), y);
  }

  writeWrongLetter(letter) {
    var x = 600;
    var y = 204;
    var letterSpace = 50;
    this.ctx.font = "24px serif";
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    console.log(letter);
    console.log(this.canvasSecret);
    let currentLetter = hangman.letters.indexOf(letter);
    this.ctx.fillText(letter, x + currentLetter * (letterSpace + 10), y);
    // x += (letterSpace+10);
  }

  drawHangMan() {
    if (hangman.errorsLeft === 9) {
      this.ctx.beginPath();
      this.ctx.moveTo(50, 790);
      this.ctx.lineTo(200, 790);
      this.ctx.lineTo(125, 740);
      this.ctx.closePath();
      this.ctx.stroke();
    }

    if (hangman.errorsLeft === 8) {
      this.ctx.beginPath();
      this.ctx.moveTo(125, 740);
      this.ctx.lineTo(125, 140);
      this.ctx.stroke();
    }

    if (hangman.errorsLeft === 7) {
      this.ctx.beginPath();
      this.ctx.moveTo(125, 140);
      this.ctx.lineTo(320, 140);
      this.ctx.stroke();
    }

    if (hangman.errorsLeft === 6) {
      this.ctx.beginPath();
      this.ctx.moveTo(320, 140);
      this.ctx.lineTo(320, 300);

      this.ctx.closePath();
      this.ctx.stroke();
    }
    if (hangman.errorsLeft === 5) {
      this.ctx.beginPath();
      // this.ctx.moveTo(320,300);
      this.ctx.arc(320, 340, 40, 2 * Math.PI, 0, false);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    if (hangman.errorsLeft === 4) {
      this.ctx.beginPath();
      this.ctx.moveTo(320, 380);
      this.ctx.lineTo(320, 500);
      this.ctx.stroke();
    }
    if (hangman.errorsLeft === 3) {
      this.ctx.beginPath();
      this.ctx.moveTo(320, 420);
      this.ctx.lineTo(270, 480);
      this.ctx.stroke();
    }
    if (hangman.errorsLeft === 2) {
      this.ctx.beginPath();
      this.ctx.moveTo(320, 420);
      this.ctx.lineTo(370, 480);
      this.ctx.stroke();
    }
    if (hangman.errorsLeft === 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(320, 500);
      this.ctx.lineTo(270, 580);
      this.ctx.stroke();
    }
    if (hangman.errorsLeft === 0) {
      this.ctx.beginPath();
      this.ctx.moveTo(320, 500);
      this.ctx.lineTo(370, 580);
      this.ctx.stroke();
    }
  }
}

// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
