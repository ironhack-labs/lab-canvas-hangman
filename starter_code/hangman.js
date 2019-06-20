var hangman;
var theCanvas;
class Hangman {
  constructor() {
    this.words = [
      "dog",
      "bootstrap",
      "hamburger",
      "water",
      "ironhack",
      "building",
      "javascript"
    ];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
  getWord() {
    let index = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[index];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false;
    }
    this.letters.push(key);
    return true;
  }
  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    if (this.checkWinner()) {
      console.log("won");
    }
  }
  addWrongLetter(letter) {
    this.errorsLeft--;
    if (this.checkGameOver()) {
      console.log("loser");
    }
  }
  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true;
    }
    return false;
  }
  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) {
      return true;
    }
    return false;
  }
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.getWord();
  theCanvas = new HangmanCanvas(hangman.getWord());
  theCanvas.createBoard();
  theCanvas.drawLines();
  theCanvas.drawHangman(hangman.errorsLeft);
};

$(document).keydown(function(e) {
  let theLetter = e.keyCode;
  let index = 0;
  if (hangman.checkIfLetter(theLetter)) {
    theLetter = e.key;
    if (hangman.checkClickedLetters(theLetter)) {
      theLetter = theLetter.toLowerCase();
      if (hangman.secretWord.indexOf(theLetter) == -1) {
        theCanvas.writeWrongLetter(theLetter);
        theCanvas.drawHangman(hangman.errorsLeft);
      }

      while (hangman.secretWord.indexOf(theLetter, index) != -1) {
        let i = hangman.secretWord.indexOf(theLetter, index);
        theCanvas.writeCorrectLetter(i);
        index = i + 1;
      }
    }
  }

  setTimeout(function() {
    if (hangman.checkWinner()) {
      theCanvas.winner();
    }
    if (hangman.checkGameOver()) {
      theCanvas.gameOver();
    }
  }, 1500);
});