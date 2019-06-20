
class HangmanCanvas {
  constructor(secretWord) {
   this.cx = document.getElementById('hangman').getContext('2d');
   this.secretWord = 'dinheiro';
  }
}

// const connect = new Hangman();

HangmanCanvas.prototype.createBoard = function () {
  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(140, 600);
  this.cx.lineTo(240, 600);
  this.cx.stroke();
  this.cx.moveTo(140, 600);
  this.cx.lineTo(190, 540);
  this.cx.moveTo(240, 600);
  this.cx.lineTo(190, 540);
  this.cx.moveTo(190, 540);
  this.cx.lineTo(190, 100);
  this.cx.moveTo(190, 100);
  this.cx.lineTo(450, 100);
  this.cx.moveTo(450, 100);
  this.cx.lineTo(450, 150);
  this.cx.stroke();
  this.cx.closePath();
};

HangmanCanvas.prototype.drawLines = function () {
  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(290, 600);
  this.cx.lineTo(335, 600);
  this.cx.stroke()
  this.cx.closePath();
  
  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(350, 600);
  this.cx.lineTo(395, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(410, 600);
  this.cx.lineTo(455, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(470, 600);
  this.cx.lineTo(515, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(530, 600);
  this.cx.lineTo(575, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(590, 600);
  this.cx.lineTo(635, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(650, 600);
  this.cx.lineTo(695, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(710, 600);
  this.cx.lineTo(755, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(770, 600);
  this.cx.lineTo(815, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(830, 600);
  this.cx.lineTo(875, 600);
  this.cx.stroke()
  this.cx.closePath();
  

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  // connect.addCorrectLetter(index)
  // this.cx.textFill()
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function () {
  this.cx.beginPath();
  this.cx.arc(450, 200, 50, 90, (Math.PI/180) * 90, true);
  this.cx.stroke();
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.moveTo(450, 250);
  this.cx.lineTo(450, 380);
  this.cx.stroke();
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.moveTo(450, 250);
  this.cx.lineTo(400, 300);
  this.cx.stroke();
  this.cx.closePath();
  
  this.cx.beginPath();
  this.cx.moveTo(450, 250);
  this.cx.lineTo(500, 300);
  this.cx.stroke();
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.moveTo(450, 380);
  this.cx.lineTo(490, 480);
  this.cx.stroke();
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.moveTo(450, 380);
  this.cx.lineTo(420, 480);
  this.cx.stroke();
  this.cx.closePath();
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

