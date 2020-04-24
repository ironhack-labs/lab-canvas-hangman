class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // Picking a random word from the array of words given
    let randomNum = Math.floor(Math.random() * this.words.length);
    return this.words[randomNum];
  }

  checkIfLetter(keyCode) {
    // Checking if the key pressed is actually a letter
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // Check if the letter has already been pressed
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    };
  }

  addCorrectLetter(letter) {
    // Adding the correct letters in the guessedLetters string
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    // Adding the wrong letters guessed to the letters array
    if (!this.letters.includes(letter)) {
      this.errorsLeft--;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // Checking if we have any errors left to trigger the loose image
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    // Filtering the repeated letters in the secretWord
    const noRepeatLetters = this.secretWord.split('').filter((letter, index) => this.secretWord.indexOf(letter) === index);

    // Checking if the secretWord with no repeated letters has the same length as the guessedLetters
    if (noRepeatLetters.length === this.guessedLetters.length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');
// Creating the object hangman, picking the secret word, creating the object canvas and creating the board
startGameButton.addEventListener('click', event => {
  hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
  hangman.secretWord = hangman.pickWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
});

// React to user pressing a key
document.addEventListener('keydown', event => {
  const keyCode = event.keyCode;
  const keyLetter = event.key;

  // Check if the letter is in the secret word
  if (hangman.checkIfLetter(keyCode) && hangman.checkClickedLetters(keyLetter)) {
    if (hangman.secretWord.includes(keyLetter)) {
      hangman.addCorrectLetter(keyLetter);
      // Writing the letter (taking into account multiple apearences) in the canvas
      [...hangman.secretWord].forEach((letter, index) => {
        if (letter === keyLetter) {
          hangmanCanvas.writeCorrectLetter(index);
        };
      });
    } else {
      // Writing the wrong letter and the hangman in the canvas
      hangman.addWrongLetter(keyLetter);
      hangmanCanvas.writeWrongLetter(keyLetter, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }

    // Checking in every keypressed if the user has won o lost
    if (hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
    } else if (hangman.checkWinner()) {
      hangmanCanvas.winner();
    }
  }
});