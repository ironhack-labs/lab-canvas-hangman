class Hangman {
  constructor(words) {
    this.words = words;
    this.letters = []
    this.secretWord = this.pickWord();
    this.guessedLetters = ''
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90? true: false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)? true : false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    if (!this.letters.includes(letter)) this.letters.push(letter);
  }

  checkGameOver() {
    return this.errorsLeft <= 0 ? true : false;
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord.indexOf(this.guessedLetters[i])===-1) 
      return false
    }
    return true;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
