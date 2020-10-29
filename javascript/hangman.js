class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.round(Math.random()*(this.words.length-1))];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode > 64 && keyCode < 91){
      return true;
    }else{
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    this.checkWinner;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft --;
    this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
      return false;
    }else{
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    return this.secretWord.length===this.guessedLetters.length && this.errorsLeft > 0;
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

    // ... your code goes here
    hangmanCanvas.createBoard();
    console.log(hangman.secretWord);
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  
});
