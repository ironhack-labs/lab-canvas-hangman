


  function HangmanCanvas(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.createBoard();
  }

  HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0, 0, 1200, 800);
    this.ctx.fillRect(0, 0, 1200, 800);
  };

  HangmanCanvas.prototype.drawLines = function () {

  };

  HangmanCanvas.prototype.writeCorrectLetter = function (index) {

  };

  HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  };

  HangmanCanvas.prototype.drawHangman = function (shape) {

  };

  HangmanCanvas.prototype.gameOver = function () {

  };

  HangmanCanvas.prototype.winner = function () {

  };



