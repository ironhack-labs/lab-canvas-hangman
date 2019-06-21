let canvas;
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
      let letter = String.fromCharCode(num).toLocaleUpperCase();
      this.checkClickedLetters(letter);
      return true;
    }
    return false;
  }

  checkClickedLetters (letter) {
    if (this.letters.includes(letter)) {
      return false
    } 
    if (this.secretWord.includes(letter)) {
      addCorrectLetter(this.secretWord.indexOf(letter));
    } else {
      this.addWrongLetter(letter);
      return true;
    }
  }

  addCorrectLetter (i) {
    let newLetter = this.guessedLetter += this.secretWord[i].toUpperCase();
    canvas.writeCorrectLetter(newLetter);
  }

  addWrongLetter (letter) {
    this.errorsLeft -= 1;
    this.letters.push(letter);
    canvas.writeWrongLetter(letter, this.errorsLeft);
  }

  checkGameOver () {
    if (this.errorsLeft === 0) {
      canvas.gameOver();
      return true;
    } 
    return false;
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
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
  canvas.drawHangman();
};


document.onkeydown = function (e) {
  console.log(hangman.checkIfLetter(e.keyCode));
};
