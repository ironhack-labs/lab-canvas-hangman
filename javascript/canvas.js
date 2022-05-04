class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord= secretWord;
    this.guessedLetters= this.guessedLetters;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800);
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here
    if 
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    if ()
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
