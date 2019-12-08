/*jshint esversion: 6 */
let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ["DOGS", "CAT", "MOUSE"];
    this.secretWord = this.getWord();
    this.secretWordSplit = this.secretWord.split("");
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) === -1) {
      return true;
    } else {
      return false;
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(i) {
    for (let j = 0; j < this.secretWord.length; j++) {
      if (this.secretWord[i] === this.secretWord[j]) {
        this.guessedLetter += this.secretWord[i].toUpperCase();
      }
    }
    this.letters.push(this.secretWord[i]);
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
};

document.onkeydown = e => {
  let pressedLetter = e.key.toUpperCase();
  if (
    hangman.checkIfLetter(e.keyCode) &&
    hangman.checkClickedLetters(pressedLetter)
  ) {
    if (hangman.secretWord.includes(pressedLetter)) {
      hangman.addCorrectLetter(hangman.secretWord.indexOf(pressedLetter));
      hangmanCanvas.writeCorrectLetter(
        hangman.secretWord.indexOf(pressedLetter)
      );
    } else {
      hangman.addWrongLetter(pressedLetter);
      hangmanCanvas.writeWrongLetter(pressedLetter, hangman.errorsLeft);
    }
  }

  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }

  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  }
};
