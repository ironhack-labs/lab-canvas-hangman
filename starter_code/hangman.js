/*jshint esversion: 6 */
let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ["dogs", "cat", "mouse"];
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
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) === -1) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    //this.guessedLetter += i.toUpperCase();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
  }
  checkIfCorrect(key) {
    if (!this.checkIfLetter(key)) {
      console.log("Es una letra");
      if (this.secretWord.split("").includes(key.key)) {
        console.log("la incluye" + key.key);
        this.addCorrectLetter(key.key);
      } else {
        console.log("NO la incluye" + key.key);
        this.addWrongLetter(key.key);
      }
    } else {
      console.log("No es una letra");
    }
  }
  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  console.log("SECRET WORD: " + hangman.secretWord);
  //hangman.getWord();
};

document.onkeydown = e => {
  hangmanCanvas.createBoard();
  if (hangman.checkIfLetter(e)) {
    console.log("Is letter");
  }
  hangman.checkIfCorrect(e);
};
