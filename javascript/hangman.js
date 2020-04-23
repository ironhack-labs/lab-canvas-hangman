class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = []; // save used letters
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // Choose a randome word from array words
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    // Check if the key pressed belongs to a letter
    return keyCode < 91 ? keyCode > 64 ? true : false : false;
  }

  checkClickedLetters(letter) {
    // Check if the letter had already been pressed, return true if not
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    // Add a correct letter to the guessed letters string
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    // Reduce the errors left and push the letter into letters array
    this.errorsLeft--;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // Return true if there are no errors left
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    // return true if the game is complete
    return this.secretWord.split('').filter((letter, i) => this.secretWord.indexOf(letter) === i).length === this.guessedLetters.length;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');
// When the button is pressed
if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    // Start a new game
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    // Select a secret word
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // Clean the canvas
    hangmanCanvas.createBoard();
  });
}

// React to user pressing a key
document.addEventListener('keydown', event => {
  // When the game is over or won, stop the keydown listener
  if (!hangman.checkGameOver() && !hangman.checkWinner()) {
    // Check if the key pressed belonged to a letter
    if (hangman.checkIfLetter(event.keyCode)) {
      // Save the letter from the key pressed
      let l = String.fromCharCode(event.keyCode).toLowerCase();
      // Check if the letter is present in the secret word
      if (hangman.secretWord.includes(l)) {
        // Check if the letter is in multiple positions, write in the screen 
        checkMultiplePositions(l, hangman.secretWord).forEach(i => hangmanCanvas.writeCorrectLetter(l, i));
        hangman.addCorrectLetter(l);
        // Print you're awesome when the game is finished
        if (hangman.checkWinner()) {
          hangmanCanvas.winner();
        }
      } else if (hangman.checkClickedLetters(l)) {
        // Add the wrong letter, write into screen and reduce the errors left 
        hangman.addWrongLetter(l);
        hangmanCanvas.writeWrongLetter(l,hangman.errorsLeft);
        // Print image game over
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        }
      }
    }
  } 
});

// Create a function to check if the letter is in multiple positions
// Returns an array with the position of the letter in the word
function checkMultiplePositions(letter, word) {
  return word.split('')
             .reduce((acc, l, index) => l === letter ? acc + index : acc, '')
             .split('')
             .map(val => parseInt(val));
}