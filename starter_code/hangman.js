var hangman;

 function Hangman() {
  this.words = ['IRONHACK','BOOTCAMP'];
  this.secretWord = '';
  this.letters = []; 
  this.guessedLetter = '';
  this.errorsLeft = 10;
 }

Hangman.prototype.getWord = function () {
  var randWords = this.words[Math.floor(Math.random()*this.words.length)];
  return this.secretWord = randWords;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
    if(this.letters.includes(key)){
      this.letters.push(key);
      return false;
    } else {
      return true;
    }
};

Hangman.prototype.addCorrectLetter = function (i) {
    if(this.secretWord.indexOf(this.guessedLetter) === i){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
