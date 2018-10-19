var hangman;

function Hangman() {
  this.words = [
    "Ironman",
    "Toto",
    "HelloWorld!",
    "Ironhack",
    "Javascript",
    "Cable",
    "Hulk"
  ];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

function randomSelector(arrayOfWord) {
  var randomIdx = Math.floor(Math.random() * arrayOfWord.length);
  return arrayOfWord[randomIdx];
}
Hangman.prototype.getWord = function() {
  return randomSelector(this.words);
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode < 91) {
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
  if (this.letters.length > 0 && this.letters.includes(key)) {
    return false;
  }
  return true;
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  if (this.errorsLeft > 0 && !this.secretWord.includes(letter)) {
    this.errorsLeft--;
  }
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft > 0 ? false : true;
};

Hangman.prototype.checkWinner = function() {
  if (this.secretWord.length === this.guessedLetter.length) {
    for (let i = 0; i < this.secretWord.length; i++) {
      const element = this.secretWord[i];
      for (let j = 0; j < this.guessedLetter.length; j++) {
        const elementGuess = this.guessedLetter[j];
        if (element === elementGuess) {
          return true;
        }
      }
    }
  }
  return false;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();

  hangman.letters.push(hangman.secretWord[0]);
  hangman.letters.push(hangman.secretWord[hangman.secretWord.length - 1]);

  var hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
  //hangmanCanvas.drawHangman();
};

document.onkeydown = function(e) {};
