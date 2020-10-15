class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    const OriginalX = 500;
    const OriginalY = 500;
    const lineLength = 30;
    const space = 10; 
    this.context.beginPath();
    this.context.setLineDash([lineLength, space]);
    this.context.moveTo(OriginalX, OriginalY);
    this.context.lineTo(OriginalX + lineLength * this.secretWord.length + space * (this.secretWord.length - 1), OriginalY);
    this.context.stroke();
    console.log(this.secretWord.length);
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