var hangman = new Hangman();
var secretWord = hangman.getWord();
var startBtn = document.getElementById("start-game-button");

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  
}

HangmanCanvas.prototype.createBoard = function () {
 // this.ctx.fillRect(0,0,50,50)

};


HangmanCanvas.prototype.addCorrectLetter = function(){



}


HangmanCanvas.prototype.drawLines = function () {
  //para cada letra en secretword agregamos una linea


  this.ctx.beginPath();
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = "2";
  this.ctx.moveTo(400,300);
  this.ctx.lineTo(440,300);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(460,300);
  this.ctx.lineTo(500,300);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(520,300);
  this.ctx.lineTo(560,300);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(580,300);
  this.ctx.lineTo(620,300);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(640,300);
  this.ctx.lineTo(680,300);
  this.ctx.closePath();
  this.ctx.stroke();

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
//usamos el indice para saber donde colocar la nueva letra correcta

  var letterToAdd = hangman.GuessedLetter.slice(-1);
    
  switch(letterToAdd) {
    case 't':
        this.ctx.fillText(letterToAdd, 420, 305);
        break;
    case 'a':
        this.ctx.fillText(letterToAdd, 480, 305);
        break;
        case 'c':
        this.ctx.fillText(letterToAdd, 540, 305);
        break;
        case 'o':
        this.ctx.fillText(letterToAdd, 600, 305);
        break;
        case 's':
        this.ctx.fillText(letterToAdd, 660, 305);
        break;
}

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  //if errorsleft > 0 we add letter to wrong list

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

var canvitas = new HangmanCanvas();
canvitas.createBoard();

