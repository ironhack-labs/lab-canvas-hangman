var hangman;

function Hangman() {
  this.words = ["javascript", "coderdojo", "codewars"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
};

Hangman.prototype.getWord = function () {
  var randomNum = Math.floor(Math.random() * this.words.length)
  return this.secretWord = this.words[randomNum]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    this.letters.push(keyCode)
    return true
  } else {
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += (this.secretWord[i]).toUpperCase()
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.checkClickedLetters() == true) {
    this.errorsLeft--;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    return true
  } else if (this.errorsLeft > 0) {
    return false
  }
};

Hangman.prototype.checkWinner = function () {
  var normalizedSecretWord = this.secretWord.replace(/\s+/g, '').toLowerCase();
  var normalizedGuessedLetter = this.guessedLetter.replace(/\s+/g, '').toLowerCase();

  var counts = [];
  var secretWordLength = normalizedSecretWord.length;
  var guessedLetterLength = normalizedGuessedLetter.length

  if (secretWordLength !== guessedLetterLength) {
    return false;
  }

  for (var i = 0; i < secretWordLength; i++) {
    var index = normalizedSecretWord.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for (var i = 0; i < guessedLetterLength; i++) {
    var index = normalizedGuessedLetter.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) - 1;
  }

  return counts.every(function (count) {
    return !count;
  });
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};

document.onkeydown = function (e) {

};