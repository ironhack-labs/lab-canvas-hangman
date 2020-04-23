class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

  }

  pickWord() {
    //We use Math.floor so that the number is never less than 0 or greater than the length of the array
    let randomNumber = Math.floor(Math.random() * this.words.length)
    return `${this.words[randomNumber]}`
  }

  checkIfLetter(keyCode) {
    //Only works if keycode its between 65 (a) and 90 (z)
    return keyCode > 64 && keyCode < 91 ? true : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    if (!this.words.includes(letter)) {
      this.guessedLetters += letter;
    }
  }
  addWrongLetter(letter) {
    if (!this.words.includes(letter)) {
      --this.errorsLeft
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    //letterByLetter contains an array of separated words from this.secretWord
    let letterByLetter = [...this.secretWord];
    let control = 0;
    //Using forEach, we check that each letter of letterByLetter is included in guessedLetters
    //If its true, we increased control by 1
    letterByLetter.forEach(e => {
      if (this.guessedLetters.includes([e])) {
        ++control
      }
    })
    //If control its the same as secretWord.length, the player has won.
    return control === this.secretWord.length ? true : false;
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
  console.log(event);
  // React to user pressing a key
  // ... your code goes here
});
