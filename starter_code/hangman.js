var hangman;

function Hangman() {
  this.words = ["hello","please","thanks"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetters = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];

};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return ((keyCode>64 && keyCode<91) ? true  : false );
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
//   return (this.clickedLetters) ? this.guessedLetter += this.secretWord[i].toUpperCase() :
};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {

};

Hangman.prototype.checkWinner = function () {

};

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


// document.onkeydown = function (e) {

// };
