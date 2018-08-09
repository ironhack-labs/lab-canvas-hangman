function Hangman() {
  this.words = ["house", "car", "ironhack", "dog", "cat"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 6;
  this.bodyParts = [
    "Head",
    "Body",
    "Leftarm",
    "Rightarm",
    "Leftleg",
    "Rightleg"
  ];
  this.won = false;
}

Hangman.prototype.getWord = function() {
  this.secretWord = this.words[randomNumber(this.words.length)].toUpperCase();
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(key) {
  if (key.match(/[a-z]/i)) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.indexOf(key) !== -1) {
    return true;
  } else {
    this.letters.push(key);
    return false;
  }
};

Hangman.prototype.ifCorrectLetter = function(key) {
  var index = this.secretWord.indexOf(key);
  if (index !== -1) {
    return index;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft < 0;
};

Hangman.prototype.checkWinner = function() {
  return (
    this.secretWord
      .split("")
      .sort()
      .join("") ==
    this.guessedLetter
      .split("")
      .sort()
      .join("")
  );
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.getWord();
  // console.log(hangman.secretWord);
  canvas = new HangmanCanvas();
  canvas.createBoard(hangman.secretWord);
};

document.onkeydown = function(e) {
  if (!hangman.won) {
    var key = String.fromCharCode(e.keyCode);
    if (!hangman.checkIfLetter(key)) {
      canvas.printError("Not a letter!");
      return;
    }
    if (hangman.checkClickedLetters(key)) {
      canvas.printError("Dupplicate key!");
      return;
    }
    // Check if wrong or right letter
    var index = hangman.ifCorrectLetter(key);
    // right letter
    if (index !== false) {
      hangman.addCorrectLetter(index);
      canvas.writeCorrectLetter(key, index);
      if (hangman.checkWinner()) {
        canvas.winner();
        hangman.won = true;
        return;
      }
      // wrong letter
    } else {
      canvas.drawHangman(
        hangman.bodyParts[hangman.bodyParts.length - hangman.errorsLeft]
      );
      hangman.addWrongLetter();
      if (hangman.checkGameOver()) {
        canvas.gameOver();
        return;
      }
      canvas.writeWrongLetter(key, hangman.errorsLeft);
    }
  }
};

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
