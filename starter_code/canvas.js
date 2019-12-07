class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.lineWidth = 5;
    console.log("print");
    this.drawLines();
  }

  drawLines() {
    let x = 300;
    this.ctx.beginPath();
    this.ctx.moveTo(x, 750);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.lineTo(x + 50, 750);
      this.ctx.moveTo(x + 60, 750);
      console.log(i);
      x += 60;
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  writeCorrectLetter(index) {
    let x = 310 + index * 60;
    this.ctx.font = "40px Roboto";
    this.ctx.beginPath();
    this.ctx.fillText(this.secretWord[index].toUpperCase(), x, 730);
    this.ctx.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    let x = 1200 - errorsLeft * 50;
    this.ctx.font = "40px Roboto";
    this.ctx.beginPath();
    this.ctx.fillText(letter.toUpperCase(), x, 300);
    this.drawHangman(errorsLeft);
  }

  drawHangman(shape) {
    switch (shape) {
      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(175, 700);
        this.ctx.lineTo(100, 750);
        this.ctx.lineTo(250, 750);
        break;
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(175, 700);
        this.ctx.lineTo(175, 50);
        break;
      case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(173, 50);
        this.ctx.lineTo(500, 50);
        break;
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 50);
        this.ctx.lineTo(500, 100);
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.arc(500, 150, 50, -(Math.PI / 2), (3 / 2) * Math.PI);
        break;
      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 200);
        this.ctx.lineTo(500, 400);
        break;
      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 400);
        this.ctx.lineTo(400, 500);
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 400);
        this.ctx.lineTo(600, 500);
        break;
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(400, 200);
        break;
      case 0:
        this.ctx.beginPath();
        this.ctx.moveTo(500, 300);
        this.ctx.lineTo(600, 200);
        break;
    }
    this.ctx.closePath();
    this.ctx.stroke();
  }

  gameOver() {
    let img = new Image();
    img.src = "./images/gameover.png";
    img.onload = function() {
      hangmanCanvas.ctx.drawImage(img, 300, 200);
    };
  }

  winner() {
    var img = new Image();
    img.src = "./images/awesome.png";
    img.onload = function() {
      hangmanCanvas.ctx.drawImage(img, 100, 0);
    };
  }
}
