var hangman;

function Hangman() {
  this.words = [];
  this.letters = [];
  this.secretWord = "";
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var self = this;
  var randomWord = "" + self.words[Math.floor(Math.random() * self.words.length)];
  return randomWord; 
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  var self = this;
  if (keyCode >= 65 && keyCode < 91) {
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var self = this;
  var letterFound = self.letters.find(function (letter){
    return key === letter;
  });
  console.log(letterFound);
  if (letterFound === key) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  var self = this;
  
};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
