let hangman;

class Hangman {
  constructor() {
    this.words = ["","",""],
    this.secretWord = "",
    this.letters = [],
    this.guessedLetter = "",
    this.errorsLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    this.letters.push(String.fromCharCode(keyCode))
    if (this.secretWord.includes(String.fromCharCode(keyCode))) {
      this.guessedLetter += String.fromCharCode(keyCode)
    } else {
      this.errorsLeft --;
    }
    return (keyCode <= 90 && keyCode >= 65)
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key)
  }

//   addCorrectLetter(i) {

//   }

//   addWrongLetter(letter) {

//   }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

//   checkWinner() {

//   }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
