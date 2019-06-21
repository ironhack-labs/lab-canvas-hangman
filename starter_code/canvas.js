
class HangmanCanvas{
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord; 
    }
    
    createBoard() {
      this.ctx.clearRect(0, 0, 1200, 800);
      this.ctx.lineWidth = 5.0;
      this.ctx.beginPath();
    }

    drawLines() {
      let startX = 300
      // let moveX = 350
      for(let i = 0; i < this.secretWord.length; i+= 1) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, 400);
        this.ctx.lineTo(startX + 40,400);
        this.ctx.stroke();
        this.ctx.closePath();
        startX += 60;
        // moveX += 70;
      }
      
      this.ctx.beginPath();
      this.ctx.lineTo(104, 400);
      this.ctx.lineTo(250, 400);
      this.ctx.lineTo(180, 350);
      this.ctx.lineTo(105, 400)
      this.ctx.stroke();
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.moveTo(180, 350);
      this.ctx.lineTo(180, 0);
      this.ctx.lineTo(450, 0);
      this.ctx.lineTo(450, 50);
      this.ctx.stroke();
      this.ctx.closePath();
    }

    writeCorrectLetter() {
      
    }

    writeWrongLetter() {

    }
}

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
