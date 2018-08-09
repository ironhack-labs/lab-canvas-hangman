var hangman;

function Hangman() {
  this.words=["wework", "nuts", "computer","chartreuse",""];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () { 
  return this.words[Math.floor(Math.random()* this.words.length )];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122) {
    return true
  }else {
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if ((this.letters).includes(key)) {
    return false
  }
  return true
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter+=this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true
  } return false
 };

Hangman.prototype.checkWinner = function () {
  console.log(this.guessedLetter);
  console.log(this.secretWord);
  var letterGuess = this.guessedLetter.split("").sort().join();
  var bigSecret = this.secretWord.split("").sort().join();
  if (letterGuess === bigSecret) {
    return true
    } return false
  }

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
