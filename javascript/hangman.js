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
    if(this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    if(!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
    this.checkWinner();
  }

  addWrongLetter(letter) {
    if(this.checkClickedLetters(letter)) {
      this.letters.push(letter);
    }
    return this.errorsLeft -= 1;
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    return (this.secretWord.split("").sort().join("") === this.guessedLetters.split("").sort().join(""));
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
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.keyCode)) {
      if(hangman.secretWord.includes(event.key)) {
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(event.key));
      } else {
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    } 
});
