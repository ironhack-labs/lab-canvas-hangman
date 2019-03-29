var hangman;
var ctx, canvas;

function Hangman() {
  this.words = [...new Array(10)].map(() => "");
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return this.letters.indexOf(key) < 0;
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter = this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.guessedLetter += letter;
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function() {
  return this.guessedLetter.split("").reduce((acum, letter, idx, orig) => {
    return (
      orig.length === this.secretWord.length &&
      this.secretWord.indexOf(letter) > 0
    );
  }, false);
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  canvas = document.querySelector("#hangman");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  drawScene();
};

document.onkeydown = function(e) {};

var lineH = 100;

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawHang();
}

function drawHang() {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(lineH, lineH);
  ctx.lineTo(lineH, canvas.height - lineH);
  ctx.stroke();
  ctx.closePath();
}
