

var hangman;

function Hangman() {
this.words = ["hola", "adion"];
this.secretWord = "";
this.letters =[];
this.guessedLetter = "";
this.errorsLeft = 10;

}

Hangman.prototype._getWord = function () {
  return this.words[Math.floor( Math.random()*this.words.length )];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return isNaN(keyCode);

};

Hangman.prototype._checkClickedLetters = function(key) {
  if (event.keyCode >= 65 && event.keyCode <= 99) {
   return true;
 }
  else {
    return false;
  }
};

Hangman.prototype._addCorrectLetter = function(i){
if (event.keyCode === this.words.length);
return true;
};

Hangman.prototype._addWrongLetter = function (letter){
if (this.errorsLeft == 0);
return ("Game is over");
};

Hangman.prototype._checkGameOver = function() {
if (this.errorsLeft == 0) {
return true;
}
else {
  return false;
  }
};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
