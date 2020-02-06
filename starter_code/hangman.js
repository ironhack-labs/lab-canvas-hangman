class Hangman {
  constructor() {
    this.words = ['olifant', 'nijlpaard', 'gorilla'];
    this.secretWord = this.getWord();
    this.letters = []
    this.guessedLetter = [];
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random(this.words.length) * this.words.length)]
  }

  checkIfLetter(e) {
    if (e.keyCode > 64 && e.keyCode < 91) {
      return true
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false;
    } else {
      this.letters.push(key);
      return true;
    }
  }

  addCorrectLetter(letter) {
    let arrIndex = [];
    for (var i = 0; i < this.secretWord.length; i++) {
      if (letter === this.secretWord[i]) {
        this.guessedLetter[i] = this.secretWord[i];
        arrIndex.push(i)
      }
    }
    return arrIndex;
  }


  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.errorsLeft--
      this.checkGameOver()
    }
  }

  checkGameOver() {
    if (this.errorsLeft < 1) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      return true
    } else {
      return false;
    }
  }
}

const hangman = new Hangman();
const hangmanCanvas = new HangmanCanvas(hangman.secretWord)
document.getElementById('start-game-button').onclick = () => {
  document.getElementById('start-container').style.display = 'none';
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
};

document.onkeydown = (e) => {
  if (hangman.checkIfLetter(e)) {
    if (hangman.checkClickedLetters(e.key)) {
      hangman.checkClickedLetters(e.key)
      hangman.addCorrectLetter(e.key)
      hangmanCanvas.writeCorrectLetter(hangman.guessedLetter)
      hangman.addWrongLetter(e.key);
      hangmanCanvas.writeWrongLetter(hangman.letters);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      if (hangman.checkGameOver()) {
        hangmanCanvas.gameOver()
      }
      if (hangman.checkWinner()) {
        hangmanCanvas.winner()
      }
    }
  }

}