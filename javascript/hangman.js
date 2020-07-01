class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[Math.floor(Math.random() * (words.length - 1))]
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else return false;
  }

  checkClickedLetters(letter) {
    if (this.guessedLetters.includes(letter)) {
      return true;
    } else return false
  }

  addCorrectLetter(letter) {
    this.guessedLetters.concat(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});