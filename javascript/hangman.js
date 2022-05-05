class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = `${this.pickWord()}`;
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let i = Math.floor(Math.random()*(this.words.length));
    this.secretWord = this.words[i];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    }else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters = this.guessedLetters + letter;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if(!this.letters.includes(letter)){
      this.errorsLeft -= 1;
      this.letters.push(letter);
    }else{
      this.errorsLeft -= 1;
    }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0){
      return false;
    }else if(this.errorsLeft === 0){
      return true;
    }
  }

  checkWinner() {
    // ... your code goes here
    if(this.secretWord == this.guessedLetters){
      return true;
    }
    return false
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

    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
