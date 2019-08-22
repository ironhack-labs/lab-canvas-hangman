
function HangmanCanvas(secretWord) {

  this.ctx = document.getElementById('hangman').getContext('2d')
  this.ctx.clearRect(0, 0, 600, 400)
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.lineWidth = 3
};

HangmanCanvas.prototype.drawLines = function () {
  let yPos = 390
  let startXPos = 150
  for (i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.strokeStyle = "black"
    this.ctx.moveTo(startXPos, yPos);
    this.ctx.lineTo(startXPos + 28, yPos);
    this.ctx.stroke();
    this.ctx.closePath()
    startXPos += 30
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let yPos = 385
  let startXPos = 150 + (index * 30)
  this.ctx.fillStyle = "darkkhaki"
  this.ctx.font = "35px Courier"
  this.ctx.fillText(this.secretWord[index], startXPos, yPos)

};


HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let yPos = 30
  let startXPos = 200 + (200 - (errorsLeft * 25))
  this.ctx.fillStyle = "grey"
  this.ctx.font = "25px Courier"
  this.ctx.fillText(letter, startXPos, yPos)
  yPos = 60
  this.ctx.fillText(errorsLeft, startXPos, yPos)


};


HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  switch (errorsLeft) {
    case 9:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(250, 290)
      this.ctx.lineTo(310, 290)
      this.ctx.lineTo(280, 270)
      this.ctx.lineTo(250, 290)
      this.ctx.stroke()
      break;
    case 8:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(280, 270)
      this.ctx.lineTo(280, 130)
      this.ctx.stroke()
      break;
    case 7:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(280, 130)
      this.ctx.lineTo(340, 130)
      this.ctx.stroke()
      break;
    case 6:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(340, 130)
      this.ctx.lineTo(340, 150)
      this.ctx.stroke()
      break;
    case 5:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(347, 160)
      this.ctx.arc(340, 160, 10, 0, 2 * Math.PI);
      this.ctx.stroke()
      break;
    case 4:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(340, 167)
      this.ctx.lineTo(340, 225)
      this.ctx.stroke()
      break;
    case 3:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(340, 190)
      this.ctx.lineTo(320, 175)
      this.ctx.stroke()
      break
    case 2:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(340, 190)
      this.ctx.lineTo(360, 175)
      this.ctx.stroke()
      break
    case 1:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(340, 225)
      this.ctx.lineTo(320, 240)
      this.ctx.stroke()
      break
    case 0:
      this.ctx.strokeStyle = "black"
      this.ctx.moveTo(340, 225)
      this.ctx.lineTo(360, 240)
      this.ctx.stroke()
      break
    default:

  }


}

HangmanCanvas.prototype.gameOver = function () {
  // this.ctx.clearRect(0, 0, 600, 400)
  let goImg = document.getElementById('gameover-img')
  let x = 80
  let y = 0
  // this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.drawImage(goImg, x, y, 400, 400)
  this.drawLines()


}

HangmanCanvas.prototype.winner = function () {
  // this.ctx.clearRect(0, 0, 600, 400)
  let winImg = document.getElementById('awesome-img')
  let x = 80
  let y = 0
  // this.ctx.clearRect(0, 0, 600, 400)
  this.ctx.drawImage(winImg, x, y, 400, 400)
  this.drawLines()
}
