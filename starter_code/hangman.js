var hangman;

function Hangman() {
this.words = ['pepe', 'maria', 'javier'];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
var randomNumber = Math.floor(Math.random()*this.words.length);
this.secretWord = this.words[randomNumber];
return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
if (keyCode >= 65 && keyCode <= 90) {
return true;
}
else {
return false;
}
};

Hangman.prototype.checkClickedLetters = function (key) {

};

// Hangman.prototype.addCorrectLetter = function (i) {

// };

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
