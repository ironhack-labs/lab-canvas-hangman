class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(this.words);
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }


  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90);
  }

  checkClickedLetters(letter) {
    return (!this.letters.includes(letter));
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
    return (!this.errorsLeft > 0);
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

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  
});