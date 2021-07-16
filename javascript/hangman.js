class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
    this.hangmanCanvas = new HangmanCanvas(this.secretWord);
  }

  pickWord() {
    let randomNumber = Math.ceil(Math.random() * (this.words.length-1)) -1;
    return this.words[randomNumber];
  }

  checkIfLetter(keyCode) {
    if(!this.secretWord.includes(keyCode)) {
      console.log(this);
      this.addWrongLetter(keyCode);
      console.log("Add Wrong Letter "+keyCode);
    } else {
      addCorrectLetter(keyCode);
      console.log("Add Correct Letter "+keyCode);
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
  }
}

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangman.clearPickedLetters();
  });
}


const pickLetterButton = document.getElementById('pickLetter-btn');
if (pickLetterButton) {
  pickLetterButton.addEventListener('click', event => {
    var letter = document.getElementById('letter');
    hangman.checkIfLetter(letter.value);
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
