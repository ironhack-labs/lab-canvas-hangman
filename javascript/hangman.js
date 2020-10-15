class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    return this.words[Math.round(Math.random()*(this.words.length-1))];
  }

  checkIfLetter(keyCode) {
    return keyCode <=90 && keyCode >= 65? true : false;
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false: true;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner() ? hangmanCanvas.winner() : false;
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    this.checkGameOver() ? hangmanCanvas.gameOver() : false;
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
    // ... your code goes here
  }

  checkWinner() {
    return this.secretWord.split("").filter(e => this.guessedLetters.includes(e)).length === this.secretWord.length ? true : false;
    // ... your code goes here
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
    hangmanCanvas.drawLines();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)){
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangmanCanvas.writeCorrectLetter(event.keyCode)
      } else {
        hangmanCanvas.writeWrongLetter(String.fromCharCode(event.keyCode),hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      };
    };
    hangman.letters.push(event.key)
  }
  // React to user pressing a key
  // ... your code goes here
});
