let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ["COMADREJA", "TABANO", "ALMENDRA"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    let regExp = /[A-Za-z]/;
    let letter = String.fromCharCode(keyCode);
    return regExp.test(letter);
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key.toUpperCase());
  }

  checkLetter(letter) {
    var position = this.secretWord.indexOf(letter.toUpperCase());
    do {
      if (position != -1) {
        if (!this.letters.includes(letter)) this.addCorrectLetter(position);
        hangmanCanvas.writeCorrectLetter(position);
        position = this.secretWord.indexOf(letter.toUpperCase(), position + 1);
      } else {
        if (!this.letters.includes(letter)) {
          this.addWrongLetter(letter);
          hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
          hangmanCanvas.drawHangman(this.errorsLeft);
        }
      }
    } while (position != -1);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    if (this.checkWinner()) hangmanCanvas.winner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
    if (this.checkGameOver()) hangmanCanvas.gameOver();
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetter.length;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
};

document.onkeydown = e => {
  if (!hangman.checkGameOver()) {
    if (hangman.checkIfLetter(e.keyCode)) {
      if (hangman.checkClickedLetters(e.key.toUpperCase()))
        hangman.checkLetter(e.key.toUpperCase());
      if (!hangman.letters.includes(e.key)) hangman.letters.push(e.key);
    }
  }
};
