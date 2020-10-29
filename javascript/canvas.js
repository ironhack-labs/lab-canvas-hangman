class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.querySelector('#hangman')

  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.drawLines();
  }

  drawLines() {
    const numberOfLines = hangman.secretWord.length;
    let xInit = 300;
    const yInit = 700;
    const spaceBetweenLine = 20;
    let lineWidth = 40;
    this.context.beginPath();
    this.context.moveTo(xInit, yInit);
    for (let i = 0; i < numberOfLines; i++) {
      let currentX = xInit + lineWidth;
      let lineMoved = currentX + spaceBetweenLine;
      this.context.lineTo(currentX, yInit)
      this.context.moveTo(lineMoved, yInit)
      xInit = lineMoved;
    }
    this.context.stroke()
    this.context.closePath()
  }

  writeCorrectLetter(index) {
    const letter = Hangman.secretWord[index];
  }

  writeWrongLetter(letter, errorsLeft) {
    Hangman.checkClickedLetters(letter);
    Hangman.addWrongLetter(letter);


  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(100, 700)
        this.context.lineTo(200, 700)
        this.context.stroke()
        break;
      case 8:
        this.context.moveTo(100, 700)
        this.context.lineTo(150, 650)
        this.context.moveTo(200, 700)
        this.context.lineTo(150, 650)
        this.context.stroke()
        break;
      case 7:
        this.context.moveTo(150, 650)
        this.context.lineTo(150, 100)
        this.context.stroke()
        break;
      case 6:
        this.context.moveTo(150, 100)
        this.context.lineTo(450, 100)
        this.context.stroke()
        break;
      case 5:
        this.context.moveTo(450, 100)
        this.context.lineTo(450, 150)
        this.context.stroke()
        break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(450, 150)
        this.context.arc(450, 200, 50, 0, Math.PI * 2, false)
        this.context.stroke()
        break;
      case 3:
        this.context.moveTo(450, 250)
        this.context.lineTo(450, 400)
        this.context.stroke()
        break;
      case 2:
        this.context.moveTo(450, 400)
        this.context.lineTo(400, 550)
        this.context.moveTo(450, 400)
        this.context.lineTo(500, 550)
        this.context.stroke()
        break;
      case 1:
        this.context.moveTo(450, 300)
        this.context.lineTo(500, 380)
        this.context.moveTo(450, 300)
        this.context.lineTo(400, 380)
        this.context.stroke()
        break;
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
