class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.posX = 300;
    this.posY = 450;
    this.letterPosArray = [];
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    console.log(this.secretWord);
    this.ctx.clearRect(0, 0, 1200, 800);
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
  gameOver() {}

  winner() {}
}
