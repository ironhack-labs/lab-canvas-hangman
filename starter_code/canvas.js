
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800)
  this.ctx.lineWidth = 4
  this.ctx.strokeStyle = 'black'

};

HangmanCanvas.prototype.drawLines = function () {
  let yPosition = 450
  let xPosition = 50

  for  (i = 0; i < this.secretWord.length; i++) {
   this.ctx.beginPath()
   this.ctx.moveTo(xPosition, yPosition) 
   this.ctx.lineTo(xPosition+25, yPosition)   
   this.ctx.stroke()
   this.ctx.closePath()

   xPosition +=30
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
