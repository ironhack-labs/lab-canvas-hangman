
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


class HangmanCanvas{
  constructor(secretWord){
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    

    


  }
  createBoard(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.cts
  }

  drawLines(){
    for(var i= 1; i<=this.secretWord.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(400 + (600/this.secretWord.length)*(i-1)+10 ,650);
      this.ctx.lineTo(400+(600/this.secretWord.length)*i,650)
      this.ctx.stroke()

    }


    
  }

}

var canvas = new HangmanCanvas("banane") 

canvas.createBoard()

canvas.drawLines()