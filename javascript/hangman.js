class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWords = secretWords;
    this.letters = letters;
    this.guessedLetters = guessedLetters;
    this.errorsLeft = errorsLeft;
  }

  pickWord() {
    const secretWords = [Math.floor(Math.random() * this.words.length)];
    return secretWords;
  }

  checkIfLetter(keyCode) {
    for (let i = 65; i <= 90; i++)
      if (keyCode === i) {
        let alphabetLetter;
        return true;
      } else {
        let otherLetter;
        return false;
      }
  }

  checkClickedLetters(letter) {
    if (letter === alphabetLetter || letter === otherLetter) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    if (letter === this.secretWords[i]) {
      this.guessedLetters = +this.secretWords[i];
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft = 10;
    if (letter !== this.secretWords[i]) {
      this.errorsLeft--;
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWords.length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
});
