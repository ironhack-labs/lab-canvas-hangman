var hangman;

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
  console.log(this.secretWord);

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
  console.log(typeof this.guessedLetter);

  this.guessedLetter += i;
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft > 1) {
    this.addWrongLetter();
    return false;
  } else {
    console.log('game Over');

    return true;
  }
};

Hangman.prototype.checkWinner = function (i) {

  const up = this.secretWord.toUpperCase().split('').sort();

  let unique = [...new Set(up)]
  console.log(this.guessedLetter.length);



  if (up.includes(i)) {
    this.addCorrectLetter(i);
  } else {
    if (this.checkGameOver()) {
      return false;
    }
  }

  let letras = this.guessedLetter.split('').sort();
  if (unique.length === letras.length) {
    console.log('winner');
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  start();
};

function start() {
  document.onkeydown = function (e) {
    if (hangman.checkIfLetter(e.keyCode)) {
      var key = String.fromCharCode(e.keyCode);
      if (hangman.checkClickedLetters(key)) {
        hangman.checkWinner(key);

      }

    }

  };

}
