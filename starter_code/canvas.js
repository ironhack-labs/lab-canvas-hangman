hangman = new Hangman();
var secretWord = hangman.getWord();
var startBtn = document.getElementById("start-game-button");

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  this.lineWidth = 50;

};


HangmanCanvas.prototype.addCorrectLetter = function(){



}


HangmanCanvas.prototype.drawLines = function () {
  //para cada letra en secretword agregamos una linea

  this.secretWord.forEach(function(n){
    var x1 = 400;
    var x2 = 440;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = "2";
    this.ctx.moveTo(400,300);
    this.ctx.lineTo(440,300);
    this.ctx.closePath();
    this.ctx.stroke();
    x1 += 60;
    x2 += 60;
  })

  this.ctx.beginPath();
  this.ctx.moveTo(460,300);
  this.ctx.lineTo(500,300);
  this.ctx.closePath();
  this.ctx.stroke();


};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
//usamos el indice para saber donde colocar la nueva letra correcta

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  //if errorsleft > 0 we add letter to wrong list

};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch(shape) {
    case 'head':
        //draw head
        break;
    case 'body':
        //draw body
        break;
    case 'leftLeg':
        //draw leg
        break;
    case 'rightLeg':
        //draw leg
        break;
    case 'leftArm':
        //draw arm
        break;
    case 'rightArm':
        //dram arm
        break;
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

var canvitas = new HangmanCanvas();
canvitas.createBoard();

