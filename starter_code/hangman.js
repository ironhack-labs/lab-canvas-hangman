var hangman;

function Hangman() {
  this.words = ["PELOTA", "NUTELA", "MANTEL", "SUELO", "CUADRO", "ARMARIO", "COCODRILO", "HIGIENICO", "CHANCLETA", "TORNADO"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 11;
}

Hangman.prototype._getWord = function() {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return (Number.isInteger(keyCode) && (keyCode >= 65) && (keyCode <= 90)) ? true : false;
};

Hangman.prototype._checkClickedLetters = function(key) {
  var boo = true;
  this.letters.forEach(function(element) {
    if (element === key) {
      boo = false;
      // return boo;
    }
  });
  return (boo === false) ? boo : true;
};

Hangman.prototype._addCorrectLetter = function(i) {
  return (Number.isInteger(i)) ? this.guessedLetter += this.secretWord[i].toUpperCase() : "Not a number interger";
};

Hangman.prototype._addWrongLetter = function(letter) {
  if (typeof(letter) === 'string') {
    return this.errorsLeft--;
  } else {
    return "This letter is not a String";
  }
};

Hangman.prototype._checkGameOver = function() {
  return (this.errorsLeft === 1) ? true : false;
};

Hangman.prototype._checkWinner = function() {
  return (_sortString(this.secretWord) === _sortString(this.guessedLetter)) ? true : false;
};

function _sortString(strin) {
  return strin.split('').sort().join('');
}

function _getRepeatWordsPositions(str,key) {
  var indices = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === key) indices.push(i);
  }
  return indices;
}

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman._getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);

};


document.onkeydown = function(e) {
  if (hangman._checkIfLetter(e.keyCode)) {
    var theKeyPress = String.fromCharCode(e.keyCode);
    if (hangman._checkClickedLetters(theKeyPress)) {
      hangman.letters.push(theKeyPress);
      if (hangman.secretWord.includes(theKeyPress)) {
        var wordRepeat=_getRepeatWordsPositions(hangman.secretWord,theKeyPress);
        for(var i=0;i<wordRepeat.length;i++){
          hangman._addCorrectLetter(wordRepeat[i]);
          hangmanCanvas._writeCorrectLetter(wordRepeat[i]);
        }
        if (hangman._checkWinner()) {
          hangmanCanvas._winner();
        }
      } else {
        hangman._addWrongLetter(theKeyPress);
        hangmanCanvas._writeWrongLetter(theKeyPress, hangman.errorsLeft);
        if (hangman._checkGameOver()) {
          hangmanCanvas._gameOver();
        }
      }

    } else {
      alert("You already have choosen that word earlier.");
    }
  } else {
    alert("That is not a word. Try again please.");
  }
};
