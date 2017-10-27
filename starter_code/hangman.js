var hangman;

var randomNumber = Math.floor(Math.random()*6);
var wordArray = ['code', 'byte', 'laptop', 'terminal', 'program', 'pizza'];
console.log(wordArray[randomNumber]);

function Hangman(wordsFill, secretWordFill, lettersFill, guessedLetterFill, errorsLeftFill) {
  this.words = wordArray;
  this.secretWord = wordArray[randomNumber];
  this.letters = lettersFill;
  this.guessedLetter = guessedLetterFill;
  this.errorsLeft = errorsLeftFill;
}

Hangman.prototype._getWord = function () {
  return wordArray[randomNumber];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {

};

Hangman.prototype._addCorrectLetter = function(i){

};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
