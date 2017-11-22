var hangman;

function Hangman() {
this.words = ["table","house","ironhack","meatballs","blitzkrieg"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  var array = this.words;
  var i = Math.floor(Math.random()*array.length);
  return array[i];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
 if (keyCode === 43) {
   return false;
 } else {
   return true;
 }
};

Hangman.prototype._checkClickedLetters = function(key) {
 if (this.letters.includes(key)) {
   return false;
 } else {
   return true;
 }
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += i;
  this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
  if (this._checkClickedLetters(key)){
    this.errorsLeft -= 1;
  }
};

Hangman.prototype._checkGameOver = function() {
if(this.errorsLeft === 0) {
  return true;
}
};

Hangman.prototype._checkWinner = function() {
  if(this.secretWord.length === this.letters.length){
    return true;
  }
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
