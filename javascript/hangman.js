class Hangman {
  constructor(words) {
    this.words = words;
    // Iteration 1: The game logic
    // Hangman Class
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  // The Hangman methods
  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode <= 90 && keyCode >= 65;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    (!this.guessedLetters.includes(letter)) 
      this.guessedLetters += letter;
    
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft--;
      this.checkGameOver();
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let returnValue = true;
    [...this.secretWord].forEach(letter => returnValue = returnValue && (this.guessedLetters.indexOf(letter) != -1));
    return returnValue;
  
  }
}


let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    //hangman.secretWord = hangman.pickWord();
    //hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    //hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
 
});