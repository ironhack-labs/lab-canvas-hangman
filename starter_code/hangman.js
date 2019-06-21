var hangman;
var hangmanCanvas;
class Hangman {
  constructor() {
    this.words = ['palavra', 'bolsa', 'garrafa', 'celular'];
    this.secretWord = 'teste';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
}

Hangman.prototype.getWord = function () {
  const i = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[i];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {

  if (!this.letters.includes(key)) {
    this.letters.push(key);
    return true;
  } else {
    return false;
  }

};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += i;
  hangmanCanvas.writeCorrectLetter(i);
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
  hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
  hangmanCanvas.drawHangman(this.errorsLeft);
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft > 4) {
    return false;
  } else {
    hangmanCanvas.gameOver();
    return true;
  }
};

Hangman.prototype.checkWinner = function (i) {

  const up = this.secretWord.toUpperCase().split('').sort();

  let unique = [...new Set(up)]
  if (up.includes(i)) {
    this.addCorrectLetter(i);
  } else {
    this.addWrongLetter(this.letters[this.letters.length -1]) 
  }

let letras = this.guessedLetter.split('').sort();
  if (unique.length === letras.length) {
    console.log('winner');
    hangmanCanvas.winner();
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  start();
  hangmanCanvas.drawLines();
};

  function start(){
    document.onkeydown = function (e) {
      if (hangman.checkIfLetter(e.keyCode)) {
        var key = String.fromCharCode(e.keyCode);
        if (hangman.checkClickedLetters(key)) {
          hangman.checkWinner(key);
        }
      }
    };
  }
  


