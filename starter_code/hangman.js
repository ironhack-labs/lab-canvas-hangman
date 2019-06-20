class Hangman {
  constructor (words, secretWord, letters, guessedLetter, errorsLeft) {
    this.words = ['cachorro', 'gato', 'rato'];
    this.secretWord = 'dinheiro';
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
    if (this.secretWord.includes(key)) {
      addCorrectLetter(this.secretWord.indexOf(key));
    }
    if (this.letters.includes(key)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter (i) {
    this.guessedLetter += this.secretWord[i].toUpperCase()
  }

  addWrongLetter (letter) {
    this.letters.push(letter);
    return this.errorsLeft -= 1;
  }

  checkGameOver () {
    if (this.errorsLeft === 0) {
      return true
    } 
    return false
  }

  checkWinner () {
    if (this.secretWord.split('').sort().toString() === this.guessedLetter.split('').sort().toString()) {
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
  canvas.writeCorrectLetter();
  canvas.drawHangman();
  canvas.gameOver();
  canvas.winner();
};


document.onkeydown = function (e) {
  console.log(hangman.checkIfLetter(e.keyCode));
};
