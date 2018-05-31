var hangman;

function Hangman() {
  this.words = [];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;


}

Hangman.prototype.getWord = function (words) {
  return "" + this.words[Math.floor(Math.random*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90 ) {
    return true
  } else return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
 if (this.letters.indexOf(key) > -1) {
   return false
 } else return true;

  // for (var i = 0; i < this.letters.length; i++) {        // -> So why does this not work? 
  //   if (this.letters[i].indexOf(key) > -1) {
  //     return false
  //   } else return true;
  // };
};

Hangman.prototype.addCorrectLetter = function (i) {
  if (this.checkClickedLetters) {
    return this.guessedLetter = this.guessedLetter + this.secretWord.charAt(i).toUpperCase();
  } else return false
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  } else return false;
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } else return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
