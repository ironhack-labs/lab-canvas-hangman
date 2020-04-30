class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;

  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    this.context.lineWidth = 4;
    this.context.strokeStyle = 'black';
    let x = 250;
    let y = 750;

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(x + 50, y);
      this.context.stroke();
      x += 70;
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.fontStyle = 'black';
    this.context.font = '40px Verdana';
    this.context.fillText(this.secretWord[index].toUpperCase(), 270 + (70 * index), 745);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.fontStyle = 'red';
    this.context.font = '40px Verdana';
    this.context.fillText(letter.toUpperCase(), 200, 100);
    this.drawHangman(errorsLeft);
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
