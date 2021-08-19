class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.words = words;
    this.secretWord = pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    var pickWord = testWords[Math.floor(Math.random() * testWords.length)];
   
    }

  checkIfLetter(keyCode) {
    // ... your code goes here
  

  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (keyCode < 91 && keyCode > 64) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    if (letter )
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
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
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
});
