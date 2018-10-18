var hangman;

// words. An array where we will store all the words that the player need to guess. We will take one of them randomly.
// secretWord. Here we will store the word chosen for each game.
// letters. An array to store the letters the user already clicked, so we do not repeat them.
// guessedLetter. A string to store the letters the user clicked and guessed. We will use this to know when the user wins.
// errorsLeft. It should start at 10, and decrease every time a user clicks on a letter that is not in the word.

function Hangman() {
  this.words = [""];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var wordToGuess = this.words[Math.floor(Math.random() * this.words.length)];
  return wordToGuess;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode > 64 && keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function(key) {
  var check = this.letters.findIndex(l => l == key);
  if (check == -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft-- ;
  this.checkWinner();
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft == 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  var result = true;
  for (var i = 0; i < this.secretWord.length; i++ ) {
    var check = this.guessedLetter.indexOf(this.secretWord[i].toUpperCase());
    if (check == -1) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
