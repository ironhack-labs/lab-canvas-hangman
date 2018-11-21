var hangman;

function Hangman() {
  this.words = ["Chilaquiles", "Tacos", "Pizza"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  let i = Math.floor(Math.random()*this.words.length);
  let word = this.words[i];
  return word;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
    return true; 
  }
  else return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
  }
  else return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft <= 0) return true;
  else return false;
};

//Letras repetidas??????
Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length) return true;
  else return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.createBoard();
};


document.onkeydown = function (e) {

};
