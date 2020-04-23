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
    if(keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorsLeft == 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {

    let guessedOrdered = [...this.guessedLetters].sort().join("");
    let secretOrdered = [...this.secretWord].sort().join("");

    if(guessedOrdered == secretOrdered) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
