let wordsArr = [
  "cough",
  "vine",
  "car",
  "garage",
  "moisten",
  "ironhack",
  "partake",
  "insert",
  "moist",
  "magician",
  "cinema",
  "fuschia",
  "gallant",
  "mechanic"
];

class Hangman {
  constructor(array) {
    this.words = array;
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessed = "";
    this.errorsLeft = 10;
  }
  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
    // console.log(this.secretWord);
  }

  checkIfLetter(blah) {
    if (blah.keyCode >= 65 && blah.keyCode <= 90) {
      console.log("That was a letter!");
      this.checkClickedLetters(blah);
    } else {
      console.log("Try a letter instead");
    }
    console.log(this.errorsLeft);
  }

  checkClickedLetters(e) {
    // console.log('-----',e);
    if (this.letters.includes(e.key) || this.guessed.includes(e.key)) {
      console.log("Already Guessed!");
    } else if (this.secretWord.includes(e.key)) {
      this.addCorrectLetter(e);
      console.log(this.guessed);
    } else {
      this.addWrongLetter(e);
      this.checkGameOver();
    }
  }

  addCorrectLetter(f) {
    var tempArray = this.secretWord.split("");
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i] === f.key) {
        this.guessed += f.key;

        canvas.writeCorrectLetter(f.key, i);
      }
    }
    // this.letters.push(f.key);
    // canvas.writeWrongLetter(f.key)
    console.log("Correct!");
    this.checkWinner();
  }

  addWrongLetter(g) {
    this.letters.push(g.key);
    this.errorsLeft--;
    canvas.writeWrongLetter(g.key);
    canvas.drawHangMan();
    console.log("wrong Letter");
  }
  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      console.log("Game Over Man");
      setTimeout(() => {
        alert("YOU ARE HANGED");
        location.reload()
      }, 20);
      return true;
    }
  }
  checkWinner() {
    if (this.guessed.length === this.secretWord.length) {
      console.log("YOU WIN!");
      setTimeout(() => {
        alert("THE GOVERNOR HAS SET YOU FREE!");
        alert("TO CLARIFY: BECAUSE YOU ARE A GREAT SPELLER");
        location.reload()
      }, 20);
      return true;
    } else {
      return false;
    }
  }
}

// function Hangman() {

// }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman(wordsArr);
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
  window.scrollTo(0, document.body.scrollHeight);
};

document.onkeydown = function(e) {
  console.log(e.key);
  hangman.checkIfLetter(e);
};

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
