
function HangmanCanvas(secretWord) {
  this.secretWord = secretWord,
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.wrong = "";
  this.start = 0;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function () {
  var x = 0;
  this.ctx.lineWidth = 2;
  for (var l = 0; l < this.secretWord.length ; l++){
    this.ctx.beginPath();
    this.ctx.moveTo(100+x, 500);
    this.ctx.lineTo(200+x, 500);
    this.ctx.stroke();
    this.ctx.closePath();
    x+=150;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.lineWidth = 2;
  this.ctx.font = "50px arial";
  for (var s = index; s< this.secretWord.length; s++){
    if (this.secretWord[s]==this.secretWord[index]){
      this.ctx.strokeText(this.secretWord[index], 150*s+130, 490);
    }
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.lineWidth = 2;
  this.ctx.font = "50px arial";
  this.wrong+=letter+" ";
  this.ctx.strokeText(this.wrong, 600, 100);
  this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function (shape) {

  this.ctx.lineWidth = 2;
switch (shape){
  //La base
  case  9:
  this.ctx.beginPath();
  this.ctx.moveTo(10, 500);
  this.ctx.lineTo(80, 500);
  this.ctx.lineTo(45, 470);
  this.ctx.fill();
  this.ctx.closePath();
  break;

  //El asta
  case 8:
  this.ctx.beginPath();
  this.ctx.moveTo(45, 470);
  this.ctx.lineTo(45, 50);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //El gancho
  case 7:
  this.ctx.beginPath();
  this.ctx.moveTo(45, 50);
  this.ctx.lineTo(450, 50);
  this.ctx.lineTo(450, 100);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //La cabeza
  case 6:
  this.ctx.beginPath();
  this.ctx.arc(450, 130, 30, 0, Math.PI*2, true);
  this.ctx.stroke();
  break;

  //El tronco
  case 5:
  this.ctx.beginPath();
  this.ctx.moveTo(450, 160);
  this.ctx.lineTo(450, 300);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //Pierna derecha
  case 4:
  this.ctx.beginPath();
  this.ctx.moveTo(450, 300);
  this.ctx.lineTo(400, 370);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //Pierna izquierda
  case 3:
  this.ctx.beginPath();
  this.ctx.moveTo(450, 300);
  this.ctx.lineTo(500, 370);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //Brazo derecho
  case 2:
  this.ctx.beginPath();
  this.ctx.moveTo(450, 200);
  this.ctx.lineTo(400, 210);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //Brazo izquierdo
  case 1:
  this.ctx.beginPath();
  this.ctx.moveTo(450, 200);
  this.ctx.lineTo(500, 210);
  this.ctx.stroke();
  this.ctx.closePath();
  break;

  //Cara
  case 0:
  this.ctx.font = "10px arial";
  this.ctx.strokeText("X     X", 437, 125);

  this.ctx.beginPath();
  this.ctx.moveTo(437, 140);
  this.ctx.lineTo(463, 140);
  this.ctx.stroke();
  this.ctx.closePath();
  this.gameOver();
  break;
}
};

HangmanCanvas.prototype.gameOver = function () {
  this.start =1;
  var imgGameOver = new Image();
  imgGameOver.src = "images/gameover.png";
  var context = this.ctx;
  imgGameOver.onload= function(){

  context.drawImage(imgGameOver, 300, 100);
  }
};

HangmanCanvas.prototype.winner = function () {
  this.start =1;
  var imgWin = new Image();
  imgWin.src = "images/awesome.png";
  var context = this.ctx;
  imgWin.onload= function(){

  context.drawImage(imgWin, 180, 10);
  }
};
