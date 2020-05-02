class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() *this.words.length)];
  };

  checkIfLetter(keyCode) {
    return (keyCode >=65 &&  keyCode <= 90);
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)){
      return true;
    }else{
      return false;
    }
  }

  addCorrectLetter(letter) {
      this.guessedLetters+= letter
  }

  addWrongLetter(letter) {
    if (!this.letters.includes(letter)) {
      this.errorsLeft-=1;
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft === 0? true: false;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetters.length ? true : false;
  }
}

let hangman;

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
  if (!hangman.checkGameOver() && !hangman.checkWinner()) {
    if (hangman.checkIfLetter(event.keyCode)) {
      let a = String.fromCharCode(event.keyCode).toLowerCase();
      if (hangman.secretWord.includes(a)) {
        checkMultiplePositions(a, hangman.secretWord).forEach(i => hangmanCanvas.writeCorrectLetter(a, i));
        hangman.addCorrectLetter(a);
        if (hangman.checkWinner()) {
          hangmanCanvas.winner();
        }
      } else if (hangman.checkClickedLetters(a)) {
        hangman.addWrongLetter(a);
        hangmanCanvas.writeWrongLetter(a,hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        }
      }
    }
  } 
});


function checkMultiplePositions(letter, word) {
  return word.split('')
             .reduce((acc, a, index) => a === letter ? acc + index : acc, '')
             .split('')
             .map(val => parseInt(val));
}
