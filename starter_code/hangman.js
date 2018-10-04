var hangman;

function Hangman() {
  this.words = ['scully', 'mulder', 'skinner', 'doggett', 'reyes', 'fowley', 'spender', 'byers', 'frohike', 'langly', 'krycek'];
  //this.words = [];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random()*this.words.length);
  if (this.words.length > 0) {
    return this.words[random].toUpperCase();
  } else {
    return '';
  }
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode === 186) {
    keyCode = 241;
  }
  var char = String.fromCharCode(keyCode);
  var isLetter = /^[ñA-Za-z]+$/;
  //console.log(char, keyCode);
  if (char.match(isLetter)) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  if (!this.checkIfLetter()) {
    var letter = this.secretWord[i];
    this.guessedLetter += letter.toUpperCase();
    this.checkWinner();
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    setTimeout(function() {
      //alert('you lose!');
      hCanvas.gameOver();
    }, 500);
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length) {
    setTimeout(function() {
      //alert('you win!');
      hCanvas.winner();
      document.getElementById('start-game-button').innerText = "NEW GAME";
    }, 500);
    return true;
  } else {
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  this.innerText = "RESET GAME";
  hangman = new Hangman();
  hangman.getWord();
  console.log(hangman.secretWord);
  hCanvas = new HangmanCanvas(hangman.secretWord);
  hCanvas.createBoard();
  hCanvas.drawLines();
};

document.onkeydown = function (e) {
  if (e.keyCode === 186) {
    key = 241;
  } else {
    var key = e.keyCode;
  }
  var char = String.fromCharCode(key);
  //console.log(key + "=" + char);

  if (hangman.checkIfLetter(key)) {
    if (!hangman.checkClickedLetters(char)) {
      alert('You have already used that letter!');
    } else {
      hangman.letters.push(char);
      if (hangman.secretWord.indexOf(char) !== -1) {
        var index = [];
        for(var i = 0; i < hangman.secretWord.length; i++) {
          if (hangman.secretWord[i] === char) {
            index.push(i);
            hangman.addCorrectLetter(hangman.secretWord.indexOf(char));
          }
        }
        hCanvas.writeCorrectLetter(index);
      } else {
        hangman.addWrongLetter(char);
        hCanvas.writeWrongLetter(char, hangman.errorsLeft);
      }
    }
  } else {
    alert('You have not chosen a letter!');
  }
}//.bind(hangman);
