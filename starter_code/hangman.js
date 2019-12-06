let hangman;

class Hangman {
  constructor() {
    this.words = ["COMADREJA", "TABANO", "ALMENDRA"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    let regExp = /[A-Za-z]/;
    let letter = String.fromCharCode(keyCode);
    return regExp.test(letter);
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    return this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetter.length;
  }
}

/*
document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
*/
