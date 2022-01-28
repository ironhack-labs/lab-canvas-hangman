class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

  }

  pickWord() {
    let len = this.words.length
    let rndWord = this.words[Math.floor(Math.random()*len)]
    return rndWord;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <=90 ? true : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    return this.errorsLeft <= 0 ? true : false;
  }

  checkWinner() {
    let len = this.secretWord.length;
    let contador = 0;
    for(let i = 0; i<= len; i++) {
      let element = this.secretWord[i];
      this.guessedLetters.includes(element) ? contador += 1 : contador +=0;
    };
    return contador === len ? true : false;
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
    hangmanCanvas.createBoard()

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});