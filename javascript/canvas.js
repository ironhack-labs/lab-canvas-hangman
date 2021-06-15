class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.scretWord;
  }

  createBoard() {
    // new board
    this.drawLines();
  }

  drawLines() {
    const canvas = document.getElementById('hangman');
    const ctx = canvas.getContext('2d');
    for (i=0; i<this.secretWord.length, i++) {
      ctx.fillRect(51 + i * 50, 50, 50, 50)

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
