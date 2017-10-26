var hangman;

function Hangman() {
  this.words = ["palabra", "abecedario", "rama"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorLeft = 10;
}

Hangman.prototype._getWord = function () {
  var size = this.words.length;
  var index = Math.round(Math.random() * (size - 1));
  this.secretWord = this.words[index];
  return this.secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;

};

Hangman.prototype._checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype._addCorrectLetter = function(i){
  var letter = String.fromCharCode(i);
  this.guessedLetter += letter;
  return letter;
};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};
//
