var hangman;

function Hangman() {

this.words = ["elephant", "giraffe", "programming", "cockroach", "spider"];
this.secretWord = this.getWord();
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  var randomIndex = Math.floor(Math.random() * this.words.length);
  var randomSecretWord = this.words[randomIndex];
  return randomSecretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode < 91 && keyCode > 64) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) > -1) {
    return false;
  } else {
    return true;
  }

};

Hangman.prototype.addCorrectLetter = function (i) {
  var letterUp = this.secretWord[i].toUpperCase();
  this.guessedLetter += letterUp;

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
};

Hangman.prototype.checkGameOver = function () {
 if (this.errorsLeft === 0) {
   return true;
 } else {
   return   false;
 }
};

Hangman.prototype.checkWinner = function () {
  if(this.guessedLetter.length === this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  var canvas = new HangmanCanvas();
  canvas.createBoard();
  canvas.drawLines();
};


document.onkeydown = function (e) {

};
