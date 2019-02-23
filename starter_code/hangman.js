var hangman;

function Hangman() {
  this.words      = ['IRONHACK', 'NODEJS', 'JAVASCRIPT', 'METEOR', 'ANGULAR', 'BARCELONA', 'MADRID', 'MIAMI', 'HTML'];
  this.secretWord = '';
  this.letters    = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
  this.secretWord = this.getWord();
  this.hangmanCanvas = new HangmanCanvas(this.secretWord);
}

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random() * this.words.length);
  return this.words[random];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode > 64 && keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return this.letters.indexOf(key.toUpperCase()) == -1;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.hangmanCanvas.writeCorrectLetter(i);
  this.guessedLetter += this.secretWord[i].toUpperCase();
  if (this.checkWinner()) { console.log('winner'); }
  if (this.checkWinner()) {
    this.hangmanCanvas.winner();
    this.clearGame();
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
  this.errorsLeft--;
  if (this.checkGameOver()) { console.log('looser'); }
  if (this.checkGameOver()) {
    this.hangmanCanvas.gameOver();
    this.clearGame();
  }
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function () {
  return this.guessedLetter.length === this.secretWord.length;
};

Hangman.prototype.clearGame = function () {
  setTimeout(function () {
    document.getElementById('game').style.display = 'none';
    document.getElementById('title').style.display = 'block';
  }, 1000);
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  document.getElementById('title').style.display = 'none';
  document.getElementById('game').style.display = 'block';
};

function getPos(key) {
  return hangman.secretWord.toUpperCase().indexOf(key);
}

document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
    var key = e.key.toUpperCase();
    hangman.letters.push(key);
    var indexes = [];
    pos = getPos(key);
    if (pos === -1) {
      hangman.addWrongLetter(key);
    } else {
      indexes.push(getPos(key));

      while (pos !== -1) {
        indexes.push(hangman.secretWord.toUpperCase().indexOf(key, pos + 1));
        pos = hangman.secretWord.toUpperCase().indexOf(key, pos + 1);
      }
      for (i = 0; i < indexes.length - 1; i++) {
        hangman.addCorrectLetter(indexes[i]);
      }
    }
  }
};