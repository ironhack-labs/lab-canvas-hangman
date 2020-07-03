class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = "";
    this.letters = [];
  }

  pickWord() {
    // ... your code goes here
    const word = this.words[Math.floor(Math.random()*this.words.length)];
    return word;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    //return keyCode < 65 ? false : keyCode > 90 ? false : true;
    if(keyCode >= 65 && keyCode <= 90){
      return true;
    } return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return this.letters.indexOf(letter) == -1;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters += letter;
    }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    console.log("quantos faltam: " + this.errorsLeft);
    this.addClickedLetter(letter);
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft === 0;
  }

  checkWinner() {
    // ... your code goes here
    
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
