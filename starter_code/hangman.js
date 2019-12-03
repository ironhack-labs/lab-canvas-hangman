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
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
    return this.secretWord;
  }

  checkIfLetter(keyCode) {}

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
