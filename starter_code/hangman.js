var hangman;

class Hangman {
  constructor() {
    (this.words = ["Mango", "Sandia", "Aasdad"]),
    (this.letters = []),
    (this.secretWord = "Limon"),
    (this.guessedLetter = ""),
    (this.errorsLeft = 10);
  }
}

Hangman.prototype.getWord = function () {
  return this.words[
    Math.floor(Math.random() * this.words.length)
  ].toUpperCase();
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
    return true;
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) return false;
  this.letters.push(key);
  return true;
};
//////////////////////
Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  // this.guessedLetter.push(i)
  // if(this.guessedLetter.includes(i)) return true
  return false;
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft > 0) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.checkWinner = function () {
  for (let i = 0; i < this.secretWord.length; i++) {
    if (this.guessedLetter.indexOf(this.secretWord[i]) === -1) return false
  }
  return true
};

document.getElementById("start-game-button").onclick = function () {
  hangman = new Hangman();
};

document.onkeydown = function (e) {

};