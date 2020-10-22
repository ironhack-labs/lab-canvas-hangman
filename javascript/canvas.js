class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.$canvas = document.querySelector('#hangman');
    this.letterWidth = 70;
    this.letterHeight = 70;
    this.xPosition = 200;
    this.yPosition = 770;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(this.xPosition, this.yPosition);
    let separation = 10;
    for (let i = 0; i <= this.secretWord.length; i++) {
      this.context.lineTo(this.xPosition + this.letterWidth * i + separation * (i), this.yPosition);
      this.context.stroke();
      this.context.moveTo(this.xPosition + this.letterWidth * (i) + separation * (i + 1), this.yPosition);
    }

    this.context.closePath();
  }

  writeCorrectLetter(index) { // index: índice de la letra en la palabra secreta
    let xPositionLetter = this.xPosition;
    let yPositionLetter = this.yPosition - this.letterHeight - 5;

    this.context.beginPath();
    this.context.fillText(this.secretWord[index], xPositionLetter, yPositionLetter, this.letterWidth);
    this.context.font = '30px Arial'; // setter-getter

    this.context.closePath();
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
