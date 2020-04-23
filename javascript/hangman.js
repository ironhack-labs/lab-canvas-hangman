class Hangman {
  constructor(words) {
    this.words = words;
    // Iteration 1: The game logic
    // Hangman Class
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  // The Hangman methods
  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return 65 < keyCode && 90 > keyCode;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) === -1;
  }

  addCorrectLetter(letter) {
    this.guessedLetter += this.secretWord[letter].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft--;
      this.checkGameOver();}
  }

  checkGameOver() {
    return (this.errorsLeft === 0);
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length;
  }
}


let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});