let hangman;

class Hangman {
  constructor() {
    this.words = ['test', 'testing', 'ironhack'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = [];
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(this.words.length * Math.random())];
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

// document.getElementById('start-game-button').onclick = () => {
//   hangman = new Hangman();
// };

// document.onkeydown = (e) => {

// };



  hangman = new Hangman();

  console.log(hangman)
  console.log(hangman.words.length);