
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
  document.getElementById("boton").className='boton-true';
};

HangmanCanvas.prototype.drawLines = function (wordLength) {
  var inicio=200;
  var sumaInicio = 15;
  var longitud=30;
  var nuevoInicio;
  this.ctx.beginPath();
  this.ctx.strokeStyle="#000000";
  this.ctx.moveTo(inicio, 450);
  for(let i=0; i<wordLength; i++){
    this.ctx.lineTo(inicio+longitud, 450);
    this.ctx.stroke();
    inicio=inicio+longitud+sumaInicio;
    this.ctx.moveTo(inicio, 450);
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (letra) {
  var inicio=200;
  var sumaInicio = 15;
  var longitud=30;
  var nuevoInicio;
  this.ctx.beginPath();
  this.ctx.strokeStyle="#000000";
  this.ctx.font = '38px serif';
  this.ctx.moveTo(inicio, 445);

  for(let i=0; i<this.secretWord.length; i++)  {
    if(letra.toUpperCase() === this.secretWord[i].toUpperCase()){
      this.ctx.fillText(letra.toUpperCase(), inicio, 445);

    }
    inicio=inicio+longitud+sumaInicio;
    this.ctx.moveTo(inicio, 445);
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var inicio=390;
  var sumaInicio = 35;
  this.ctx.beginPath();
  this.ctx.strokeStyle="#000000";
  this.ctx.font = '38px serif';
  inicio= inicio+sumaInicio*errorsLeft;
  this.ctx.moveTo(inicio, 110);

  this.ctx.fillText(letter.toUpperCase(), inicio, 110);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.beginPath();
  this.ctx.strokeStyle="#000000";
  switch(shape){

  case 1:
  ////////Triangulo
    this.ctx.moveTo(100, 400);
    this.ctx.lineTo(50, 450);
    this.ctx.lineTo(150, 450);
    this.ctx.lineTo(100, 400);
  break;

  case 2:
    /////////Mastil
    this.ctx.moveTo(100, 400);
    this.ctx.lineTo(100, 0);
  break;

  case 3:
    /////////Barra
    this.ctx.moveTo(100, 0);
    this.ctx.lineTo(350, 0);
  break;

  case 4:
    /////////Soga
    this.ctx.moveTo(350, 0);
    this.ctx.lineTo(350, 70);
  break;

  case 5:
    /////////cabeza
    this.ctx.moveTo(390, 110);
    this.ctx.arc(350, 110, 40, 0, Math.PI*2, true);
  break;

  case 6:
    /////////torso
    this.ctx.moveTo(350, 150);
    this.ctx.lineTo(350, 220);
  break;

  case 7:
    /////////pierna izquierda
    this.ctx.moveTo(350, 220);
    this.ctx.lineTo(310, 290);
  break;

  case 8:
    /////////pierna derecha
    this.ctx.moveTo(350, 220);
    this.ctx.lineTo(390, 290);
  break;

  case 9:
    /////////brazo izquierdo
    this.ctx.moveTo(350, 170);
    this.ctx.lineTo(310, 210);
  break;

  case 10:
    /////////brazo derecho
    this.ctx.moveTo(350, 170);
    this.ctx.lineTo(390, 210);
  break;
  }
  this.ctx.stroke();

};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
  var img = new Image();
  imgScale = 4;
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img,300, 0,150*imgScale,300);
  };
  img.src = './images/gameover.png';
};

HangmanCanvas.prototype.winner = function () {
  this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
  var img = new Image();
  imgScale = 4;
    img.onload = function() {
      hangmanCanvas.ctx.drawImage(img,300, 0,150*imgScale,350);
    };
    img.src = './images/awesome.png';
};
