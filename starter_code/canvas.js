
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.width = 1200;
  this.ctx.height = 800;
  this.ctx.clearRect(0,0,this.ctx.width, this.ctx.height);
};

HangmanCanvas.prototype.drawLines = function () {
  // this.ctx.clearRect(0,0,this.ctx.width, this.ctx.length);
  for(var i = 0; i < this.secretWord.length; i++)
  {
    this.ctx.beginPath();
    this.ctx.moveTo(370 + 75 * i, 700);
    this.ctx.lineTo(370 + 75 * i + 40, 700);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  hangmanCanvas.ctx.font = "30px Arial";
  for(var i=0; i<posLetter.length; i++)
  {
    hangmanCanvas.ctx.fillText(this.secretWord.toUpperCase().charAt(posLetter[i]),380 + 75*posLetter[i],680);
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.beginPath();
  this.drawHangman(errorsLeft);
  this.ctx.stroke();

  this.ctx.moveTo(700,200);
  this.ctx.font = "30px Arial";
  this.ctx.fillText(letter.toUpperCase(),700 + 30*(errorsLeft-1), 250);
};

HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  switch(errorsLeft)
  {
    case 12:
      // this.ctx.beginPath();
      this.ctx.moveTo(200,650);
      this.ctx.lineTo(100,700);
      this.ctx.moveTo(100,700);  
      this.ctx.lineTo(300,700);
      this.ctx.moveTo(300,700);
      this.ctx.lineTo(200,650);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 9:
      // this.ctx.beginPath();
      this.ctx.moveTo(200,650);
      this.ctx.lineTo(200,100);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 8:
      // this.ctx.beginPath();
      this.ctx.moveTo(200,100);
      this.ctx.lineTo(500,100);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 7:
      // this.ctx.beginPath();
      this.ctx.moveTo(500,100);
      this.ctx.lineTo(500,125);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 6:
      // this.ctx.beginPath();
      this.ctx.arc(500,200,75,0,2*Math.PI);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 5:
      // this.ctx.beginPath();
      this.ctx.moveTo(500,275);
      this.ctx.lineTo(400,350);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 4:
      // this.ctx.beginPath();
      this.ctx.moveTo(500,275);
      this.ctx.lineTo(600,350);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 3:
      // this.ctx.beginPath();
      this.ctx.moveTo(500,275);
      this.ctx.lineTo(500,425);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 2:
      // this.ctx.beginPath();
      this.ctx.moveTo(500,425);
      this.ctx.lineTo(400,500);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;
    case 1:
      // this.ctx.beginPath();
      this.ctx.moveTo(500,425);
      this.ctx.lineTo(600,500);
      // this.ctx.stroke();
      // this.ctx.closePath();
    break;

  }
};

HangmanCanvas.prototype.gameOver = function () {
  var img = document.createElement('img');
  img.setAttribute('src','images/gameover.png');
  img.style('width', '100%');
  img.style('display', 'block');
  img.style('margin', 'auto');
  this.ctx.drawImage(img, 0, 0);
};

HangmanCanvas.prototype.winner = function () {
  // var img = document.getElementById("scream");
  var img = document.createElement('img');
  img.setAttribute('src','images/awesome.png');
  img.style('width', '100%');
  img.style('display', 'block');
  img.style('margin', 'auto');
  this.ctx.drawImage(img, 0, 0);
};