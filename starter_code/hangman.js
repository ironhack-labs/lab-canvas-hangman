var hangman = new Hangman();

function Hangman() {
  this.words = ["hola", "adios", "bye"];
  this.secretWord = "ironhack";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if ( this.checkIfLetter() ) {
    if (this.letters.includes(key)) {
      return false;
    } else {
      this.letters.push(key);
      if ( this.secretWord.includes(key) ) {
        var letterIndex = this.secretWord.indexOf(key);
        this.addCorrectLetter(letterIndex);
        return true;
      }  
    }
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
