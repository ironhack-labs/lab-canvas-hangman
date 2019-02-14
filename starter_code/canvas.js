function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secret = secretWord;
  this.winnerimg = document.createElement('img');
  this.winnerimg.src = "./images/awesome.png";
  this.loserimg = document.createElement('img');
  this.loserimg.src = "./images/gameover.png";
  this.createBoard();
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.lineWidth= 5;
  this.ctx.lineCap = "round";
};

HangmanCanvas.prototype.drawLines = function () {
  for (var i = 0; i < this.secret.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(500 + i * 70, 400);
    this.ctx.lineTo(550 + i * 70, 400);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font = "75px Arial";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(this.secret[index], 500 + index * 70, 390);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = "50px Arial";
  this.ctx.fillStyle = "dimgray";
  this.ctx.fillText(letter, 800 - (errorsLeft % 10) * 40, 100);
};

HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  if(errorsLeft === 9) {
    this.ctx.moveTo(200, 400);
    this.ctx.lineTo(125, 450);
    this.ctx.lineTo(275, 450);
    this.ctx.lineTo(200, 400);
    this.ctx.stroke();
  }
  if(errorsLeft === 8) { 
    this.ctx.moveTo(200, 400);
    this.ctx.lineTo(200, 50);
    this.ctx.stroke();
  }
  if(errorsLeft === 7) {
    this.ctx.moveTo(200, 50);
    this.ctx.lineTo(350, 50);
    this.ctx.stroke();
  }
  if(errorsLeft === 6) {
    this.ctx.moveTo(350, 50);
    this.ctx.lineTo(350, 120);
    this.ctx.stroke();
  }
  if(errorsLeft === 5) {
    this.ctx.beginPath();
    this.ctx.arc(350, 150, 30, 0, Math.PI*2);
    this.ctx.stroke();
  }
  if(errorsLeft === 4) {
    this.ctx.moveTo(350, 180);
    this.ctx.lineTo(350, 275);
    this.ctx.stroke();
  }
  if(errorsLeft === 3) {
    this.ctx.moveTo(350, 200);
    this.ctx.lineTo(300, 225);
    this.ctx.stroke();
  }
  if(errorsLeft === 2) {
    this.ctx.moveTo(350, 200);
    this.ctx.lineTo(400, 225);
    this.ctx.stroke();
  }      
  if(errorsLeft === 1) {
    this.ctx.moveTo(350, 275);
    this.ctx.lineTo(300, 350);
    this.ctx.stroke();
  }
  if(errorsLeft === 0) {
    this.ctx.moveTo(350, 275);
    this.ctx.lineTo(400, 350);
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("x x", 330, 155);
    this.ctx.fillText("_", 342, 160);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.drawImage(this.loserimg,400,0,500,400);   
};

HangmanCanvas.prototype.winner = function () {
  this.ctx.drawImage(this.winnerimg,400,0,500,400);
};