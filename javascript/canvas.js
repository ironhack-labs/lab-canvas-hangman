class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.gameEnd = new Image();
    this.gameEnd.src = "/images/gameover.png";
    this.gameComplete = new Image();
    this.gameComplete.src = "/images/awesome.png";
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(300 + i * 70, 600);
      this.context.lineTo(350 + i * 70, 600);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    if (this.secretWord.includes(index)) {
      this.context.font = "48px serif";

      for (let i = 0; i < hangman.secretWord.length; i++) {
        if (index === hangman.secretWord[i]) {
          this.context.fillText(index, 310 + i * 70, 580);
          hangman.addCorrectLetter(index);
        }
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    if (!this.secretWord.includes(letter)) {
      hangman.addWrongLetter(letter);

      for (let i = 0; i < hangman.letters.length; i++) {
        this.context.font = "48px serif";
        this.context.fillText(hangman.letters[i], 410 + i * 50, 200);
      }
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(30, 600);
        this.context.lineTo(150, 600);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(30, 600);
        this.context.lineTo(93, 550);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(150, 600);
        this.context.lineTo(93, 550);
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(93, 550);
        this.context.lineTo(93, 200);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(93, 200);
        this.context.lineTo(300, 200);
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(300, 200);
        this.context.lineTo(300, 250);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        this.context.beginPath();
        this.context.arc(300, 280, 30, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.moveTo(300, 310);
        this.context.lineTo(300, 420);
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(300, 420);
        this.context.lineTo(255, 480);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(300, 420);
        this.context.lineTo(345, 480);
        this.context.stroke();
        this.context.closePath();
        break;
    }
  }

  gameOver() {
    // ... your code goes here
    if (hangman.errorsLeft == 0) {
      this.context.clearRect(0, 0, 1200, 800);
      this.context.drawImage(this.gameEnd, 0, 0, 1200, 800);
    }
  }

  winner() {
    // ... your code goes here

    this.context.clearRect(0, 0, 1200, 800);
    this.context.drawImage(this.gameComplete, 0, 0, 1200, 800);
  }
}
