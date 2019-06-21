class HangmanCanvas {
  constructor(secretWord) {
    this.wrongLetters = [];
    this.secretWord = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.font = "50px Arial";
  }

  createBoard() {
    this.ctx.fillStyle = '#000';
    this.ctx.clearRect(0, 0, 1200, 800);
  }
  drawLines() {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      this.ctx.fillStyle = '#000';
      this.ctx.lineWidth = 3;
      const factor = (i) * 50;
      this.ctx.beginPath();
      this.ctx.moveTo(200 + factor, 600);
      this.ctx.lineTo(230 + factor, 600);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }
  writeCorrectLetter(x) {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.secretWord.split('')[i] === x.key) {
        this.drawLines();
        this.ctx.fillText(x.key.toUpperCase(), (i * 50) + 200, 580);
      }
    }
  }
  writeWrongLetter(w) {
    if (!this.secretWord.split('').includes(w.key)) {
      this.wrongLetters.push(w.key.toUpperCase());
      this.ctx.fillText(w.key.toUpperCase(), 500 + (this.wrongLetters.length + 1) * 50, 200);
    }


  }
  drawHangman() {
    switch (this.wrongLetters.length) {
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(50, 600);
        this.ctx.lineTo(100, 600);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(50, 600);
        this.ctx.lineTo(75, 580);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(100, 600);
        this.ctx.lineTo(75, 580);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(75, 580);
        this.ctx.lineTo(75, 200);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.moveTo(75, 200);
        this.ctx.lineTo(275, 200);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(275, 200);
        this.ctx.lineTo(275, 300);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.arc(275, 330, 30, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(275, 360);
        this.ctx.lineTo(275, 460);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(275, 460);
        this.ctx.lineTo(300, 530);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 10:
        this.ctx.beginPath();
        this.ctx.moveTo(275, 460);
        this.ctx.lineTo(250, 530);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      default:
        break;
    }
  }
  gameOver() {
    this.createBoard();
    let img = new Image();
    img.src = './images/gameover.png';
    img.onload = () => {
      this.ctx.drawImage(img, 300, 180, 600, 400);
    }
  }
  winner() {
    this.createBoard();
    let img = new Image();
    img.src = './images/awesome.png';
    img.onload = () => {
      this.ctx.drawImage(img, 300, 180, 600, 400);
    }
  }
}