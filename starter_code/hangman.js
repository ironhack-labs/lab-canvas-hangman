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

  // check if the key the used has typed is a letter
  checkIfLetter(keyCode) {
    var inp = String.fromCharCode(keyCode);
    if (/[a-zA-Z]/.test(inp)) return true;
    return false;
  }

  checkClickedLetters(key) {}

  addCorrectLetter(i) {}

  addWrongLetter(letter) {}

  checkGameOver() {}

  checkWinner() {}
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
