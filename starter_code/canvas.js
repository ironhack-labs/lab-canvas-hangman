// jshint esversion: 6

class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }

  drawLines() {
    this.ctx.beginPath();
    this.ctx.moveTo(500, 175);
    this.ctx.lineTo(500, 100);
    this.ctx.lineTo(150, 100);
    this.ctx.lineTo(150, 650);   
    this.ctx.lineTo(100, 700);
    this.ctx.lineTo(200, 700);
    this.ctx.lineTo(150, 650);
    this.ctx.moveTo(250, 700);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.lineTo(300 + 60 * i, 700);
      this.ctx.moveTo(300 + 60 * i + 10, 700);
    }
    this.ctx.lineWidth = 4;
    this.ctx.stroke();
  }

  writeCorrectLetter(index) {
    let letter = this.secretWord[index].toUpperCase();
    this.ctx.font = "40px Georgia";
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i].toUpperCase() === letter) {
        this.ctx.fillText(letter, 260 + 50 * i + 10 * i, 680, 50);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "40px Georgia";
    let row = Math.floor(errorsLeft / 5);
    this.ctx.fillText(letter, 1000 - 60 * errorsLeft + 300 * row, 300 - 100 * row, 50);
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9:
        this.ctx.beginPath();
        this.ctx.arc(500, 225, 50, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      case 8:
        this.ctx.moveTo(500, 275);
        this.ctx.lineTo(500, 425);  
        this.ctx.stroke();
        break;
      case 7:
        this.ctx.lineTo(450, 500);
        this.ctx.stroke();
        break;
      case 6:
        this.ctx.lineTo(420, 500);
        this.ctx.stroke();
        break;
      case 5:
        this.ctx.moveTo(500, 425);
        this.ctx.lineTo(550, 500);
        this.ctx.stroke();
        break;
      case 4:
        this.ctx.lineTo(580, 500);
        this.ctx.stroke();
        break;
      case 3:
        this.ctx.moveTo(500, 330);
        this.ctx.lineTo(430, 330);
        this.ctx.stroke();
        break;
      case 2:
        this.ctx.lineTo(570, 330);
        this.ctx.stroke();
        break;
      case 1:
        this.ctx.beginPath();
        this.ctx.arc(485, 210, 5, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(515, 210, 5, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.moveTo(485, 245);
        this.ctx.lineTo(515, 245);
        this.ctx.stroke();
        break;
      case 0: // uh oh
        this.ctx.font = "30px Arial";
        this.ctx.clearRect(470, 190, 60, 40);
        this.ctx.fillText("x", 479, 217);
        this.ctx.fillText("x", 509, 217);
        break;
    }
  }

  gameOver() {
    alert('you lose');
    document.onkeydown = null;
  }

  winner() {
    alert('you win');
    document.onkeydown = null;
  }
}