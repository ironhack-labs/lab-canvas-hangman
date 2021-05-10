class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    
  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    return ((keyCode >= 65 && keyCode <=90));
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)){
      return false
    } else {
      return true
    }
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.letters += letter;
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft >= 5) {
      return false
    } else if ( this.errorsLeft === 0){
      return true
    }
    // ... your code goes here
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length){
      return true
    } else {
      return false
    }
        
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
    hangmanCanvas.createBoard()
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
