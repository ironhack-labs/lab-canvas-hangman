var hangman;

function Hangman() {
  this.words = ['jb', 'frustration', 'lourd', 'ouais'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122) {
    return true ;
  } else {
    return false;
  }
};

 Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
 };

Hangman.prototype.addCorrectLetter = function (i) {
  return this.guessedLetter += this.secretWord[i].toUpperCase();

};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  return this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
 if (this.errorsLeft === 0) {
   return true;
 } else {
   return false
 }
};

Hangman.prototype.checkWinner = function () {
 for (i = 0; i < this.secretWord.length ; i++) {
   if (this.guessedLetter.indexOf(this.secretWord[i]) === -1) {
     return false;
   }
 }
 return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
