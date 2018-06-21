
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.createBoard();
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function () {

  var numberLines = this.secretWord.length;
  this.ctx.beginPath();
  var x = 500;
  var y = 700;

  for (var i = 0; i<numberLines; i++){

    this.ctx.moveTo(x, y);
    x += 50
    this.ctx.lineTo(x, y);
    x += 10;

    this.ctx.stroke();
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var x = 525;
  var y = 670;
  this.ctx.font='30px serif';
  this.ctx.fillText(this.secretWord[index],x+60*index,y);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var x = 720;
  var y = 100;
  this.ctx.font='30px serif';
  this.ctx.fillText(letter, (x+(8-errorsLeft-1)*60),y);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  if (shape==1){
    this.ctx.beginPath();
    this.ctx.moveTo(20,650);
    this.ctx.lineTo(120,650);
    this.ctx.stroke();
  } else if (shape==2){
    this.ctx.beginPath();
    this.ctx.moveTo(70,650);
    this.ctx.lineTo(70,150);
    this.ctx.stroke();
  } else if (shape==3){
    this.ctx.beginPath();
    this.ctx.moveTo(70,150);
    this.ctx.lineTo(270,150);
    this.ctx.stroke();
  } else if (shape==4){
    this.ctx.beginPath();
    this.ctx.moveTo(270,150);
    this.ctx.lineTo(270,250);
    this.ctx.stroke();
  } else if (shape==5){
    this.ctx.beginPath();
    this.ctx.arc(270,300,50,0,2*Math.PI);
    this.ctx.stroke();
  } else if (shape==6){
    this.ctx.beginPath();
    this.ctx.moveTo(270,350);
    this.ctx.lineTo(270,450);
    this.ctx.stroke();
  } else if (shape==7){
    this.ctx.beginPath();
    this.ctx.moveTo(270,450);
    this.ctx.lineTo(220,500);
    this.ctx.stroke();
  } else{
    this.ctx.beginPath();
    this.ctx.moveTo(270,450);
    this.ctx.lineTo(320,500);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.clearRect(0, 0,1200 ,600 );
  var that=this;
  var img = new Image();
  img.onload = function() {
    that.ctx.drawImage(img, 0, 0,800,600);
  };
  img.src = 'images/gameover.png';
};

HangmanCanvas.prototype.winner = function () {
  this.ctx.clearRect(0, 0,1200 ,600 );
  var that=this;
  var img = new Image();
  img.onload = function() {
    that.ctx.drawImage(img, 0, 0,800,600);
  };
  img.src='images/awesome.png';
};
