var hangman;
var words = [];
var secretWord = ""; 
var letters = [];
var guessedLetter = "";
var errorsLeft = 10;

function Hangman() {
  this.words = [];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

 Hangman.prototype.getWord = function () {
    this.getWord = Math.floor(Math.random()*words.length);
      return "";
 };

//
//checkGameOver. Returns a bolean value, true if the users lose, and false in any other case.
//checkWinner. Check if the users win and return a boolean value.
//addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
//addWrongLetter. Should subtract one from the variable errorsLeft and check if the game is over.*/

Hangman.prototype.checkIfLetter = function (keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true;
     }else {
      return false;
    }
};

Hangman.prototype.checkClickedLetters = function (key) {
 if (this.checkIfLetter == ""){ 
   return true;
} else {
  return false;
}};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.checkIfLetter !== this.guessedLetter) {
    return this.errorsLeft--;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length == this.secretWord.length) {
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
