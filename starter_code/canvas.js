class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 3
  }

  drawLines() {
    this.ctx.beginPath()
    let move = 100
    let lineTo = 140

    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.moveTo(move, 600);
      this.ctx.lineTo(lineTo, 600);
      this.ctx.stroke();
      move += 70
      lineTo += 70
    }
  }

  writeCorrectLetter(index) {
    this.ctx.beginPath()
    let move = 110
    this.ctx.font = "30px Arial";

    for (let i = 0; i < index.length; i++) {
      this.ctx.moveTo(move, 580);
      if (index[i] !== undefined) {
        this.ctx.fillText(index[i], move, 580);
      }
      move += 70;
    }
  }

  writeWrongLetter(letter) {
    let move = 400;
    this.ctx.font = "30px Arial";
    for (let i = 0; i < letter.length; i++) {
      this.ctx.moveTo(move, 100);
      this.ctx.fillText(letter[i], move, 100);
      move += 30
    }
  }

  drawHangman(shape) {
    this.ctx.beginPath()
    switch (shape) {
      case 9:
        this.ctx.moveTo(100, 500);
        this.ctx.lineTo(260, 500);
        this.ctx.stroke();
        break;
      case 8:
        this.ctx.moveTo(100, 500);
        this.ctx.lineTo(180, 400);
        this.ctx.stroke();
        break;
      case 7:
        this.ctx.moveTo(260, 500);
        this.ctx.lineTo(180, 400);
        this.ctx.stroke();
        break;
      case 6:
        this.ctx.moveTo(180, 400);
        this.ctx.lineTo(180, 150);
        this.ctx.stroke();
        break;
      case 5:
        this.ctx.moveTo(180, 150);
        this.ctx.lineTo(400, 150);
        this.ctx.stroke();
        break;
      case 4:
        this.ctx.moveTo(400, 150);
        this.ctx.lineTo(400, 200);
        this.ctx.stroke();
        break;
      case 3:
        this.ctx.arc(400, 230, 30, 0, 2 * Math.PI);
        this.ctx.stroke();
        break;
      case 2:
        this.ctx.moveTo(400, 260);
        this.ctx.lineTo(400, 340);
        this.ctx.stroke();
        break;
      case 1:
        this.ctx.moveTo(400, 340);
        this.ctx.lineTo(350, 430);
        this.ctx.stroke();
        break;
      case 0:
        this.ctx.moveTo(400, 340);
        this.ctx.lineTo(450, 430);
        this.ctx.stroke();
        break;
    }
  }

  gameOver() {
    this.ctx.clearRect(0, 0, 1200, 800);
    var img = new Image();
    img.src = './images/gameover.png';
    let context = this.ctx;
    img.onload = function (e) {
      context.drawImage(img, 100, 100);
    }
    document.getElementById('start-container').style.display = 'block';
  }

  winner() {
    this.ctx.clearRect(0, 0, 1200, 800);
    var img = new Image();
    img.src = './images/awesome.png';
    let context = this.ctx;
    img.onload = function (e) {
      context.drawImage(img, 10, 10);
    }
    document.getElementById('start-container').style.display = 'block';
  }
}

