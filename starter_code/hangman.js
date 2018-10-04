var hangman;

function Hangman() {
  this.words = ["hockey", "pie", "hey"],
  this.secretWord = "",
  this.letters = [],
  this.guessedLetter = "",
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  var randnum = Math.floor(Math.random() * (this.words.length));
  var word = this.words[randnum];
  this.secretWord = word;
  return word;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
 if(!this.letters.includes(key)) {
   return true;
 }
 return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  var letter = (this.secretWord.charAt(i));
  this.guessedLetter += letter.toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft = this.errorsLeft - 1;
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0) {
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {
  if(this.secretWord.length === this.guessedLetter.length) {
    return true;
  }
  return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  window.hangman = hangman;
};


document.onkeydown = function (e) {

};
