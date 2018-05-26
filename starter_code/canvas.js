
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.lineWidth = 3;
  this.ctx.font = "80px serif";
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  this.ctx.beginPath();
  this.ctx.moveTo(20, this.ctx.canvas.height-100);
  this.ctx.lineTo(200, this.ctx.canvas.height-100);
  this.ctx.lineTo(110, this.ctx.canvas.height-160);
  this.ctx.closePath();
  this.ctx.moveTo(110, this.ctx.canvas.height-160);
  this.ctx.lineTo(110, this.ctx.canvas.height-700);
  this.ctx.stroke();
};

HangmanCanvas.prototype.drawLines = function () {
  this.createBoard();
  for(i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(80*(i+1)+200, this.ctx.canvas.height-100);
    this.ctx.lineTo(80*(i+1.5)+200, this.ctx.canvas.height-100);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let i = index;
  while(this.secretWord.indexOf(this.secretWord[index],i)!==-1){
    i = this.secretWord.indexOf(this.secretWord[index],i);
    this.ctx.fillText(this.secretWord[i], 80*(i+1)+200, this.ctx.canvas.height-105,100);
    i++;
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.fillText(letter, 50*(9-errorsLeft)+700, 200, 50);
  this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape){
    case  10:
      this.ctx.moveTo(110, this.ctx.canvas.height-700);
      this.ctx.lineTo(500, this.ctx.canvas.height-700);
      break;
    case  9:
      this.ctx.lineTo(500, this.ctx.canvas.height-650);
      break;
    case  8:
      this.ctx.beginPath();
      this.ctx.arc(500, this.ctx.canvas.height-600, 50, 0, Math.PI*2, true);
      break;
    case  7:
      this.ctx.beginPath();
      this.ctx.moveTo(500, this.ctx.canvas.height-550);
      this.ctx.lineTo(500, this.ctx.canvas.height-350);
      break;
    case  6:
      this.ctx.lineTo(430, this.ctx.canvas.height-250);
      break;
    case  5:
      this.ctx.moveTo(500, this.ctx.canvas.height-350);
      this.ctx.lineTo(570, this.ctx.canvas.height-250);
      break;
    case  4:
      this.ctx.moveTo(500, this.ctx.canvas.height-500);
      this.ctx.lineTo(440, this.ctx.canvas.height-400);
      break;
    case  3:
      this.ctx.moveTo(500, this.ctx.canvas.height-500);
      this.ctx.lineTo(560, this.ctx.canvas.height-400);
      break;
    case  2:
      this.ctx.moveTo(510, this.ctx.canvas.height-620);
      this.ctx.lineTo(530, this.ctx.canvas.height-600);
      this.ctx.moveTo(530, this.ctx.canvas.height-620);
      this.ctx.lineTo(510, this.ctx.canvas.height-600);
      break;
    case  1:
      //
      this.ctx.moveTo(490, this.ctx.canvas.height-620);
      this.ctx.lineTo(470, this.ctx.canvas.height-600);
      this.ctx.moveTo(470, this.ctx.canvas.height-620);
      this.ctx.lineTo(490, this.ctx.canvas.height-600);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(500, this.ctx.canvas.height-575, 10, 0, Math.PI*2, true);
      break;
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {
  let imgGameOver = new Image();
  imgGameOver.src = "images/gameover.png";
  let context = this.ctx;
  imgGameOver.onload= function(){
    context.drawImage(imgGameOver, 600, 300);
  }
};

HangmanCanvas.prototype.winner = function () {
  let imgWinner = new Image();
  imgWinner.src = "images/awesome.png";
  let context = this.ctx;
  imgWinner.onload= function(){
    context.drawImage(imgWinner, 20, 10);
  }
};