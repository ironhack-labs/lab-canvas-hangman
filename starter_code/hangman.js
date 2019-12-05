let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = [
      "sesame",
      "awful",
      "taste",
      "await",
      "relation",
      "stub",
      "picture",
      "brush",
      "timbre",
      "ceramic",
      "moron",
      "enjoy"
    ];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomWord];
    return this.words[randomWord];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) == -1) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(i) {
    if (this.secretWord.includes(i)) {
      this.guessedLetter += i;
    }
    this.checkGameOver();
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft--;
    }
    this.checkGameOver();
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
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.drawLines();
};
document.addEventListener("keydown", function(e) {
  let keyCode = e.keyCode;
  let key = String.fromCharCode(keyCode);
});
