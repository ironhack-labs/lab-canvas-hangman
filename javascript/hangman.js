class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = ""
    this.errorsLeft = 10;
  }

  pickWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    let letter = String.fromCharCode(keyCode)
    return (/[A-Z]/).test(letter);
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) === -1
  }

  addCorrectLetter(letter) {
     this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.secretWord.length===this.guessedLetters.length && this.errorsLeft > 0;
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
