class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    const letter = keyCode;
    return (letter > 64 && letter < 91) ? true : false;
  }

  checkClickedLetters(letter) {
    const isIn = this.letters.includes(letter);
    return (isIn) ? false : true;
    
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.userWon = (this.secretWord.i) ? false : true;
  }

  addWrongLetter(letter) {
    const isIn = this.letters.includes(letter);
    const addWrong = this.letters.push(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return (this.errorsLeft > 0) ? false : true;
  }

  checkWinner() {
    console.log(this.guessedLetters)
    return (this.guessedLetters === this.secretWord) ? true : false;
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
