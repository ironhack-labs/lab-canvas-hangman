class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord(words);
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let numRandom = Math.floor(Math.random() * (this.words.length - 1))
    return this.words[numRandom];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90) {
      return true
    }else {
      return false
    } 
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.includes(letter)) {
      return false
    }else {
      return true
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    console.log(this.guessedLetters);
    if (hangman.checkWinner() == true) {
        hangmanCanvas.winner();
      }
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--
    this.letters.push(letter);
    if (hangman.checkGameOver() == true) {
        hangmanCanvas.gameOver();
      }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false
    }else {
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    if (this.guessedLetters.length == this.secretWord.length) {
      return true
    }else {
      return false
    }
  }
}

let hangman;
let hangmanCanvas;
const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord);
    // ... your code goes here
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here

  if (!(hangman.checkGameOver()) && !(hangman.checkWinner())) {
    if (hangman.checkIfLetter(event.keyCode)) {
      let posicion = hangman.secretWord.indexOf(event.key)
      let count = 0;
      while (posicion != -1) {
      count++;
      posicion = hangman.secretWord.indexOf(event.key, posicion + 1)
      }
      if (hangman.checkClickedLetters(event.key)) {
        if (count > 0 ) {
          hangman.letters.push(event.key);
          hangmanCanvas.writeCorrectLetter(event.key)
          for (let i = 0; i < count; i++) {
            hangman.addCorrectLetter(event.key);
          }
          
        }else if (count == 0) {
          hangman.addWrongLetter(event.key);
          hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft);
          hangmanCanvas.drawHangman(hangman.errorsLeft);
          
        }
      }
    }
  }
});