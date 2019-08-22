
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,960,600) //the same at index.html
  this.ctx.strokesStyle = '#111'
  this.ctx.lineWidth= 7
};

HangmanCanvas.prototype.drawLines = function () {
let positionX = 300
let positionY = 150

for(i=0; i < this.secretWord.length; i++) {
  this.ctx.beginPath()
  this.ctx.moveTo(positionX, positionY)
  this.ctx.lineTo(positionX + 28, positionY)
  this.ctx.stroke()
  this.ctx.closePath()
  positionX +=30
}
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
let positionY = 290
let positionX = 180 + (index * 32)
this.ctx.font = "45 Courier"
this.ctx.fillText(this.secretWord[index], positionX, positionY)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let positionY = 100
  let positionX = 220 + (180-(errorsLeft*32))
  this.ctx.fillStyle = "tomato"
  this.ctx.font = "45 Courier"
  this.ctx.fillText(letter, positionX, positionY)
  positionY = 140
  this.ctx.fillText(errorsLeft, positionX, positionY)
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {
  let loooser = new Image()
  loooser.src = './images/gameover.png'
  loooserX = 300
  loooserY = 20
  this.ctx.clearRect(0,0,500,400)
  this.ctx.drawImage(loooserX, loooserY, 300, 400 )
};

HangmanCanvas.prototype.winner = function () {
  let ftw = new Image()
  ftw.src = './images/awesome.png'
  ftwX = 300
  ftwY = 20
  this.ctx.clearRect(0,0,500,400)
  this.ctx.drawImage(ftwX, ftwY, 300, 400 )
};
