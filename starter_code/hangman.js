
function Hangman() {
  this.words = ["Paella","Ordenador","Libreta","Bocadillo"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor((Math.random()) * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  
  this.guessedLetter +=  this.secretWord[i].toUpperCase() ;
  
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  return this.errorsLeft == 0;
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function () {
  var winner = true;
  
  for (i = 0; i < this.secretWord.length; i++){
    if (this.guessedLetter.indexOf(this.secretWord[i]) == -1){
      winner = false;
    }
  };
  return winner;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  canvas = new HangmanCanvas();
  canvas.drawLines();
};


document.onkeydown = function (e) {

};
