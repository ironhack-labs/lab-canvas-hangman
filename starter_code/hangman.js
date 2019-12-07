let hangman;

class Hangman {
  constructor() {
    this.words = ["knowledge", "ironhack", "javascript"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    let keys = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];

    return keys.includes(String.fromCharCode(keyCode).toLowerCase());
  }

  checkClickedLetters(key) {
    if (!this.letters.includes(key)) {
      return true;
    }
    return false;
  }

  addCorrectLetter(i) {
    if (this.secretWord.includes(this.secretWord[i])) {
      this.guessedLetter += this.secretWord[i].toUpperCase();
      this.checkWinner();
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft--;
      this.checkGameOver();
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    if (
      this.secretWord.localeCompare(this.guessedLetter) &&
      this.secretWord.length === this.guessedLetter.length
    ) {
      return true;
    }
    return false;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};
[
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
ent.onkeydown = e => {};
