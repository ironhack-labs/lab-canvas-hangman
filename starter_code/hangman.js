var hangman = new HangmanCanvas;

 function Hangman() {
  this.words = ["apple", "orange", "banana"];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
 }

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random() * this.words.length); 
  this.secretWord = this.words[random];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode>64 || keyCode<91) {
  	return true;
  } else {
  	return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
  	return false;
  } else {
  	return true;
  };
};

 Hangman.prototype.addCorrectLetter = function (i) {
 	return this.guessedLetter += this.secretWord.charAt(i);
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

/*
for (var i = 0; i < this.secretWord.length; i++) {
    if (String.fromCharCode(keyCode) === this.secretWord[i]) {
      return true;
    } else {
      return false;
    }
  }
*/