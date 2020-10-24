class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = pickedWord();
    this.letters = []; // letters already picked
    this.guessedLetters = ""; // correct letters 
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters = this.guessedLetters + letter;
    //checked if user won

  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    // push letters if letter is not there already
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    let charsFound = 0;
    for (i = 0; i < this.secretWord.length; i++) {
      x = this.letters.charAt(i);
      if (this.guessedLetters.contains(x)) {
        charsFound++;
      }
    }
    if (charsFounds === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
    // go through every letter in secretWord
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