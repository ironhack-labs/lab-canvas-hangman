var hangman;

function Hangman() {
  this.words = ["Francis", "Celia", "Laura", "Cristian", "Gonzalo"];
  this.secretWord = "Bobby";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {

var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
return randomWord.toString();
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode >= 48 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }

};

Hangman.prototype.checkClickedLetters = function (key) {

  for (var i = 0; i < this.letters.length; i++) {
    if (this.letters[i] == key) {
      return false;
    }
  }
  return true
};

Hangman.prototype.addCorrectLetter = function (a) {
  
  this.guessedLetter += this.secretWord[a].toUpperCase();
      
};

Hangman.prototype.addWrongLetter = function (letter) {

  if (!this.secretWord.includes(letter)) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype.checkGameOver = function () {

if (this.errorsLeft > 0) {
  return false;
} else if (this.errorsLeft <= 0) {
  return true;
}

};

Hangman.prototype.checkWinner = function () {

  if (this.secretWord.length == this.guessedLetter.length) {
    return true;
  }
  return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
