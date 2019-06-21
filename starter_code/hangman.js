class Hangman {
  constructor (words, secretWord, letters, guessedLetter, errorsLeft) {
    this.words = ['cachorro', 'gato', 'rato', 'dinheiro'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord () {
    let randomWord = this.words[Math.floor(Math.random()) * this.words.length];
    return randomWord;
  }

  checkIfLetter (num) {
    if (num >= 65 && num <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters (key) {
    if (this.letters.includes(key)) {
      return false
    } 
    if (this.secretWord.includes(key)) {
      addCorrectLetter(this.secretWord.indexOf(key));
    } else {
      this.addWrongLetter(letter);
      return true
    }
  }

  addCorrectLetter (i) {
    let newLetter = this.guessedLetter += this.secretWord[i].toUpperCase();
    canvas.writeCorrectLetter(newLetter);
  }

  addWrongLetter (letter) {
    this.letters.push(letter);
    canvas.writeWrongLetter(letter, errorsLeft);
    return this.errorsLeft -= 1;
  }

  checkGameOver () {
    if (this.errorsLeft === 0) {
      canvas.gameOver();
      return true
    } 
    return false
  }

  checkWinner () {
    if (this.secretWord.split('').sort().toString() === this.guessedLetter.split('').sort().toString()) {
      canvas.winner();
      return true
    }
    return false
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  const canvas = new HangmanCanvas();
  canvas.createBoard();
  canvas.drawLines();
  canvas.drawHangman();
};


document.onkeydown = function (e) {
  console.log(hangman.checkIfLetter(e.keyCode));
};
