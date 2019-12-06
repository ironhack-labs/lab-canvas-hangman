let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ["ESPONTANEOS", "JUAN", "FRANCISCO", "TOPOYIYO", "PECADOR"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return (this.secretWord = this.words[
      Math.floor(Math.random() * this.words.length)
    ]);
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else return false;
  }

  checkClickedLetters(key) {
    if (!this.letters.includes(key)) {
      return true;
    }
    return false;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    console.log("guessed letter ==>>", this.guessedLetter);
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else return false;
  }

  checkWinner() {
    if (
      (this.secretWord.localeCompare(this.guessedLetter) &&
        this.secretWord.length === this.guessedLetter.length) ||
      this.secretWord === this.guessedLetter
    ) {
      return true;
    } else return false;
  }
  countNumberOfPositions(e) {
    let count = 0;
    let position = this.secretWord.indexOf(e);
    while (position !== -1) {
      count++;
      position = this.secretWord.indexOf(e, position + 1);
    }
    return count;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  console.log(hangman.secretWord);
  console.log(hangmanCanvas.secretWord);
  hangmanCanvas.createBoard();
};

document.onkeydown = e => {
  if (hangman.checkIfLetter(e.keyCode)) {
    //console.log("e.KeyCode ==>>", e.keyCode);
    let key = e.key.toUpperCase();
    //console.log("e.key ==>>", key);
    if (hangman.checkClickedLetters(key)) {
      hangman.letters.push(key);
      if (hangman.secretWord.includes(key)) {
        let positions = hangman.countNumberOfPositions(key);
        console.log(positions);
        for (let i = 0; i < positions; i++) {
          hangman.addCorrectLetter(hangman.secretWord.indexOf(key));
        }
        console.log("add correctLetter to", hangman.guessedLetter);
        hangmanCanvas.writeCorrectLetter(key);
        if (hangman.checkWinner()) {
          console.log("you win");
          hangmanCanvas.winner();
        }
      } else {
        hangman.addWrongLetter(key);
        console.log("you lost a life", hangman.errorsLeft);
        hangmanCanvas.writeWrongLetter(hangman.letters,hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          console.log("you lose");
          hangmanCanvas.gameOver();
        }
      }
      //console.log("add key at array letters ==>>",hangman.letters);
    } else console.log("Repeat letter, press other");
  } else console.log("isn't letter ==>>", e.keyCode);
};
