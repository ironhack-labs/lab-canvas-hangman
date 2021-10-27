class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10;
  }

  pickWord() {
    const pickWord = this.words [(Math.random () * this.words.length)]
    return pickWord
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <=90){
      return true

    }
    else{return false}
    // ... your code goes here
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letter.includes("letter")){
      return !this.letters.letters
    }else{
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
    this.checkWinner()

  }

  addWrongLetter(letter) {
    if (this.letters.includes(letter)){
      this.letters.push(letter)
    }
  }
  checkGameOver() {
    if(this.errorsLeft > 0){
      return false
    }else{return true}
  }  

  checkWinner() {
    this.guessedLetters.length === this.guessedLetters.length === this.secretWord.leng
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
