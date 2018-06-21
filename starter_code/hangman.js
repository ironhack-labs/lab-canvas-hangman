var hangman;


function Hangman() {
  this.words = ["hola", "ironhack", "hack", "computer", "web"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  return keyCode >= 65 && keyCode <= 90;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  this.errorsLeft--;
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function() {
  for (var i = 0; i < this.secretWord.length; i++) {
    if (!this.guessedLetter.includes(this.secretWord[i].toUpperCase())) {
      return false;
    }
  }
  return true;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  var secretWord = hangman.getWord();
  canvas = new HangmanCanvas(secretWord);
  canvas.createBoard();
  canvas.drawLines();
  document.onkeydown = function(e) {
    console.log(String.fromCharCode(e.keyCode));
    if (!hangman.checkIfLetter(e.keyCode)) {
      alert("Hey, introduce only letters!");
    } else {
      var letter = String.fromCharCode(e.keyCode).toLowerCase();
      if (!hangman.checkClickedLetters(letter)) {
        return;
      } else {
        console.log(canvas.secretWord.indexOf(letter));
        hangman.letters.push(letter);
        if (hangman.secretWord.includes(letter)) {
          canvas.writeCorrectLetter(canvas.secretWord.indexOf(letter));
          hangman.addCorrectLetter(hangman.secretWord.indexOf(letter));
          if (hangman.checkWinner()) {
            canvas.winner()
            setTimeout(function(){
              location.reload()
            }, 6000) ;
          }
        } else {
          var lose = hangman.addWrongLetter(letter)
          if(lose){
            canvas.gameOver()
            setTimeout(function(){
              location.reload()
            }, 6000) ;
          }
          canvas.writeWrongLetter(letter, hangman.errorsLeft)
          canvas.drawHangman(9-hangman.errorsLeft)
        }
      }
    }
  };
};
