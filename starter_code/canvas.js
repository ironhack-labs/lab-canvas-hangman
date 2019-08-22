function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d')
  this.secretWord = secretWord
  this.start = 0
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800)
  this.ctx.strokeStyle = 'black'
  this.ctx.lineWidth = 4
}

HangmanCanvas.prototype.drawLines = function () {
  let yPos = 700
  let xPos = 300
  for (i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(xPos, yPos)
    this.ctx.lineTo(xPos + 40, yPos)
    this.ctx.stroke()
    this.ctx.closePath()
    xPos += 70

  }
}

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  console.log(index)
  this.ctx.fillStyle = 'black'
  this.ctx.font = '60px Courier'
  switch (index) {
    case 0:
      this.ctx.fillText(this.secretWord[index], 303, 690)
      break;
    case 1:
      this.ctx.fillText(this.secretWord[index], 372, 690)
      break;
    case 2:
      this.ctx.fillText(this.secretWord[index], 441, 690)
      break;
    case 3:
      this.ctx.fillText(this.secretWord[index], 510, 690)
      break;
    case 4:
      this.ctx.fillText(this.secretWord[index], 580, 690)
      break;
    case 5:
      this.ctx.fillText(this.secretWord[index], 651, 690)
      break;
    case 6:
      this.ctx.fillText(this.secretWord[index], 720, 690)
      break;
    case 7:
      this.ctx.fillText(this.secretWord[index], 790, 690)
      break;
  }

}

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  switch (errorsLeft) {
    case 9:
      this.drawHangman('triangle')
      break
    case 8:
      this.drawHangman('post')
      break
    case 7:
      this.drawHangman('crossbar')
      break
    case 6:
      this.drawHangman('rope')
      break
    case 5:
      this.drawHangman('head')
      break
    case 4:
      this.drawHangman('body')
      break
    case 3:
      this.drawHangman('rightArm')
      break
    case 2:
      this.drawHangman('leftArm')
      break
    case 1:
      this.drawHangman('rightLeg')
      break
    case 0:
      this.drawHangman('leftLeg')
  }

}

HangmanCanvas.prototype.drawHangman = function (shape) {
  // Base
  if (shape === 'triangle') {
    this.ctx.beginPath()
    this.ctx.moveTo(150, 650)
    this.ctx.lineTo(50, 700)
    this.ctx.lineTo(250, 700)
    this.ctx.lineTo(150, 650)
    this.ctx.stroke()
    this.ctx.closePath()
  }
  // Poste
  if (shape === 'post') {
    this.ctx.beginPath()
    this.ctx.moveTo(150, 650)
    this.ctx.lineTo(150, 100)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Crossbar
  if (shape === 'crossbar') {
    this.ctx.beginPath()
    this.ctx.moveTo(150, 100)
    this.ctx.lineTo(400, 100)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Rope
  if (shape === 'rope') {
    this.ctx.beginPath()
    this.ctx.moveTo(400, 100)
    this.ctx.lineTo(400, 200)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Head
  if (shape === 'head') {
    this.ctx.beginPath()
    this.ctx.moveTo(450, 250)
    this.ctx.arc(400, 250, 50, 0, Math.PI * 2)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Body
  if (shape === 'body') {
    this.ctx.beginPath()
    this.ctx.moveTo(400, 300)
    this.ctx.lineTo(400, 500)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Right arm
  if (shape === 'rightArm') {
    this.ctx.beginPath()
    this.ctx.moveTo(400, 350)
    this.ctx.lineTo(450, 400)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Left arm
  if (shape === 'leftArm') {
    this.ctx.beginPath()
    this.ctx.moveTo(400, 350)
    this.ctx.lineTo(350, 400)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Right leg
  if (shape === 'rightLeg') {
    this.ctx.beginPath()
    this.ctx.moveTo(400, 500)
    this.ctx.lineTo(450, 550)
    this.ctx.stroke()
    this.ctx.closePath()
  }

  // Left leg
  if (shape === 'leftLeg') {
    this.ctx.beginPath()
    this.ctx.moveTo(400, 500)
    this.ctx.lineTo(350, 550)
    this.ctx.stroke()
    this.ctx.closePath()
  }

}

HangmanCanvas.prototype.gameOver = function () {
  console.log('You lose! :(')
  // El método es llamado, pero no pinta la imagen, no sé por qué :(
  const img = new Image()
  const proportion = 1200 / 800
  img.src = 'images/gameover.png'
  this.ctx.drawImage(img, 100, 100, 50 * proportion, 50)
}

HangmanCanvas.prototype.winner = function () {
  console.log('You win!')
  // El método es llamado, pero no pinta la imagen, no sé por qué :(
  const img = new Image()
  const proportion = 1200 / 800
  img.src = 'images/awesome.png'
  this.ctx.drawImage(img, 100, 100, 50 * proportion, 50)
}