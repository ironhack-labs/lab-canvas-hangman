class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1100, 1000);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let startPoint = 400;
    let secretLetters = this.secretWord.split('')
    for (let i = 0; i <secretLetters.length ; i++) {
      this.context.beginPath();
      this.context.moveTo(startPoint, 500);
      this.context.lineTo(startPoint + 50, 500);
      thid.context.stroke();
      this.context.closePath();
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
