class Hangman {
  constructor() {
    this.words = [];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  // getWord(). Returns a random word from our array words.
  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  // checkIfLetter. This function should check if the key the user has typed is a letter.
  checkIfLetter(letter) {
    if (letter.keyCode >= 65 && letter.keyCode <= 90 || letter.keyCode >= 97 && letter.keyCode <= 122) {
      console.log(letter.key);
      return true

    } else {
      // alert(`Invalid character!`);
      return false;
  }
}

  // checkClickedLetters. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
  checkClickedLetters(letter) {
    if (Array.from(new Set (this.secretWord.split(''))).includes(letter.key)) {
      this.addCorrectLetter(letter.key);
      return true //have to check--might have to be commented out
    } else {
      this.addWrongLetter(letter.key);
      return false
    }
  }

  // checkGameOver. Returns a boolean value, true if the users lose, and false in any other case.
  checkGameOver() {
    if (this.errorsLeft == 0) {
      return true
    } else {
      return false
    }
  }

  // checkWinner. Check if the users win and return a boolean value.
  checkWinner() {
    let secretWordsArrayOfLetters = Array.from(new Set (this.secretWord.split(''))).sort();
    let guessedLetterSortedArray = this.guessedLetter.sort();
    if (secretWordsArrayOfLetters == guessedLetterSortedArray) {
      return true
    } else {
      return false
    }
  }

  // addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
  addCorrectLetter(letter) {
    this.guessedLetter += letter.key;
  }

  // addWrongLetter. Should subtract one from the variable errorsLeft and check if the game is over.
  addWrongLetter(letter) {
    this.letters.push(letter.key);
    this.errorsLeft--;
    this.checkGameOver();
  }
}


