class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = hangman.pickWord();
    // ... your code goes here
  }

  createBoard() {
    //context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
    // ... your code goes here
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(250 + i * 80, 500);
      this.context.lineTo(270 + i * 80, 500);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    let correctLetter = "";
    let position = this.secretWord(index);
    for (let i = 0; i <= correctLetter.length; i++) {
      this.context.fillText(index, 250 + i * 80, 500);
    }
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
