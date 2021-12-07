class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)];

    return randomWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode < 91 && keyCode > 64) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) > 0) {
      return false;
    }
    return true;
  }

  addCorrectLetter(letter) {
    if (this.secretWord.indexOf(letter) < 0) {
      this.guessedLetters += letter;
      return this.guessedLetters;
    } else return;
  }

  addWrongLetter(letter) {
    if (!!this.addCorrectLetter(letter)) {
      this.letters.push(letter);
      this.errorsLeft -= 1;
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else return false;
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetters.length) {
      return true;
    } else return false;
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
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', (event) => {
  // React to user pressing a key
  // ... your code goes here
});
