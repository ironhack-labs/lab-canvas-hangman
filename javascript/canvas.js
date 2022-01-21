class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    // ... your code goes here
  }

  drawLines() {
    // ... your code goes here
  }

  writeCorrectLetter(index) {
  /*  this.context.fillStyle = "green";
    this.context.font = "50px Arial";
    this.context.fillText(this.secretWord[index], 200 + (index * 60), 550); */
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
