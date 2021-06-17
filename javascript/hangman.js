class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
    // let secretWord = words[Math.floor(Math.random() * words.length)];
    // return secretWord;
    // ... your code goes here
  }

  pickWord() {
    let secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return secretWord;
    // this.secretWord = secretWord;
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
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
    this.guessedLetters = this.guessedLetters + letter;
    // this.guessedLetters += letter
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft = this.errorsLeft - 1;
    this.letters.push(letter);
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }

  checkWinner() {
    if (this.pickWord === this.guessedLetters) {
      return true;
    } else {
      return false;
    }
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
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
});
