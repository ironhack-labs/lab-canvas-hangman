
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.createBoard();
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,700);
  this.ctx.lineWidth = 4;
};

HangmanCanvas.prototype.drawLines = function () {
  for (let i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    let x = i * 50;
    this.ctx.moveTo(330 + x, 500);
    this.ctx.lineTo(370 + x, 500);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font="50px Arial"
  this.ctx.fillStyle="black"
  this.ctx.fillText(this.secretWord.charAt(index),330 + index * 50,490);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font="50px Arial"
  this.ctx.fillStyle="black"
  this.ctx.fillText(letter,700 + (10 - errorsLeft) * 30,200);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.fillStyle="black"
  this.ctx.beginPath();
  switch (shape) {
    case 9:
      this.ctx.moveTo(60,440);
      this.ctx.lineTo(100,415);
      this.ctx.lineTo(140,440);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case 8:
      this.ctx.moveTo(100,420);
      this.ctx.lineTo(100,50);
      this.ctx.stroke();
      break;
    case 7:
      this.ctx.moveTo(100,50);
      this.ctx.lineTo(225,50);
      this.ctx.stroke();
      break;
    case 6:
      this.ctx.moveTo(225,50);
      this.ctx.lineTo(225,125);
      this.ctx.stroke();
      break;
    case 5:
      this.ctx.arc(225,150,25,0,Math.PI*2,true);
      this.ctx.stroke();
      break;
    case 4:
      this.ctx.moveTo(225,175);
      this.ctx.lineTo(225,275);
      this.ctx.stroke();
      break;
    case 3:
      this.ctx.moveTo(225,200);
      this.ctx.lineTo(175,225);
      this.ctx.stroke();
      break;
    case 2:
      this.ctx.moveTo(225,200);
      this.ctx.lineTo(275,225);//este ve
      this.ctx.stroke();
      break;
    case 1:
      this.ctx.moveTo(225,275);
      this.ctx.lineTo(175,350);
      this.ctx.stroke();
      break;
    case 0:
      this.ctx.moveTo(225,275);
      this.ctx.lineTo(290, 350);
      this.ctx.stroke();
      break;
  }

};

HangmanCanvas.prototype.gameOver = function () {
  var loserImg = document.createElement('img');
  loserImg.src = "./images/gameover.png";
  //pintamos la imagen
  this.ctx.drawImage(loserImg,350,0,500,400);
};

HangmanCanvas.prototype.winner = function () {
  var winImg = document.createElement('img');
  winImg.src = "./images/awesome.png";
  //pintamos la imagen
  this.ctx.drawImage(winImg,350,0,500,400);
};
