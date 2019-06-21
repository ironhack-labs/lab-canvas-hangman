
class Hangman {
  constructor() {
    this.words = ['batata', 'assolan', 'oculos', 'mico', ];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(letter) {
    return (letter >= 65 && letter <= 90);
  }

  checkClickedLetters(letter) {
    return this.letters.filter(element => element !== letter).length === this.letters.length;
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    return [...new Set([...this.secretWord.toUpperCase()])].sort().join('') === this.guessedLetter.toUpperCase().split('').sort().join('');
  }

  addCorrectLetter(index) {
    this.guessedLetter += this.secretWord[index].toUpperCase();
    this.letters.push(this.secretWord[index].toUpperCase())
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.letters.push(letter.toUpperCase());
    this.errorsLeft -= 1;
    return this.checkGameOver();
  }

  checkIfCorrectLetter(letter) {
    return this.secretWord.toUpperCase().split('').map((char, index) => {
      return letter === char ? index : -1;
    }).filter(a => a !== -1);
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  const word = hangman.getWord();
  canvas = new HangmanCanvas(word);
  hangman.secretWord = word;
  canvas.createBoard();
  canvas.drawLines();
};

document.onkeydown = (e) => {
  const letter = String.fromCharCode(e.keyCode);
  if (hangman.checkIfLetter(e.keyCode)) {
    if (hangman.checkClickedLetters(letter)) {
      let index = hangman.checkIfCorrectLetter(letter);
      if (index.length !== 0) {
        if (!hangman.addCorrectLetter(index[0])) {
          canvas.writeCorrectLetter(index);
        } else {
          canvas.writeCorrectLetter(index);
          canvas.winner();
        }
      } else {
        if (!hangman.addWrongLetter(letter)) {
          canvas.writeWrongLetter(letter, hangman.letters.length);
          canvas.drawHangman(hangman.errorsLeft);
        } else {
          canvas.writeWrongLetter(letter, hangman.letters.length);
          canvas.drawHangman(hangman.errorsLeft);
          canvas.gameOver();
        }
      }
    } else {
      alert(`Letra ${letter} já utilizada!`);
    }
  }
};

let hangman;
let canvas;
