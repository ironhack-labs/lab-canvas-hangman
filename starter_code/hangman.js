var hangman;
 function Hangman() {
   this.words = ['palabra', 'carro', 'casa'];
   this.secretWord = "";
   this.letters = [];
   this.guessedLetter = "";
   this.errorsLeft = 10;

  }

Hangman.prototype.getWord = function () {
 return this.words[Math.floor(Math.random()*this.words.length)]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
 
 return 65 <= keyCode && 90 >= keyCode || keyCode == 192;
 
};

Hangman.prototype.checkClickedLetters = function (key) {
 return this.letters.indexOf(key) == -1;
};

Hangman.prototype.addCorrectLetter = function (i) {
 this.guessedLetter += this.secretWord[i].toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft --;
};

Hangman.prototype.checkGameOver = function () {
 this.errorsLeft === 0
 return true
};

Hangman.prototype.checkWinner = function () {

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
