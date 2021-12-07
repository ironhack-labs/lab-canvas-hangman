class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200)
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(500, 250);
    this.context.lineTo(500, 200);
    this.context.lineTo(175, 200);
    this.context.lineTo(175, 650);
    this.context.lineTo(100 ,700)
    this.context.lineTo(250 ,700)
    this.context.lineTo(175 ,650)
    this.context.moveTo(300, 700);
    for (let i = 0; i < this.secretWord.length; i += 1){
      this.context.lineTo(350 + 60 * i, 700);
      this.context.moveTo(350 + 60 * i + 10, 700);
    }
    this.context.strokeStyle = "black";
    this.context.lineWidth = 4;
    this.context.stroke();
    this.context.closePath();
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
