let hangman;

class Hangman {
  constructor() {
    this.words = ['teste', 'teto', 'cachorro', 'dinheiro', 'treta'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }

  checkIfLetter(letter) {
    return letter > 64 && letter < 91 ? true : false;
  }

  // checkClickedLetters. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
  checkClickedLetters(letter) {
    return !this.letters.includes(letter) ? true : false;
  }
  
  addCorrectLetter(letter) {
    this.guessedLetter += this.secretWord[letter].toUpperCase()
    this.checkGameOver()
  }

  // addWrongLetter. Should subtract one from the variable errorsLeft and check if the game is over.
  addWrongLetter() {
    this.errorsLeft--
    this.checkGameOver()
  }

  // checkGameOver. Returns a boolean value, true if the users lose, and false in any other case.
  checkGameOver() {
    return this.errorsLeft === 0 ? true : false
  }

// checkWinner. Check if the users win and return a boolean value.
  checkWinner() {
    return this.secretWord.length === this.guessedLetter.length ? true : false
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};

// const teste = new Hangman()
// let result = teste.checkIfLetter('d')
// console.log(result)