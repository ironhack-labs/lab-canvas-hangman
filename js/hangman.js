let hangman;

class Hangman {
  constructor() {
    // ...
  }

  getWord() {
    // ...
  }

  checkIfLetter(keyCode) {
    // ...
  }

  checkClickedLetters(letter) {
    // ...
  }

  addCorrectLetter(index) {
    // ...
  }

  checkWinner() {
    // ...
  }

  addWrongLetter(letter) {
    // ...
  }

  checkGameOver() {
    // ...
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();

  // HINTS (uncomment when start working on the canvas portion of the lab)
  // hangman.secretWord = hangman.getWord();
  // hangmanCanvas = new HangmanCanvas(hangman.secretWord);
};

document.addEventListener('keydown', event => {
  // React to user pressing a key
});
