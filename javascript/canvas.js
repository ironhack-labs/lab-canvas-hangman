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
    let x = 190
    let y = 770
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath
      this.context.moveTo(x, y)
      this.context.lineTo(x + 40, y)
      this.context.stroke()
      x += 50
    }
  }

  writeCorrectLetter(letter, index) {
    this.context.font = "30px Arial";
    this.context.fillStyle = "black";
    if (this.secretWord.includes(letter)) {
      this.context.fillText(`${letter}`, (190 + 50 * (index + 1)), 740)
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = "30px Arial";
    this.context.fillStyle = "black";
    if (!this.secretWord.includes(letter)) {
      this.context.fillText(`${letter}`, (1200 - 50 * (errorsLeft)), 120)
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}