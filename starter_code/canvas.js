function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.canvas = document.getElementById("hangman");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  // limpiar tablero
  this.ctx.lineWidth = 1;
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function(lineas) {
  this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
  var c = lineas;
  var p = c * 2 - 1;
  var w = this.canvas.width;
  var h = this.canvas.height;

  // dibujamos líneas de caracteres:

  function dibujaLineas(n, ctx) {
    var x = 0.25 * w + n * 2 * ((0.25 * w) / p);
    var y = 0.9 * h;
    var xx = 0.25 * w + (n * 2 + 1) * ((0.25 * w) / p);
    var yy = 0.9 * h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xx, yy);
    ctx.stroke();
    // this.ctx.closePath();
  }
  for (let n = 0; n < c; n++) {
    dibujaLineas(n, this.ctx);
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(nro, palabra) {
  // FUNCIÓN PARA ESCRIBIR LETRA, EN CANVAS
  var letra = NumToLetter(nro);
  var arreglo = palabra.toUpperCase().split("");
  var w = this.canvas.width;
  var h = this.canvas.height;
  var p = arreglo.length * 2 - 1;
  // escribe en Canvas la letra correcta
  function escribeLetra (letra,i,ctx) {
    var x =0.25 * w + (i*2) * (0.25 * w / p);
    var y = 0.9 * h;
  
    if (arreglo[i] == letra){
    ctx.font = '24px Arial'
    ctx.fillStyle="#000000"
    ctx.fillText(letra,x,y-25)}
  }
  
  for (let n = 0; n< arreglo.length ; n++)
  {escribeLetra(letra,n,this.ctx)}
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  var w = this.canvas.width;
  var h = this.canvas.height;
  var x = 0.6 * w + (10 - errorsLeft) * 30;
  var y = h * 0.5
  this.ctx.font = '24px Arial';
  this.ctx.fillStyle="#000000";
  this.ctx.fillText(letter,x,y);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  this.ctx.lineWidth = 5;

  switch (shape) {
    case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(100, 750);
      this.ctx.lineTo(300, 750);
      this.ctx.lineTo(200, 650);
      this.ctx.lineTo(100, 750);
      this.ctx.stroke();
      break;
    case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(200, 650);
      this.ctx.lineTo(200, 100);
      this.ctx.stroke();
      break;
    case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(200, 100);
      this.ctx.lineTo(600, 100);
      this.ctx.stroke();
      break;

    case 6:
      this.ctx.beginPath();
      this.ctx.moveTo(600, 100);
      this.ctx.lineTo(600, 200);
      this.ctx.stroke();
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.arc(600, 250, 50, 0, Math.PI * 2);
      this.ctx.stroke();
      break;

    case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(600, 300);
      this.ctx.lineTo(600, 500);
      this.ctx.stroke();
      break;

    case 3:
      this.ctx.beginPath();
      this.ctx.moveTo(600, 350);
      this.ctx.lineTo(500, 400);
      this.ctx.stroke();
      break;

    case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(600, 350);
      this.ctx.lineTo(700, 400);
      this.ctx.stroke();
      break;

    case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(600, 500);
      this.ctx.lineTo(500, 550);
      this.ctx.stroke();
      break;

    case 0:
      this.ctx.beginPath();
      this.ctx.moveTo(600, 500);
      this.ctx.lineTo(700, 550);
      this.ctx.stroke();
      loses();
      break;

    default:
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {};

HangmanCanvas.prototype.winner = function() {};

let hangman; 
let canvas; 
var accion = 0;

document.getElementById("start-game-button").onclick = function() {
  // creamos nuevos objetos para iniciar el juego
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);

  // limpia canvas
  canvas.createBoard();
  // dibuja las lineas de la palabra secreta
  canvas.drawLines(hangman.secretWord.length);
  accion = 1;
};

// Funciones para imagen de ganar o perder:
var win = new Image();
win.src = "images/awesome.png"
var lose = new Image();
lose.src = "images/gameover.png"
function won (){
  if (hangman.checkWinner()) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.canvas = document.getElementById("hangman");
var w = this.canvas.width;
var h = this.canvas.height;
var x = w/2
var y = h/2
this.ctx.drawImage(win,x,y,w/2,h/2);
}}

function loses (){
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.canvas = document.getElementById("hangman");
var w = this.canvas.width;
var h = this.canvas.height;
var x = w/2
var y = h/2
this.ctx.drawImage(lose,x,y,w/2,h/2);
}
// terminan funciones para dibujar imagen

document.addEventListener("keydown", event => {
  // no se ha iniciado el juego, regresa sin hacer nada
  if (accion === 0) return;
  // si el juego ya termino, regresar y no hacer nada
  if (hangman.checkGameOver() || hangman.checkWinner()) return;
  // si no es una letra, regresar y no hacer nada
  if (!hangman.checkIfLetter(event.keyCode)) return;
  // si la letra ya se intento, regresar y no hacer nada
  if (!hangman.checkClickedLetters(event.key)) return;

  let index = hangman.secretWord.indexOf(event.key.toUpperCase());
  if (index >= 0) {
    hangman.addCorrectLetter(index);
    canvas.writeCorrectLetter(event.keyCode,hangman.secretWord)
  }
  else {
    hangman.addWrongLetter(event.key);
    canvas.drawHangman(hangman.errorsLeft);
    canvas.writeWrongLetter(event.key.toUpperCase(),hangman.errorsLeft);
  }
  won();
});
