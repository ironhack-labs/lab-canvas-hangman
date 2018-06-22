function HangmanCanvas(secretWord) {}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "black";
  this.ctx.beginPath();
  this.ctx.moveTo(150, 800);
  this.ctx.lineTo(200, 700);
  this.ctx.lineTo(250, 800);
  this.ctx.lineTo(150, 800);
  this.ctx.stroke();
  this.ctx.closePath();
  this.ctx.beginPath();
  this.ctx.moveTo(400, 800);
  this.ctx.lineTo(450, 800);
  this.ctx.stroke();
  this.ctx.closePath();
  this.ctx.beginPath();
  this.ctx.moveTo(200, 700);
  this.ctx.lineTo(200, 200);
  this.ctx.lineTo(600, 200);
  this.ctx.lineTo(600, 250);
  this.ctx.stroke();
  this.ctx.closePath();

  x = 400;
  p = new Hangman();
  console.log(p.secretWord);
  p.getWord();

  for (i = 0; i < p.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, 800);
    this.ctx.lineTo(x + 50, 800);
    x = x + 100;
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

HangmanCanvas.prototype.drawLines = function() {
  if (p.checkIfLetter == "true"){
    if (p.checkClickedLetters){
      p.addCorrectLetter
    }
  }
  //Cabeza
  this.ctx.beginPath();
  this.ctx.arc(600, 300, 50, 0, 2 * Math.PI, true);
  //Cuerpo
  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "#000000";
  //piernas
  this.ctx.moveTo(600, 353);
  this.ctx.lineTo(600, 500);
  this.ctx.stroke();
};
HangmanCanvas.prototype.writeCorrectLetter = function(index) {};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
