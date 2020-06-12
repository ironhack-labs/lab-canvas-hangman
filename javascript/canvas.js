class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.width, this.context.height);
    this.drawLines();
  }

  drawLines() {
   
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(errorsLeft) {

  }

  gameOver() {

  }

  winner() {

  }
}
