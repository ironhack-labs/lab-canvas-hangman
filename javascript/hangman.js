class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.letters = []; // save used letters
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    return 64 < keyCode < 91 ? true : false;
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.includes(letter) && this.letters.push(letter);
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? true : false;
  }

  checkWinner() {
    return this.secretWord.split('').filter((let, i) => this.secretWord.indexOf(let) === i).length === this.guessedLetters.length;
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
