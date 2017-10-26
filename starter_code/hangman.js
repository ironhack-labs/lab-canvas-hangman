var hangman;

function Hangman() {
this.words = [""];
this.secretWord = "";
this.letters = [""];
this.guessedLetter = "";
this.errorsLeft = "";
}

Hangman.prototype._getWord = function () {
return this.words[0];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
 if (keyCode >= 65 && keyCode <= 90){
   return true;
 } else {
    return false;
 }
};

Hangman.prototype._checkClickedLetters = function(key) {
if (this.letters.indexOf(key) === -1){
   return true;
 } else {
   return false;
 }
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
 if (this.errorsLeft == 0){
   return true;
 } else {
   return false;
 }
};

Hangman.prototype._checkWinner = function() {
 if (this.secretWord.length == this.guessedLetter.length) {
   return true;
 } else {
   return false;
 }


};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
