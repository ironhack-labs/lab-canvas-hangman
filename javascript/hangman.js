class Hangman {
    constructor(words, secretWord, letters, guessedLetters, errorsLeft) {
      this.words = words;
      this.secretWord = this.pickWord();
      this.letters = [];
      this.guessedLetters = "";
      this.errorsLeft = 10;
  }

  pickWord() {
    let randomPick = this.words[Math.floor(Math.random() * this.words.length)]
    return randomPick; 
  }

  checkIfLetter(keyCode) {
    if (keyCode >=65 && keyCode <=90) {
      return true
    } else {
      return false
    }
  }
  

  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
    return true
    } else {
    return false
  }
  }

  addCorrectLetter(letter) {
      this.guessedLetters += letter;
    }

  addWrongLetter(letter) {
    this.errorsLeft--;
   
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    }else{
    return true
  }
  }

  checkWinner() {
    let newArr = this.secretWord.split('');
    let guessedLett = this.guessedLetters.split('');
        for (let i = 0; i < this.secretWord.length; i++) {
            if (guessedLett.includes(newArr[i])) {
                return true;
            } else {
                return false;
            }
        }
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
