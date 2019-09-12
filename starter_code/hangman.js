// var hangman;

class Hangman {
  constructor() {
    this.words = ["apple", "banana", "watermelon"];
    this.secretWord = "BANANA";
    this.letters = ["a", "b"];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    let index = Math.floor(Math.random()*this.words.length);
    return this.words[index];   
  }

  checkIfLetter(keyCode) {
    return ((keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90));
  }

  checkClickedLetters(key) {
    return (this.letters.indexOf(key) === -1);
  }

  checkGameOver() {
    return (this.errorsLeft == 0);
  }

  checkWinner() {
    return (this.secretWord.length === this.guessedLetter.length);
  }

  addCorrectLetter(i) {
    let arrSecretWord = this.secretWord.split("");    
    this.guessedLetter += arrSecretWord[i].toUpperCase();
    return this.guessedLetter;
    // while (arrSecretWord.indexOf(String.fromCharCode(i)) !== -1){
    //   arrSecretWord.splice(arrSecretWord.indexOf(String.fromCharCode(i)), 1)
    //   this.guessedLetter += String.fromCharCode(i);
    // }
  }

  addWrongLetter(letter) {
    this.errorsLeft -=1
    this.checkGameOver();
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
