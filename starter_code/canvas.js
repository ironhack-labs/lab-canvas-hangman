function HangmanCanvas(secretWord) {

  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.coords = [];
  this.initialY = 700;

}

HangmanCanvas.prototype.createBoard = function () {

};

HangmanCanvas.prototype.drawLines = function () {

  //La posición inicial para las lineas donde aparecerán las letras
  var initialX = 150;

  // this.ctx.beginPath();
  // this.ctx.moveTo(initialX, this.initialY);
  // this.ctx.lineTo(initialX + 100, this.initialY);
  // this.ctx.closePath();
  // this.ctx.stroke();

  for (var i = 0; i < this.secretWord.length; i++) {

    //Aumentamos eje de las x para comenzar a dibujar otra line adelante de la anterior
    initialX += 150;

    //Agregamos las coordenadas de X al array para poder utilizarlas despues,
    //Y se mantiene igual.

    this.coords.push(initialX);

    this.ctx.beginPath();
    this.ctx.moveTo(initialX, this.initialY);
    this.ctx.lineTo(initialX + 100, this.initialY);
    this.ctx.closePath();
    this.ctx.stroke();

  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

  //Obtenemos la posición de la linea

  var actualPositionX = this.coords[index];

  var correct = this.secretWord;
  this.ctx.font = "60px serif";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(correct[index].toUpperCase(), actualPositionX, this.initialY, 195);

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};