class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.lineStart = 600
    this.lineLength = 40
    this.totalLetterLine = 60
    this.spacingWrongLetters = 20
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800)
    this.context.lineWidth = 10;
    this.context.strokeStyle = '#9da400'
    this.context.strokeRect(0, 0, 1200, 800)

    console.log(hangman.secretWord)
  }

  drawLines() {
    let lenghtWord = hangman.secretWord.length

    this.context.lineWidth = 4;
    this.context.strokeStyle = "black";

    for (let i=0 ; i < hangman.secretWord.length ; i++) {
    this.context.beginPath()
    this.context.moveTo(this.lineStart, 700)
    this.context.lineTo(this.lineStart + this.lineLength, 700)
    this.context.stroke()
    this.lineStart += this.totalLetterLine
    this.context.closePath();
    }
  }

  writeCorrectLetter(userLetter, index) { 
    this.context.font = '50px Arial'
    if (index === 0) { this.context.fillText(userLetter, 600, 680) } 
    if (index === 1) { this.context.fillText(userLetter, 660, 680) }
    if (index === 2) { this.context.fillText(userLetter, 720, 680) }
    if (index === 3) { this.context.fillText(userLetter, 780, 680) }
    if (index === 4) { this.context.fillText(userLetter, 840, 680) }
    if (index === 5) { this.context.fillText(userLetter, 900, 680) }
    if (index === 6) { this.context.fillText(userLetter, 960, 680) }
    if (index === 7) { this.context.fillText(userLetter, 1020, 680) }
    if (index === 8) { this.context.fillText(userLetter, 1080, 680) }
    if (index === 9) { this.context.fillText(userLetter, 1140, 680) }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '50px Arial'
    this.context.fillText(letter, this.spacingWrongLetters + 820, 250)
    this.spacingWrongLetters += 40
  }

  drawHangman(errorsLeft) { 
    switch (errorsLeft) {
      case 9:
        this.context.beginPath()
        this.context.moveTo(150, 700)
        this.context.lineTo(400, 700)
        this.context.stroke()
        this.context.closePath()
        break;
      case 8:
        this.context.beginPath()
        this.context.moveTo(250, 700)
        this.context.lineTo(250, 200)
        this.context.stroke()
        this.context.closePath()
        break;
      case 7:
        this.context.beginPath()
        this.context.moveTo(250, 200)
        this.context.lineTo(550, 200)
        this.context.stroke()
        this.context.closePath()
        break;
      case 6:
        this.context.beginPath()
        this.context.moveTo(550, 200)
        this.context.lineTo(550, 250)
        this.context.stroke()
        this.context.closePath()
        break;
      case 5: 
        this.context.beginPath()
        this.context.arc(550, 290, 40, 0, Math.PI*2)
        this.context.fill()
        this.context.closePath()
        break;
      case 4: 
        this.context.beginPath()
        this.context.moveTo(550, 290)
        this.context.lineTo(550, 490)
        this.context.strokeStyle = "black"
        this.context.stroke()
        this.context.closePath()
        break;
      case 3: 
        this.context.beginPath()
        this.context.moveTo(550, 350)
        this.context.lineTo(600, 350)
        this.context.stroke()
        this.context.closePath()
        break;
      case 2: 
        this.context.beginPath()
        this.context.moveTo(550, 350)
        this.context.lineTo(500, 350)
        this.context.stroke()
        this.context.closePath()
        break;
      case 1:
        this.context.beginPath()
        this.context.moveTo(550, 490)
        this.context.lineTo(575, 550)
        this.context.stroke()
        this.context.closePath()
        break;
      case 0: 
        this.context.beginPath()
        this.context.moveTo(550, 490)
        this.context.lineTo(525, 550)
        this.context.stroke()
        this.context.closePath()
        break;
    }
  }

  gameOver() {
    const image = new Image()
    image.src = "/14.lab-canvas-hangman/lab-canvas-hangman/images/gameover.png"
    image.addEventListener("load", () => {
      this.context.drawImage(image, 200, 200)
    })
    }

  winner() {
    const image = new Image()
    image.src = "/14.lab-canvas-hangman/lab-canvas-hangman/images/awesome.png"
    image.addEventListener("load", () => {
      this.context.drawImage(image, 200, 50)
    })
  }
}