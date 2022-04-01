class Hangman {
  constructor(words, secretWord, letters, guessedLetters, errorsLeft) {
    this.words = words;

    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
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
    // ... your code goes here

    if (!this.letters.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters = letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here

    this.errorsLeft = this.errorsLeft - 1;
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    if (this.secretWord === this.guessedLetters) {
      return true;
    } else {
      return false;
    }
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', (event) => {
    hangman = new Hangman([
      'node',
      'javascript',
      'react',
      'miami',
      'paris',
      'amsterdam',
      'lisboa',
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', (event) => {
  // React to user pressing a key
  // ... your code goes here
});
