class Hangman {
  constructor(words) {
    this.words = words
    this.secretWord = words[0]
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
      this.letters.push(letter)
      return this.guessedLetters = this.guessedLetters.concat(letter)
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.letters.push(letter)
      this.errorsLeft--
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (!this.guessedLetters.includes(this.secretWord.charAt(i))) {
        return false
      }
    }
    return true
  }
}
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    //... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});