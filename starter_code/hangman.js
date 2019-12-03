let hangman;

class Hangman {
  constructor() {
    this.words = ["Hola", "Mario", "Sol"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    let rWord = Math.floor(Math.random() * this.words.length);
    let randomWord = this.words[rWord];
    this.secretWord = randomWord;
    return randomWord;
  }

  checkIfLetter(keyCode) {
    return /[a-zA-Z]+/g.test(keyCode);
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) return false;
    return true;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft === 0) return true;
    return false;
  }

  checkWinner() {
    if (this.secretWord.length === this.guessedLetter.length) return true;
    return false;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
