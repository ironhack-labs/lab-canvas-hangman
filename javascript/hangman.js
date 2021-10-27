class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    const word = this.words[Math.floor(Math.random() * this.words.length)];
    return word;    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter;
    checkWinner();
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
    // ... your code goes here
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length;
    // ... your code goes here
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
