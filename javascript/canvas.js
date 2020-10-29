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
  this.context.beginPath();
  this.context.moveTo(500, 175);
  this.context.lineTo(500, 100);
  this.context.lineTo(150,100);
  this.context.lineTo(150, 650);
  this.context.lineTo(100, 700);
  this.context.lineTo(200, 700);
  this.context.lineTo(150, 650);

  this.context.moveTo(250, 700);
  for (let i = 0; i < this.secretWord.length; i++) {
    this.context.lineTo(300 + 60 * i, 700);
    this.context.moveTo(300 + 60 * i + 10, 700);
  }
  this.context.lineWidth = 4;
  this.context.stroke();
}

  writeCorrectLetter(index) {
    let letter = this.secretWord[index].toUpperCase();
    this.context.font = '40 px Georgia';
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i].toUpperCase() === letter) {
        this.context.fillText(letter, 260 + 50 * i + 10 * i, 680, 50);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '40px Georgia';
    let row = Math.floor(errorsLeft / 5);
    this.context.fillText(
      1000 - 60 * errorsLeft + 300 * row,
      300 - 100 * row,
      50
    );
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.arc(500, 225, 50, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
        break;
      case 8:
          this.context.moveTo(500, 275);
          this.context.lineTo(500, 425);
          this.context.stroke();
          break;
      case 7:
        this.context.lineTo(450, 500);
        this.context.stroke();
        break;
      case 6:
        this.context.lineTo(420, 500);
        this.context.stroke();
        break;
      case 5:
        this.context.moveTo(500, 425);
        this.context.lineTo(550, 500);
        this.context.stroke();
        break;
      case 4:
        this.context.lineTo(580, 500);
        this.context.stroke();
        break;
      case 3:
        this.context.moveTo(500, 330);
        this.context.lineTo(430, 330);
        this.context.stroke();
        break;
      case 2:
        this.context.lineTo(570, 330);
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath();
        this.context.arc(485, 210, 5, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
        this.context.beginPath();
        this.context.arc(515, 210, 5, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
        this.context.moveTo(485, 245);
        this.context.lineTo(515, 245);
        this.context.stroke();
        break;
      case 0:
        this.context.font = "30px Arial";
        this.context.clearRect(470, 190, 60, 40);
        this.context.fillText('x', 479, 217);
        this.context.fillText('x', 509, 217);
        break;
    }
  }

  gameOver() {
    console.log('YOU LOOSE');
    let image = new Image();
    image.src = './images/gameover.png';
    this.context.drawImage(image, 0, 0);
  }

  winner() {
    console.log('YOU WIN');
    let image = new Image();
    image.src = './images/awesome.png';
    this.context.drawImage(image, 0, 0);
  }
}
