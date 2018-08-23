function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.fillStyle = "gray";
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  var x = 600;
  var y = 700;
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + 25, y);
    this.ctx.lineWidth = 4;
    this.ctx.stroke();
    x += 50;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  //obtener posicion a imprimir
  var letter = this.secretWord[index];
  console.log(letter);
  this.ctx.beginPath();
  //this.ctx.moveTo(600, 700);
  //this.ctx.font = '48px serif';
  //this.ctx.fillText(letter, 400+index*25, 680);
  this.ctx.fillText("Peter", 800, 450, 200);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};


//-------------- Funciones para dibujar cada linea del Ahorcado----------
/* HangmanCanvas("Hola") //Eliminar-- Lama al contexto para probar el dibujo

var line01 = function () {
  ctx.beginPath();
  ctx.moveTo(100, 700);
  ctx.lineTo(250, 700);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line02 = function () {
  ctx.beginPath();
  ctx.moveTo(100, 700);
  ctx.lineTo(175, 650);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line03 = function () {
  ctx.beginPath();
  ctx.moveTo(250, 700);
  ctx.lineTo(175, 650);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line04 = function () {
  ctx.beginPath();
  ctx.moveTo(175, 650);
  ctx.lineTo(175, 100);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line05 = function () {
  ctx.beginPath();
  ctx.moveTo(175, 100);
  ctx.lineTo(500, 100);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line06 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 100);
  ctx.lineTo(500, 150);
  ctx.lineWidth = 6;
  ctx.stroke();
}
// Cabeza
var line07 = function () {
  ctx.beginPath();
  ctx.arc(500, 200, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
var line08 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 250);
  ctx.lineTo(500, 400);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line09 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 400);
  ctx.lineTo(450, 450);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line10 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 400);
  ctx.lineTo(550, 450);
  ctx.lineWidth = 6;
  ctx.stroke();
}

line01();
line02();
line03();
line04();
line05();
line06();
line07();
line08();
line09();
line10(); */