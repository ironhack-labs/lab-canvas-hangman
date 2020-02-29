class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = ""
    this.letters = []
  };

  pickWord() {
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  };

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  };

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  };

  addCorrectLetter(correctLetter) {
    return this.guessedLetters += correctLetter
  };

  addWrongLetter(wrongLetter) {
    this.errorsLeft -= 1;
    return this.letters.push(wrongLetter)
  };

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  };

  checkWinner() {
    if (this.secretWord.length === this.guessedLetters.length) {
      return true
    } else {
      return false
    }
  }
};

let hangman

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    Hangman.drawLines()
  });
}

document.addEventListener('keydown', event => {
  if (hangman.secretWord.includes(event.key)){
    let idx = hangman.secretWord.indexOf(event.key)
    hangmanCanvas.writeCorrectLetter(idx)
    hangmanCanvas.addCorrectLetter(index)
  } else {
    hangman.checkClickedLetters(event.key)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }
});



document.onekeyup = (event) => { console.log(event.key) }