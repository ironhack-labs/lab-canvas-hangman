class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    // this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    if (this.checkClickedLetters(letter)) {
      return this.errorsLeft --
    } else {
      return this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetters.length) {
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
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  const key = event.key;
  const keyCode = event.keyCode;
  const secretWordArr = [...hangman.secretWord];

  if (hangman.checkIfLetter(keyCode)) {
    if (secretWordArr.includes(key)) {
      secretWordArr.forEach((letter, index) => {
        if (letter === key) {
          hangman.addCorrectLetter(key);
          hangmanCanvas.writeCorrectLetter(index);
        }
      })
    } else {
      hangman.addWrongLetter(key);
      hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }
  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }
  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  }
});