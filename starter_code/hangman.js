var hangman;

function Hangman() {
  this.words = ['crayon', 'livre'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (typeof keyCode === 'string' || keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  for (let i = 0; i < this.letters.length; i++)
    if (this.letters[i] === key) {
      return false;
    }
  return true;
};

Hangman.prototype.addCorrectLetter = function (i) {

  this.guessedLetter = this.secretWord[i].toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.indexOf(letter) === -1) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  }
  return false;

};

Hangman.prototype.checkWinner = function () {
  var secretWordArray = this.secretWord.split('');
  var guessedLetterArray = this.guessedLetter.split('');
  for (let i = 0; i < secretWordArray.length; i++) {
    if (guessedLetterArray.indexOf(secretWordArray[i]) === -1) {
      return false;
    }
  }
  return true;
  
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};