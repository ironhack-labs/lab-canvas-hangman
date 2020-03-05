class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    let word = ''
    const wordSelected = Math.floor(Math.random() * this.words.length)
    word = this.secretWord = this.words[wordSelected]
    return word
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false

  }

  checkClickedLetters(letter) {
    // console.log(letter)
    return !this.letters.includes(letter)

  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.guessedLetters += letter
    this.errorsLeft--
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false
  }

  checkWinner() {
    console.log(`this is letters ${this.guessedLetters.length} and this is ${this.secretWord.length}`)
    return this.guessedLetters.length === this.secretWord.length ? true : false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

   
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});