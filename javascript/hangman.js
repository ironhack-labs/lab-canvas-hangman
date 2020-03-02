class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = '';
  }

  pickWord() {
    // ... your code goes here
    let randomPos = Math.floor(Math.random() * this.words.length);
    return this.words[randomPos];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode <= 90 && keyCode >= 65) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(correctLetter) {
    // ... your code goes here
    this.guessedLetters += correctLetter;
    if (this.guessedLetters === this.secretWord) {
      console.log('You won!');
    }
  }

  addWrongLetter(wrongLetter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    if (!this.letters.includes(wrongLetter)) {
      this.letters.push(wrongLetter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here

    if (this.guessedLetters.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman([
      'node',
      'javascript',
      'react',
      'miami',
      'paris',
      'amsterdam',
      'lisboa'
    ]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawHangman();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.secretWord.includes(event.key)){
    // add it to correct letters
    let idx = hangman.secretWord.indexOf(event.key)

    console.log(idx)
    hangmanCanvas.writeCorrectLetter(idx)
  } else {
    // add it wrong letters
    hangman.addWrongLetter(event.key)
    console.log(hangman)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }
});
