var hangman;

function Hangman() {
  this.words = ['something', 'here', 'two']
  this.secretWord = ''
  this.letters = [];
  this.guessedLetter = '';
  errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >= 65 && keyCode <= 90 ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key) ? true : false;
};

Hangman.prototype.addCorrectLetter = function (i) {  
  this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft = this.errorsLeft -1;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft < 1 ? true : false;

};

Hangman.prototype.checkWinner = function () {  
  // Ni puñetera idea de que hace este código. 
  arr1 = this.secretWord.split('').sort();
  arr2 = this.guessedLetter.split('').sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
              return false;    
    }
  }
  return true;
};

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


document.onkeydown = function (e) {
// console.log(e)
};
