function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d')
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 1200, 800)
  this.ctx.strokeStyle = '#111'
  this.ctx.lineWidth = 4
}

HangmanCanvas.prototype.drawLines = function() {
  let positionY = 700
  let positionX = 10
  for (i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(positionX, positionY)
    this.ctx.lineTo(positionX + 30, positionY)
    this.ctx.stroke()
    this.ctx.closePath()
    positionX += 32
  }
}

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.beginPath()
  this.ctx.moveTo(positionX, positionY)
  this.ctx.lineTo(positionX + 30, positionY)
  this.ctx.stroke()
  this.ctx.closePath()
}

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {}

HangmanCanvas.prototype.drawHangman = function(shape) {}

HangmanCanvas.prototype.gameOver = function() {}

HangmanCanvas.prototype.winner = function() {}
