var hangman;

function Hangman() {
 this.words = ['IRONHACK', 'NODEJS', 'JAVASCRIPT', 'METEOR', 'ANGULAR', 'BARCELONA', 'MADRID', 'MIAMI', 'HTML'];
 this.secretWord = '';
 this.letters = [];
 this.guessedLetter = '';
 this.errorsLeft = 10;
//  this.secretWord =this.getWord();

}

Hangman.prototype.getWord = function () {
  var randomNumber = Math.floor(Math.random()* this.words.length);

  return this.words[randomNumber];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return keyCode > 64 && keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function (key) {
    if (this.letters.includes(key)) {
      return false;
    } else {
      return true;
    }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.guessedLetter + i;
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
