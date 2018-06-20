
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1500,1500);

};

HangmanCanvas.prototype.drawLines = function () {
  for (var i = 0; i < hangman.secretWord.length; i++) {
  this.ctx.beginPath();
  this.ctx.moveTo(500 + 50 * i,100);
  this.ctx.lineTo(525 + 50 * i,100);
  this.ctx.stroke();
  }
  
  
};

HangmanCanvas.prototype.writeCorrectLetter = function (letter, index) {
  this.ctx.font = '20px Arial';
  this.ctx.fillText(letter, 507 + 50 * index,90);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '20px Arial';
  this.ctx.fillText(letter, 507 + 50 * (9 - errorsLeft), 200);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape) {  
  case 9:
  this.ctx.beginPath();
  this.ctx.moveTo(100,200);
  this.ctx.lineTo(50,200);
  this.ctx.stroke();
  break;

  case 8:
  this.ctx.beginPath();
  this.ctx.moveTo(50,200);
  this.ctx.lineTo(75,150);
  this.ctx.stroke();
  break;

  case 7:
  this.ctx.beginPath();
  this.ctx.moveTo(75,150);
  this.ctx.lineTo(100,200);
  this.ctx.stroke();
  break;

  case 6:
  this.ctx.beginPath();
  this.ctx.moveTo(75,150);
  this.ctx.lineTo(75,00);
  this.ctx.stroke();
  break;

  case 5:
  this.ctx.beginPath();
  this.ctx.moveTo(75,00);
  this.ctx.lineTo(200,00);
  this.ctx.stroke();
  break;

  case 4:
  this.ctx.beginPath();
  this.ctx.moveTo(200,00);
  this.ctx.lineTo(200,50);
  this.ctx.stroke();
  break;

  case 3:
  this.ctx.beginPath();
  this.ctx.arc(200, 60, 10, 0, Math.PI*2, true);
  this.ctx.stroke();
  break;

  case 2:
  this.ctx.beginPath();
  this.ctx.moveTo(200,70);
  this.ctx.lineTo(200,125);
  this.ctx.stroke();
  break;

  case 1:
  this.ctx.beginPath();
  this.ctx.moveTo(200,125);
  this.ctx.lineTo(185,160);
  this.ctx.stroke();
  break;

  case 0:
  this.ctx.beginPath();
  this.ctx.moveTo(200,125);
  this.ctx.lineTo(215,160);
  this.ctx.stroke();
  break;

  }

};


HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();
  img.src = "images/gameover.png";
  var that = this;

  //Why img.onload????
  img.onload = function() {that.ctx.drawImage(img,250,50);}
};

HangmanCanvas.prototype.winner = function () {
  console.log("hangmanCanvas.winner");
  var img = new Image();
  img.src = "images/awesome.png";
  var that = this;

  //Why img.onload????
  img.onload = function() {that.ctx.drawImage(img,250,50);}

};
