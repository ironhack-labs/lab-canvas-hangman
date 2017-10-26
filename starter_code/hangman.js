var hangman;


function Hangman() {
  this.words = ['tits', 'shit', 'twat'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function() {
  var randomizer = Math.floor(Math.random() * this.words.length);
  return this.words[randomizer];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._addCorrectLetter = function(i) {
  for (ix = 0; ix < secretWord.length; ix++) {
    if (this.secretWord[ix] === i) {
      this.guessedLetter += this.secretWord[ix];
    }
  }
};

Hangman.prototype._addWrongLetter = function(letter) {
  if (this.guessedLetter.indexOf(letter) === -1) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft > 0) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype._checkWinner = function() {
  if (this.secretWord.length === this.guessedLetter.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
