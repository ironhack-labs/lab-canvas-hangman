function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;
  this.usedLetters ="";
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function () {
  var x1 = 760;
  var x2 = 815;
  for(var i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(x1,200);
    this.ctx.lineTo(x2,200);
    this.ctx.stroke();
    this.ctx.closePath();
    x1 += 90;
    x2 += 90;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
    var letter = this.secretWord[index]
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "black";
    this.ctx.font = "60px arial"
    var x = 760;
    for(var i = 0; i < this.secretWord.length; i++){
      if (this.secretWord[i] === letter){
      this.ctx.strokeText(letter, 90 * i + x, 190);
      this.ctx.fillStyle = "#9DA400";
      this.ctx.fillText(letter, 90 * i + x, 190);
      }
    }
    
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.lineWidth = 4;
  this.ctx.strokeStyle = "black";
  this.ctx.font = "60px arial"
  this.ctx.fillStyle = "#9DA400";
  this.usedLetters += letter+" ";
  this.ctx.fillText(this.usedLetters, 520, 50);
  this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function (shape) {

  switch (shape){
    case  9:
    this.ctx.beginPath();
    this.ctx.moveTo(10, 500);
    this.ctx.lineTo(80, 500);
    this.ctx.lineTo(45, 470);
    this.ctx.fill();
    this.ctx.closePath();
    break;

    case 8:
    this.ctx.beginPath();
    this.ctx.moveTo(45, 470);
    this.ctx.lineTo(45, 50);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

    case 7:
    this.ctx.beginPath();
    this.ctx.moveTo(45, 50);
    this.ctx.lineTo(450, 50);
    this.ctx.lineTo(450, 100);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

    case 6:
    this.ctx.beginPath();
    this.ctx.arc(450, 130, 30, 0, Math.PI*2, true);
    this.ctx.stroke();
    break;

    case 5:
    this.ctx.beginPath();
    this.ctx.moveTo(450, 160);
    this.ctx.lineTo(450, 300);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

    case 4:
    this.ctx.beginPath();
    this.ctx.moveTo(450, 300);
    this.ctx.lineTo(400, 370);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

    case 3:
    this.ctx.beginPath();
    this.ctx.moveTo(450, 300);
    this.ctx.lineTo(500, 370);
    this.ctx.stroke();
    this.ctx.closePath();
    break;

    case 2:
    this.ctx.beginPath();
    this.ctx.moveTo(450, 200);
    this.ctx.lineTo(400, 210);
    this.ctx.stroke();
    this.ctx.closePath();
    break;
    
    case 1:
    this.ctx.beginPath();
    this.ctx.moveTo(450, 200);
    this.ctx.lineTo(500, 210);
    this.ctx.stroke();
    this.ctx.closePath();
    break;
    
    case 0:
    this.gameOver();
    break;
}
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.lineWidth = 4;
  this.ctx.strokeStyle = "black";
  this.ctx.font = "100px arial"
  this.ctx.fillStyle = "red";
  this.ctx.fillText("Such a Looser", 650, 400);
};

HangmanCanvas.prototype.winner = function () {
  this.ctx.lineWidth = 4;
  this.ctx.strokeStyle = "black";
  this.ctx.font = "100px arial"
  this.ctx.fillStyle = "red";
  this.ctx.fillText("You win", 650, 400);
};