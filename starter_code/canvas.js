function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d')
  Hangman.call(this, secretWord)
  this.secretWord = secretWord
  console.log(this.secretWord)
  // this.ctx.clearRect(0, 0, 1200, 800)
  // this.secretWord = secretWord
  // this.start = 0
}

HangmanCanvas.prototype.createBoard = function() {
  //Se crea el tablero
  this.ctx.beginPath()
  this.ctx.moveTo(130, 130)
  this.ctx.lineTo(130, 650)
  this.ctx.stroke()
  this.ctx.moveTo(130, 130)
  this.ctx.lineTo(480, 130)
  this.ctx.stroke()
  this.ctx.moveTo(480, 130)
  this.ctx.lineTo(480, 200)
  this.ctx.stroke()
  this.ctx.moveTo(130, 650)
  this.ctx.lineTo(50, 700)
  this.ctx.stroke()
  this.ctx.moveTo(50, 700)
  this.ctx.lineTo(200, 700)
  this.ctx.stroke()
  this.ctx.moveTo(200, 700)
  this.ctx.lineTo(130, 650)
  this.ctx.stroke()
  this.ctx.closePath()
}

HangmanCanvas.prototype.drawLines = function() {
  Hangman.call(this)
  //First Line
  this.ctx.beginPath()
  this.ctx.moveTo(240, 700)
  this.ctx.lineTo(300, 700)
  this.ctx.stroke()
  //Second Line
  this.ctx.beginPath()
  this.ctx.moveTo(310, 700)
  this.ctx.lineTo(370, 700)
  this.ctx.stroke()
  //Fourth Line
  this.ctx.beginPath()
  this.ctx.moveTo(380, 700)
  this.ctx.lineTo(440, 700)
  this.ctx.stroke()
  //Fifth Line
  this.ctx.beginPath()
  this.ctx.moveTo(450, 700)
  this.ctx.lineTo(510, 700)
  this.ctx.stroke()
  //Sixth Line
  this.ctx.beginPath()
  this.ctx.moveTo(520, 700)
  this.ctx.lineTo(580, 700)
  this.ctx.stroke()
  //Seventh Line
  this.ctx.beginPath()
  this.ctx.moveTo(590, 700)
  this.ctx.lineTo(650, 700)
  this.ctx.stroke()
  //Eigth Line
  this.ctx.beginPath()
  this.ctx.moveTo(660, 700)
  this.ctx.lineTo(720, 700)
  this.ctx.stroke()
}

HangmanCanvas.prototype.writeCorrectLetter = function(letter) {
  // this.index = letter
  // console.log(this.letter)
}

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {}

HangmanCanvas.prototype.drawHangman = function(shape) {}

HangmanCanvas.prototype.gameOver = function() {}

HangmanCanvas.prototype.winner = function() {}
