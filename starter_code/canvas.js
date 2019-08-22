function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d')
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 600, 500)
  this.ctx.lineWidth = 5
  this.ctx.strokeStyle = 'red'
};

HangmanCanvas.prototype.drawLines = function () {
  const posX = 160
  let posY = 400
  for (i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(posX, posY)
    this.ctx.lineTo(posX + 30, posY)
    this.ctx.stroke()
    this.ctx.closePath()
    posX = posX + 30
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {
  const image = new Image()
  image.src = './images/gameover.png'
  const imageX = 90
  const imageY = 0
  this.ctx.clearRect(0, 0, 500, 400)
  this.ctx.drawImage(image, imagex, imagey, 300, 500)
};

HangmanCanvas.prototype.winner = function () {
  const image2 = new Image()
  image2.src = './images/awesome.png'
  const image2X = 90
  const image2Y = 0
  this.ctx.clearRect(0, 0, 500, 400)
  this.ctx.drawImage(image2, image2X, image2Y, 300, 500)
};