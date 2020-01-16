let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ['javascript', 'ironhack','world']
    this.secretWord = ""
    this.letters = [] 
    this.guessedLetter = ""
    this.errorsLeft = 10
  }

  getWord() {
    const wordIndex = Math.floor( Math.random() * this.words.length)
    this.secretWord = this.words[wordIndex].toLocaleUpperCase()
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    const isValidKey = ( (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) )
    return isValidKey
  }

  checkClickedLetters(key) {
    if( this.checkIfLetter(key.keyCode )){
      if( !this.letters.includes(key.key) ){
        this.letters.push(key.key.toLocaleUpperCase())
        
        if( this.secretWord.includes(key.key.toLocaleUpperCase()) ) {
          this.addCorrectLetter(key.key.toLocaleUpperCase())
          return true
        }
        this.addWrongLetter(key.key)
      } }
    return false
  }

  addCorrectLetter(i) {
    if( !this.guessedLetter.includes(i.toLocaleUpperCase()) ) this.guessedLetter += i.toLocaleUpperCase()
    return this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    return this.checkGameOver()
  }

  checkGameOver() {
    return (this.errorsLeft === 0)
  }

  checkWinner() {
    return (this.secretWord.length === this.guessedLetter.length)
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas( hangman.getWord() )
};

document.onkeydown = (e) => {
  hangman.checkClickedLetters( e )
  hangmanCanvas.createBoard()
  hangmanCanvas.writeCorrectLetter(hangman.guessedLetter)
};
