var hangman;

function Hangman() {
  this.words = ["perro", "gato", "pulpo"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = [];
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random(this.words.value) * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true
  } else {
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return true
  } else {
    return false
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  if (this.secretWord.includes(i)) {
    this.guessedLetter.push(i)
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.includes(letter) == false) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    return true
  } else {
    return false
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord.includes(this.guessedLetter)) {
    return true
  } else {
    return false
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
