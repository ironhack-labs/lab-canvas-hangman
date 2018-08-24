// function draw() {
//   var canvas = document.getElementById("canvas");
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
//   ctx.moveTo(260, 190);
//   ctx.lineTo(260, 330);
//   ctx.stroke(); //6th wrong guess
//   ctx.moveTo(260, 330);
//   ctx.lineTo(200, 400);
//   ctx.stroke(); //7th wrong guess
//   ctx.moveTo(260, 330);
//   ctx.lineTo(320, 400);
//   ctx.stroke(); //8th wrong guess
//   ctx.moveTo(260, 240);
//   ctx.lineTo(330, 200);
//   ctx.stroke(); //9th wrong guess
//   ctx.moveTo(260, 240);
//   ctx.lineTo(190, 200);
//   ctx.stroke(); //10th wrong guess
// }

// draw();

class hangmanCanvas {
  constructor(theSecretWord) {
    this.secret = theSecretWord;
    this.ctx = document.getElementById("canvas").getContext("2d");
  }

  drawLines() {
    var theX = 400;
    var theY = 500;
    var lineWidth = 50;
    var spaceBetweenLines = 25;

    for (let i = 0; i < this.secret.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(theX, theY);
      this.ctx.lineTo(theX + lineWidth, theY);
      this.ctx.closePath();
      theX += lineWidth + spaceBetweenLines;
      this.ctx.stroke();
    }
  }

  drawCorrectLetters(lettersToDraw){
    var X = 300;
    var Y = 500;
    var lineWidth = 50;
    var spaceBetweenLines = 25;

    lettersToDraw.forEach((eachLetter) =>{

    }
    )}

    drawHangman(whichPart){
      
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      if (whichPart === 1){
        ctx.moveTo(60, 400);
        ctx.lineTo(20, 450);
        ctx.lineTo(100, 450);
        ctx.lineTo(60, 400);
        ctx.stroke(); //1st wrong guess
        console.log('drawing the triangle')
      }

      if (whichPart === 2){
        ctx.moveTo(60, 400);
        ctx.lineTo(60, 50);
        ctx.stroke(); //2nd wrong guess
        console.log('drawing the pole')
      }

      if(whichPart === 3){
        ctx.moveTo(60, 50);
        ctx.lineTo(260, 50);
        ctx.stroke(); //3rd wrong guess
        console.log('drawing the beam')
      }

      if(whichPart === 4){
        ctx.moveTo(260, 50);
        ctx.moveTo(260, 50);
        ctx.lineTo(260, 110);
        ctx.stroke(); //4th wrong guess
        console.log('drawing the rope')
      }

      if(whichPart === 5){
        ctx.beginPath();
        ctx.arc(260, 150, 40, 0, Math.PI * 2, true);
        ctx.stroke(); //5th wrong guess
        console.log('drawing the head')
      }

      if(whichPart === 6){
        ctx.moveTo(260, 190);
        ctx.lineTo(260, 330);
        ctx.stroke(); //6th wrong guess
        console.log('drawing the torso')
      }

      if(whichPart === 7){
        ctx.moveTo(260, 330);
        ctx.lineTo(200, 400);
        ctx.stroke(); //7th wrong guess
        console.log('drawing a leg')
      }

      if(whichPart === 8){
        ctx.moveTo(260, 330);
        ctx.lineTo(320, 400);
        ctx.stroke(); //8th wrong guess
        console.log('drawing another leg')
      }

      if(whichPart === 9){
        ctx.moveTo(260, 240);
        ctx.lineTo(330, 200);
        ctx.stroke(); //9th wrong guess
        console.log('drawing an arm')
      }

      if(whichPart === 10){
        ctx.moveTo(260, 240);
        ctx.lineTo(190, 200);
        ctx.stroke(); //10th wrong guess
        console.log('drawing another arm')
        console.log('Game over!')
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
