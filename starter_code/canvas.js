class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.lineWidth = 4;
    this.ctx.font = '48px arial';
    this.secretWord = secretWord;
    this.hangmanShape = ['head', 'body', 'left leg', 'right leg', 'left arm', 'right arm', 'left foot', 'right foot', 'left eye', 'right eye']
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 500);
    this.ctx.beginPath();
    this.ctx.moveTo(75, 450);
    this.ctx.lineTo(150, 500);
    this.ctx.lineTo(0, 500);
    this.ctx.lineTo(75, 450);
    this.ctx.lineTo(75, 0);
    this.ctx.lineTo(350, 0);
    this.ctx.lineTo(350, 50);
    this.ctx.stroke();
  }

  drawLines() {
    let x = 200;
    for (let i = 0; i < this.secretWord.length; i++)
      {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 500);
        this.ctx.lineTo(x + 34, 500);
        this.ctx.stroke();
        x += 55
      }
  }

  writeCorrectLetter(index) {
    let x = 200 + index * 55;
    this.ctx.fillText(this.secretWord[index].toUpperCase(), x, 490);
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 1050 + errorsLeft * -55;
    this.ctx.fillText(letter.toUpperCase(), x, 150);
  }

  drawHangman(shape) {
    switch (shape) {
      case 'head':
        this.ctx.beginPath();
        this.ctx.arc(350, 85, 35, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 'body':
        this.ctx.beginPath();
        this.ctx.moveTo(350, 120);
        this.ctx.lineTo(350, 270);
        this.ctx.stroke();
        break;

      case 'left leg':
        this.ctx.beginPath();
        this.ctx.moveTo(350, 270);
        this.ctx.lineTo(300, 350);
        this.ctx.stroke();
        break;

      case 'right leg':
        this.ctx.beginPath();
        this.ctx.moveTo(350, 270);
        this.ctx.lineTo(400, 350);
        this.ctx.stroke();
        break;

      case 'left arm':
        this.ctx.beginPath();
        this.ctx.moveTo(350, 160);
        this.ctx.lineTo(270, 210);
        this.ctx.stroke();
        break;

      case 'right arm':
        this.ctx.beginPath();
        this.ctx.moveTo(350, 160);
        this.ctx.lineTo(430, 210);
        this.ctx.stroke();
        break;

      case 'left foot':
        this.ctx.beginPath();
        this.ctx.moveTo(300, 350);
        this.ctx.lineTo(270, 350);
        this.ctx.stroke();
        break;

      case 'right foot':
        this.ctx.beginPath();
        this.ctx.moveTo(400, 350);
        this.ctx.lineTo(430, 350);
        this.ctx.stroke();
        break;

      case 'left eye':
        this.ctx.beginPath();
        this.ctx.moveTo(335, 70);
        this.ctx.lineTo(345, 80);
        this.ctx.moveTo(345, 70);
        this.ctx.lineTo(335, 80);
        this.ctx.stroke();
        break;

      case 'right eye':
        this.ctx.beginPath();
        this.ctx.moveTo(355, 70);
        this.ctx.lineTo(365, 80);
        this.ctx.moveTo(365, 70);
        this.ctx.lineTo(355, 80);
        this.ctx.stroke();
        break;

      default:
        break;
    }    
  }

  gameOver() {
    this.ctx.clearRect(0, 0, 1200, 500);
    const gameOverImg = new Image();
    gameOverImg.src = './images/gameover.png';
    gameOverImg.onload = () => this.ctx.drawImage(gameOverImg, 315, 0, 570, 240);
  }

  winner() {
    this.ctx.clearRect(0, 0, 1200, 500);
    const winnerImg = new Image();
    winnerImg.src = './images/awesome.png';
    winnerImg.onload = () => this.ctx.drawImage(winnerImg, 247, 0, 705, 500);
  }
}