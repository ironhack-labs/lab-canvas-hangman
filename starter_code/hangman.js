var hangman;
var canvas;

 function Hangman() {
   this.words = ["PERRO", "GATO", "ELEFANTE"];
   this.secretWord = "";
   this.letters = [];
   this.guessedLetter = "";
   this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {
   return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
   return keyCode >64 && keyCode < 123;
 };

 Hangman.prototype.checkClickedLetters = function (key) {
    return !this.letters.includes(key);
 };

 Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter += this.secretWord.charAt(i).toUpperCase();

 };

Hangman.prototype.addWrongLetter = function (letter) {
  if(!this.secretWord.includes(letter)){
    this.errorsLeft --;
  }

};

Hangman.prototype.checkGameOver = function () {
return this.errorsLeft ==  0;
};

Hangman.prototype.checkWinner = function () {
  return this.secretWord.length == this.guessedLetter.length;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);
};


document.onkeydown = function (e) {
  var keyNumber = e.keyCode;
  var keyStr = e.key;
  if (hangman.checkIfLetter(keyNumber) && hangman.checkClickedLetters(keyStr)) {
    hangman.letters.push(keyStr);
    if (hangman.secretWord.includes(keyStr.toUpperCase())) {
      for(let i = 0; i < hangman.secretWord.length; i++) {
        if (keyStr.toUpperCase() == hangman.secretWord.charAt(i)){
          hangman.addCorrectLetter(keyStr);
          canvas.writeCorrectLetter(i);
        }
      }
      if (hangman.checkWinner())
        canvas.winner();
    } else {
      hangman.addWrongLetter(keyStr);
      canvas.writeWrongLetter(keyStr, hangman.errorsLeft);
      //pintamos el mono
      canvas.drawHangman(hangman.errorsLeft);
      //verificamos si ya perdio
      if (hangman.checkGameOver())
        canvas.gameOver();
    }
  }
};
