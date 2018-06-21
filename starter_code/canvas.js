function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
}

var lineWidth = 50;
var distMargin = 10;
var firstPosX = 500;
var firstPosY = 700;
var fonts = "24px serif";
var init = [400, 500];

HangmanCanvas.prototype.createBoard = function() {
  var lines = hangman.getWord().length;
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function() {
  var aux = firstPosX;
  for (var i = 0; i < hangman.secretWord.length; i++) {
    this.ctx.moveTo(aux, firstPosY);
    this.ctx.lineTo(aux + lineWidth, firstPosY);
    aux += lineWidth + distMargin;
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function(letter) {
  var aux = firstPosX-3*distMargin;
  this.ctx.font = fonts;
  var that = this;
  letter.forEach(function(e) {
    that.ctx.fillText(e, aux + lineWidth, firstPosY - 20);
    aux += lineWidth + distMargin;
  });
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  var aux = firstPosX;
  this.ctx.font = fonts;
  var that = this;
  letter.forEach(function(e) {
    that.ctx.fillText(e, aux + lineWidth + 250, firstPosY - 400);
    aux += lineWidth + distMargin;
  });
};

HangmanCanvas.prototype.drawHangman = function(shape) {
    
    this.ctx.moveTo(init[0], init[1]);
    this.ctx.lineTo(init[0] + 50, init[1] + 50);
    this.ctx.lineTo(init[0] - 50, init[1] + 50);
    this.ctx.lineTo(init[0], init[1]);
    this.ctx.lineTo(init[0], init[1] - 300);
    this.ctx.lineTo(init[0] + 200, init[1] - 300);
    this.ctx.lineTo(init[0] + 200, init[1] - 250);
    this.ctx.arc(
      init[0] + 200,
      init[1] - 210,
      40,
      -(1 / 2) * Math.PI,
      2 * Math.PI,
      false
    );
    this.ctx.moveTo(init[0] + 200, init[1] - 170);
    this.ctx.lineTo(init[0] + 200, init[1] - 70);
    this.ctx.lineTo(init[0] + 230, init[1] - 40);
    this.ctx.moveTo(init[0] + 200, init[1] - 70);
    this.ctx.lineTo(init[0] + 170, init[1] - 40);
    this.ctx.moveTo(init[0] + 200, init[1] - 120);
    this.ctx.lineTo(init[0] + 240, init[1] - 130);
    this.ctx.moveTo(init[0] + 200, init[1] - 120);
    this.ctx.lineTo(init[0] + 160, init[1] - 130);

    this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};
