var hangman;

function Hangman() {
  this.words = ["motocicleta", "ironhack","yamilet"]
  this.letters = [];
  this.guessedLetter = "";
  this.secretWord = "";
  this.errorLeft = 10;
}



Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(this.words.length * Math.random())];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    return keyCode >= 65 && keyCode<= 90
};

Hangman.prototype.checkClickedLetters = function (key) {
    return !this.letters.includes(key);
}

Hangman.prototype.addCorrectLetter = function (i) {
   this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorLeft--;
};

Hangman.prototype.checkGameOver = function () {
  
};

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
