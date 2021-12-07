class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)];

    return randomWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode < 91 && keyCode > 64) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    }
    this.letters.push(letter);
    return true;
  }

  addCorrectLetter(letter) {
    let checkedLetter = letter.toLocaleLowerCase();
    if (
      this.secretWord.includes(checkedLetter) &&
      !this.guessedLetters.includes(checkedLetter)
    ) {
      this.guessedLetters += letter;
      return this.guessedLetters;
    } else return;
  }

  addWrongLetter(letter) {
    if (!this.guessedLetters.includes(letter)) {
      return (this.errorsLeft -= 1);
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else return false;
  }

  checkWinner() {
    let guessedWord = '';
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) !== -1) {
        guessedWord += this.secretWord[i];
      }
    }

    if (guessedWord === this.secretWord) {
      return true;
    } else return false;
  }
}

let hangman;
let hangmanCanvas;

//tests
// let hangmanTest = new Hangman([
//   'node',
//   'javascript',
//   'react',
//   'miami',
//   'paris',
//   'amsterdam',
//   'lisboa',
// ]);
// hangmanTest.secretWord;
// console.log(hangmanTest.secretWord);
// console.log(hangmanTest.addCorrectLetter('R'));
// console.log(hangmanTest.addCorrectLetter('a'));
// console.log(hangmanTest.guessedLetters);

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', (event) => {
    hangman = new Hangman([
      'node',
      'javascript',
      'react',
      'miami',
      'paris',
      'amsterdam',
      'lisboa',
    ]);
    hangman.secretWord;
    console.log(hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', (event) => {
  const typedLetter = event.key.toLocaleLowerCase();
  const keyCode = event.keyCode;
  console.log(typedLetter);

  if (!hangman.checkIfLetter(keyCode)) {
    alert('Not a letter!');
  } else if (hangman.checkClickedLetters(typedLetter)) {
    console.log(hangman.letters);
    hangman.addCorrectLetter(typedLetter);
    console.log(hangman.guessedLetters);
    hangman.addWrongLetter(typedLetter);
    console.log(hangman.errorsLeft);

    if (hangman.checkGameOver()) {
      return console.log('Game over!');
    } else if (hangman.checkWinner()) {
      return console.log('Winner winner, chicken dinner!');
    }
  }
});
