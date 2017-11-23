var hangman;

function Hangman() {
  this.words = ["PELOTA", "BOTELLA", "MANTEL", "CINTURON", "CUADRO"];
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

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangman.secretWord = hangman._getWord();
  alert(hangman.secretWord);
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);

};


document.onkeydown = function(e) {
  if (hangman._checkIfLetter(e.keyCode)) {
    var theKeyPress=String.fromCharCode(e.keyCode);
    if (hangman._checkClickedLetters(theKeyPress)) {
      hangman.letters.push(theKeyPress);
      //Tengo que ver que la tecla pulsada esta en la solucion
      if(hangman.secretWord.includes(theKeyPress)){
        hangman._addCorrectLetter(hangman.secretWord.indexOf(theKeyPress));
        hangmanCanvas._writeCorrectLetter(hangman.secretWord.indexOf(theKeyPress));
        if(hangman._checkWinner()){
          hangmanCanvas._winner();
        }
      }else{
        hangman._addWrongLetter(theKeyPress);
        hangmanCanvas._writeWrongLetter(theKeyPress,hangman.errorsLeft);
        if(hangman._checkGameOver()){
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
