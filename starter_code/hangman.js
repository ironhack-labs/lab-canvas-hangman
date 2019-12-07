let hangman;

class Hangman {
  constructor() {
    (this.words = [
      "luis",
      "arianna",
      "pedrito",
      "navidad",
      "murcielago",
      "caracas",
      "ironhack"
    ]),
      (this.secretWord = this.getWord()),
      (this.letters = []),
      (this.guessedLetter = ""),
      (this.errorsLeft = 10);
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode <= 90 && keyCode >= 65;
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.letters.push(this.secretWord[i]);
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    let letters = this.secretWord.toUpperCase().split("");
    let result = true;
    letters.forEach(e => {
      if (!this.guessedLetter.includes(e)) {
        result = false;
      }
    });
    return result;
  }
}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
};

document.onkeydown = e => {
  if (hangman.checkIfLetter(e.keyCode)) {
    if (hangman.checkClickedLetters(e.key)) {
      if (hangman.secretWord.includes(e.key)) {
        hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key));
        let index = hangman.secretWord.indexOf(e.key);
        while (index >= 0) {
          hangmanCanvas.writeCorrectLetter(index);
          index = hangman.secretWord.indexOf(e.key, index + 1);
        }
        if (hangman.checkWinner()) {
          hangmanCanvas.winner();
          console.log("You win"); //temporary
        }
      } else {
        hangman.addWrongLetter(e.key);
        hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        }
      }
    }
  }
};
