let hangman;

class Hangman {
  constructor() {
    this.words = ["HANGMAN", "GAME", "IRONHACK"];
    this.secretWord = "HANGMAN";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
    console.log("nuevo juego");
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    console.log("chequea si es letra")
    console.log(keyCode);
    if (keyCode >= 65 && keyCode <= 90) {
      console.log("es letra")
      this.checkClickedLetters(keyCode)
      return true;
    } else {
      console.log("no es letra")
      return false;
    }
  }

  checkClickedLetters(key) {
    console.log(key,"<==")
    if (this.letters.includes(key)) {
      console.log("false")
      return false;
    } else {
      this.letters.push(key)
      console.log(String.fromCharCode(key), "la letra")
      let idx = this.secretWord.indexOf(String.fromCharCode(key))
      console.log(this.secretWord, "palabra secreta")
      console.log(idx, "el indice")
      // this.addCorrectLetter(idx)
      console.log(this.letters)
      console.log("true")
      return true;
    }
  }

  addCorrectLetter(i) {
    // if (this.secretWord.includes(i));
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver;
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
  console.log("hi");
};

document.onkeydown = e => {
  console.log("tecla presionada", e);
  hangman.checkIfLetter(e.keyCode);
};
