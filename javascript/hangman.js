class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
    const randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return randomWord;
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    if( !this.guessedLetters.includes(letter)){
    return this.guessedLetters += letter;
    }
    // ... your code goes here
  }

  addWrongLetter(letter) {
    if( !this.secretWord.includes(letter)){
      return this.errorsLeft -= 1;
      } else if (!this.letters.includes(letter)) {
        return this.letters.push(letter)
      }
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
    // ... your code goes here
  }

  checkWinner() {
    if (this.secretWord === this.guessedLetters) {
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

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
