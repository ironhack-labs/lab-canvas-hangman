class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }
  createBoard() {}
  drawLines() {}
  writeCorrectLetter(index) {}
  writeWrongLetter(letter, errorsLeft) {}
  drawHangman(errorsLeft) {}
  gameOver() {}
  winner() {}
}
