var hangman;

function Hangman() {
  this.words = ["yoda", "rey", "luke", "leia"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10; //should decrease every time a user clicks on a letter that is not in the word.
  //this.hangman.canvas = new HangmanCanvas(this.secretWord);
}

Hangman.prototype.getWord = function () {
  var y = Math.floor(Math.random() * this.words.length);
  return this.words[y];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
 if (keyCode > 64 && keyCode < 91) {
   return true;
 }
 else {
   return false;
 }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1) {
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
//should add the guessed letters to this.secretWord
};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {

};

Hangman.prototype.checkWinner = function () {

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
