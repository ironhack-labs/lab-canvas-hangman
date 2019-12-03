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

  }

  checkWinner() {

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
