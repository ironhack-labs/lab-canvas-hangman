let hangman;

class Hangman {
  constructor() {
    this.words = ["papelina", "periquito", "toledano"]
    this.secretWord = ""
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10
  }

  getWord() {

    return this.words[Math.floor(Math.random() * this.words.length)]

  }

  checkIfLetter(keyCode) {
    let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    return letter.includes(String.fromCharCode(keyCode).toLowerCase())

  }

  checkClickedLetters(key) {

    if (this.letters.includes(key)) return false

    return true

  }

  addCorrectLetter(i) {

    if (this.secretWord.includes(this.secretWord[i]))
      this.guessedLetter += this.secretWord[i].toUpperCase()
    this.checkWinner()

  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter))
      this.errorsLeft--
    this.checkGameOver()

  }
  checkGameOver() {

    return this.errorsLeft === 0

  }

  checkWinner() {
    
    // let sWord = this.secretWord.split("")
    // let gLetter = this.secretWord.split("")

    // if(sWord.length ==)
    
    // for(let i = 0; i = this.secretWord.length; i++){

    // }
    return this.guessedLetter.length === this.secretWord.length

  }

}

document.getElementById('start-game-button').onclick = () => {
  console.log("hola")
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
