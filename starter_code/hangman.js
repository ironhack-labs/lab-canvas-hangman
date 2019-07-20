let hangman;



class Hangman {
  constructor(words) {
    this.words = ['test', 'test2', 'test3']
    this.secretWord = ''
    this.letters = []
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(positionInWord) {
    this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
  }

  checkWinner() {
    return this.guessedLetter.split('').sort().join('') === this.secretWord.split('').sort().join('')
  }

  addWrongLetter() {
    this.errorsLeft -= 1
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }
}




document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (event) {

};