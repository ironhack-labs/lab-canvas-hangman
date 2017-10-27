var hangman;


function Hangman() {
  this.words = ['fuck', 'poop', 'word'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetters = '';
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function() {
  this.secretWord = this.words[Math.floor(this.words.length * Math.random())];
  return (this.secretWord);

};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return /[A-Z]/i.test(String.fromCharCode(keyCode));


};


Hangman.prototype._checkClickedLetters = function(key) {
  return !this.letters.includes(key)

};

Hangman.prototype._addCorrectLetter = function(i) {
  this.guessedLetters += this.letters;

};

Hangman.prototype._addWrongLetter = function(letter) {

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman._getWord();

};


document.onkeydown = function(e) {

  hangman._checkIfLetter(e.key);
};
