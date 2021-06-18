class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[0];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return this.words[getRandomInt(0, this.words.length)]
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true 
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false 
    } else {
      this.letters.push(letter);
      return true 
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if (this.errorsLeft > 0) return false 
    if (this.errorsLeft === 0) return true
  }

  checkWinner() {
    if (this.guessedLetters.length === this.secretWord.length) {
      return true
    } else {
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
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  let pressedLetter = event.key;
  if (hangman.checkIfLetter(event.keyCode) === false) {
    window.alert('Please choose only letters.');
  } else {
    if (hangman.checkClickedLetters(pressedLetter) === false) {
      window.alert('Letter already choose. Please try another one.');
    } else {
      if ((hangman.secretWord).indexOf(pressedLetter) >= 0) {
        hangmanCanvas.writeCorrectLetter(pressedLetter);
        hangman.addCorrectLetter(pressedLetter);
        if (hangman.checkWinner() === true) {
          hangmanCanvas.winner();
        }
      } else {
        hangman.addWrongLetter(pressedLetter);
        hangmanCanvas.writeWrongLetter(pressedLetter, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        }
      }
    } 
    if (hangman.checkGameOver() === true) {
      hangmanCanvas.gameOver();
  }
});