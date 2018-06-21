function Hangman() {
  this.words = ['ejemplo'];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
  this.canvas=new HangmanCanvas(this);
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (((keyCode >= 65) && (keyCode <= 90)) || ((keyCode >= 97) && (keyCode <= 122)));
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  if(this.secretWord.indexOf(this.secretWord[i]) > -1){
    return this.guessedLetter += this.secretWord[i].toUpperCase();
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft <= 0;
};

Hangman.prototype.checkWinner = function () {
  var that = this;
  return this.secretWord.split('').every(function(e){
    console.log(e);
    return that.guessedLetter.toUpperCase().includes(e.toUpperCase());
  })
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
