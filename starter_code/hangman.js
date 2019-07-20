let hangman;

class Hangman {
  constructor(words) {
    this.words = ['test', 'test2', 'test3']
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 0
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(number) {
    if (number >= 65 && number <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  }

  addCorrectLetter(positionInWord) {
    return this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
  }

  addWrongLetter(str) {
    this.errorsLeft -= 1
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    return this.guessedLetter.split('').sort().join('') == this.secretWord.split('').sort().join('')
  }

}

let canvas;

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = getWord
};


document.onkeydown = function (e) {

};