/*let hangman;

// class Hangman {
//   constructor() {

//   }

//   getWord() {

//   }

//   checkIfLetter(keyCode) {

//   }

//   checkClickedLetters(key) {

//   }

//   addCorrectLetter(i) {

//   }

//   addWrongLetter(letter) {

//   }

//   checkGameOver() {

//   }

//   checkWinner() {

//   }

// }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};*/
var hangman;

// function Hangman() {
function Hangman() {
this.words = ['apple', 'pineapple', 'extra', 'javascript'];
this.secretWord = '';
this.letters = [];
this.guessedLetter = '';
this.errorsLeft = 10;

// }
 }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };
Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

// Hangman.prototype.addWrongLetter = function (letter) {
Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 64 && keyCode <= 91 || keyCode >= 97 && keyCode <= 122){
    return true;
  } else {
    return false;
  }
};

// };
Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};

// Hangman.prototype.checkGameOver = function () {
Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this.checkWinner();
  };

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.letters.includes(letter) == false){
    return this.errorsLeft--;
  }
  this.checkGameOver();
};

// };
Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0 ){
    return true;
  } else{
    return false;
  }
};

// Hangman.prototype.checkWinner = function () {
Hangman.prototype.checkWinner = function () {
  var sortSecretWord = this.secretWord.split('').sort().join('');
  var guessedSorted = this.guessedLetter.split('').sort().join('');
  if (sortSecretWord === guessedSorted) {
		return true;
	} else {
		return false;
	}

// };
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};
document.onkeydown = function (e) {
};