var hangman;

function Hangman() {
  this.words = ['HOLA', 'IRONHACK', 'JAVASCRIPT'];
  this.secretWord = '';
  this.guessedLetter = '';
  this.letters = [];
  this.errorsLeft ;
}


Hangman.prototype.getWord = function () {
  var indexWord = Math.floor(Math.random() * this.words.length);
  this.secretWord += this.words[indexWord];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode > 65 && keyCode < 90) {
    return true;
  } else {
    return false
  }


};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1) {
    this.letters.push(key);
      return true;
    } else {
      return false;
    }

};

 Hangman.prototype.addCorrectLetter = function (i) {
  var letraCap= this.secretWord[i].toUpperCase();
     this.guessedLetter+=letraCap;

  }

 ;

 Hangman.prototype.addWrongLetter = function (letter) {
  if( this.secretWord.indexOf(letter)==-1){
    this.errorsLeft-1
  }

 };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
