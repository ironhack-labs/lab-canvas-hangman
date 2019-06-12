var hangman;

class Hangman {
  constructor() {
    this.words = ["platos", "dagoberto", "ironhack", "Mexico"];
    this.secretWord = "ironhack";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
}
Hangman.prototype.getWord = function() {
  return this.words[
    Math.floor(Math.random() * this.words.length)
  ].toUpperCase();
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
};
Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft <= 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  let guess = this.guessedLetter;
  let secret = this.secretWord;
  let newStr = "";

  for (i = 0; i < guess.length; i++) {
    newStr = this.secretWord.replace(this.guessedLetter[i], "");
    if (newStr === secret) {
      return false;
    }
    guess = secret;
  }
  // If all the characters have been found in the second string, then return true.
  return true;

  // return Array.prototype.every.call(
  //   this.secretWord,
  //   function(c) {
  //     return this.guessedLetter.indexOf(c) > -1;
  //   },
  //   this
  // );
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);
};

document.onkeydown = function(e) {};
