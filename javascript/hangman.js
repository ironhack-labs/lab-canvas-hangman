class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

    // ... your code goes here
  }

  pickWord() {
    let randomWord = Math.floor(Math.random() * this.words.length); 
    return this.words[randomWord];
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90){
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    let word = this.pickWord;
    if(this.checkIfLetter(letter)){
      this.letters.push(letter);
      if(word.indexOf(letter)!= -1){
      this.guessedLetters += letter;
    }

    } 
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
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
