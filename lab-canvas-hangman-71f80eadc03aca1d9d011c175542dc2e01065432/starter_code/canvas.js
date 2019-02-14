var canvas = document.getElementById("hangman");
var ctx = canvas.getContext("2d");
var accion = 0
var palabra = "Cubeta";

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = Hangman.prototype.getWord();
  return this.secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx = document.getElementById('hangman').getContext('2d');
  // Lo que va a hacer esta función es borrar el espacio de Canvas para que se puedan dibujar las lineas
  this.ctx.clearRect(0,0,canvas.width, canvas.height);
  
  //HangmanCanvas.prototype.drawLines();
};


HangmanCanvas.prototype.drawLines = function () {
  this.ctx = document.getElementById('hangman').getContext('2d');
  // Lo que va a hacer esta función, es dibujar las lineas en Canvas, Tantas como letras tenga la palabra
  this.ctx.strokeRect(0,0,canvas.width, canvas.height);
  var c = palabra.length;
  var p = c * 2 -1 
  var w = canvas.width 
  var h = canvas.height ;
 

  // dibujamos líneas de caracteres:
   
  function dibujaLineas (n){
    var x =0.25 * w + (n*2) * (0.25 * w / p);
    var y = 0.9 * h;
    var xx = 0.25 * w + (n*2 + 1) * (0.25 * w / p);
    var yy = 0.9 * h;
    this.ctx.beginPath();
    this.ctx.moveTo(x,y);
    this.ctx.lineTo(xx,yy);
    this.ctx.stroke();
   // this.ctx.closePath();
  }
  for (let n = 0; n< c ; n++)
  {dibujaLineas(n)}
};



HangmanCanvas.prototype.writeCorrectLetter = function (nro) {
// FUNCIÓN PARA ESCRIBIR LETRA, EN CANVAS
var letra = NumToLetter(nro);
var arreglo = palabra.toUpperCase().split('');
var w = canvas.width 
var h = canvas.height 
var p = arreglo.length * 2 - 1
// escribe en Canvas la letra correcta
function escribeLetra (letra,i) {
  var x =0.25 * w + (i*2) * (0.25 * w / p);
  var y = 0.9 * h;

  if (arreglo[i] == letra){
  ctx.font = '24px Arial'
  ctx.fillStyle="#000000"
  ctx.fillText(letra,x,y-25)}
}

for (let n = 0; n< arreglo.length ; n++)
{escribeLetra(letra,n)}
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

// Armado del Listener:

addEventListener('keydown', function(e){
  if(e.keyCode >= 65 && e.keyCode <=90 && accion === 1){
    HangmanCanvas.prototype.writeCorrectLetter(e.keyCode)
  }
})