class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.lineWidth = 5;
    this.context.font = '55px serif';
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    this.secretWord.split('').forEach((_, i) => {
      this.context.beginPath();
      this.context.moveTo(200 + i * 60, this.context.canvas.height - 250);
      this.context.lineTo(250 + i * 60, this.context.canvas.height - 250);
      this.context.stroke();
      this.context.closePath();
    });
  }

  writeCorrectLetter(index) {
    const indexes = []
    this.context.moveTo(200, this.context.canvas.height - 120);
    this.secretWord.split('').forEach((letter, i) => {
      if (this.secretWord[index] === letter) indexes.push(i);
    });
    indexes.forEach(index => {
      this.context.fillText(this.secretWord[index], 210 + (index * 60), this.context.canvas.height - 275);
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.clearRect(0, 0, 1200, 400);
    const wrongLetters = letter.join(" ").toUpperCase();
    this.context.moveTo(700, this.context.canvas.height - 50);
    this.context.fillText(wrongLetters, 400, this.context.canvas.height - 600);
    this.context.fillText(`Attempts left: ${errorsLeft}`, 400, this.context.canvas.height - 700);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    drawHangman(this.errorsLeft)
  }

  winner() {
    // ... your code goes here
  }
}
