var hangman;

function Hangman() {
  this.words = ['Hola', 'Pepe']
  this.secretWord = ''
  this.letters = []
  this.guessedLetter = ''
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (!this.letters.includes(key)) {
    this.letters.push(key)
    return true
  } else {
    return false
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase()
  this.checkWinner()
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
  this.checkGameOver()
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft < 1
};

Hangman.prototype.checkWinner = function () {
  return this.guessedLetter.length == this.secretWord.length
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
