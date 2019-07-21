let hangman;

// words
// secretWord
// letters
// guessedLetter
// errorsLeft

class Hangman {
  constructor() {
    this.words = ["apple", "banana", "melon"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;

  }

  //getWord(). Returns a random word from our array words.
  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
  //checkIfLetter
  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true
    }
    else {
      return false
    }
  }

  checkClickedLetters(keyCode) {
    return !this.letters.includes(keyCode)
  }
  //addCorrectLetter should add letters to guessedLetter string
  //Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
  addCorrectLetter(positionInWord) {
    this.guessedLetter += this.secretWord[positionInWord].toUpperCase()
  }

  addWrongLetter() {
    this.errorsLeft--;
  }

  checkWinner() {
    return this.guessedLetter.split('').sort().join('') === this.secretWord.split('').sort().join('')
  }
  // checkGameOver should return a boolean
  // checkGameOver should return false if the errorsLeft is 0
  // checkGameOver should return false if the errorsLeft is 0

  checkGameOver() {
    if (this.errorsLeft.length === 0) {
      return false
    } else {
      return true
    }
  }
}
document.getElementById('start-game-button').onclick = function () {

  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()

  // new game canvas !
  mycanvas = new HangmanCanvas(hangman.secretWord)
  mycanvas.createBoard()
};


document.onkeydown = function (e) {

};
