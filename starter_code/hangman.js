var hangman;

function Hangman() {
  this.words = ['CHARS'];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 9;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  var contains = false;
  for (var i = 0; i < this.secretWord.length; i++) {
    if (this.secretWord.charCodeAt(i) === keyCode) {
      contains = true;
    }
  }
  return contains;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (!this.secretWord.includes(letter)) {
    this.errorsLeft--;
  }
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft <= 0);
};

Hangman.prototype.checkWinner = function () {
  var winner = false;
  this.checkWord = this.secretWord;
  var checkLetter;
  for (var i = 0; i < this.guessedLetter.length; i++) {
    checkLetter = this.checkWord.indexOf(this.guessedLetter[i]);
    if (checkLetter !== -1) {
      this.checkWord = this.checkWord.slice(0, checkLetter) + this.checkWord.slice(checkLetter + 1, this.checkWord.length);
    }
  }
  console.log(this.guessedLetter);
  console.log(this.checkWord);
  if (this.checkWord === '') {
    winner = true;
  }
  return winner;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  console.log(hangmanCanvas.createBoard());
};


document.onkeydown = function (e) {
  var clicked = hangman.checkClickedLetters(e.key);
  if (clicked) {
    var ifLetter = hangman.checkIfLetter(e.keyCode);
    if (ifLetter) {
      var index = hangman.secretWord.indexOf(e.key.toUpperCase());
      hangman.addCorrectLetter(index);
      hangmanCanvas.writeCorrectLetter(index);
      var winner = hangman.checkWinner();
      console.log(hangman.checkWinner());
      if (winner === true) {
        alert("You win");
      }
    } else {
      hangman.addWrongLetter(e.key);
      hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      var loser = hangman.checkGameOver();
      if (loser === true) {
        alert("You lost!");
      }
    }
    hangman.letters.push(e.key.toUpperCase());
  }
};
