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
    console.log('checkIfLetter');
    // keyCode is deprecated but here used bc of the tests
    return keyCode <= 90 && keyCode >= 65;
  }

  checkClickedLetters(letter) {
    console.log(letter);
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    console.log(this.guessedLetters);
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    console.log(this.errorsLeft);
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    console.log(
      this.secretWord
        .split('')
        .every((el) => this.guessedLetters.split('').includes(el))
        ? 'Win'
        : 'not yet'
    );
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
  // keyCode is deprecated????
  if (!hangman.checkIfLetter(event.keyCode)) return;
  if (hangman.checkClickedLetters(event.key)) {
    hangman.addCorrectLetter(event.key);
    hangman.secretWord.split('').forEach((el, i) => {
      if (el === event.key) hangmanCanvas.writeCorrectLetter(i);
    });
    hangman.checkWinner();
  } else {
    hangman.addWrongLetter(event.key);
    hangmanCanvas.writeWrongLetter(event.key, this.errorsLeft);
    hangman.checkGameOver();
  }
});
