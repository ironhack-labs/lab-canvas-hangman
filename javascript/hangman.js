class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90 ) {
      return true
    } 
    return false
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter) === -1
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true;
    }
    return false;
  }

  checkWinner() {
    if(this.guessedLetters.length != this.secretWord.length){
      return false;
    } else{
      return true;
    }
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
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
