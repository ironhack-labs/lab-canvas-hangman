var hangman;

function Hangman() {
  this.words = [
    "pescado",
    "cacahuete",
    "pajaro",
    "caballo",
    "conejo",
    "cisne",
    "jamon",
    "centeno"
  ];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.wrongLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var randomItem = this.words[Math.floor(Math.random() * this.words.length)];
  return randomItem.toUpperCase();
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  for (var i = 0; i < this.letters.length; i++) {
    if (this.letters[i] === key) {
      return false;
    }
  }
  this.letters.push(key);
  return true;
};

Hangman.prototype.addCorrectLetter = function(i) {
  var letter = i;
  for (var i = 0; i < this.secretWord.length; i++) {
    if (this.secretWord[i] === letter) {
      hangmanCanvas.writeCorrectLetter(
        hangmanCanvas.letterPossitionx[i],
        letter
      );
      this.guessedLetter += letter;
      this.checkWinner();
    }
  }
};

Hangman.prototype.addWrongLetter = function(letter) {
  var letter = letter;
  var index = 0;
  for (var i = 0; i < this.secretWord.length; i++) {
    if (this.secretWord[i] === letter) {
      index = 1;
    }
  }
  if (index === 0) {
    this.wrongLetter += letter;
    this.errorsLeft -= 1;
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
  }
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    hangmanCanvas.gameOver()
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.guessedLetter.length === this.secretWord.length) {
    hangmanCanvas.winner()
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = function(event) {
  var key = event.keyCode;
  var keyChar = String.fromCharCode(key);
  if (hangman.checkIfLetter(key) === true) {
    if (hangman.checkClickedLetters(keyChar) === true) {
      hangman.addCorrectLetter(keyChar);
      hangman.addWrongLetter(keyChar);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      hangman.checkGameOver();
      hangman.checkWinner()
    }
  }
};
