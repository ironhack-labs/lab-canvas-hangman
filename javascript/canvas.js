class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    hangman.secretWord=secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0, hangmanCanvas.width, hangmanCanvas.height);
    this.drawLines()    
  }

  drawLines() {
    this.context.moveTo()
    // ... your code goes here
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
