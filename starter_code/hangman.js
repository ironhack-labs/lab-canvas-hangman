class Hangman{
  constructor() {
    this.words = ["word", "tested", "otherabcdef"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      this.letters.push(String.fromCharCode(keyCode));
      return true;
    } else return false;
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    return (this.guessedLetter += this.secretWord[i].toUpperCase());
  }

  addWrongLetter(letter) {
    return (this.errorsLeft -= 1);
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) return true;
    else return false;
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) return true;
    else return false;
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  game = new HangmanCanvas(hangman.secretWord);
  game.createBoard();
  game.drawLines();
};

document.onkeydown = (e) => {
  console.log(e.keyCode);
};
