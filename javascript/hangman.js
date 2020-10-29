class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "this.words[pickWord]";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10; 
    // ... your code goes here
  }

  pickWord() {
    let randomPick= this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90 ? true : false);
  }

  checkClickedLetters(letter) {
    return (this.letters.includes(letter) ? false : true);

  }

  addCorrectLetter(letter) {
    this.guessedLetters+=letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
  }

  checkGameOver() {
    return (this.errorsLeft >= 0 && this.errorsLeft <5 ? true : false);
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetters.length; 
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

  
     hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
