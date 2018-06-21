var hangman;

function Hangman() {
  this.words = ['Ironhack', 'Code', 'Canvas'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  errosLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()* this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode > 64 && keyCode < 91) ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  if(this.secretWord.indexOf(this.secretWord[i])>=0){
    return this.guessedLetter+=this.secretWord[i].toUpperCase();
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  wordArr = this.secretWord.split('');
  if(!wordArr.includes(letter)){
    this.errorsLeft--;
  }
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft <= 0) ? true : false;
};

Hangman.prototype.checkWinner = function () {
  secretWordArr = this.secretWord.split('');
  guessedLetterArr = this.guessedLetter.split('');
  return secretWordArr.every(function(e){
    return guessedLetterArr.includes(e);
  });
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
