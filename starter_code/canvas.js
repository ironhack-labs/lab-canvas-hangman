

function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;

  this.canvas = document.getElementById("hangman");

  this.ctx = this.canvas.getContext("2d");
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  let x = 500;
  let y = 500;

  for (let i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    x += 50;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.closePath();
    x += 20;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.font = "50px Arial";
  this.ctx.fillText(this.secretWord[index], 500 + 70 * index, 490);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.font = "50px Arial";
  this.ctx.fillText(letter, 700 + 50 * (10 - errorsLeft), 200, 50);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  let numOfError = shape
  switch(numOfError) {
    case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(80, 550);
        this.ctx.lineTo(160, 500);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        this.closePath();
        break
    case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(160, 500);
        this.ctx.lineTo(240, 550);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
      break
    case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(80, 550);
        this.ctx.lineTo(240, 550);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
      break
    case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(160, 500);
        this.ctx.lineTo(160, 100);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        break
    case 5:
        this.ctx.beginPath();
        this.ctx.moveTo(160, 100);
        this.ctx.lineTo(360, 100);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        break
    case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(360, 100);
        this.ctx.lineTo(360, 140);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        this.ctx.closePath();
        break
    case 3:
        this.ctx.beginPath();
        this.ctx.arc(360, 175, 35, 0, Math.PI * 2)
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        break
    case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(360, 210);
        this.ctx.lineTo(360, 300);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        break
    case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(360, 300);
        this.ctx.lineTo(330, 350);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        this.ctx.closePath();
        break
    case 0: 
        this.ctx.beginPath();
        this.ctx.moveTo(360, 300);
        this.ctx.lineTo(390, 350);
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        break
  }
};

HangmanCanvas.prototype.gameOver = function() {
  this.ctx.drawImage(imageLose, 100, 100, 570, 240);
};

HangmanCanvas.prototype.winner = function() {
  this.ctx.drawImage(imageWin, 100, 100, 872, 618);
};

const imageWin = new Image();
imageWin.src = "./images/awesome.png";

const imageLose = new Image();
imageLose.src = "./images/gameover.png";

