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
    if(keyCode >= 65 && keyCode <= 90){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {

  }

  addCorrectLetter(i) {

  }

  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft--;
    }
    this.checkGameOver()
  }

  checkGameOver() {
    if(this.errorsLeft = 0){
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    if(this.guessedLetter.length === this.secretWord.length){
      return true
    } else {
      return false
    }
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
