
function HangmanCanvas(secretWord) {
  var self = this;
  self.ctx = document.getElementById('hangman').getContext('2d');
  self.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  var self = this;
  self.ctx.clearRect(0, 0, 1200, 800);
  self.ctx.beginPath();
  self.ctx.lineWidth = 8;
};

HangmanCanvas.prototype.drawLines = function () {
  var self = this;
  self.
  for (var i = 0; i > self.secretWord.length; i++) {
  self.ctx.beginPath();
  self.ctx.moveTo(230 + (i * 50), 600);
  self.ctx.lineTo(550, 600);
  self.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var self = this;
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var self = this;
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  var self = this;
};

HangmanCanvas.prototype.gameOver = function () {
  var self = this;
};

HangmanCanvas.prototype.winner = function () {
  var self = this;
};
