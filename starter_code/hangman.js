// let hangman;

class Hangman {
  constructor() {
    this.words = ["Goku", "Cu", "Sol", "Coco"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(i) {
    let letter = this.secretWord[i];
    this.guessedLetter += letter.toUpperCase();
  }

  addWrongLetter(letter) {
    return (this.errorsLeft -= 1);
  }

  checkWinner() {
    let secretWord = [...this.secretWord].sort().join('');
    let guessedLetter = [...this.guessedLetter].sort().join('');
    // console.log(secretWord,guessedLetter)
    return secretWord === guessedLetter;
  }


}

document.getElementById("start-game-button").onclick = () => {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = e => {};
