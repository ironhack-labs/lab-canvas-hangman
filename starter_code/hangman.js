let hangman;

class Hangman {
  constructor() {
    this.words = []
    this.secretWord;
    this.letters = []
    this.guessedLetter = ""
    this.errorsLeft = 10;
  }

  getWord() {
    let randomWord = Math.floor(Math.random()*this.words.length)
    return this.words[randomWord]
  }

  checkIfLetter(keyCode) {

  }

  checkClickedLetters(key) {

  }

  addCorrectLetter(i) {

  }

  addWrongLetter(letter) {

  }

  checkGameOver() {
    if(this.errorsLeft = 0){
      return true
    } else {
      return false
    }
  }

  checkWinner() {

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
