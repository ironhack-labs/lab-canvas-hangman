class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    this.secretword = this.pickWord();
    }

  pickWord() {
    // ... your code goes here
    return this.words [Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode > 65 ) return true;
    else if(keyCode < 100 ) return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.checkClickedLetters.letter.match(letters))
    return true;
  }
  else {
    return false;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    
    this.gussedLetterrs += letter;

  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) return false;
    else if(this.erroLeft <0 ) return true;

  }

  checkWinner() {
    // ... your code goes here
    
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
