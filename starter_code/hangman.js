let hangman;
const words = [
  'response',
  'excavate',
  'minority',
  'describe',
  'buttocks',
  'campaign',
  'proclaim',
  'question',
  'displace',
  'slippery',
  'necklace',
  'complete',
  'sandwich',
  'generate',
  'economic',
  'detector',
  'feminist',
  'particle',
  'baseball',
  'property'
];

class Hangman {
  constructor() {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
  }

  checkIfLetter(keyCode) {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) return true;
    return false;
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft === 0) return true;
    return false;
  }

  checkWinner() {
    for (var j = 0; j < this.secretWord.length; j++) {
      if (this.guessedLetter.indexOf(this.secretWord[j]) === -1) return false;
    }
    return true;
  }
}

document.getElementById('start-game-button').onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = function(e) {
  if (hangman) {
    if (hangman.checkIfLetter(e.keyCode)) {
      let up = e.key.toUpperCase();
      if (hangman.checkClickedLetters(up)) {
        hangman.letters.push(up);
        if (hangman.secretWord.indexOf(up) >= 0) {
          hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(up));
          hangman.addCorrectLetter(hangman.secretWord.indexOf(up));
          if (hangman.checkWinner()) {
            hangmanCanvas.winner();
          }
        } else {
          if (hangman.checkGameOver()) {
            return hangmanCanvas.gameOver();
          }
          hangman.addWrongLetter();
          hangmanCanvas.writeWrongLetter(up, hangman.errorsLeft);
        }
      }
    }
  }
};

document.onclick = () => {
  if (hangman.checkGameOver() || hangman.checkWinner()) {
    document.getElementById('starting').style.display = '';
    document.getElementById('game').style.display = 'none';
  }
};
