/*jshint esversion: 6 */
let hangman;
let hangmanCanvas;

class Hangman {
  constructor() {
    this.words = ["DOGS", "CAT", "MOUSE"];
    this.secretWord = this.getWord();
    this.secretWordSplit = this.secretWord.split("");
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      console.log("LETTER is " + keyCode + " Between 64-91 ");
      return true;
    } else {
      console.log("NOT LETTER");
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.indexOf(key) === -1) {
      console.log(this.letters);
      console.log("Not jet in clicked array");
      return true;
    } else {
      console.log(this.letters);
      console.log("Already in clicked array");
      return false;
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      console.log("GAMEOVER");
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      console.log("YOU WIN");
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(i) {
    console.log("EL INDEX  " + i);
    console.log("LA LETRA  " + this.secretWord[i]);
    for (let j = 0; j < this.secretWord.length; j++) {
      if (this.secretWord[i] === this.secretWord[j]) {
        this.guessedLetter += this.secretWord[i].toUpperCase();
      }
    }
    this.letters.push(this.secretWord[i]);
    console.log("Letras adivinadas " + this.guessedLetter);
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
    console.log("Intentos " + this.errorsLeft);
    console.log(this.letters);
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  console.log("SECRET WORD: " + hangman.secretWord);
  hangmanCanvas.createBoard();
};

document.onkeydown = e => {
  let pressedLetter = e.key.toUpperCase();
  if (
    hangman.checkIfLetter(e.keyCode) &&
    hangman.checkClickedLetters(pressedLetter)
  ) {
    if (hangman.secretWord.includes(pressedLetter)) {
      hangman.addCorrectLetter(hangman.secretWord.indexOf(pressedLetter));
      hangmanCanvas.writeCorrectLetter(
        hangman.secretWord.indexOf(pressedLetter)
      );
    } else {
      hangman.addWrongLetter(pressedLetter);
      hangmanCanvas.writeWrongLetter(pressedLetter, hangman.errorsLeft);
    }
  }
  hangman.checkWinner();
  hangman.checkGameOver();
};
