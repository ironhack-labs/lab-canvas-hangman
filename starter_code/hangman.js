var hangman;

function Hangman() {

  this.words = ["Perro", "gato", "Alien"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {

  //Regresa un valor aleatorio del array de palabras
  var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
  return randomWord;

};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (isNaN(keyCode)) {
    //Si keycode no es numero
    return true;
  } else {
    //Si keycode es un numero
    return false;
  }

};

Hangman.prototype.checkClickedLetters = function (key) {

};

Hangman.prototype.addCorrectLetter = function (i) {
  

};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};