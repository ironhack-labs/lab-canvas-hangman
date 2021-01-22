class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord= secretWord;
  }

  createBoard() {
    const ctx= this.context;
    ctx.clearRect(0, 0, 1200, 800);
    drawLines()
  }

  drawLines() {
    const ctx= this.context;
    for (i=0; i<this.secretWord.length; i++){
      x= 350
      ctx.beginPath()
      ctx.moveTo(x + 30, 700)
      ctx.lineTo(380, 700)
      ctx.stroke()
      ctx.closePath()
      x += 80
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
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
