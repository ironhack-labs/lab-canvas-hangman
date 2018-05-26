let hangman;
let canvas;

function Hangman() {
  this.words = ["avion","barco","gato","perro","ironhack","insurgentes","canvas",
  "videojuego","balon","futbol","automovil","motocicleta"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return (this.words.length) ? this.words[Math.floor(Math.random()*(this.words.length))] : "";
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return ((keyCode>=65 && keyCode<=90)||(keyCode>=97 && keyCode <=122)) ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return (this.letters.includes(key)) ? false : (this.letters.push(key), true);
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter+=(this.secretWord[i].toUpperCase());
  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  return this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft<1) ? true : false;
};

Hangman.prototype.checkWinner = function () {
  let bool = true;
  for(i = 0; i < this.secretWord.length; i++){
    (!this.guessedLetter.includes(this.secretWord[i])) && (bool = false);
  }
  return bool;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord().toUpperCase();
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.drawLines();
};

document.onkeydown = function (e) {
 (hangman!=undefined && !hangman.checkGameOver() && !hangman.checkWinner()) && 
 (keyPressed = e.key.toUpperCase(),(hangman.checkIfLetter(e.keyCode)) &&
  ((hangman.checkClickedLetters(keyPressed)) &&
    ((hangman.secretWord.includes(keyPressed)) ?
      (canvas.writeCorrectLetter(hangman.secretWord.indexOf(keyPressed)),
      (hangman.addCorrectLetter(hangman.secretWord.indexOf(keyPressed))) && canvas.winner()) :
      (canvas.writeWrongLetter(keyPressed, hangman.errorsLeft),
      (hangman.addWrongLetter()) && canvas.gameOver()))))
};