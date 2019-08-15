var hangman;

function Hangman() {
  this.words = ["ayuntamiento", "murcielago", "telefono", "pizza", "camion"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var maximo = this.words.length;

  var randomWordIndex = Math.floor(Math.random() * maximo);
  this.secretWord = this.words[randomWordIndex];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
    return true;
  } else {
    return false;
  }
};
Hangman.prototype.checkClickedLetters = function(key) {
  return this.letters.indexOf(key) === -1;
  // if (this.letters.indexOf(key) !== -1) {
  //   return false;
  // } else {
  //   return true;
  // }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.letters.push(this.guessedLetter);
  let reg = new RegExp(`${this.guessedLetter}`, "g");
  this.secretWord = this.secretWord.replace(reg, " ");
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.guessedLetter = letter;
  this.letters.push(this.guessedLetter);
  //console.log(typeof letter, letter);
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
  let reg = this.guessedLetter.split("").join("|");
  reg = new RegExp(reg, "g");
  let res = this.secretWord.replace(reg, "");
  return !this.errorsLeft > 0;
};

Hangman.prototype.checkWinner = function() {
  let exp = this.guessedLetter.split("").join("|");
  let reg = new RegExp(exp, "g");
  let esVacio = this.secretWord.replace(reg, "");

  return esVacio.length === 0;
};

$(document).ready(function() {
  canvas = new HangmanCanvas();
  hangman = new Hangman();
  secretW = hangman.getWord();
});
var b = document.getElementById("start-game-button");
b.onclick = function() {
  console.log("clickity");
};
// document.getElementById("start-game-button").onclick = function() {
//   hangman = new Hangman();
//   hangman.getWord();
// };

document.onkeydown = function(e) {};
