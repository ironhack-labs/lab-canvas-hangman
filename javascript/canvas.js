class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    console.log(secretWord)
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.width, this.context.height)
    this.drawLines()
  }

  drawLines() {
    this.context.linewidth = 10;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(10 + (i * 50), 750);
      this.context.lineTo(50 + (i * 50), 750);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    const guessedLetter = this.secretWord[index];
    for (let i = 0; i < this.secretWord.length; i++){
      if (this.secretWord[i] === guessedLetter) {
        this.context.fillText(guessedLetter.toUpperCase(),15 + (i * 50), 745)
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    const wrongLetter = 10 - errorsLeft;
      if(!this.secretWord.includes(letter)) {
        this.context.fillText(letter.toUpperCase(), 20 + (wrongLetter * 50), 100)
      }
    
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(500, 650);
        this.context.lineTo(1100, 650);
        this.context.stroke();
        break;

      case 8:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(575, 650);
        this.context.lineTo(575, 50);
        this.context.stroke();
        break;

      case 7:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(575, 50);
        this.context.lineTo(900, 50);
        this.context.stroke();
        break;

      case 6:
        this.context.linewidth = 10;
        this.context.beginPath();
        this.context.moveTo(900, 50);
        this.context.lineTo(900, 150);
        this.context.stroke();
        break;

      case 5:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.arc(900, 200, 50, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.stroke();
        break;

      case 4:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 250);
        this.context.lineTo(900, 450);
        this.context.stroke();
        break;

      case 3:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 300);
        this.context.lineTo(1050, 350);
        this.context.stroke();
        break;

      case 2:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 300);
        this.context.lineTo(750, 350);
        this.context.stroke();
        break;

      case 1:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 450);
        this.context.lineTo(1050, 600);
        this.context.stroke();
        break;

      case 0:
        this.context.linewidth = 5;
        this.context.beginPath();
        this.context.moveTo(900, 450);
        this.context.lineTo(750, 600);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}