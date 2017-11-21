var hangman;

function Hangman() {
  this.words = ["Hola"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  var countRepeat = 0;

  this.letters.forEach(function(element) {
    if (key === element) {
      countRepeat++;
    }
  });

  var repeated = countRepeat > 0 ? false : true;
  return repeated;
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
