class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(key) {
    return key >= 65 && key <= 90;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    let arrGuessedLetters = [...this.guessedLetters];
    if (!arrGuessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (this.checkClickedLetters(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    this.errorsLeft === 1 ? alert('This is your last chance!') : null;
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let sameChars = 0;
    [...this.secretWord].forEach(letter => {
      this.guessedLetters.includes([letter]) ? ++sameChars : null;
    })
    return sameChars === this.secretWord.length;
  }
}

// Initialization + Events

let hangman;
const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // Linked to Canvas
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  let key = event.key;
  let keyCode = event.keyCode;
  let arrSecretWord = [...hangman.secretWord];

  if (hangman.checkIfLetter(keyCode)) {
    if (arrSecretWord.includes(key)) {
      arrSecretWord.forEach((letter, idx) => {
        if (letter === key) {
          hangman.addCorrectLetter(key);
          hangmanCanvas.writeCorrectLetter(idx);
        }
      })
    } else {
      hangman.addWrongLetter(key);
      hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }
  if (hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
    startGameButton.innerHTML = 'Try again!'.toUpperCase();
  }
  if (hangman.checkWinner()) {
    hangmanCanvas.winner();
  }
});