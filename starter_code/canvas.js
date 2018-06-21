var hangman = new Hangman();
var hangmanGame = new HangmanCanvas();
hangman.getWord();
var letra;
var coordenadas
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1500, 1700);
};

HangmanCanvas.prototype.drawLines = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(100, 700);
  this.ctx.lineTo(200, 700);
  this.ctx.lineTo(150, 650);
  this.ctx.lineTo(100, 700);
  this.ctx.moveTo(150, 650);
  this.ctx.lineTo(150, 200);
  this.ctx.moveTo(150, 200);
  this.ctx.lineTo(450, 200);
  this.ctx.moveTo(450, 200);
  this.ctx.lineTo(450, 250);
  this.ctx.closePath();
  this.ctx.stroke();
  var x = 300;
  var y = 700;
  var tamano = hangman.secretWord.length;
  for (i = 0; i < tamano; i++) {
    coorden[i][0]=x
    coorden[i][1]=y
    hangmanGame.dibujaLineas(x, y);
    x += 70;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (letra) {
  ctx.font="30px Arial";
  for(i=0;i<hangman.secretWord.length;i++){
    if(hangman.secretWord[i]==letra){
      ctx.strokeText(letra,)
    }
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape) {
    case head:
      this.ctx.beginPath();
      this.ctx.arc(450, 300, 50, 0, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case body:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 350);
      this.ctx.lineTo(450, 500);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case leftLeg:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 500);
      this.ctx.lineTo(350, 600);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
    case rightLeg:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 500);
      this.ctx.lineTo(550, 600);
      this.ctx.closePath();
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

HangmanCanvas.prototype.dibujaLineas = function (x, y) {
  this.ctx.beginPath();
  this.ctx.moveTo(x, y);
  this.ctx.lineTo(x + 50, y);
  this.ctx.closePath();
  this.ctx.stroke();
}

document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e)) {
    letra = string.fromCharCode(e);
    return letra;
}
return false
}


hangmanGame.createBoard();
hangmanGame.drawLines();