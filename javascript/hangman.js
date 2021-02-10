class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    return keyCode > 64 && keyCode < 91
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft --
  }

  checkGameOver() {
    return this.errorsLeft < 1
  }

  checkWinner() {
    for (let i in this.guessedLetters){
      if(!this.secretWord.includes(this.guessedLetters.charAt(i))){
        return false
      }
    }
    return this.secretWord.length === this.guessedLetters.length
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
