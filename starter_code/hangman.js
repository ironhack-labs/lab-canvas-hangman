var hangman;

function Hangman() {
  this.words = ["China","France","Japan","Korea","India", "Spain", "Brasil"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var randomIndex = Math.floor(Math.random()*this.words.length);
  var secretWord = this.words[randomIndex];
  return secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 64 && keyCode <= 91) {
    return true;
  } else {
    return false;
  }
 };


Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)){
    return false
  } else {
    this.letters.push(key);
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    return this.guessedLetter;
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft-=1;

};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft===0;
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length===this.secretWord.length){
  return true;
} else return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
