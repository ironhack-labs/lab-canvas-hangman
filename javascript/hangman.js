class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(correctLetter) {
    // ... your code goes here
    /*
    if (checkWinner() === true) {
      console.log('made it')
    } else {
      this.guessedLetters += correctLetter;
    }
    */
    this.guessedLetters += correctLetter;
  }

  addWrongLetter(wrongletter) {
    // ... your code goes here
    this.errorsLeft--;
    // for (let i = 0; i < letters.length; i++) {

    //   if (wrongletter !== letters.length) {
    //     letters.push(wrongletter)
    //   }
    // }

  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {

    let guessed = this.guessedLetters;
    let secret = this.secretWord;


    if (guessed.split("").sort().join('') === secret.split("").sort().join('')) {
      return true;
    } else {
      return false;
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
    hangmanCanvas.drawHangman();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.secretWord.includes(event.key)) {
    //add it to correct letters
    let idx = hangman.secretWord.indexOf(event.key)
    hangman.addCorrectLetter(event.key)
    console.log(hangman)
    hangmanCanvas.writeCorrectLetter(idx)
  } else {
    // add it to wrongletters
    hangman.addWrongLetter(event.key)
    console.log(Hangman)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }
});