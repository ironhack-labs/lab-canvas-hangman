var hangman;
function Hangman() {
  this.words = [""];
  this.secretWord = "Ironhack";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 7;
}

Hangman.prototype.getWord = function() {
  var word = this.words[Math.floor(Math.random() * this.words.length)];
  return word;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (((keyCode >= 65) && (keyCode <= 90)) || ((keyCode >=97) && (keyCode<= 122))){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  if (this.secretWord.indexOf(this.secretWord[i]) > -1){
  return this.guessedLetter += this.secretWord[i].toUpperCase();
  }
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft == 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
