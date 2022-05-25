class Hangman {
  constructor(words, errorsLeft = 10, letters = [], guessedLetters = '') {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = letters;
    this.guessedLetters = guessedLetters;
    this.errorsLeft = errorsLeft;
  }

  pickWord() {
    return this.words[this.randomPosition(this.words)];
  }

  randomPosition(arrayWords) {
    return Math.floor(Math.random() * arrayWords.length);
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 || keyCode === 192;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += !this.guessedLetters.includes(letter) ? letter : '';
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    return !this.errorsLeft;
  }

  checkWinner() {
    const checkSecretWord = this.secretWord.split('');

    for (let secretLetter of checkSecretWord) {
      if (!this.guessedLetters.includes(secretLetter)) {
        return false;
      }
    }

    return true;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keyup', event => {
  if (hangman && hangman.checkIfLetter(event.keyCode)){
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key);
        hangmanCanvas.writeCorrectLetter(event.key);
        if (hangman.checkWinner()) {
          setTimeout(() => {
            hangmanCanvas.winner()
          }, 200)
        }
      } else {
        if (hangman.errorsLeft) {
          hangman.addWrongLetter(event.key);
          hangmanCanvas.writeWrongLetter();
          hangmanCanvas.drawHangman(hangman.errorsLeft);
        }
        if (hangman.checkGameOver()) {
          setTimeout(() => hangmanCanvas.gameOver(), 200)
        }
      }
    }
  }
});
