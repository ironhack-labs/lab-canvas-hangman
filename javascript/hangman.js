class Hangman {
  constructor(words) {
    this.words = words;
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
  }

  pickWord() {
    let randomNumber = Math.ceil(Math.random() * (this.words.length-1)) -1;
    return this.words[randomNumber];
  }

  checkIfLetter(keyCode) {
    if(!this.secretWord.includes(keyCode)) {
      this.addWrongLetter(keyCode);
      return false;
    } else {
      this.addCorrectLetter(keyCode);
      return true;
    }
  }

  checkClickedLetters(letter) {
    return !this.guessedLetters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.hangmanCanvas.writeCorrectLetter(letter);
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
  }

  checkGameOver() {
    if(this.errorsLeft <= 0) {
      return true;
    }
    return false;
  }

  checkWinner() {
    if(this.guessedLetters != undefined && this.guessedLetters.length === this.secretWord.length) {
      return true;
    }
    return false;
  }

  clearPickedLetters() {
    document.getElementById('pickedLetters').innerText = "";
    document.getElementById('wrongLetters').innerText = "";
  }
}

const startGameButton = document.getElementById('start-game-button');
var self = this;
if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangman.hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord);
    self.errorsLeft = 10;
    hangman.clearPickedLetters();
  });
}

window.addEventListener('keydown', event => {
  if(this.errorsLeft > 0) {
    let isLetterCorrect = hangman.checkIfLetter(event.key);
    if(!isLetterCorrect) {
      this.errorsLeft--;
    }
  }
});
