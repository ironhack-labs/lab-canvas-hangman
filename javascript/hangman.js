class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord() // string
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = ""   // string
  }

  pickWord() {
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) {
      this.guessedLetters += letter
  }

  addWrongLetter(letter) {
      this.letters.push(letter)
      this.errorsLeft--
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    if (this.secretWord.split("").sort().join() === this.guessedLetters.split("").sort().join() && this.secretWord.length === this.guessedLetters.length) {
      return true
    } else {
      return false
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
    hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.secretWord.includes(event.key)) {
    // add it to correct letters
    let idx = hangman.secretWord.indexOf(event.key)
    console.log(idx)
    hangman.addCorrectLetter(event.key)
    console.log(hangman)
    hangmanCanvas.writeCorrectLetter(idx)
  } else {
    // add it wrong letters
    hangman.addWrongLetter(event.key)
    console.log(hangman)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }
});
