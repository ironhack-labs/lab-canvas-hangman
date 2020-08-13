class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.querySelector('canvas')
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {   
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawLines() {
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    //work with the several indexes
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
