var hangman;

function Hangman() {
  this.words = ["IRONHACK", "TELEFONO", "CASA", "Animal", "Perro", "Ingeniero"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  this.hangmancanvas = new HangmanCanvas(this.getWord());
}

Hangman.prototype.getWord = function () {
  if (this.words.length > 0){
    return (this.words[Math.floor(Math.random()*this.words.length)]);
  } else {
    return "";
  }
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(String.fromCharCode(key)) >= 0){
    return true;
  } else {
    return false;
  }
 };

Hangman.prototype.addCorrectLetter = function (i) {
  if (this.secretWord.indexOf(this.secretWord[i]) >= 0){
    return this.guessedLetter += this.secretWord[i].toUpperCase();
  }  
};

Hangman.prototype.addWrongLetter = function (letter) {
    this.errorsLeft--;
}

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord.length == this.guessedLetter.length) {
    return true;
  } else {
    return false;
  }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();


  
};


document.onkeydown = function (e) {

};
