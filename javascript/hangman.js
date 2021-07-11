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
    return keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(letter) {
    console.log(`Letter '${letter}'`)
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    const countSameLetters = this.secretWord.split('').filter((el) => el === letter).length;
    for (let i = 0; i < countSameLetters; i++) {
      this.guessedLetters += letter;
    }
    return this.guessedLetters.length === this.secretWord.length;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true;
  }

  checkWinner() {
    const guessed = this.guessedLetters.slice().split('').sort().join('');
    const secret = this.secretWord.slice().split('').sort().join('');
    return guessed === secret ? true : false;
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
      'lisboa']);
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    console.log(`Secret word: ${hangman.secretWord}`)
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if (hangman) {
    const pushedKey = event.key;
    const index = hangman.secretWord.indexOf(pushedKey);
    if (hangman.secretWord.includes(pushedKey)) {
      hangman.addCorrectLetter(pushedKey);
      hangmanCanvas.writeCorrectLetter(index);
      if (hangman.checkWinner()) {
        hangmanCanvas.winner();
      }
    } else {
      hangman.addWrongLetter(pushedKey);
      hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
      if (hangman.checkGameOver()) {
        hangmanCanvas.gameOver();
      }
    }
  }
});

