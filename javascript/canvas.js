class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    const board = this.context;
    board.clearRect(0,0,1200,800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for(i = 0; i< this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo()
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
