class HangmanCanvas {  
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext('2d');
    this.secretWord = secretWord;
  }

  clearBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.beginPath()
    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = "black";
    this.ctx.moveTo(50, 700);
    this.ctx.lineTo(250, 700);
    this.ctx.lineTo(150, 600);
    this.ctx.lineTo(50, 700);
    this.ctx.moveTo(150, 600);
    this.ctx.lineTo(150, 100);
    this.ctx.lineTo(400, 100);
    this.ctx.lineTo(400, 150);
    this.ctx.stroke();

  }
  drawLines() {    
    let x = 300; 
    let y = 700;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      x += 50
      this.ctx.lineTo(x, y)
      this.ctx.lineWidth = 5
      this.ctx.strokeStyle = "black";   
      this.ctx.stroke();   
      x += 20
    };

    // writeCorrectLetter(index) {


    // }


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
