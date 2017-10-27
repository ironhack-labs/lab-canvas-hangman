var hangman;

function Hangman() {
this.words= ["word1", "word2","word3"];
this.secretWord = '';
this.letters = [];
this.guessedLetter = '';

}

Hangman.prototype._getWord = function () {
  var random = Math.floor(Math.random() * this.words.length);
    return this.words[random];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(keyCode > 65 && keyCode < 90) {
    return true;
  } else {
    return false;
  }

};

Hangman.prototype._checkClickedLetters = function(key) {
 if(this.letters.indexOf(key.toUpperCase()) === -1) {
   return true;
 } else {
   return false;
 }
};

Hangman.prototype._addCorrectLetter = function(i){
this.guessedLetter += this.secretWord[i].toUpperCase();
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
