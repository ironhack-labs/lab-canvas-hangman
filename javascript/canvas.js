class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800)
    this.drawLines()
  }

  drawLines() {
    let x = 400
    let y = 770
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath()
      this.context.moveTo(x, y)
      this.context.lineTo(x + 50, y)
      this.context.stroke()
      x += 70
    }
  }

  writeCorrectLetter(letter, index) {
    this.context.font = "30px Arial";
    this.context.fillStyle = "black";
    if (this.secretWord.includes(letter)) {
      this.context.fillText(`${letter}`, (400 + 70 * (index + 1)), 740)
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "30px Arial";
    this.context.fillStyle = "black";
    if (!this.secretWord.includes(letter)) {
      this.context.fillText(`${letter}`, (1150 - 50 * (errorsLeft)), 120)
    }
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 10:
        this.context.beginPath()
        this.context.moveTo(100, 770)
        this.context.lineTo(300, 770)
        this.context.stroke();
        break;
      case 9:
        this.context.beginPath()
        this.context.moveTo(200, 770)
        this.context.lineTo(200, 200)
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath()
        this.context.moveTo(200, 200)
        this.context.lineTo(500, 200)
        this.context.stroke();
        break;
        break;
      case 7:
        this.context.beginPath()
        this.context.moveTo(500, 200)
        this.context.lineTo(500, 300)
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath()
        this.context.arc(500, 325, 25, 0, 2 * Math.PI)
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath()
        this.context.moveTo(500, 350)
        this.context.lineTo(500, 500)
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(500, 400)
        this.context.lineTo(580, 350)
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath()
        this.context.moveTo(500, 400)
        this.context.lineTo(430, 350)
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath()
        this.context.moveTo(500, 500)
        this.context.lineTo(450, 600)
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath()
        this.context.moveTo(500, 500)
        this.context.lineTo(550, 600)
        this.context.stroke();
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