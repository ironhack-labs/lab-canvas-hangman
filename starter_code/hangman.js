var hangman;

function Hangman() {
  this.words = ["JAVASCRIPT","DOM","IRONHACK"]
  this.secretWord = "IRONHACK"
  this.letters = []
  this.guessedLetter = ""
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  return "hola"
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(64 < keyCode && keyCode < 90)
    return true
  else 
    return false
};

Hangman.prototype.checkClickedLetters = function (key) {
  var clicked = this.letters.indexOf(key)
    if(clicked === -1)
      return true
    else 
      return false
};

Hangman.prototype.addCorrectLetter = function (i) {
  var letter = this.secretWord.substr(i,1).toUpperCase()
  this.guessedLetter += letter
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0)
    return true
  else 
    return false
};

Hangman.prototype.checkWinner = function () {
  if(this.secretWord.length === this.guessedLetter.length)
    return true
  else
    return false
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
