class Hangman {
  constructor() {
    this.words = [
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Development",
      "Responsive"
    ];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
    this.gameStatus = false; //false -> game NOT finished
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    let letter = this.secretWord[i];

    for (let j = 0; j < this.secretWord.length; ++j) {
      if (this.secretWord[j] == letter) {
        this.guessedLetter += letter.toUpperCase();
      }
    }
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
    return this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    if (this.guessedLetter.length < this.secretWord.length) return false;

    let guessedLetterSplit = this.guessedLetter.split("").sort();
    let secretWordSplit = this.secretWord.split("").sort();

    for (let i = 0; i < guessedLetterSplit.length; ++i) {
      if (guessedLetterSplit[i] !== secretWordSplit[i]) return false;
    }
    return true;
  }
}
