var hangman = new Hangman();
var secretWord = hangman.getWord();
var startBtn = document.getElementById("start-game-button");

function HangmanCanvas(secretWord) {
  this.element = document.getElementById("hangman");
  this.ctx = this.element.getContext("2d");
  this.ctx.font = "30px sans-serif";
  this.ctx.lineWidth = 6;
}

HangmanCanvas.prototype.createBoard = function() {
  this.cleanCanvas();
  this.drawLines(secretWord.length);
};

HangmanCanvas.prototype.cleanCanvas = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function(numLines) {
  this.ctx.beginPath();

  var positionX = 320;
  var positionY = 780;

  for (var i = 0; i < numLines; i++) {
    positionX += 10;
    this.ctx.moveTo(positionX, positionY);

    positionX += 50;
    this.ctx.lineTo(positionX, positionY);
  }
  this.ctx.stroke();
  this.ctx.closePath();
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  var positionX = 340;
  var positionY = 770;

  this.ctx.fillText(secretWord[index], positionX + 60 * index, positionY);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  var positionX = 600;
  var positionY = 120;

  this.ctx.fillText(letter, positionX + (10 - errorsLeft) * 35, positionY);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  switch (shape) {
    case 1:
      var newFun = printBase.bind(this);
      newFun();
      break;
    case 2:
      var newFun = printStick.bind(this);
      newFun();
      break;
    case 3:
      var newFun = printHorizontalStick.bind(this);
      newFun();
      break;
    case 4:
      var newFun = printGallow.bind(this);
      newFun();
      break;
    case 5:
      var newFun = printHead.bind(this);
      newFun();
      break;
    case 6:
      var newFun = printBody.bind(this);
      newFun();
      break;
    case 7:
      var newFun = printLeftLeg.bind(this);
      newFun();
      break;
    case 8:
      var newFun = printRightLeg.bind(this);
      newFun();
      break;
    case 9:
      var newFun = printLeftArm.bind(this);
      newFun();
      break;
    case 10:
      var newFun = printRightArm.bind(this);
      newFun();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {
  alert("Has Perdido");
  this.cleanCanvas();
};

HangmanCanvas.prototype.winner = function() {
  alert("Has Ganado");
  this.cleanCanvas();
};

function printBase() {
  this.ctx.beginPath();
  this.ctx.moveTo(50, 780);
  this.ctx.lineTo(250, 780);
  this.ctx.lineTo(150, 680); // Vertice arriba
  this.ctx.lineTo(50, 780);
  this.ctx.stroke();
  this.ctx.closePath();
}

function printStick() {
  this.ctx.beginPath();
  this.ctx.moveTo(150, 680);
  this.ctx.lineTo(150, 100);
  this.ctx.stroke();
  this.ctx.closePath();
}

function printHorizontalStick() {
  this.ctx.beginPath();
  this.ctx.moveTo(150, 100);
  this.ctx.lineTo(400, 100);
  this.ctx.stroke();
  this.ctx.closePath();
}

function printGallow() {
  this.ctx.beginPath();
  this.ctx.moveTo(400, 100);
  this.ctx.lineTo(400, 160);
  this.ctx.stroke();
  this.ctx.closePath();
}

function printHead() {
  var pi = Math.PI * 2;
  this.ctx.beginPath();
  this.ctx.arc(400, 230, 70, 0, pi, true);
  this.ctx.stroke();
  this.ctx.closePath();
}

function printBody() {
  this.ctx.beginPath();
  this.ctx.moveTo(400, 300);
  this.ctx.lineTo(400, 540); // Fin cuerpo
  this.ctx.stroke();
  this.ctx.closePath();
}

function printLeftLeg() {
  this.ctx.beginPath();
  this.ctx.moveTo(400, 540);
  this.ctx.lineTo(320, 640); //Pierna Izquierda
  this.ctx.stroke();
  this.ctx.closePath();
}

function printRightLeg() {
  this.ctx.beginPath();
  this.ctx.moveTo(400, 540);
  this.ctx.lineTo(480, 640); // Pierna Derecha
  this.ctx.stroke();
  this.ctx.closePath();
}

function printLeftArm() {
  this.ctx.beginPath();
  this.ctx.moveTo(400, 350);
  this.ctx.lineTo(320, 420); // Brazo izquierdo
  this.ctx.stroke();
  this.ctx.closePath();
}

function printRightArm() {
  this.ctx.beginPath();
  this.ctx.moveTo(400, 350);
  this.ctx.lineTo(480, 420); // Brazo derecho
  this.ctx.stroke();
  this.ctx.closePath();
}

function addLetter(letter) {
  var isCorrect = hangman.checkIfCorrect(letter);

  if (isCorrect) {
    var win = hangman.addCorrectLetter(letter);
    printLetter(letter);
  } else {
    var lose = hangman.addWrongLetter(letter);
    var errorsLeft = hangman.errorsLeft;
    game.drawHangman(10 - errorsLeft);
    game.writeWrongLetter(letter, errorsLeft);
  }
  checkStatus(win, lose);
}

function printLetter(letter) {
  for (var i = 0; i < secretWord.length; i++) {
    if (secretWord[i] == letter) {
      game.writeCorrectLetter(i);
    }
  }
}

function checkStatus(win, lose) {
  if (win) {
    game.winner();
  } else if (lose) {
    game.gameOver();
  }
}

var game = new HangmanCanvas();

startBtn.addEventListener("click", event => {
  game.createBoard();

  window.addEventListener("keydown", event => {
    var letter = event.key;
    var isLetter = hangman.checkIfLetter(event.keyCode);
    var avalibleLetter = hangman.checkClickedLetters(letter);
    if (isLetter && avalibleLetter) {
      addLetter(letter.toUpperCase());
    }
  });
});
