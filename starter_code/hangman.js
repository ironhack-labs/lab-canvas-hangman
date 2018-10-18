var hangman;

function Hangman() {
  this.words = ["anachronisme", "variante", "vacances", "torpeur"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  var index = Math.floor(Math.random()*this.words.length);
  this.secretWord = this.words[index].toUpperCase();
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >=65 && keyCode <=90) return true;
  else return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
    this.letters.push(key);
  } else return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) return true;
  else return false;
};

Hangman.prototype.checkWinner = function () {
  for (var i=0; i<this.secretWord.length; i++) {
    if (this.guessedLetter.indexOf(this.secretWord[i])===-1) return false;
  } return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
