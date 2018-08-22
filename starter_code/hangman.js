var hangman = new Hangman;


function Hangman() {
  this.words = ["perro","azul","amarillo"]
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter= "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode>=65 && keyCode<=90);
};

Hangman.prototype.checkClickedLetters = function (key) {

  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  var letra = String.fromCharCode(i)  
  if (this.secretWord.indexOf(letra)>=0){
    this.guessedLetter += letra;
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.indexOf(letter)<0){
    this.errorsLeft--;
  }
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft == 0);
};

Hangman.prototype.checkWinner = function () {
  return (this.secretWord.length == this.guessedLetter.length);
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
  return e.keyCode;
};

hangman.getWord();
