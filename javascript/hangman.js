class Hangman {
  constructor(words) {
    this.words = words;
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

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || keyCode === 186) return true;

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
    if (this.errorsLeft > 0) return false;

    return true;
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1) return false;
    }

    return true;
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', () => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', (event) => {
  if (!hangman.checkWinner() && !hangman.checkGameOver()) {
    const isLetter = hangman.checkIfLetter(event.keyCode);

    if (isLetter) {
      const isNotClicked = hangman.checkClickedLetters(event.key.toLowerCase());

      if (isNotClicked) {
        const correctLetterIndex = hangman.secretWord.indexOf(event.key);

        if (correctLetterIndex > -1) {
          hangman.addCorrectLetter(event.key);
          hangmanCanvas.writeCorrectLetter(correctLetterIndex);

          const isWinner = hangman.checkWinner();

          if (isWinner) {
            hangmanCanvas.winner();
          }
        } else {
          hangman.addWrongLetter(event.key);

          hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
          hangmanCanvas.drawHangman(hangman.errorsLeft);

          const isGameOver = hangman.checkGameOver();

          if (isGameOver) {
            hangmanCanvas.gameOver();
          }
        }
      }
    } else {
      hangmanCanvas.writeInvalidKeyMessage();
    }
  }
});