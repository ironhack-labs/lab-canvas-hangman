var hangman;
var hangmanCanvas;
var secretWord;

function Hangman() {
  this.words = ["HELLO"];
  this.secretWord = this.getWord();
  this.letters =[];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
 return this.words[Math.floor(Math.random()*(this.words.length))];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 57 && keyCode < 91 ) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.indexOf(key) >= 0) {
    return false
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (letter) {
  this.guessedLetter = this.guessedLetter + letter;
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft --;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  for (var i = 0; i < this.secretWord.length;i++) {
    if (this.guessedLetter.indexOf(this.secretWord[i]) < 0) {
      return false;
    }
  }
  return true;
};

Hangman.prototype.checkLetter = function(letter) {
  if(this.secretWord.indexOf(letter) >= 0) {
    return true;
  } else {
    return false;
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  secretWord = hangman.secretWord;
  hangmanCanvas = new HangmanCanvas (secretWord);
  hangmanCanvas.createBoard(secretWord);
};


document.onkeydown = function (e) {
  if(hangman.checkIfLetter(e.keyCode)) {
    var letter = String.fromCharCode(e.keyCode);
    if(hangman.checkClickedLetters(letter)) {
      if(hangman.checkLetter(letter)) {
        hangman.addCorrectLetter(letter);
        hangmanCanvas.writeCorrectLetter(secretWord,letter,0);
      } else {
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(letter,hangman.errorsLeft);
        hangmanCanvas.drawHangman(10-hangman.errorsLeft);
      }
    }
  }
};
