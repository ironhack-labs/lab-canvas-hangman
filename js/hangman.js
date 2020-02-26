class Hangman {
  constructor(words) {
    // ...
  }

  pickWord() {
    // ...
  }

  checkIfLetter(keyCode) {
    // ...
  }

  checkClickedLetters(letter) {
    // ...
  }

  addCorrectLetter(letter) {
    // ...
  }

  addWrongLetter(letter) {
    // ...
  }

  checkGameOver() {
    // ...
  }

  checkWinner() {
    // ...
  }
}

let hangman;

const $startGameButton = document.getElementById('start-game-button');

if ($startGameButton) {
  $startGameButton.addEventListener('click', event => {
    hangman = new Hangman();

    // HINTS (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
});
