var canvas; 

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.distancia;
  this.tamLinea;
  this.lineasPosInicio=[];
}

HangmanCanvas.prototype.createBoard = function () {

  this.ctx.clearRect(0, 0, 800, 1200);
  this.distancia=30;
  this.tamLinea=25;
 
 

};

HangmanCanvas.prototype.drawLines = function (longitud) {
  var inicioX=75;
  var finalX=100;

alert('l'+longitud);
alert(this.distancia);
alert(this.tamLinea);

    /*this.ctx.beginPath();
  this.ctx.moveTo(75, 50);
  this.ctx.lineTo(100, 50);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(130, 50);
  this.ctx.lineTo(155, 50);
  this.ctx.stroke();*/

  for(i=0;i<longitud;i++){
     
    

     inicioX=inicioX+this.distancia+this.tamLinea;
     finalX=finalX+this.distancia+this.tamLinea;
     this.lineasPosInicio.push(inicioX);

      this.ctx.beginPath();
      this.ctx.moveTo(inicioX, 50);
      this.ctx.lineTo(finalX, 50);
      this.ctx.stroke();


  }


  
};

HangmanCanvas.prototype.writeCorrectLetter = function (letter, index) {


  this.ctx.font = '48px serif';
  this.ctx.fillText(letter, this.lineasPosInicio[index], 50);


};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};


canvas = new HangmanCanvas();


//Every time a user clicks the keyboard, after checking if
// the letter was not already clicked, we should write it on
// our board. If the secret word includes the letter we should write
// it in the position it corresponds, and if is not included in the secret word,
// we will write it on the top right so the user knows which ones he already clicked.