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
    this.errorsleft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }

  //Check if the key the used has typed is a letter
  checkIfLetter(keyCode) {
    var inp = String.fromCharCode(keyCode);
    if (/[a-zA-Z]/.test(inp)) return true;
    return false;
  }

  //Checks if the pressed letter has already been pressed and returns
  //true if it was not or false in the opposite case.
  checkClickedLetters(key) {
    if (
      this.letters.includes(key.toUpperCase()) ||
      this.letters.includes(key.toLowerCase())
    ) {
      return false;
    }
      return true;
  }

  addCorrectLetter(i) {}

  addWrongLetter(letter) {}

  checkGameOver() {}

  checkWinner() {}
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
