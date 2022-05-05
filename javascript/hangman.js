class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    console.log(this.secretWord);
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
      const randomWord= this.words[Math.floor(Math.random()*this.words.length)];
      return randomWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) return true;
      return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(!this.letters.includes(letter)) return true;
      return false;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if(this.checkClickedLetters(letter)) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
   }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft > 0) return false;
    return true;
  }

  checkWinner() {
    // ... your code goes here
    return this.secretWord.split('').every(letter => this.guessedLetters.includes(letter));
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
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
