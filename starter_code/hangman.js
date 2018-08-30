var hangman;

function Hangman() {
  this.words = ["Cyrill", "Mario", "Ironhack"],
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft= 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    // return this.guessedLetters;
};

Hangman.prototype.addWrongLetter = function (letter) {
  if(this.secretWord.includes(letter) === false){
  this.errorsLeft -= 1;
  return this.checkGameOver()
  }
};

Hangman.prototype.checkGameOver = function () {
 if(this.errorsLeft){
   return false;
 } else {
  return true;
 }
};

Hangman.prototype.checkWinner = function () {
  var lettersSet = new Set(this.secretWord.split(""));
  return lettersSet.size === this.guessedLetter.length;
};

document.getElementById('start-game-button').onclick = function () {
  document.getElementById('start-game-button').style.display="none";
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  var canvas=new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
};


document.onkeydown = function (e) {

};
