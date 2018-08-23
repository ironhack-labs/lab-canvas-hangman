var hangman;

function Hangman() {
  this.words = ["Cheese", "JavaScript", "Spotify", "Facebook", "Internet", "WhatsApp"];
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
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {
  var letter = String.fromCharCode(i).toUpperCase();
  return this.secretWord.includes(letter);
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
  var letter = e.key.toUpperCase();
  if (hangman.checkIfLetter(keyCode)) {
    if (hangman.checkClickedLetters(letter)) {
      if (hangman.addCorrectLetter(keyCode)) {
        //en caso de que aparezca una letra más de una vez
        for (var i = 0; i < hangman.secretWord.length; i++) {
          if (hangman.secretWord[i] === letter) {
            hangman.letters.push(letter);
            hangman.guessedLetter += letter;
            //imprimir letra en posicion
            hangmanCanvas.writeCorrectLetter(i);
          }
        }
        if (hangman.checkWinner()) {
          hangmanCanvas.winner();
        }
      } else {
        hangman.addWrongLetter(letter);
        hangmanCanvas.writeWrongLetter(
          letter,
          hangman.errorsLeft
        );
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        }
      }
    }
  }
};
