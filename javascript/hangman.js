class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[0];
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(key) {
    return (key >= 65 && key <= 90);
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.letters.push(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    return (this.errorsLeft === 0);
  }

  checkWinner() {
    return (this.secretWord.length === this.guessedLetters.length);
  }
}



let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    console.log(hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

function writeOcurrences(letter) {
  let position = hangman.secretWord.indexOf(letter);
  while (position !== -1) {
    hangmanCanvas.writeCorrectLetter(position, letter);
    hangman.addCorrectLetter(letter);
    position = hangman.secretWord.indexOf(letter, position + 1);
  }
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.which) && (!hangman.checkGameOver()) && (!hangman.checkWinner())) {
    let letter = event.key;
    if (hangman.checkClickedLetters(letter)) {
      if (hangman.secretWord.includes(letter)) {
        writeOcurrences(letter);

        if (hangman.checkWinner()) {
          hangmanCanvas.winner();
        }
      } else {
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        }
      }
    }
  }
});