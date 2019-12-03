let hangman;

class Hangman {
  constructor() {
    this.words = ['pepe','juan','francisco','torrebruno','topoyiyo']
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.guessedLetter = 10;
  }

  getWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
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
