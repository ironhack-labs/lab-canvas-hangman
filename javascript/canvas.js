class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    let xPosition = 0
    let lineLength = 16

    this.context.beginPath();
    this.context.strokeStyle = "black";
    this.context.moveTo(50, 50);
    this.context.lineTo(100, 50);
    this.context.moveTo(300, 50);
    this.context.lineTo(400, 50);
    this.context.stroke();

    // for (let i = 0; i < this.secretWord.length; i++) {
    //   this.context.beginPath()
    //   this.context.moveTo(xPosition, 10)
    //   this.context.lineTo(lineLength, 10)
    //   this.context.stroke();
    //   this.context.closePath();

    //   xPosition += 24
    // }
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