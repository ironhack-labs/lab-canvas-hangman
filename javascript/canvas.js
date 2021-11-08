class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let count = 0;
    for (let i = 0; i < this.secretWord.length; i++) {
      let xInit = 300;
      let XEnd = xInit + 50;
      count += 100;
      let initialPositionX = xInit + count;
      let finalPositionX = XEnd + count;
      this.context.beginPath();
      this.context.moveTo(initialPositionX, 700);
      this.context.lineTo(finalPositionX, 700);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = "48px serif";
    let count = 0;
    for (let i = 0; i < this.secretWord.length; i++) {
      let xInit = 312;
      count += 100;
      let initialPositionX = xInit + count;
      this.context.fillText(index, initialPositionX, 690);
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
