let hangman;

class Hangman {
  constructor() {
    let randomIndex = Math.floor(Math.random() * 11);
    this.words = [
      "lorem",
      "ipsum",
      "dolor",
      "amet",
      "consectetur",
      "adipisicing",
      "elit",
      "eiusmod",
      "tempor",
      "incididunt"
    ];
    this.secretWord = this.words[randomIndex];
    this.letters = this.secretWord.split("");
    this.guessedLetter = 0;
    this.errorsLeft = 10;
  }

  getWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    if (keyCode >= 97 && keyCode <= 122) {
      return true;
    } else return false;
  }

  checkClickedLetters(key) {
    //console.log("test" + key);
    let storedLetters = [];
    if (storedLetters.includes(key) === true) {
      return true;
    } else {
      storedLetters.push(key);
      return false;
    }
  }

  addCorrectLetter(i) {
    let correctLetter = "";
    if (checkClickedLetters(key) === false) {
      correctLetter += key;
    }
    return correctLetter;
  }

  addWrongLetter(letter) {}

  checkGameOver() {}

  checkWinner() {}
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = e => {};
