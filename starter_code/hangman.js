var hangman;
function Hangman() {
  this.words = ['IRONHACK'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[random];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    // this.letters.push(keyCode);
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1) {
    this.letters.push(String.fromCharCode(key).toUpperCase);
    return true;
  }
  return false;
};

Hangman.prototype.addCorrectLetter = function (i) {
  var char = String.fromCharCode(i).toUpperCase();
  if (this.secretWord.includes(char) && this.guessedLetter.indexOf(char) === -1) {
    this.guessedLetter += char;
    hangmanCanvas.writeCorrectLetter(char);
    console.log(this.guessedLetter);
  }
  this.checkWinner();
  this.checkGameOver();
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.indexOf(letter) === -1) {
    if (hangman.letters.includes(letter)) {
      return false;
    }
    this.errorsLeft -= 1;
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
    hangman.letters.push(letter);
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    hangmanCanvas.gameOver();
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length) {
    hangmanCanvas.winner();
    return true;
  }
  return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

function start() {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines(hangman.secretWord.length);
  console.log(hangman.secretWord);
}

document.onkeydown = function (e) {
  var keycode = e.which;
  if (hangman.checkClickedLetters(keycode)) {
    hangman.checkClickedLetters(keycode);
    hangman.addCorrectLetter(keycode);
    hangman.addWrongLetter(String.fromCharCode(keycode));
    console.log(hangman.secretWord.split('').includes(String.fromCharCode(keycode)));
  }
};
