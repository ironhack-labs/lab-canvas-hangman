var hangman;

class Hangman  {
  constructor(){
    this.words = ["Ilham","Michel","Omar"]
    this.secretWord = ""
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10
  }
  getWord () {
    var secretWord = this.words[Math.floor(Math.random()*this.words.length)]
    this.secretWord = secretWord
    return secretWord
    
  }

  checkIfLetter (keyCode) {
    if (keyCode >=65 && keyCode<=90) {
      return true;
    }else {
      return false;
    }
  }

  checkClickedLetters (keyCode) {
    if(this.letters.includes(keyCode)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter (keyCode) {
    var key = this.secretWord[keyCode].toUpperCase();
    this.guessedLetter += key;
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
