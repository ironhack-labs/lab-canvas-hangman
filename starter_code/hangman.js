// function Hangman() {

// }

class Hangman {
  constructor() {
    this.words = ['arnold', 'heitor', 'danilo', 'ze'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = ''
    this.errorsLeft = 10;
  }
  getWord() {
    var randomItem = this.words[Math.floor(Math.random() * this.words.length)];
    return `${randomItem}`;
  }
  checkIfLetter(num) {
    if (num >= 65 && num <= 90) {
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(str) {
   return this.letters.indexOf(str) === -1; 

  } 
  addCorrectLetter (idx) {
    this.guessedLetter += this.secretWord[idx].toUpperCase();
  }
  
  addWrongLetter(letter) {
    this.errorsLeft -= 1;

  }
  checkGameOver() {
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length ;
  } 
}

// Hangman.prototype.getWord = function () {

// };



// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

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