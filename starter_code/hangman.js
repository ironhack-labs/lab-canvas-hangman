var hangman;

var words = ["ironhack", "javascript", 'jquery', 'keyboard', 'miami'];
 var clickedLetters = [];

function Hangman() {
this.words = words;
this.secretWord = '';
this.clickedLetters = [];
}

Hangman.prototype._getWord = function () {
 var randomW = Math.floor(Math.random() * this.words.length);
 return this.words[randomW] ;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
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
