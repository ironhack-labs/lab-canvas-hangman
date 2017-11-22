var hangman;

function Hangman() {
this.words = ["table","house","ironhack","meatballs","blitzkrieg"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return this.words[Math.floor(Math.floor()*this.words.length)];
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
  return true;
} else {
  return false;
}
};

Hangman.prototype._addCorrectLetter = function(i){
if (this._checkClickedLetters(key) === false){
  this.guessedLetter += i;
}
this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

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
