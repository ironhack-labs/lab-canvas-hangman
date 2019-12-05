let hangman;

class Hangman {
  constructor() {
    this.words = [
      "sesame",
      "bureaucracy",
      "awful",
      "taste",
      "await",
      "relation",
      "invention",
      "stub",
      "picture",
      "deployment",
      "brush",
      "pretension",
      "silhouette",
      "bandwagon",
      "firstborn",
      "timbre",
      "subsystem",
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
    this.guessedLetter += i;
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
};

document.onkeydown = e => {
  console.log(e.code);
};
