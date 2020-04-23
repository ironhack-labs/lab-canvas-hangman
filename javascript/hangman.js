class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }
  pickWord(words) {
    //choose one random element from array words
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    //keyCode must be a letter and have a value from 65 to 90
    keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(letter) {
    //check if clicked letter is in the array of letters or guessedLetters
    this.letters.includes(letter) ? false : true;
    this.guessedLetters.includes(letter) ? false : true;
  }

  addCorrectLetter(letter) {
    //add letter to guessedLetters
    this.guessedLetters.push(letter);
    //add winner check
  }

  addWrongLetter(letter) {
    //add letter to letters
    !this.letters/includes(letter) ? this.letters.push(letter) : false;
    this.errorsLeft = this.errorsLeft - 1;
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    //check if guessedLetters is iqual to secretWord
    return this.secretWord.length === this.guessedLetters.length ? true : false;
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
