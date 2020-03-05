
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord=secretWord;
    // ... your code goes here
    
  }
  
  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, hangman.width, hangman.height);
  }

  drawLines() {
    // ... your code goes here
    this.context.beginPath()
    
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
