class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = "";
    
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)]
    return randomWord
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65) && (keyCode <=90)) {
      return true
    }
    return false
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) === -1) {
      return true
    }
    return false
  }

  addCorrectLetter(letter) {
    //let numRepetition!!
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if (this.checkClickedLetters(letter)) {
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    if (this.errorsLeft) {
      return false
    }
    return true
  }

  checkWinner() {

    let wordsOfSecretWord = this.secretWord.split("")

    for (let i = 0; i < wordsOfSecretWord.length;i++){
      if (this.guessedLetters.includes(wordsOfSecretWord[i]) === false) {
        return false
      }      
    }

    return true
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
