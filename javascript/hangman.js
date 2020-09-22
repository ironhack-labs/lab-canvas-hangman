class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10;
  }

  pickWord() {
    let secretWord = ""
    let randomNumber = Math.floor(Math.random()* this.words.length);
    secretWord += this.words[randomNumber];
    return secretWord
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) === -1) {
      this.letters.push(letter)
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) {
      this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft -= 1
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.guessedLetters.includes(this.secretWord[i])) {
        continue
      } else {
        return false
      }
    }
    return true
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
