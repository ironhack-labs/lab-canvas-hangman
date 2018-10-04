var hangman;

function Hangman() {
  this.words = ["ironhack", "javascript", "telvision", "ventilador", "vitrina"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  return (this.secretWord = this.words[
    Math.floor(Math.random() * this.words.length)
  ].toUpperCase());
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode > 64 && keyCode < 91) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (!this.letters.includes(key.toUpperCase())) {
    console.log(key);
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function(i) {
  if (!this.guessedLetter.includes(this.secretWord[i])) {
    this.guessedLetter += this.secretWord[i[0]];
  }
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.letters.push(letter);
  this.errorsLeft -= 1;
};

Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function() {
  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  } else {
    return false;
  }
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.createBoard();
  hangman.getWord();
  hangmanCanvas.drawLines();
};

document.onkeydown = function(e) {
  var letter = e.key;
  var keyCode = e.keyCode;

  if (hangman.errorsLeft > 0) {
    if (!hangman.checkWinner()) {
      if (hangman.checkIfLetter(keyCode)) {
        if (hangman.checkClickedLetters(letter)) {
          letter = letter.toUpperCase();
          if (hangman.secretWord.includes(letter)) {
            var index = [];
            for (i = 0; i < hangman.secretWord.length; i++) {
              if (hangman.secretWord[i] === letter) {
                index.push(i);
              }
            }
            hangman.addCorrectLetter(index);
            hangmanCanvas.writeCorrectLetter(index);

            if (hangman.checkWinner()) {
              hangmanCanvas.createBoard();
              var img = new Image();
              img.onload = function() {
                hangmanCanvas.ctx.drawImage(img, 0, 0, 1200, 800);
              };
              img.src = "./images/awesome.png";
            }
          } else {
            hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
            hangman.addWrongLetter(letter);

            if (hangman.checkGameOver()) {
              hangmanCanvas.createBoard();
              var img = new Image();
              img.onload = function() {
                hangmanCanvas.ctx.drawImage(img, 0, 0, 1200, 800);
              };
              img.src = "./images/gameover.png";
            }
          }
        }
      }
    }
  }
};
