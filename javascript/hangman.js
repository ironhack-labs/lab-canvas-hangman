class Hangman {
  constructor(words) {
    this.words = words;
    // this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    const min = 0;
    const max = this.words.length;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;

    return this.words[randomIndex];
  }

  // eslint-disable-next-line class-methods-use-this
  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true;
    }
    return false;
  }

  checkWinner() {
    for (let i = 0; i < this.guessedLetters.length; i += 1) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1) {
        return false;
      }
    } return true;
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // console.log(hangmanCanvas);
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
