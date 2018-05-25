
function HangmanCanvas(secretWord) {
  
  this.canvas = document.getElementById('hangman');
  this.ctx = this.canvas.getContext('2d');
  this.secretWord = secretWord;
  
  // Base de horca

  this.ctx.beginPath();
  this.ctx.moveTo(40, 650);
  this.ctx.lineTo(120, 650);
  this.ctx.lineTo(80, 550);
  this.ctx.closePath();
  this.ctx.stroke();

  // Tronco de horca

  this.ctx.beginPath();
  this.ctx.moveTo(80, 80);
  this.ctx.lineTo(80, 550);
  this.ctx.stroke();

  // Sostén de horca

  this.ctx.beginPath();
  this.ctx.moveTo(300, 80);
  this.ctx.lineTo(80, 80);
  this.ctx.stroke();

  // Horca

  this.ctx.beginPath();
  this.ctx.moveTo(300, 80);
  this.ctx.lineTo(300, 190);
  this.ctx.stroke();
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// Palabra 1
this.ctx.font = "50px Helvetica";
this.ctx.fillText("H",540,320);


// Palabra 2

this.ctx.font = "50px Helvetica";
this.ctx.fillText("O",610,320);  // ( , incremental de 70 ,)

this.ctx.beginPath();
this.ctx.moveTo(605, 350);// Incremental de 70
this.ctx.lineTo(650, 350);
this.ctx.stroke();

// Palabra 3

this.ctx.font = "50px Helvetica";
this.ctx.fillText("L",680,320);  // ( , incremental de 70 ,)

this.ctx.beginPath();
this.ctx.moveTo(675, 350);// Incremental de 70
this.ctx.lineTo(720, 350);
this.ctx.stroke();

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

  
  // cabeza
this.ctx.beginPath();
this.ctx.arc(300, 235, 45, 0, 2 * Math.PI);
this.ctx.stroke();

// columna

this.ctx.beginPath();
this.ctx.moveTo(300, 280);
this.ctx.lineTo(300, 450);
this.ctx.stroke();

// pierna izquierda

this.ctx.beginPath();
this.ctx.moveTo(300, 450);
this.ctx.lineTo(210, 550);
this.ctx.stroke();

//pierna derecha

this.ctx.beginPath();
this.ctx.moveTo(300, 450);
this.ctx.lineTo(400, 550);
this.ctx.stroke();


// brazos

this.ctx.beginPath();
this.ctx.moveTo(200, 350);
this.ctx.lineTo(400, 350);
this.ctx.stroke();

};

HangmanCanvas.prototype.gameOver = function () {

  this.ctx.font = "50px Helvetica";
  this.ctx.fillText("Perdiste",880,680);  
  this.ctx.beginPath();
  this.ctx.moveTo(675, 350);
  this.ctx.lineTo(720, 350);
  this.ctx.stroke();
  
};

HangmanCanvas.prototype.winner = function () {

  this.ctx.font = "50px Helvetica";
  this.ctx.fillText("Ganaste",880,680);  
  this.ctx.beginPath();
  this.ctx.moveTo(675, 350);
  this.ctx.lineTo(720, 350);
  this.ctx.stroke();
};
