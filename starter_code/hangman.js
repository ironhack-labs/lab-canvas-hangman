let hangman;

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
    return this.words[wordIndex]
  }

  checkIfLetter(keyCode) {
    const isValidKey = ( (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) )
    return isValidKey
  }

  checkClickedLetters(key) {
      if( !this.letters.includes(key) ){
        this.letters.push(key.key)
        if( this.secretWord.includes(key) ) this.addCorrectLetter(key)
        return true
      } 
    return false
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toLocaleUpperCase()
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
};

document.onkeydown = (e) => {
  hangman.checkClickedLetters( e )
};
