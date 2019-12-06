let hangman;

class Hangman {
  constructor() {
    this.words = [
      "elbow",
      "steward",
      "incongruous",
      "proper",
      "suspect",
      "support",
      "person",
      "hut",
      "cultivate",
      "fail",
      "row",
      "rape",
      "culture",
      "mirror",
      "dictionary",
      "widen",
      "suspicion",
      "despair",
      "presence",
      "explain"
    ];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }

  //Check if the key the used has typed is a letter
  checkIfLetter(keyCode) {
    var inp = String.fromCharCode(keyCode);
    return /[a-zA-Z]/.test(inp);
  }

  checkClickedLetters(key) {
    return !(
      this.letters.includes(key.toUpperCase()) ||
      this.letters.includes(key.toLowerCase())
    );
    /*
    if (
      this.letters.includes(key.toUpperCase()) ||
      this.letters.includes(key.toLowerCase())
    ) {
      return false;
    }
    return true;*/
  }

  //Adds to the guessedLetter variable the letter that was pressed.
  //Also, it should check if the user wins
  addCorrectLetter(i) {
    if (this.checkIfLetter(i)) {
      let letter = String.fromCharCode(i);
      this.guessedLetter.concat(letter);
      this.checkWinner();
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft == 0;
  }

  checkWinner() {
    return this.guessedLetter.length == this.secretWord.length;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
