var hangman;
function Hangman() {
  this.words = ['Hola', 'Ironhack', 'Web'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}
Hangman.prototype.getWord = function() {
  var index = Math.floor(Math.random() * this.words.length);
  return this.words[index];
  // this.words.length;
  
};
Hangman.prototype.checkIfLetter = function(keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};
Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};
Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};
Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
};
Hangman.prototype.checkGameOver = function() {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};
Hangman.prototype.checkWinner = function() {
  var secretArr = this.secretWord.split("");
  var guessedArr = this.guessedLetter.split("");
  var win = true;
  if (secretArr.length === guessedArr.length) {
    for (let i = 0; i < secretArr.length; i++) {
      if (!secretArr.includes(guessedArr[i])) {
        win = false;
      }
    }
  } else {
    return false;
  }
  return win;
};
document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  var newCanvas = new HangmanCanvas('thisword');
  newCanvas.createBoard();
};
document.onkeydown = function(e) {};
/*var errorsDraw = [
  {
    type: 'triangle', x1: 50,  y1: 500, x2: 125, y2: 475, x3: 200, y3: 500
  },
  {
    type: 'line',     x1: 125, y1: 475, x2: 125, y2: 50
  },
  {
    type: 'line',     x1: 125, y1: 50,  x2: 300, y2: 50
  },
  {
    type: 'line',     x1: 300, y1: 50,  x2: 300, y2: 100
  },
  {
    type: 'circle',   x1: 335, y1: 135, x2: 300, y2: 135, r: 35
  },
  {
    type: 'line',     x1: 300, y1: 170, x2: 300, y2: 320
  },
  {
    type: 'line',     x1: 300, y1: 320, x2: 250, y2: 380
  },
  {
    type: 'line',     x1: 300, y1: 320, x2: 350, y2: 380
  },
  {
    type: 'line',     x1: 300, y1: 200, x2: 265, y2: 250
  },
  {
    type: 'line',     x1: 300, y1: 200, x2: 335, y2: 250
  }
];
*/