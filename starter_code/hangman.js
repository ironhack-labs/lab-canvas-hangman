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
    this.wrongLetter = "";
    this.guessedLetter = "";
    this.errorsLeft = 10;
    this.key;
    this.keyCode;
    this.index;
  }

  getWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomWord];
    return this.words[randomWord];
  }

  checkIfLetter() {
    if (this.keyCode >= 65 && this.keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters() {
    if (this.letters.indexOf(this.key) == -1) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter() {
    console.log("this.key:", this.key);
    this.index = this.secretWord.indexOf(this.key.toLowerCase());
    this.letters.push(this.key);
    this.guessedLetter += this.key;
    this.checkGameOver();
  }

  addWrongLetter() {
    this.letters.push(this.key);
    this.wrongLetter += this.key;
    this.errorsLeft--;
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
  hangman.keyCode = e.keyCode;
  hangman.key = String.fromCharCode(e.keyCode);
  let isLetter = hangman.checkIfLetter();
  let newLetter = hangman.checkClickedLetters();
  if (isLetter && newLetter) {
    if (hangman.secretWord.includes(hangman.key.toLowerCase())) {
      console.log(hangman.key.toLowerCase(), hangman.secretWord);
      hangman.addCorrectLetter();
      hangmanCanvas.writeCorrectLetter();
    } else {
      hangman.addWrongLetter();
      hangmanCanvas.writeWrongLetter();
    }
  }
});
