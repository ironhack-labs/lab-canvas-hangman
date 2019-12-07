let hangman;

class Hangman {
  constructor() {
    this.words = ["PAPELINA", "QUILLO", "TOLEDANO"]
    this.secretWord = this.getWord()
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10
  }

  getWord() {

    return this.words[Math.floor(Math.random() * this.words.length)]

  }

  checkIfLetter(keyCode) {
    let letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

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
    console.log(letter)
    if (!this.secretWord.toLocaleLowerCase().includes(letter.toLowerCase())) {
      this.errorsLeft--
      console.log(this.errorsLeft)
      newBoard.writeWrongLetter(letter, this.errorsLeft)
      if(this.checkGameOver()) return console.log("You lost")
    } else {
      this.letters.push(letter)
      for(let a = 0; a < this.secretWord.length; a++){
        if(this.secretWord[a] === letter) {
          this.guessedLetter += letter
          newBoard.writeCorrectLetter(a, letter)
        }
      }
      if(this.checkWinner())   return console.log("You win!")
    }

  }
  checkGameOver() {

    return this.errorsLeft === 0

  }

  checkWinner() {

    return this.guessedLetter.length === this.secretWord.length

  }

}

document.getElementById('start-game-button').onclick = () => {

  hangman = new Hangman();
  newBoard = new HangmanCanvas(hangman.getWord());
  newBoard.createBoard()
  console.log(hangman.secretWord)
  

};

document.onkeydown = (e) => {
  let code = e.keyCode
  let keyIs = e.key
  if (hangman.checkIfLetter(code)) {
    if (hangman.checkClickedLetters(keyIs.toUpperCase()))
      hangman.addWrongLetter(keyIs.toUpperCase())
      
      
    // console.log(hangman.letters)
    // console.log(hangman.errorsLeft)
    // console.log(hangman.checkClickedLetters(keyIs))
    // console.log(hangman.guessedLetter)
  }


};
