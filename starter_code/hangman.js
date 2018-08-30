function Hangman() {
  this.words = ["coche", "manzana", "femur", "tobillo", "pelicula"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var i = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[i];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (typeof keyCode == "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    var isLetter = typeof keyCode == "string";
    return isLetter;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (!this.letters.includes(key)) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft == 0){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
 if(this.guessedLetter.length == this.secretWord.length){
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};


