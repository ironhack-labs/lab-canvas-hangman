var hangman;

function Hangman() {
  this.words = ['tacos', 'tlayudas', 'pozole'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function(){
  var random = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[random];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >= 65 && keyCode <= 90);
};

Hangman.prototype.checkClickedLetters = function (key) {
    if (this.guessedLetter.includes(key)) {
      return false;
    } else return true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += i;
  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
    this.secretWord.forEach(function(i) {
        this.letters.push(letter);
        this.errorsLeft --;
        return this.checkGameOver();
        }
    )
  }

Hangman.prototype.checkGameOver = function () {
    if (this.errorsLeft < 1) return true;
    else return false;
};

Hangman.prototype.checkWinner = function () {
  var secretArray = this.secretWord.split('');
  var guessedArray = this.guessedLetter.split('');
  secretArray.sort();
  guessedArray.sort();

  for (i=0; i<secretArray.length; i++) {
    if (secretArray[i] !== guessedArray[i]) {
      return false;
    } else {
      return true;
    }
}
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
  var keyPressed = e.key;
  var isLetter = hangman.checkIfLetter(e.keyCode);
  var canGuess = hangman.checkClickedLetters(keyPressed);
  if (isLetter && canGuess) {
    if (this.secretWord.contains(keyPressed)) return true;
  }

  if (this.checkIfLetter(e)) {
    if (!this.checkClickedLetters(keyPressed)) {
      this.secretWord.forEach(function(i) {
        if (keyPressed === i) {
          this.guessedLetter += keyPressed;
          var secretSplit = this.secretWord.split('');
          var index = secretSplit.indexOf(keyPressed);
          canvitas.writeCorrectLetter(index);
          return;
        } else {
          this.errorsLeft -= 1;
          canvitas.writeWrongLetter(keyPressed,this.errorsLeft);
        }
    })
    }
  } 
};

var hangman = new Hangman();
