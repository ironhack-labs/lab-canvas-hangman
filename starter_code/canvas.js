
function HangmanCanvas(hang) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.wordSecret = hang.secretWord;
  this.game = hang;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.lineWidth = 3;
  this.ctx.lineCap = 'round';
  this.ctx.lineJoin= 'round';
  this.ctx.strokeStyle = 'rgb(1, 40, 154)';
};

HangmanCanvas.prototype.drawLines = function () {
  for (i=0; i<this.wordSecret.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(400 + i * 60, 700 );
    this.ctx.lineTo(445 + i * 60, 700);
    this.ctx.stroke();
  };
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font = '50px arial';
  this.ctx.fillText('H', 405, 695);

  // me falta la lógica para escribir en cada posición, sigo dibujando el muñegote
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '50px arial';
  this.ctx.fillText('H', 405, 695);

  // hay que cambiar la posición en el board

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {
  if (game.checkWinner()){
  }
};
HangmanCanvas.prototype.endGame = function () {
  var img = new Image();
  if (this.game.checkWinner()){
    img.src  = './images/awesome.png';
    this.ctx.drawImage(img, 100, 100)
  } else if (this.game.checkGameOver()) {
    img.src = './images/gameover.png';
  }
  this.ctx.drawImage(img, 300, 300)
};
