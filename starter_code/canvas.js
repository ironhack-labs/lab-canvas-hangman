function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.createBoard(0, 0, 600, 400)
  this.ctx.lineWidth = 5
  this.ctx.strokeStyle = '#BADA55'
};
                                                                                                  
HangmanCanvas.prototype.drawLines = function () {
  let yPos = 390
  let startXPos = 150
  for (i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(startXPos, yPos)
    this.ctx.lineTo(startXPos + 28, yPos)
    this.ctx.stroke()
    this.ctx.closePath()
    startXPos += 30
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let yPos = 385
  let startXPos = 150 + (index * 30)

  this.ctx.fillStyle = 'black'
  this.ctx.font = '45px Courier'
  this.ctx.fillText(this.secretWord[index], startXPos, yPos)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let yPos = 30
  let startXPos = 220 + (200 - (errorsLeft * 25))

  this.ctx.fillStyle = 'red'
  this.ctx.font = '45px Courier'
  this.ctx.fillText(letter, startXPos, yPos)
};

HangmanCanvas.prototype.drawHangman = function (shape) {
let yPos
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};