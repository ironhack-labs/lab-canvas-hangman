
var hangman;
var hCanvas;
function Hangman() {
  this.words = ["house", "cat", "table", "truck"];
  this.secretWord = this.words[0];
  this.letters = [];
  this.guessedLetter = "";
  this.errorLeft = 10;
  

}



Hangman.prototype.getWord = function () {
  var numRandom = Math.floor(Math.random() * this.words.length -1);

  return toString(this.words[numRandom]);
};

 Hangman.prototype.checkIfLetter = function (keyCode) {
   if(keyCode > 65 && keyCode < 122) {
     return true;
   } else {
     return false
   }

 };

Hangman.prototype.checkClickedLetters = function (key) {
    if(this.letters.indexOf(key) === -1) {
      return true;
    } else {
      return false;
    }
 };

Hangman.prototype.addCorrectLetter = function (i) {
  var word = this.secretWord[i]
  word = word.toUpperCase();
  this.guessedLetter += word;
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.indexOf(letter) === -1) {
    this.errorsLeft--;
  }

};

 Hangman.prototype.checkGameOver = function () {

  if ( this.errorsLeft === 0) {
    return true
  } else {
    return false;
  }

};

Hangman.prototype.checkWinner = function () {
  // this.guessedLetter.split('').sort().join('');
  // this.secretWord.split('').sort().join('');
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hCanvas = new HangmanCanvas();
  hCanvas.drawLines();
};


document.onkeydown = function (e) {

};
