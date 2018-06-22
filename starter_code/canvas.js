function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.secretWord = secretWord;
  this.errorsLeft = 10;
  this.letters = [];
  this.guessedLetters = "";
  this.createBoard();
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.fillRect(0, 0, 1200, 800);
  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function() {
  var numLettersSecretWord = this.secretWord.length;
  this.ctx.fillStyle = "#FFFFFF";
  console.log(this.secretWord);
  this.ctx.strokeStyle = "#FFFFFF";
  this.ctx.lineWidth = 3.0;
  this.ctx.beginPath();
  var x = 300;
  var y = 700;
  var beginLineX = x;
  this.ctx.moveTo(x, y);
  for (var i = 0; i <= numLettersSecretWord - 1; i++) {
    this.ctx.lineTo(beginLineX + 40, y);
    beginLineX = beginLineX + 50;
    this.ctx.moveTo(beginLineX, y);
  }
  this.ctx.stroke();
  this.ctx.fillStyle = "#000000";
  this.ctx.strokeStyle = "#000000";
  this.writeCorrectLetter(2);
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.fillStyle = "#FFFFFF";
  this.ctx.strokeStyle = "#FFFFFF";
  this.ctx.font="40px Georgia";
 // this.ctx.moveTo(300,700)
  var baseX = 306;
  var baseY = 680;
  this.ctx.fillText(this.secretWord[index].toUpperCase(), baseX + (index * 50), baseY);
  this.ctx.fillStyle = "#000000";
  this.ctx.strokeStyle = "#000000";
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
