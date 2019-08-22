
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {

  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.lineWidth = 5
  this.ctx.strokeStyle = 'black'

};

HangmanCanvas.prototype.drawLines = function () {
  
  let yPos = 390
  let startXPos = 150
  
  for(i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath()
    this.ctx.moveTo(startXPos, yPos)
    this.ctx.lineTo(startXPos + 28 , yPos) 
    this.ctx.stroke()
    this.ctx.closePath()
    startXPos += 30
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

  
    let yPos = 385
    let startXPos = 150 + (index*30)

    this.ctx.fillStyle = 'black'
    this.ctx.font = '45px Courier'
    this.ctx.fillText(this.secretWord[index], startXPos, yPos)
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

    let yPos = 30
    let startXPos = 220 + (200 - (errorsLeft*25))

    this.ctx.fillStyle = 'red'
    this.ctx.font = '45px Courier'
    this.ctx.fillText(letter, startXPos, yPos)
    yPos = 60
    
    this.ctx.fillText(errorsLeft, startXPos, yPos)

};

HangmanCanvas.prototype.drawHangman = function (shape) {
};

HangmanCanvas.prototype.gameOver = function () {
  let looseImage = new Image(); 
  looseImage.src = './images/gameover.png'
  let looseImageX = 80
  let looseImageY = 0
  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.drawImage(looseImage, looseImageX, looseImageY, 400, 400)
};

HangmanCanvas.prototype.winner = function () {
  let winImage = new Image(); 
  winImage.src = './images/awesome.png'
  let winImageX = 80
  let winImageY = 0
  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.drawImage(winImage, winImageX, winImageY, 400, 400)
};
