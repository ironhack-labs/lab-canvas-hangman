var hangman = new Hangman();

function Hangman() {
  this.words = ['cat', 'hat', 'mouse'];
  this.secretWord = this.words[Math.floor(Math.random()*(this.words.length-1))];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  this.letters = [];
}

Hangman.prototype._getWord = function () {
  return this.words[Math.floor(Math.random()*(this.words.length-1))];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return  (keyCode > 64 && keyCode < 91);
};

Hangman.prototype._checkClickedLetters = function(key) {
  return this.letters.indexOf(key) === -1;
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += letters[i];
  this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft --;
  this._checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft === 0;
};

Hangman.prototype._checkWinner = function() {
  return this.guessedLetter.length === this.secretWord.length;
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
