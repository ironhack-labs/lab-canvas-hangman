class Hangman {
  constructor() {
    this.words = ['ola', 'test', 'haha'];
    this.secretWord = 'ola';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord = () => {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter = (key) => {
    return (key >= 65 && key <= 90 || key >= 97 && key <= 122)
  }

  checkClickedLetters = (letter) => {
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter = (num) => { // Essa jasmine não presta!
    this.guessedLetter += this.secretWord.charAt(num).toUpperCase();
  }

  addWrongLetter = (str) => {
    if (!this.secretWord.includes(str)) {
      this.errorsLeft -= 1;
    }
  }

  checkGameOver = () => {
    return this.errorsLeft <= 0;
  }

  checkWinner = () => {
    return (this.secretWord.split('').sort().join('') === this.guessedLetter.split('').sort().join(''));
  }
}