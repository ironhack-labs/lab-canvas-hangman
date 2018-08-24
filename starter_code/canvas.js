class HangmanCanvas{
  constructor(secret){
    this.ctx = document.getElementById('hangman').getContext('2d')
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
      // this.ctx.stroke();
    }
    // if (hangman.errorsLeft === 0) {
      // this.ctx.beginPath();
      this.ctx.moveTo(320, 500);
      this.ctx.lineTo(370, 580);
      this.ctx.stroke();
    // }
  }
  // drawTriangle(){
  //   this.ctx.beginPath()
  //   this.ctx.moveTo(60, 400)
  //   this.ctx.lineTo(20, 450);
  //   this.ctx.lineTo(100, 450);
  //   this.ctx.lineTo(60, 400);; //top
  //   this.ctx.stroke();
  // }
}
// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }
//
// HangmanCanvas.prototype.createBoard = function () {
//
// };
//
// HangmanCanvas.prototype.drawLines = function () {
//
// };
//
// HangmanCanvas.prototype.writeCorrectLetter = function (index) {
//
// };
//
// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
//
// };
//
// HangmanCanvas.prototype.drawHangman = function (shape) {
//
// };
//
// HangmanCanvas.prototype.gameOver = function () {
//
// };
//
// HangmanCanvas.prototype.winner = function () {
//
// };
// function draw() {
//   var canvas = document.getElementById("hangman");
//   var ctx = canvas.getContext("2d");
//   ctx.beginPath();
//   ctx.moveTo(60, 400);
//   ctx.lineTo(20, 450);
//   ctx.lineTo(100, 450);
//   ctx.lineTo(60, 400);
//   ctx.stroke(); //1st wrong guess
//   ctx.moveTo(60, 400);
//   ctx.lineTo(60, 50);
//   ctx.stroke(); //2nd wrong guess
//   ctx.moveTo(60, 50);
//   ctx.lineTo(260, 50);
//   ctx.stroke(); //3rd wrong guess
//   ctx.moveTo(260, 50);
//   ctx.moveTo(260, 50);
//   ctx.lineTo(260, 110);
//   ctx.stroke(); //4th wrong guess
//   ctx.beginPath();
//   ctx.arc(260, 150, 40, 0, Math.PI * 2, true);
//   ctx.stroke(); //5th wrong guess
//   ctx.moveTo(260,190);
//   ctx.lineTo(260,330);
//   ctx.stroke(); //6th wrong guess
//   ctx.moveTo(260,330);
//   ctx.lineTo(200,400);
//   ctx.stroke(); //7th wrong guess
//   ctx.moveTo(260,330);
//   ctx.lineTo(320,400);
//   ctx.stroke(); //8th wrong guess
//   ctx.moveTo(260,240);
//   ctx.lineTo(330,200);
//   ctx.stroke(); //9th wrong guess
//   ctx.moveTo(260,240);
//   ctx.lineTo(190,200);
//   ctx.stroke(); //10th wrong guess
// }

// draw();
