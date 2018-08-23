var hangman;

function Hangman() {
  this.words = ["Cheese", "JavaScript", "Spotify", "Facebook"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var position = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[position].toUpperCase();
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode > 64 && keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key.toUpperCase());
};

Hangman.prototype.addCorrectLetter = function(i) {
  var letter = String.fromCharCode(i).toUpperCase();
  if (this.secretWord.includes(letter)) {
    //en caso de que aparezca una letra más de una vez
    for (var i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) {
        this.letters.push(letter);
        this.guessedLetter += letter;
        //imprimir letra en posicion
        hangmanCanvas.writeCorrectLetter(i);
      }
    }
    this.checkWinner();
    return true;
  }
  return false;
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
  this.letters.push(letter.toUpperCase());
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function() {
  return this.secretWord.length == this.guessedLetter.length;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = function(e) {
  var keyCode = e.keyCode;
  var letter = e.key;
  if (hangman.checkIfLetter(keyCode)) {
    console.log('entre 1');
    if (hangman.checkClickedLetters(letter)) {
      console.log('entre 2');
      if (!hangman.addCorrectLetter(keyCode)) {
        console.log('entre 3');
        hangman.addWrongLetter(letter);
      }
    }
  }
};
