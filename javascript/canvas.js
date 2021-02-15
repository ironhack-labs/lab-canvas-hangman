class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    let x=30
    let y=30
    for(i=0; i<this.secretWord.length;i++) {
      this.context.beginPath()
      this.context.moveTo(x+=3,y)
      this.context.lineTo(x+=10,y)
      this.context.stroke()
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
