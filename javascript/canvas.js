class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(500 + 70*i, 600);
      this.context.lineTo(550 + 70*i, 600);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    this.context.font = '60px Arial';
    this.context.fillText(this.secretWord[index], 500 + 70*index, 590, 40);
    // for (let i = 0; i < this.secretWord.length; i++) {
    //   if (index === this.secretWord[i]) {
    //     this.context.fillText(this.secretWord[i], 500 + 70*index, 590, 40);
    //   }
    // }
    hangman.addCorrectLetter(index);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '60px Arial';
    this.context.fillText(letter, 500 + 65*(10-errorsLeft), 100, 40);
    hangman.addWrongLetter(letter);
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    switch (errorsLeft) {
      case 10:
        break;
      case 9:
        this.context.moveTo(120, 600);
        this.context.lineTo(160, 550);
        this.context.lineTo(200, 600);
        this.context.lineTo(120, 600);
        break;
      case 8:
        this.context.moveTo(160, 550);
        this.context.lineTo(160, 130);
        break;
      case 7:
        this.context.moveTo(160, 130);
        this.context.lineTo(400, 130);
        break;
      case 6:
        this.context.moveTo(400, 130);
        this.context.lineTo(400, 180);
        break;
      case 5:
        this.context.moveTo(440, 220);
        this.context.arc(400, 220, 40, 0, Math.PI * 2);
        break;
      case 4:
        this.context.moveTo(400, 260);
        this.context.lineTo(400, 430);
        break;
      case 3:
        this.context.moveTo(400, 430);
        this.context.lineTo(460, 500);
        break;
      case 2:
        this.context.moveTo(400, 430);
        this.context.lineTo(340, 500);
        break;
      case 1:
        this.context.moveTo(400, 300);
        this.context.lineTo(450, 350);
        break;
      case 0:
        this.context.moveTo(400, 300);
        this.context.lineTo(350, 350);
        break;
    }
    this.context.stroke();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
