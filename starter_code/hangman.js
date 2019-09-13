/* eslint-disable class-methods-use-this */

class Hangman {
  constructor() {
    this.words = ['arnold', 'heitor', 'danilo', 'guilherme', 'mateus', 'joc'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    const randomItem = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
    this.secretWord = randomItem;
    return `${randomItem}`;
  }

  checkIfLetter(num) {
    if (num >= 65 && num <= 90) return true;
  }

  checkClickedLetters(str) {
    return this.letters.indexOf(str) === -1;
  }

  addCorrectLetter(idx) {
    this.guessedLetter += this.secretWord[idx].toUpperCase();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length;
  }
}
