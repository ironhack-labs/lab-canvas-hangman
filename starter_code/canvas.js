class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.ctx = document.getElementById("hangman").getContext("2d");
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 5;
  }

  drawLines() {
    let start = 300;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(start, 600);
      this.ctx.lineTo(start + 50, 600);
      this.ctx.stroke();
      start += 75;
    }
  }

  writeCorrectLetter(index) {
    let currentLetter = hangman.secretWord[index];
    this.ctx.font = "70px Arial";
    this.ctx.fillText(currentLetter, 310 + 75 * index, 590);
    hangman.guessedLetter += "d";
  }

  writeWrongLetter(letter) {
    this.ctx.font = "70px Arial";
    this.ctx.fillText(letter, 700 + 50 * (10 - hangman.errorsLeft), 200);
    hangman.errorsLeft--;
  }
  drawHangman(num) {
    this.ctx.moveTo(240, 550);
    this.ctx.lineTo(275, 600);
    this.ctx.lineTo(205, 600);
    this.ctx.lineTo(240, 550);
    this.ctx.stroke();
    switch (num) {
      case 9:
        this.ctx.moveTo(240, 550);
        this.ctx.lineTo(240, 100);
        break;
      case 8:
        this.ctx.moveTo(240, 100);
        this.ctx.lineTo(550, 100);
        break;
      case 7:
        this.ctx.moveTo(550, 100);
        this.ctx.lineTo(550, 140);
        break;
      case 6:
        this.ctx.closePath();
        this.ctx.beginPath();
        // this.ctx.moveTo(550, 190);
        this.ctx.arc(550, 190, 50, 0, Math.PI * 2);
        break;
      case 5:
        this.ctx.moveTo(550, 240);
        this.ctx.lineTo(550, 300);
        break;
      case 4:
        this.ctx.moveTo(550, 300);
        this.ctx.lineTo(480, 260);
        break;
      case 3:
        this.ctx.moveTo(550, 300);
        this.ctx.lineTo(620, 260);
        break;
      case 2:
        this.ctx.moveTo(550, 300);
        this.ctx.lineTo(550, 450);
        break;
      case 1:
        this.ctx.moveTo(550, 450);
        this.ctx.lineTo(480, 490);
        break;
      case 0:
        this.ctx.moveTo(550, 450);
        this.ctx.lineTo(620, 490);
        break;
    }

    this.ctx.stroke();
  }

  gameOver() {
    const img = new Image();
    img.src = "./images/gameover.png";
    this.ctx.clearRect(0, 0, 700, 500);
    this.ctx.drawImage(img, 300, 200, 400, 200);
  }
  winner() {
    const img = new Image();
    img.src = "./images/awesome.png";
    this.ctx.clearRect(0, 0, 700, 500);
    this.ctx.drawImage(img, 300, 200, 400, 200);
  }
}
