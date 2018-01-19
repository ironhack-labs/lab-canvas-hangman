var hangman;


function Hangman() {
  this.words = [];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.secretWord = toString(this.words[Math.floor(Math.random*this.words.length)]);
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode <= 43) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key) === true) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  // return this.guessedLetter + i;
  console.log(i);
};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {

};

Hangman.prototype.checkWinner = function () {

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
