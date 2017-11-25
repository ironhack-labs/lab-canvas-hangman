var hangman;

function Hangman() {
  this.words = ["Hola", "Madrid", "Barcelona", "Londres"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  var countRepeat = 0;

  this.letters.forEach(function(element) {
    if (key === element) {
      countRepeat++;
    }
  });

  var repeated = countRepeat > 0 ? false : true;
  return repeated;
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord[i].toUpperCase();
  this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
  this._checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  var secretWordArrayCompare = this.secretWord.split('').sort().join('');
  var guessedLetterArrayCompare = this.guessedLetter.split('').sort().join('');

  var winner = secretWordArrayCompare === guessedLetterArrayCompare ? true : false;

  return winner;
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
  hangman.secretWord = hangman._getWord();

  canvas = new HangmanCanvas(hangman.secretWord);

  canvas._createBoard();
  canvas._drawLines();

};


document.onkeydown = function(e) {
  console.log(e.key);

  console.log(hangman._checkIfLetter(e.keyCode));
};
