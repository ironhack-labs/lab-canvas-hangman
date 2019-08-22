


function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d')
  this.secretWord=secretWord
  this.start=0
}

HangmanCanvas.prototype.createBoard = function () {
this.ctx.clearRect(0,0,500,400)
this.ctx.strokeStyle='#111'
this.ctx.lineWidth=7

}

HangmanCanvas.prototype.drawLines = function () {
let positionY= 300
let positionX= 180
for (i=0; i<this.secretWord.length; i++){
  this.ctx.beginPath()
  this.ctx.moveTo(positionX, positionY)
  this.ctx.lineTo(positionX +30 ,positionY)
  this.ctx.stroke()
  this.ctx.closePath()
  positionX += 32
}
}

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let positionY= 290
  let positionX= 180 + (index*32)

  this.ctx.fillStyle = "black"
  this.ctx.font = "45px Courier"
  this.ctx.fillText(this.secretWord[index], positionX, positionY)
}

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let positionY= 100
  let positionX= 220 +(180-(errorsLeft*32))
  this.ctx.fillStyle = "red"
  this.ctx.font = "45px Courier"
  this.ctx.fillText(letter,positionX,positionY)
  positionY=140
  this.ctx.fillText(errorsLeft,positionX,positionY)
  

}

HangmanCanvas.prototype.drawHangman = function (shape) {

}

HangmanCanvas.prototype.gameOver = function () {
let loserImage=new Image()
loserImage.src='./images/gameover.png'
loserImageX=300
loserImageY=20
this.ctx.clearRect(0,0,500,400)
 this.ctx.drawImage(loserImage,loserImageX,loserImageY,300,300)
}

HangmanCanvas.prototype.winner = function () {
let winnerImage=new Image()
winnerImage.src='./images/awesome.png'
loserImageX=300
loserImageY=20
this.ctx.clearRect(0,0,500,400)
this.ctx.drawImage(winnerImage,winnerImageX,winnerImageeY,300,300)

}
