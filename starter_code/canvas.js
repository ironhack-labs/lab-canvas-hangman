
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWordHC= hangman.getWord();
  this.canvas = document.getElementById('hangman');
  this.canvas.width =  1000;
  this.canvas.height = 1000;
}

HangmanCanvas.prototype.createBoard = function () {
   this.canvas.clear (width,height,)
   this.ctx.lineWidth = 2;
};

HangmanCanvas.prototype.drawLines = function () {
      var x=300;
      var y=600;
      for (i=0; i<this.secretWordHC.length;i++){
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x+50, y);
        this.ctx.stroke();
        this.ctx.closePath();
        x+=70;
       }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
var x=index*70+300;
var y=595;
ctx.lineWidth = 4;
ctx.strokeStyle="black";
ctx.font = "50px arial";
ctx.strokeText (this.secretWordHC[index], 70*index,y-10);
ctx.fillStyle = "green";
ctx.fillText(this.secretWordHC[index], 70*index, y-10);

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var x=600+40*(10-errorsLeft);
  var y=590;
  ctx.lineWidth = 4;
  ctx.strokeStyle="red";
  ctx.font = "30px arial";
  ctx.strokeText (this.secretWordHC[index],x,y);

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape) {
    // dibujar triangulo de abajo
    case 1:
      ctx.beginPath();
      ctx.strokeStyle="blue";
      ctx.moveTo(0,600);
      ctx.lineTo(200,600);
      ctx.lineTo(100,550);
      ctx.lineTo(0,600);
      ctx.stroke();
      ctx.closePath();

    break;

    // dibujar poste
    case 2:
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(100,550);
    ctx.lineTo(100,100);
    ctx.stroke();
    ctx.closePath();
      
    break;
    case 3:
    // dibujar poste transversal
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(100,100);
    ctx.lineTo(400,100);
    ctx.stroke();
    ctx.closePath();
    break;
    case 3:
    // dibujar de donde cuelta
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(400,100);
    ctx.lineTo(400,150);
    ctx.stroke();
    ctx.closePath();
    break;
    case 5:
    // cabeza del ahorcado
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.arc(400,200,50,0,2*Math.PI);
    ctx.stroke();


    break;
    case 6:
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(400,250);
    ctx.lineTo(400,400);
    ctx.stroke();
    ctx.closePath();
    break;
    case 7:
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(400,400);
    ctx.lineTo(450,500);
    ctx.stroke();
    ctx.closePath();
    break;
    case 8:
   
 ctx.beginPath();
 ctx.strokeStyle="blue";
 ctx.moveTo(400,400);
 ctx.lineTo(350,500);
 ctx.stroke();
 ctx.closePath();
    break;
    case 9:
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(400,300);
    ctx.lineTo(450,400);
    ctx.stroke();
    ctx.closePath();
    break;
    case 10:
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.moveTo(400,300);
    ctx.lineTo(350,400);
    ctx.stroke();
    ctx.closePath();
    break;
    default:
      break;
  }

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

