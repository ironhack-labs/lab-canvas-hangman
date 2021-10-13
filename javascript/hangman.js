class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // keyCode is deprecated but here used bc of the tests
    return keyCode <= 90 && keyCode >= 65;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  checkIfLetterIsCorrect(letter) {
    return this.secretWord.toLowerCase().split('').includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.secretWord
      .split('')
      .every((el) => this.guessedLetters.split('').includes(el));
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', (event) => {
    console.log('start');
    hangman = new Hangman([
      'node',
      'javascript',
      'react',
      'miami',
      'paris',
      'amsterdam',
      'lisboa',
    ]);
    console.log(hangman.secretWord);
    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', (event) => {
  console.log(event);
  const lowerKey = event.key.toLowerCase();
  // keyCode is deprecated????
  if (!hangman.checkIfLetter(event.keyCode)) return;
  if (!hangman.checkClickedLetters(lowerKey)) {
    alert('You have already tried this letter!');
    return;
  }
  if (hangman.checkIfLetterIsCorrect(lowerKey)) {
    hangman.addCorrectLetter(lowerKey);
    hangman.secretWord.split('').forEach((el, i) => {
      if (el === lowerKey) hangmanCanvas.writeCorrectLetter(i);
    });
    if (hangman.checkWinner()) {
      setTimeout(() => {
        hangmanCanvas.winner();
      }, 1500);
    }
  } else {
    hangman.addWrongLetter(lowerKey);
    console.log(lowerKey);
    hangmanCanvas.writeWrongLetter(lowerKey, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft);
    if (hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
    }
  }
});
