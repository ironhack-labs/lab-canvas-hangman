var hangman;

function Hangman() {
  this.words = ["perro", "gato", "pulpo", "tigre", "lagartija", "jirafa", "puercoespin", "jabali", "gallina", "pato", "tiburon", "ballena", "leon", "aguila", "serpiente", "dragon", "murcielago", "colibri", "vaca", "pollo", "caballo"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random(this.words.value) * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true
  } else {
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return true
  } else {
    return false
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  var upperCase = this.secretWord[i].toUpperCase()
  return this.guessedLetter += upperCase;
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.includes(letter) == false) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    return true
  } else {
    return false
  }
};

Hangman.prototype.checkWinner = function () {
  for (var i=0; i<this.secretWord.length; i++) {
    if (this.guessedLetter.includes(this.secretWord[i])) {
      return true
    } else {
      return false
    }
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  console.log("The secret word for this play is: " + hangman.secretWord);
  var hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
};


document.onkeydown = function (e) {
  
};