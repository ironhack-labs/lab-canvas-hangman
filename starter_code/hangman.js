var hangman;

function Hangman(words, secretWord, letters, guessedLetter, errorsLeft) {
this.words = ["ron", "Hack", "Ironhack", "test"];
this.secretWord = "";
this.letters = [""];
this.guessedLetter = "";
this.errorsLeft = "";
}

Hangman.prototype._getWord = function () {
return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
return keyCode >= 65 && keyCode <= 90 ? true : false
};

Hangman.prototype._checkClickedLetters = function(key) {
 return this.letters.indexOf(key) === -1 ? true : false
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter=this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){
 if (this.secretWord.indexOf(letter) === -1){
   this.errorsLeft--;
 }
};

Hangman.prototype._checkGameOver = function() {
 return this.errorsLeft == 0 ? true : false
};

Hangman.prototype._checkWinner = function() {
 return this.secretWord.length == this.guessedLetter.length ? true : false
};
