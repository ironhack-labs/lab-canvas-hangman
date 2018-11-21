function HangmanCanvas(secretWord) {

  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.coords = [];

}

HangmanCanvas.prototype.createBoard = function () {

};

HangmanCanvas.prototype.drawLines = function () {

  //La posición inicial para las lineas donde aparecerán las letras
  var initialX = 300;
  var initialY = 700;

  this.ctx.beginPath();
  this.ctx.moveTo(initialX, initialY);
  this.ctx.lineTo(initialX + 100, initialY);
  this.ctx.closePath();
  this.ctx.stroke();

  for (var i = 0; i < this.secretWord.length - 1; i++) {

    //Aumentamos eje de las x para comenzar a dibujar otra line adelante de la anterior
    initialX += 150;
    
    this.coords.push(initialX);

    this.ctx.beginPath();
    this.ctx.moveTo(initialX, initialY);
    this.ctx.lineTo(initialX + 100, initialY);
    this.ctx.closePath();
    this.ctx.stroke();

  }

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