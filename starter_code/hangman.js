var haveNotBeenPressed = false;
var letterPressed;
var winner = false;
var gameOver = false;

class Hangman {
  constructor() {
    this.words = [
      "HOLA",
      "CASA",
      "CARRO",
      "PERRO",
      "FERROCARRIL",
      "HOMBRO",
      "TELEVISION"
    ];
    this.secretWord = "";
    this.lettersClicked = [];
    this.errorsLeft = 7;
    this.guessedLetter = "";
  }

  getWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomIndex];
    return this.secretWord;
  }

  checkIfLetter(number) {
    if (typeof number == "number") {
      if (number >= 65 && number <= 90) {
        return true;
      } else {
        return false;
      }
    }
  }

  checkClickedLetters(letter) {
    if (typeof letter == "string") {
      if (this.lettersClicked.indexOf(letter) == -1) {
        return true; // No fue presionada
      } else {
        return false; // Fue presionada
      }
    }
  }

  addCorrectLetter(key) {
    if (typeof key == "number") {
      let letter = String.fromCharCode(key);
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] == letter) {
          this.guessedLetter = this.guessedLetter + letter;
        }
      }
    }
  }

  addWrongLetter(key) {
    if (typeof key == "number") {
      let letter = String.fromCharCode(key);
      if (this.secretWord.indexOf(letter) == -1)
        this.errorsLeft = this.errorsLeft - 1;
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else if (this.errorsLeft == 0) {
      return true;
    }
  }

  checkWinner() {
    if (this.secretWord.length == this.guessedLetter.length) {
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.getWord();
  winner = false;
  gameOver = false;
  console.log(hangman.secretWord);
};
document.onkeydown = function(e) {
  let key = e.keyCode;
  let isLetter = hangman.checkIfLetter(key);
  if (!winner && !gameOver) {
    if (isLetter) {
      letterPressed = String.fromCharCode(key);
      haveNotBeenPressed = hangman.checkClickedLetters(letterPressed);
      if (haveNotBeenPressed) {
        hangman.lettersClicked.push(letterPressed);
        hangman.addCorrectLetter(key);
        hangman.addWrongLetter(key);
      }
    }
    gameOver = hangman.checkGameOver();
    winner = hangman.checkWinner();
    console.log(e.keyCode, letterPressed, haveNotBeenPressed);
    console.log(hangman.lettersClicked);
    console.log(
      "guessed:" + hangman.guessedLetter,
      "error:" + hangman.errorsLeft
    );
    console.log("Winner:" + winner, "GameOver:" + gameOver);
  }
};
