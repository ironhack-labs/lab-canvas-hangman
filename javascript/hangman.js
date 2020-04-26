class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here

    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }

  };

  checkClickedLetters(letter) {
    // ... your code goes here

    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }

  }

  addCorrectLetter(letter) {
    // ... your code goes here

    this.guessedLetters += letter

  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }

  }

  checkWinner() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.includes(this.secretWord[i])) {
        return true;
      } else {
        return false
      }

    }

  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});