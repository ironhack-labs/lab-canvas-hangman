
function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.width = 1200; // Ancho del canvas
  this.height = 800; //Alto del canvas
  this.leftPadding = 100; // Padding a la izq
  this.bottomPadding = 50; // Padding entre inferior del canvas y base de la horca
  this.radius = 50; // Radio de la cabeza del monito
  this.topPole = 100; //Coord Y de la cima del poste
  this.letterLength = 75; //En pixeles, la longitud de los espacios de letras
  this.letterPadding = 12; //En pixeles, el padding entre los espacios de letras
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.strokeRect(0, 0, this.width, this.height);
  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
  let i = this.leftPadding;
  let j = this.height - this.bottomPadding;
  let lettersXOrigin = i + 200; //La base no está parametrizada y mide 150px
  let lettersYOrigin = j;

  this.ctx.lineWidth = "3";

  //Las de las letras
  let cant = this.secretWord.length;
  for (let k = 0; k < cant; k++) {
    init = lettersXOrigin + k*this.letterLength;
    fin = lettersXOrigin + (k+1)*this.letterLength - this.letterPadding;
    this.ctx.beginPath();
    this.ctx.moveTo(init, lettersYOrigin);
    this.ctx.lineTo(fin, lettersYOrigin);
    this.ctx.stroke();
  }

  //Las del gallow
  this.ctx.beginPath();
  this.ctx.moveTo(i+75, j-50);
  this.ctx.lineTo(i, j);
  this.ctx.lineTo(i+150, j);
  this.ctx.lineTo(i+75, j-50);
  this.ctx.lineTo(i+75, this.topPole);
  this.ctx.lineTo(i+450, this.topPole);
  this.ctx.lineTo(i+450, this.topPole+this.radius);
  this.ctx.stroke();
  
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  let lettersXOrigin = this.leftPadding + 200;
  let x = lettersXOrigin + index*this.letterLength;
  let y = this.height-this.bottomPadding - 5; //5 es un mini padding
  this.ctx.font = "75px sans-serif";
  this.ctx.fillText(this.secretWord[index], x, y);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  let gridXOrigin = this.leftPadding + 600;
  let gridYOrigin = this.topPole + 200;
  let gridLength = 5;

  posX = gridXOrigin + ((10 - errorsLeft) % gridLength)*this.letterLength;
  posY = gridYOrigin + Math.floor((10-errorsLeft)/gridLength)*this.letterLength;
  this.ctx.font = "75px sans-serif";
  this.ctx.fillText(letter, posX, posY);
};

HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  let i = this.leftPadding;
  this.ctx.lineWidth = "3";
  switch (errorsLeft) {
    case 10: //Cabeza
      this.ctx.beginPath();
      this.ctx.arc(i+450, this.topPole + this.radius*2, this.radius, 0, Math.PI*2);
      this.ctx.stroke();
      break;
    case 9: //Cuello
      this.ctx.beginPath();
      this.ctx.moveTo(i+450, this.topPole + this.radius*3);
      this.ctx.lineTo(i+450, this.topPole + this.radius*3 + 25);
      this.ctx.stroke();
      break;
    case 8: //Torso 
      this.ctx.beginPath();
      this.ctx.strokeRect(i+375, this.topPole + this.radius*3 + 25, 150, 200);
      break;
    case 7: //Hombro izquierdo
      this.ctx.beginPath();
      this.ctx.strokeRect(i+345, this.topPole+ this.radius*3 + 25, 30, 50);
      break;
    case 6: //Brazo izquierdo
      this.ctx.beginPath();
      this.ctx.strokeRect(i+350, this.topPole+ this.radius*3 + 75, 20, 100);
      break;
    case 5: //Hombro derecho
      this.ctx.beginPath();
      this.ctx.strokeRect(i+525, this.topPole+ this.radius*3 + 25, 30, 50);
      break;
    case 4: //Brazo derecho
      this.ctx.beginPath();
      this.ctx.strokeRect(i+530, this.topPole+ this.radius*3 + 75, 20, 100);
      break;
    case 3: //Pierna izquierda
      this.ctx.beginPath();
      this.ctx.strokeRect(i+400, this.topPole+ this.radius*3 + 225, 45, 120);
      break;
    case 2: //Pierna derecha
      this.ctx.beginPath();
      this.ctx.strokeRect(i+460, this.topPole+ this.radius*3 + 225, 45, 120);
      break;
    case 1: // Cara
      this.ctx.beginPath(); //Ojo izq
      this.ctx.arc(i+450-15, this.topPole + this.radius*2 - 20, this.radius/6, 0, Math.PI*2);
      this.ctx.stroke();
      this.ctx.fill();
      //Ojo derecho
      this.ctx.beginPath(); //Ojo izq
      this.ctx.arc(i+450+15, this.topPole + this.radius*2 - 20, this.radius/6, 0, Math.PI*2);
      this.ctx.stroke();
      this.ctx.fill();
      //nariz
      this.ctx.beginPath();
      this.ctx.moveTo(i+450, this.topPole + this.radius*2 - 10);
      this.ctx.lineTo(i+435, this.topPole + this.radius*2);
      this.ctx.lineTo(i+450, this.topPole + this.radius*2 + 5);
      this.ctx.stroke();
      //Boca triste
      this.ctx.beginPath();
      this.ctx.arc(i+450, this.topPole + this.radius*2 + 35, 14, -0.85*Math.PI, -0.15*Math.PI, false);
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function () {
  let img = new Image();
  img.src = "images/gameover.png";
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img, 200, 300,);
  }
};

HangmanCanvas.prototype.winner = function () {
  let img = new Image();
  img.src = "images/awesome.png";
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img, 100, 100,);
  }
};
