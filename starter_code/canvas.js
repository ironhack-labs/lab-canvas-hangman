
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.lineWidth = 4
  this.ctx.strokeStyle = 'black'

};

HangmanCanvas.prototype.drawLines = function () {
  let yPosition = 300
  let xPosition = 25

  for  (i = 0; i < this.secretWord.length; i++) {
   this.ctx.beginPath()
   this.ctx.moveTo(xPosition, yPosition) 
   this.ctx.lineTo(xPosition+30, yPosition)   
   this.ctx.stroke()
   this.ctx.closePath()

   xPosition +=35
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let yPosition = 290
  let xPosition = 25+(index*35) 
   this.ctx.fillStyle = 'black'
   this.ctx.font = '40px Courier'
   this.ctx.fillText(this.secretWord[index], xPosition, yPosition)
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let yPosition = 30
  let xPosition = 180+(155-(errorsLeft*35)) 

   this.ctx.fillStyle = 'red'
   this.ctx.font = '40px Courier'
   this.ctx.fillText(letter, xPosition, yPosition)
   yPosition = 70
   this.ctx.fillText(errorsLeft, xPosition, yPosition)

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {
  let looserI = new Image();
  looserI.src = './images/gameover.png'
  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.drawImage(looserI, 50, 0, 500, 400)
};

HangmanCanvas.prototype.winner = function () {
  let winnerI = new Image();
  winnerI.src = './images/awesome.png'
  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.drawImage(winnerI, 50, 0, 500, 400)
};
