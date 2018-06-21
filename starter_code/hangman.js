var hangman; 

function Hangman() {
  this.words = ["vodka","rum","gin","tequila"];
  this.secretWord = "gin";
  this.letters="";
  this.guessedLetter=[];
  this.errorsLeft=0;
}

Hangman.prototype.getWord = function () {
 return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return 65 < keyCode && 90 > keyCode;
/*   return keyCode.length === 1 && keyCode.match(/[a-z]/i); */
};

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key) === -1; 
};

Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft --;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function () {
  return this.guessedLetter.length === this.secretWord; //ansi number
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
