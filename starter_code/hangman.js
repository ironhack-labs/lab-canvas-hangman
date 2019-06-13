var hangman;
let canvasHangman;

function Hangman() {
  this.words = ["HOLA", "MARIANA", "COMA", "ESTAS"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  let random = Math.floor(Math.random() * this.words.length);
  return this.words[random];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += i.toLocaleUpperCase();
  this.letters.push(i);

  let indice = this.secretWord.indexOf(i);
  while (indice > -1 && indice < this.secretWord.length + 1) {
    canvasHangman.writeCorrectLetter(indice);
    indice = this.secretWord.indexOf(i, indice + 1);
  }
  if (this.checkWinner()) {
    canvasHangman.winner();
  }
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
  this.letters.push(letter);

  canvasHangman.writeWrongLetter(letter, this.errorsLeft);
  if (this.checkGameOver()) {
    canvasHangman.gameOver();
  }
};

Hangman.prototype.checkGameOver = function() {
  return !this.errorsLeft > 0;
};

Hangman.prototype.checkWinner = function() {
  for (let i = 0; i < this.secretWord.length; i++) {
    if (!this.guessedLetter.includes(this.secretWord[i])) return false;
  }
  return true;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  canvasHangman = new HangmanCanvas(hangman.secretWord);
  canvasHangman.createBoard();
  canvasHangman.drawLines();
};

document.onkeydown = function(e) {
  if (!hangman.checkGameOver() && !hangman.checkWinner()) {
    if (hangman.checkIfLetter(e.keyCode)) {
      let letra = String.fromCharCode(e.keyCode);
      if (hangman.checkClickedLetters(letra)) {
        if (hangman.secretWord.includes(letra)) {
          hangman.addCorrectLetter(letra);
        } else {
          hangman.addWrongLetter(letra);
        }
      } else {
      }

      hangman.letters.push(letra);
    }
  }
};