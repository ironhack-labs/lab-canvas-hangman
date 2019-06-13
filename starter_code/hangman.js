let hangman;
class Hangman {
  constructor() {
    this.words = ["hola", "iphone"]
    this.secretWord = ''
    this.letters = new Array()
    this.guessedLetter = ''
    this.errorsLeft = 10
  }

  getWord() {
    let randomWord = this.words[Math.floor(Math.random() * this.words.length)]
    return randomWord
  }

  checkIfLetter(number) {
    if (number >= 65 && number <= 90) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true
    } else {
      return false
    }
  }
  
  checkWinner() {
    for (var i = 0; i < this.secretWord.length ; i++) {
      if (this.guessedLetter.indexOf(this.secretWord[i]) === -1) return false
    }
    return true
  }

  addCorrectLetter(index) {
    this.guessedLetter += this.secretWord[index].toUpperCase()
    this.checkWinner()
  }

  addWrongLetter(string) {
    this.errorsLeft -= 1
    this.checkGameOver()
  }
}

document.getElementById('start-game-button').onclick = function () {

};


document.onkeydown = function (e) {

};
