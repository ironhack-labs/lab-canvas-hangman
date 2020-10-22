class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = words[0]
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if (keyCode) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.guessedLetters.includes(letter)) {
      return false
    }
    return true
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
      this.guessedLetters = this.guessedLetters.concat(letter)
      this.checkWinner()
    }
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