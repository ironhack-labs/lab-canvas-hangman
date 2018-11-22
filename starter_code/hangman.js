
function Hangman() {
  this.words = ['Perro', 'Gato', 'Zorro'];
  this.secretWord = (''); 
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this. secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    return true;
  } else {
    return false; 
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  //this.letters.push(key);
  if (this.letters.some(function(e){
    return e === key;
  })=== true){
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  var check = ''
  for (w = 0; w < this.guessedLetter.length; w++) {
     if (this.secretWord.includes(this.guessedLetter[w]) === true){  
        check = check + w
      }
  }
  if (check.length === this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};
$(document).ready(function() {

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas();
  canvas.createBoard
};
})

document.onkeydown = function (e) {

};
