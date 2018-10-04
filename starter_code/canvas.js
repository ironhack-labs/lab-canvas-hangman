
function HangmanCanvas(secretWord) {
  this.HC = document.getElementById('hangman');
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.ctx.font = '3em Permanent Marker';
  this.ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
  this.ctx.lineWidth = 5;
  this.secretWord = secretWord;
  this.ctx.img = document.getElementById("feedback");
}

HangmanCanvas.prototype.createBoard = function () {
  this.HC.style.display = 'block';
  //this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  this.ctx.clearRect(0, 0, 1664, 800);
  this.ctx.img.removeAttribute("src");
};

HangmanCanvas.prototype.drawLines = function () {
  for(var i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(700 + 60 * i, 600);
    this.ctx.lineTo(700 + 60 * i + 50, 600);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  for(var i = 0; i < index.length; i++) {
    //console.log(this.secretWord[index[i]]);
    this.ctx.fillText(this.secretWord[index[i]], 707 + 60 * index[i], 590);
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.fillText(letter, 800 + 60 * errorsLeft, 200);
  this.ctx.beginPath();
  this.drawHangman(errorsLeft);
  this.ctx.stroke();
};

HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  switch(errorsLeft) {
    case 9:
      this.ctx.moveTo(300,650);
      this.ctx.lineTo(250,700);
      this.ctx.moveTo(250,700);
      this.ctx.lineTo(350,700);
      this.ctx.moveTo(350,700);
      this.ctx.lineTo(300,650);
    break;
    case 8:
      this.ctx.moveTo(300,650);
      this.ctx.lineTo(300,100);
    break;
    case 7:
      this.ctx.moveTo(300,100);
      this.ctx.lineTo(600,100);
    break;
    case 6:
      this.ctx.moveTo(600,100);
      this.ctx.lineTo(600,140);
    break;
    case 5:
      this.ctx.arc(600,200,60,0,2*Math.PI);
    break;
    case 4:
      this.ctx.moveTo(600,260);
      this.ctx.lineTo(600,450);
    break;
    case 3:
      this.ctx.moveTo(600,300);
      this.ctx.lineTo(500,350);
    break;
    case 2:
      this.ctx.moveTo(600,300);
      this.ctx.lineTo(700,350);
    break;
    case 1:
      this.ctx.moveTo(600,450);
      this.ctx.lineTo(500,500);
    break;
    case 0:
      this.ctx.moveTo(600,450);
      this.ctx.lineTo(700,500);
    break;
  }
};

HangmanCanvas.prototype.gameOver = function () {
  this.createBoard();
  this.ctx.drawImage(this.ctx.img,10,10,150,180);
  this.ctx.img.src = 'images/gameover.png';
  this.HC.style.display = 'none';
};

HangmanCanvas.prototype.winner = function () {
  this.createBoard();
  this.ctx.drawImage(this.ctx.img,10,10,150,180);
  this.ctx.img.src = 'images/awesome.png';
  this.HC.style.display = 'none';
};
