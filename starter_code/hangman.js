let hangman;

class Hangman {
  constructor() {
    this.words = ["","",""],
    this.secretWord = "",
    this.letters = [],
    this.guessedLetter = "",
    this.errorsLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

//   checkIfLetter(keyCode) {

//   }

//   checkClickedLetters(key) {

//   }

//   addCorrectLetter(i) {

//   }

//   addWrongLetter(letter) {

//   }

//   checkGameOver() {

//   }

//   checkWinner() {

//   }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
