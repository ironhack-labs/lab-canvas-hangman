//canvas height="800px" width="1200px"
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//PRUEBAS Y DIMENSIONES DEL CANVAS
ctx.fillRect(0,0,50,50)
ctx.fillRect(canvas.width-50,0,50,50)
ctx.fillRect(canvas.width-50,canvas.height-50,50,50)
ctx.fillRect(0,canvas.height-50,50,50)

//constants
var interval;
var frames = 0;
var word = "FERROCARRIL"
var letras = word.split('')
console.log(letras)

//class
class Board{
  constructor(){
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;

      }
      draw(){
ctx.beginPath();
ctx.moveTo(300,250);
ctx.lineTo(300,600);
ctx.strokeStyle = 'black ';
ctx.stroke();
ctx.lineTo(200,700)
ctx.stroke();
ctx.lineTo(400,700)
ctx.stroke();
ctx.lineTo(300,600)
ctx.stroke();
ctx.moveTo(300,250);
ctx.lineTo(600,250);
ctx.stroke();
ctx.lineTo(600,300);
ctx.stroke();
ctx.closePath();

      }
    
drawSpaces(){
if(word.length > 0)
lineas()
}
}


class Hang {
   constructor(){
    this.x = 0;
    this.y = 0;
 }
drawHead(){
ctx.beginPath();
ctx.arc(600,340,40,0,2*Math.PI);
ctx.strokeStyle = 'black ';
ctx.stroke();
ctx.closePath();
}

drawTorso(){
  ctx.beginPath();
  ctx.moveTo(600,380)
  ctx.lineTo(600,500)
  ctx.strokeStyle = 'black ';
  ctx.stroke();
  
}
drawLeftLeg(){
  ctx.beginPath();
  ctx.moveTo(600,500)
  ctx.lineTo(550,550)
  ctx.strokeStyle = 'black ';
  ctx.stroke();
  
}
drawRigthLeg(){
  ctx.beginPath();
  ctx.moveTo(600,500)
  ctx.lineTo(650,550)
  ctx.strokeStyle = 'black ';
  ctx.stroke();
  
}

drawArms(){
  ctx.beginPath();
  ctx.moveTo(550,420)
  ctx.lineTo(650,430)
  ctx.strokeStyle = 'black ';
  ctx.stroke();

}


}  
//instances
var board = new Board();
var hangmanBody = new Hang()

//mainFunctions

function update(){
  board.draw()
  board.drawSpaces()
  hangmanBody.drawHead()
  hangmanBody.drawTorso()
  hangmanBody.drawLeftLeg()
  hangmanBody.drawRigthLeg()
  hangmanBody.drawArms()

}
function start(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}


//aux functions
function lineas(){
var x = 450
  for(
    var i = 0; i < letras.length; i++){
      var letra = letras[i];

    ctx.beginPath();
    ctx.font = '46px Arial';
    ctx.fillText(letra,x+5,680)
    ctx.moveTo(x,700);
    ctx.lineTo(x + 40,700);
    ctx.stroke()
    ctx.closePath()
    x += 60 
    console.log(x)}}
//VERIFICAR PORQUE NO ME FUNCIONA EL FOREACH
// letras.forEach(function(){
//   var inicio = 450
//   ctx.beginPath();
//   ctx.moveTo(inicio,700);
//   ctx.lineTo(inicio+40,700);
//   ctx.strokeStyle = 'black ';
//   ctx.stroke();
//   ctx.closePath();
//   inicio += 70;
//     console.log(letras)
//     console.log(inicio)
//     console.log()})}



//listeners



start()
document.getElementById("start-game-button").addEventListener("click",update())
addEventListener("click",document.getElementById("start-game-button"),update() )

//INTENTO ANTERIOR
// var ctx=document.getElementById('hangman').getContext('2d')
// //secretWord= "";

// function HangmanCanvas(secretWord){
//   this.ctx = document.getElementById('hangman').getContext('2d');
//   this.secretWord = secretWord ? secretWord : "no hay palabra"
// }

// HangmanCanvas.prototype.createBoard = function () {
//   this.ctx.clearRect(0,0,1200,800);
// };

// HangmanCanvas.prototype.drawLines = function () {
//   function(){
//   var index = secretWord.length;
//   }}

//   this.ctx.beginPath();
//   this.ctx.moveTo(450,0);
//   this.ctx.lineTo(450,650);
//   this.ctx.strokeStyle = 'black';
//   this.ctx.stroke();
//   this.ctx.closePath();
  
// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
