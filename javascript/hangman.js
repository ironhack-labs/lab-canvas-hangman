class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random()* this.words.length)]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    
    return keyCode >= 65 && keyCode <= 90 
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return letter.includes(this.letters,0) 
  }

  addCorrectLetter(letter) {
    // ... your code goes here
   return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    return this.errorsLeft -- 
  }

  checkGameOver() {
    // ... your code goes here
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
