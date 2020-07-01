class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here    
    this.secretWord = this.pickWord(words);
    this.letters = [];
    this.guessedLetters ='';
    this.errorsLeft = 10;

  }

  pickWord() {
    // ...  method that returns a random word from the array of words.
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
  if ((keyCode >= 65) && (keyCode <=90)) return true;
  return false; 
  }

  checkClickedLetters(letter) {
  // check if the letter passed as an argument has already been pressed
   return this.letters.includes(letter) ? false : true;
  }

  addCorrectLetter(letter) {
    // add letters to guessedLetters string
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
  return this.errorsLeft>0 ? false : true;
  }

  checkWinner() {
  return this.guessedLetters.length ? false : true;
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
