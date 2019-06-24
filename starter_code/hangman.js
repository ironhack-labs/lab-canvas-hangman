class Hangman {
  constructor() {
    this.words = ['eris', 'drew', 'raving', 'disco', 'breaks'];
    this.secretWord = this.words[Math.floor(Math.random() * (this.words.length - 1))]
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90 ? true : false;
  }

  checkClickedLetters(key) {
    return this.letters.includes(key) ? false : true;
  }

  addCorrectLetter(i) {
    return this.guessedLetter += this.secretWord[i].toLocaleUpperCase();
  }

  addWrongLetter(letter) {
    if(this.secretWord.indexOf(letter) === -1) {
      return this.errorsLeft -= 1;
    } 
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false;
  }

  checkWinner() {
    return this.secretWord.toLocaleUpperCase().split('').sort().join('') === this.guessedLetter.toLocaleUpperCase().split('').sort().join('') 
    ? true 
    : false
  }

}

document.getElementById('start-game-button').onclick = function () {
  var hangman = new Hangman();
  const hangmanCanvas = new HangmanCanvas();
  hangman.getWord();
  hangmanCanvas.drawLines();
};


document.onkeydown = function (e) {
  const hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.writeCorrectLetter(e)
};

// var hangman = new Hangman();
