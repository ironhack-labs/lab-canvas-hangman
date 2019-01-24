let startBtn = document.getElementById("start-game-button");

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.start = 0;
  this.ctx.font = "64px avenir";
}

HangmanCanvas.prototype.createBoard = function() {
  //this.ctx.clearRect(0, 0, hangman.width, hangman.height);
};

HangmanCanvas.prototype.drawLines = function() {
  let x = 0;
  console.log(hangman.secretWord);
  for (let i = 0; i < hangman.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(100 + x, 500);
    this.ctx.lineTo(200 + x, 500);
    this.ctx.stroke();
    this.ctx.closePath();
    x += 150;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  this.ctx.font = "64px avenir";
  let letter = hangman.secretWord[index];
  let recorrer = 0;

  for (let i = 0; i < hangman.secretWord.length; i++) {
    if (letter === hangman.secretWord[i]) {
      // this.ctx.font = "50px ZCOOL KuaiLe";
      this.ctx.fillText(letter, 140 + recorrer, 460);
    }
    recorrer += 150;
  }
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  // errorsLeft--;
  //console.log(errorsLeft);
  //console.log(hangman.letters);
  let letterE = letter;
  let recorrerE = 0;
  //console.log(letterE);
  for (let i = 0; i < hangman.letters.length; i++) {
    recorrerE += 30;
  }
  this.ctx.font = "36px avenir";
  this.ctx.fillText(letterE, 700 + recorrerE, 200);

  switch (errorsLeft) {
    case 9:
      //Base
      this.ctx.beginPath();
      this.ctx.moveTo(10, 500);
      this.ctx.lineTo(80, 500);
      this.ctx.lineTo(45, 470);
      this.ctx.fill();
      this.ctx.closePath();
      break;

    case 8:
      //Asta
      this.ctx.beginPath();
      this.ctx.moveTo(45, 470);
      this.ctx.lineTo(45, 50);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 7:
      //Gancho
      this.ctx.beginPath();
      this.ctx.moveTo(45, 50);
      this.ctx.lineTo(450, 50);
      this.ctx.lineTo(450, 100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 6:
      //Cabeza
      this.ctx.beginPath();
      this.ctx.arc(450, 130, 30, 0, Math.PI * 2, true);
      this.ctx.stroke();
      break;

    case 5:
      //Cuerpo
      this.ctx.beginPath();
      this.ctx.moveTo(450, 160);
      this.ctx.lineTo(450, 300);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 4:
      //Pierna Izq
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(500, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 3:
      //Pierna derecha
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(400, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 2:
      // Brazo izq
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(500, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 1:
      //brazo derecho
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(400, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

    case 0:
      //Cara de muerto
      this.ctx.font = "10px arial";
      this.ctx.strokeText("X     X", 437, 125);

      this.ctx.beginPath();
      this.ctx.moveTo(437, 140);
      this.ctx.lineTo(463, 140);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
  }
};

HangmanCanvas.prototype.drawHangman = function(shape) {};

HangmanCanvas.prototype.gameOver = function() {
  if (hangman.checkGameOver) {
    alert("Perdiste");
  }
};

HangmanCanvas.prototype.winner = function() {
  if (hangman.checkWinner) {
    setTimeout(() => alert("Ganaste"), 300);
  }
};
