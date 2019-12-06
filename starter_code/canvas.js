class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.canvasWidth = 1000;
    this.canvasHeight = 500;
    this.posX = 300;
    this.posY = 450;
    this.letterPosArray = [];
    this.loseImg = new Image();
    this.winImg = new Image();
  }
  loadImage() {
    this.loseImg.src = "./images/gameover.png";
    this.winImg.src = "./images/awesome.png";
  }

  createBoard() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  drawLines() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    let space = 10;
    let line = 50;
    let linePos = this.posX;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.letterPosArray.push(linePos);
      this.ctx.beginPath();
      this.ctx.moveTo(linePos + space, this.posY);
      this.ctx.lineTo(linePos + line, this.posY);
      this.ctx.stroke();
      this.ctx.closePath();
      linePos += line + space;
    }
  }

  writeCorrectLetter(i) {
    let letterPos = this.letterPosArray[i] + 10;
    this.ctx.fillStyle = "black";
    this.ctx.font = "50px Arial";
    this.ctx.fillText(hangman.key, letterPos, this.posY - 10);
  }

  writeWrongLetter() {
    let letterPosY;
    let letterPosX;
    if (hangman.wrongLetter.length > 5) {
      letterPosY = this.posY - 200;
      letterPosX = this.posX + 300 + (hangman.wrongLetter.length - 5) * 50;
    } else {
      letterPosY = this.posY - 250;
      letterPosX = this.posX + 300 + hangman.wrongLetter.length * 50;
    }
    this.ctx.fillStyle = "black";
    this.ctx.font = "50px Arial";
    this.ctx.fillText(hangman.key, letterPosX, letterPosY);
  }

  drawHangman(shape) {
    switch (shape) {
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX - 60, this.posY - 40);
        this.ctx.lineTo(this.posX - 10, this.posY);
        this.ctx.lineTo(this.posX - 110, this.posY);
        this.ctx.lineTo(this.posX - 60, this.posY - 40);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX - 60, this.posY - 40);
        this.ctx.lineTo(this.posX - 60, this.posY - 400);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX - 60, this.posY - 400);
        this.ctx.lineTo(this.posX + 150, this.posY - 400);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 150, this.posY - 400);
        this.ctx.lineTo(this.posX + 150, this.posY - 370);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 190, this.posY - 330);
        this.ctx.arc(this.posX + 150, this.posY - 330, 40, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 150, this.posY - 290);
        this.ctx.lineTo(this.posX + 150, this.posY - 150);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 150, this.posY - 260);
        this.ctx.lineTo(this.posX + 100, this.posY - 230);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 150, this.posY - 260);
        this.ctx.lineTo(this.posX + 200, this.posY - 230);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 150, this.posY - 150);
        this.ctx.lineTo(this.posX + 100, this.posY - 120);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 10:
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX + 150, this.posY - 150);
        this.ctx.lineTo(this.posX + 200, this.posY - 120);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
    }
  }

  solve(i, letter) {
    let letterPos = this.letterPosArray[i] + 10;
    this.ctx.fillStyle = "red";
    this.ctx.font = "50px Arial";
    this.ctx.fillText(letter, letterPos, this.posY - 10);
  }

  gameOver() {
    let imgWidth = 570;
    let imgHeight = 240;
    this.ctx.drawImage(
      this.loseImg,
      (this.canvasWidth - imgWidth) / 2,
      (this.canvasHeight - imgHeight) / 3,
      imgWidth,
      imgHeight
    );
  }

  winner() {
    let imgWidth = 872 / 1.5;
    let imgHeight = 618 / 1.5;
    this.ctx.drawImage(
      this.winImg,
      (this.canvasWidth - imgWidth) / 2,
      (this.canvasHeight - imgHeight) / 3,
      imgWidth,
      imgHeight
    );
  }
}
