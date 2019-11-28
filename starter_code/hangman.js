class Hangman {
  constructor () {
    this.words = ['foo', 'bar', 'TEST', 'Jarvis', 'BLABLABLABLABLABLA'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord () {
    let secretIndex = Math.floor(Math.random() * this.words.length)
    this.secretWord = this.words[secretIndex]
    return this.secretWord
  }

  checkIfLetter (keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters (key) {
    let newLetter = key
    if (this.letters.includes(key)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter (i) {
    this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase()
  }

  addWrongLetter (letter) {
    this.errorsLeft = this.errorsLeft - 1
  }

  checkGameOver () {
    if (this.errorsLeft == 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner () {
    if (this.guessedLetter.length == this.secretWord.length) {
      for (let i = 0; i < this.guessedLetter.length; i++) {
        if (this.secretWord.includes(this.guessedLetter[i])) {
          return true
        } 
        else {
          return false
        }
      }
    } 
  return false;
  }
}

document.getElementById('start-game-button').onclick = () => {
 let hangman = new Hangman()
 hangman.getWord();
 let hangmancanvas = new HangmanCanvas(hangman.secretWord);
 hangmancanvas.createBoard();
 console.log(hangman.secretWord);
 hangmancanvas.drawLines();
 
}

document.onkeydown = e => {}
