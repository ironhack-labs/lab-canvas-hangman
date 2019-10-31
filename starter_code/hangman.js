let hangman;

class Hangman {
  constructor() {
    this.words = ["VAYA", "PUTA", "PESADILLA", "COLEGA"]
    this.secretWord = ""
    this.letters = []
    this.guessedLetter = ""
    this.errosLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      return true;
    }
    else {
      return false
    }
  }

  checkClickedLetters(key) {
    return (this.letters.includes(key)) ? false:true
  }

  addCorrectLetter(i) {
    let split = this.secretWord.split("")
    this.guessedLetter += split[i].toUpperCase()
    if (this.guessedLetter.length == this.secretWord.length){
      return "wins"
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if (this.errorsLeft == 0){
      return "loses"
    }
  }

  checkGameOver() {
    if (this.errorsLeft == 0){
      return true
    }
    else {
      return false
    }
  }

  checkWinner() {
    if (this.guessedLetter.length == this.secretWord.length){
      return true
    }
    return false
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  let hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.drawLines()
  hangmanCanvas.drawHangman()
};

document.onkeydown = (e) => {
  checkClickedLetters(e)
};
