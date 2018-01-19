var hangman;

function Hangman() {
  this.words = ['vlad' , 'victor', 'george', 'andre']
  this.secretWord = this.getWord();
  this.letters = []
  this.guessedLetter = ''
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  var self = this;
  var randomWord = Math.floor(Math.random() * self.words.length);
  return self.words[randomWord];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var self = this;
  return self.letters.indexOf(key.toUpperCase()) == -1;
};

Hangman.prototype.addCorrectLetter = function (i) {
  var self = this;
  self.guessedLetter += self.secretWord[i].toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
  var self = this;
  self.errorsLeft --;
};

Hangman.prototype.checkGameOver = function () {
  var self = this;
  if (self.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  var self = this;
  
  if (self.secretWord.length === self.guessedLetter.length) {
    return true;
  }else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
