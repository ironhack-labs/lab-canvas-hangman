var hangman;

function Hangman() {
  this.words = ["hola", "adios"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
    var secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    return secretWord
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    if(keyCode > 64 && keyCode <91 ) return true;
    return false;
  
};

Hangman.prototype.checkClickedLetters = function (key) {
    
    if (this.letters.includes(key) ) {
      return false
    } else {
      return true 
    }
};

Hangman.prototype.addCorrectLetter = function (i) {
  return this.guessedLetter = this.secretWord[i].toUpperCase();
};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};