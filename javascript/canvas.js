class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let startX = (1200 - this.secretWord.length * 70) / 2;
    this.secretWord.split('').forEach((el) => {
      this.ctx.beginPath();
      this.ctx.moveTo(startX, 200);
      this.ctx.lineTo(startX + 50, 200);
      this.ctx.stroke();
      this.ctx.closePath();
      startX += 70;
    });
  }

  writeCorrectLetter(index) {
    let startX = (1200 - this.secretWord.length * 70) / 2;
    this.ctx.font = '30px Indie Flower';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(this.secretWord[index], startX + index * 70 + 20, 190);
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
