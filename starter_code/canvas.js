function HangmanCanvas(secretWord) {
  this.start = 0
  this.secretWord = secretWord
  this.canvas = document.getElementById('hangman')
  this.ctx = this.canvas.getContext('2d')
  this.latestLetterX = 10
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

HangmanCanvas.prototype.drawLines = function() {
  let x = 10
  let y = this.canvas.height - 10
  const lineLength = 30

  this.secretWord.split('').forEach(() => {
    const x1 = x + lineLength
    this.drawLine(x, y, x1, y)
    x = x1 + 10
  })
}

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  let x = 40 * index + 10
  let y = this.canvas.height - 10
  this.ctx.font = '30px Arial'
  this.ctx.fillText(this.secretWord[index], x, y)
}

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.font = '30px Arial'
  this.ctx.fillText(letter, this.latestLetterX, 30)
  this.latestLetterX += 40
  this.drawHangman(errorsLeft)
}

HangmanCanvas.prototype.drawHangman = function(shape) {
  const height = this.canvas.height

  switch (shape) {
    case 9:
      this.drawLine(40, height - 90, 240, height - 90)
      break
    case 8:
      this.drawLine(140, height - 90, 140, height - 590)
      break
    case 7:
      this.drawLine(140, height - 590, 340, height - 590)
      break
    case 6:
      this.drawLine(340, height - 590, 340, height - 490)
      break
    case 5:
      this.ctx.beginPath()
      this.ctx.arc(340, height - 430, 60, 0, Math.PI * 2)
      this.ctx.stroke()
      this.ctx.closePath()
      break
    case 4:
      this.drawLine(340, height - 370, 340, height - 270)
      break
    case 3:
      this.drawLine(270, height - 330, 340, height - 330)
      break
    case 2:
      this.drawLine(340, height - 330, 410, height - 330)
      break
    case 1:
      this.drawLine(340, height - 270, 280, height - 210)
      break
    case 0:
      this.drawLine(340, height - 270, 400, height - 210)
      break
  }
}

HangmanCanvas.prototype.gameOver = function() {}

HangmanCanvas.prototype.winner = function() {}

HangmanCanvas.prototype.drawLine = function(x, y, x1, y1) {
  this.ctx.beginPath()
  this.ctx.moveTo(x, y)
  this.ctx.lineTo(x1, y1)
  this.ctx.stroke()
  this.ctx.closePath()
}
