class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return(keyCode >= 65 && keyCode <= 90) || keyCode === 192 ? true : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter) ? true : false
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft --
    if (this.checkClickedLetters(letter)) {
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    return !this.errorsLeft > 0 ? true : false
  }

  checkWinner() {
    let won = true
    for (let i=0;i<this.secretWord.length;i++){
      if (!this.guessedLetters.includes(this.secretWord[i])) {
        won = false
      }
    }
    return won
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
