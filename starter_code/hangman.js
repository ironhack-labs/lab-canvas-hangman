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
    this.index = [];
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

  addCorrectLetter(i) {
    this.index.push(i);
    this.letters.push(this.key);
    this.guessedLetter += this.key;
    this.checkGameOver();
    this.checkWinner();
  }

  addWrongLetter() {
    this.letters.push(this.key);
    this.wrongLetter += this.key;
    this.errorsLeft--;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      let i = 0;
      for (; i < this.secretWord.length; i++) {
        let letter = this.secretWord[i].toUpperCase();
        if (!this.guessedLetter.includes(letter)) {
          hangmanCanvas.solve(i, letter);
        }
      }
      hangmanCanvas.gameOver();
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      hangmanCanvas.winner();
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
  hangmanCanvas.loadImage();
};
document.addEventListener("keydown", function(e) {
  hangman.keyCode = e.keyCode;
  hangman.key = String.fromCharCode(e.keyCode);
  let letter = hangman.key.toLowerCase();
  let word = hangman.secretWord;
  let isLetter = hangman.checkIfLetter();
  let newLetter = hangman.checkClickedLetters();

  if (isLetter && newLetter && word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == letter) {
        hangman.addCorrectLetter(i);
        hangmanCanvas.writeCorrectLetter(i);
      }
    }
  } else if (isLetter && newLetter) {
    hangman.addWrongLetter();
    hangmanCanvas.writeWrongLetter();
    hangman.checkGameOver();
    hangmanCanvas.drawHangman(hangman.wrongLetter.length);
  }
});
